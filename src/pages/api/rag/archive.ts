import type { NextApiRequest, NextApiResponse } from 'next';
import { getPineconeIndex } from '@/lib/pinecone';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { documentId, archive } = req.body;
    
    if (!documentId) {
      return res.status(400).json({ message: 'Document ID is required' });
    }
    
    const index = await getPineconeIndex();
    
    // Query to find all chunks of this document
    const dummyVector = new Array(1536).fill(0);
    
    const queryResponse = await index.query({
      vector: dummyVector,
      topK: 1000,
      includeMetadata: true,
      filter: {
        id: { $eq: documentId }
      }
    });
    
    // Update all chunks to set archived status
    const updatePromises = queryResponse.matches.map(match => {
      const metadata = match.metadata as any;
      return index.update({
        id: match.id,
        metadata: {
          id: metadata.id,
          filename: metadata.filename,
          content: metadata.content,
          timestamp: metadata.timestamp,
          version: metadata.version,
          isLatest: metadata.isLatest,
          isArchived: archive === true,
          fileType: metadata.fileType,
          chunkIndex: metadata.chunkIndex,
          totalChunks: metadata.totalChunks,
        },
      });
    });
    
    await Promise.all(updatePromises);
    
    res.status(200).json({
      success: true,
      message: archive ? 'Document archived' : 'Document unarchived',
    });
  } catch (error) {
    console.error('Error archiving document:', error);
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Error archiving document',
    });
  }
}
