import type { NextApiRequest, NextApiResponse } from 'next';
import { getPineconeIndex } from '@/lib/pinecone';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const index = await getPineconeIndex();
    
    // Query to get all documents (using a dummy vector)
    // Note: This is a workaround since Pinecone doesn't have a direct "list all" API
    // In production, you might want to maintain a separate database for document metadata
    const dummyVector = new Array(1536).fill(0); // text-embedding-3-small dimension
    
    const queryResponse = await index.query({
      vector: dummyVector,
      topK: 1000,
      includeMetadata: true,
    });
    
    // Group chunks by document ID
    const documentsMap = new Map();
    
    for (const match of queryResponse.matches) {
      const metadata = match.metadata as any;
      
      if (!metadata || !metadata.id) continue;
      
      const docId = metadata.id;
      
      if (!documentsMap.has(docId)) {
        documentsMap.set(docId, {
          id: docId,
          filename: metadata.filename,
          timestamp: metadata.timestamp,
          version: metadata.version,
          isLatest: metadata.isLatest,
          isArchived: metadata.isArchived,
          fileType: metadata.fileType,
          totalChunks: metadata.totalChunks || 1,
        });
      }
    }
    
    // Convert to array and sort by timestamp (newest first)
    const documents = Array.from(documentsMap.values()).sort((a, b) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
    
    res.status(200).json({
      success: true,
      documents,
    });
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Error fetching documents',
    });
  }
}
