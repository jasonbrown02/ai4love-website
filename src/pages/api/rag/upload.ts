import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { getPineconeIndex, chunkText, generateEmbedding, DocumentMetadata } from '@/lib/pinecone';
import mammoth from 'mammoth';

// pdf-parse is a CommonJS module
const pdfParse = require('pdf-parse');

export const config = {
  api: {
    bodyParser: false,
  },
};

async function extractTextFromFile(filePath: string, mimeType: string): Promise<string> {
  const buffer = fs.readFileSync(filePath);
  
  if (mimeType === 'application/pdf') {
    const data = await pdfParse(buffer);
    return data.text;
  } else if (mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  } else if (mimeType === 'text/plain' || mimeType === 'text/markdown') {
    return buffer.toString('utf-8');
  } else {
    // Try to read as text
    return buffer.toString('utf-8');
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const form = formidable({
      maxFileSize: 50 * 1024 * 1024, // 50MB
    });

    const [fields, files] = await form.parse(req);
    
    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Extract text from file
    const text = await extractTextFromFile(file.filepath, file.mimetype || 'text/plain');
    
    if (!text || text.trim().length === 0) {
      return res.status(400).json({ message: 'Could not extract text from file' });
    }

    // Generate unique document ID
    const timestamp = new Date().toISOString();
    const documentId = `doc_${Date.now()}`;
    
    // Chunk the text
    const chunks = chunkText(text, 1000);
    
    // Get Pinecone index
    const index = await getPineconeIndex();
    
    // Mark all previous versions as not latest
    await index.update({
      id: 'latest-version-marker',
      metadata: { isLatest: false },
    }).catch(() => {
      // Ignore if marker doesn't exist yet
    });
    
    // Upload chunks to Pinecone
    const vectors = [];
    
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const embedding = await generateEmbedding(chunk);
      
      const metadata: DocumentMetadata = {
        id: documentId,
        filename: file.originalFilename || 'unknown',
        content: chunk,
        timestamp,
        version: timestamp,
        isLatest: true,
        isArchived: false,
        fileType: file.mimetype || 'text/plain',
        chunkIndex: i,
        totalChunks: chunks.length,
      };
      
      vectors.push({
        id: `${documentId}_chunk_${i}`,
        values: embedding,
        metadata: metadata as any,
      });
    }
    
    // Upsert vectors in batches
    const batchSize = 100;
    for (let i = 0; i < vectors.length; i += batchSize) {
      const batch = vectors.slice(i, i + batchSize);
      await index.upsert(batch);
    }
    
    // Clean up uploaded file
    fs.unlinkSync(file.filepath);
    
    res.status(200).json({
      success: true,
      message: 'File uploaded successfully',
      documentId,
      filename: file.originalFilename,
      chunks: chunks.length,
      timestamp,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Error uploading file',
    });
  }
}
