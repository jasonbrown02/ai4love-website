import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ai4love.com';
  const apiEndpoint = `${baseUrl}/api/rag/query`;
  
  const connectionInfo = {
    apiEndpoint,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    requestBody: {
      query: 'Your search query here',
      topK: 5,
      includeArchived: false,
    },
    exampleCurl: `curl -X POST ${apiEndpoint} \\
  -H "Content-Type: application/json" \\
  -d '{"query": "What is AI4Love?", "topK": 5}'`,
    examplePython: `import requests

response = requests.post(
    "${apiEndpoint}",
    json={
        "query": "What is AI4Love?",
        "topK": 5,
        "includeArchived": False
    }
)

data = response.json()
for result in data['results']:
    print(f"Score: {result['score']}")
    print(f"Content: {result['content']}")
    print(f"Source: {result['filename']}")
    print("---")`,
    exampleJavaScript: `const response = await fetch("${apiEndpoint}", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: "What is AI4Love?",
    topK: 5,
    includeArchived: false
  })
});

const data = await response.json();
data.results.forEach(result => {
  console.log(\`Score: \${result.score}\`);
  console.log(\`Content: \${result.content}\`);
  console.log(\`Source: \${result.filename}\`);
  console.log("---");
});`,
    chatGPTInstructions: `To use this RAG system with ChatGPT:

1. Go to ChatGPT and start a new conversation
2. Use this prompt:

"I have a RAG (Retrieval Augmented Generation) system available at ${apiEndpoint}. 

When I ask you questions, please query this API first using this format:
POST ${apiEndpoint}
Body: {"query": "my question", "topK": 5}

Then use the retrieved context to answer my questions. The API returns relevant text chunks with scores, filenames, and timestamps."

3. ChatGPT will then query your RAG system before answering questions.`,
    claudeInstructions: `To use this RAG system with Claude:

1. Start a conversation with Claude
2. Provide this context:

"I have a RAG knowledge base API at ${apiEndpoint}. When answering my questions, please query this endpoint first:

Method: POST
Body: {"query": "<user question>", "topK": 5}

Use the returned results to provide accurate, context-aware answers. Each result includes content, score, filename, and timestamp."`,
    perplexityInstructions: `To use this RAG system with Perplexity:

1. In Perplexity, use the "Focus" feature and select "API"
2. Provide this API endpoint: ${apiEndpoint}
3. Use this format in your queries:

"Query my RAG system at ${apiEndpoint} about [your topic], then provide a comprehensive answer based on the retrieved context."`,
  };

  res.status(200).json(connectionInfo);
}
