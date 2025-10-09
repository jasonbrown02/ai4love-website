import type { NextApiRequest, NextApiResponse } from 'next';
import { getPineconeIndex } from '@/lib/pinecone';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { documentId } = req.body;
    
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
    
    // Delete all chunks
    const chunkIds = queryResponse.matches.map(match => match.id);
    
    if (chunkIds.length > 0) {
      await index.deleteMany(chunkIds);
    }
    
    res.status(200).json({
      success: true,
      message: 'Document deleted successfully',
      deletedChunks: chunkIds.length,
    });
  } catch (error) {
    console.error('Error deleting document:', error);
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Error deleting document',
    });
  }
}
