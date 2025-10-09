import { Pinecone } from '@pinecone-database/pinecone';

let pineconeClient: Pinecone | null = null;

export function getPineconeClient() {
  if (!pineconeClient) {
    const apiKey = process.env.PINECONE_API_KEY;
    
    if (!apiKey) {
      console.error('PINECONE_API_KEY is not set. Available env vars:', Object.keys(process.env).filter(k => k.includes('PINECONE')));
      throw new Error('PINECONE_API_KEY is not set');
    }
    
    pineconeClient = new Pinecone({
      apiKey: apiKey,
    });
  }
  
  return pineconeClient;
}

export async function getPineconeIndex() {
  const client = getPineconeClient();
  const indexName = process.env.PINECONE_INDEX_NAME || 'ai4love-rag';
  
  return client.index(indexName);
}

export interface DocumentMetadata {
  id: string;
  filename: string;
  content: string;
  timestamp: string;
  version: string;
  isLatest: boolean;
  isArchived: boolean;
  fileType: string;
  chunkIndex?: number;
  totalChunks?: number;
}

// Helper function to chunk text into smaller pieces for embedding
export function chunkText(text: string, maxChunkSize: number = 1000): string[] {
  const chunks: string[] = [];
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  
  let currentChunk = '';
  
  for (const sentence of sentences) {
    if ((currentChunk + sentence).length > maxChunkSize && currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
      currentChunk = sentence;
    } else {
      currentChunk += sentence;
    }
  }
  
  if (currentChunk.trim().length > 0) {
    chunks.push(currentChunk.trim());
  }
  
  return chunks;
}

// Helper function to generate embeddings using OpenAI
export async function generateEmbedding(text: string): Promise<number[]> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not set');
  }

  // Add timeout to prevent hanging
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

  try {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-embedding-3-small',
        input: text,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data[0].embedding;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('OpenAI API request timed out');
    }
    throw error;
  }
}
