import type { NextApiRequest, NextApiResponse } from 'next';
import { getPineconeIndex, generateEmbedding } from '@/lib/pinecone';

export const config = {
  maxDuration: 30, // Increase timeout to 30 seconds
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { query, topK = 5, includeArchived = false } = req.body;
    
    if (!query) {
      return res.status(400).json({ message: 'Query is required' });
    }
    
    console.log('Starting query:', query);
    const startTime = Date.now();
    
    // Generate embedding for the query
    console.log('Generating embedding...');
    const queryEmbedding = await generateEmbedding(query);
    console.log('Embedding generated in', Date.now() - startTime, 'ms');
    
    // Get Pinecone index
    console.log('Getting Pinecone index...');
    const index = await getPineconeIndex();
    
    // Build filter to only include latest, non-archived documents
    const filter: any = {
      isLatest: { $eq: true },
    };
    
    if (!includeArchived) {
      filter.isArchived = { $eq: false };
    }
    
    // Query Pinecone
    console.log('Querying Pinecone...');
    const queryStart = Date.now();
    const queryResponse = await index.query({
      vector: queryEmbedding,
      topK: topK,
      includeMetadata: true,
      filter,
    });
    console.log('Pinecone query completed in', Date.now() - queryStart, 'ms');
    
    // Format results
    const results = queryResponse.matches.map(match => ({
      id: match.id,
      score: match.score,
      content: match.metadata?.content,
      filename: match.metadata?.filename,
      timestamp: match.metadata?.timestamp,
    }));
    
    console.log('Total query time:', Date.now() - startTime, 'ms');
    
    res.status(200).json({
      success: true,
      query,
      results,
    });
  } catch (error) {
    console.error('Error querying RAG:', error);
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Error querying RAG',
    });
  }
}
