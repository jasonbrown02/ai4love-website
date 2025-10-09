# RAG Manager - Quick Start Guide

## 🚀 Setup (5 minutes)

### 1. Add Environment Variables

Create or edit `.env.local`:

```bash
PINECONE_API_KEY=pc-xxxxxxxxxxxxxxxxxxxxx
PINECONE_INDEX_NAME=ai4love-rag
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_BASE_URL=https://ai4love.com
```

### 2. Create Pinecone Index

- Go to [pinecone.io](https://pinecone.io)
- Use existing index: `text-embedding-3-small` OR create new: `ai4love-rag`
- Dimensions: `1536`
- Metric: `cosine`

### 3. Access RAG Manager

```
http://localhost:3000/rag-manager
```

## 📤 Upload Documents

1. Click "Choose File"
2. Select PDF, Word, TXT, or MD file
3. Upload automatically processes and stores in Pinecone
4. Latest upload is always the "source of truth"

## 🔌 Connect to AI Tools

### Quick API Endpoint

```
POST https://ai4love.com/api/rag/query
```

### ChatGPT Prompt

```
I have a RAG system at https://ai4love.com/api/rag/query

When answering my questions, first query this API:
POST https://ai4love.com/api/rag/query
Body: {"query": "my question", "topK": 5}

Then use the retrieved context to answer.
```

### Claude Prompt

```
I have a RAG knowledge base API at https://ai4love.com/api/rag/query

When answering questions, query this endpoint first:
Method: POST
Body: {"query": "<question>", "topK": 5}

Use the returned results for accurate, context-aware answers.
```

### Python Example

```python
import requests

response = requests.post(
    "https://ai4love.com/api/rag/query",
    json={"query": "What is AI4Love?", "topK": 5}
)

for result in response.json()['results']:
    print(f"Score: {result['score']}")
    print(f"Content: {result['content']}")
```

### JavaScript Example

```javascript
const response = await fetch("https://ai4love.com/api/rag/query", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: "What is AI4Love?", topK: 5 })
});

const data = await response.json();
console.log(data.results);
```

## 📋 Document Management

- **Latest Version**: Green badge, used in all queries
- **Archive**: Gray badge, excluded from queries but kept for history
- **Unarchive**: Restore an archived document

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Upload fails | Check file size (<10MB) and format |
| No query results | Ensure document is uploaded and not archived |
| API errors | Verify environment variables are set |

## 📞 Support

- Email: hello@ai4love.com
- Full docs: See `RAG_SETUP.md`
