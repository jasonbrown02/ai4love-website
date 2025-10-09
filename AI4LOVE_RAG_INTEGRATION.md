# AI4Love RAG Integration Guide

## API Endpoint
**Base URL**: `https://ai4love.com/api/rag/query`
**Method**: POST
**Content-Type**: application/json

## Request Format
```json
{
  "query": "Your search query here",
  "topK": 5,
  "includeArchived": false
}
```

## Response Format
```json
{
  "success": true,
  "query": "Your search query",
  "results": [
    {
      "id": "doc_123_chunk_0",
      "score": 0.85,
      "content": "Relevant text content...",
      "filename": "document.md",
      "timestamp": "2025-10-09T11:13:14.000Z"
    }
  ]
}
```

## Integration Examples

### cURL
```bash
curl -X POST https://ai4love.com/api/rag/query \
  -H "Content-Type: application/json" \
  -d '{"query": "What is AI4Love?", "topK": 5}'
```

### Python
```python
import requests

response = requests.post(
    "https://ai4love.com/api/rag/query",
    json={
        "query": "What is AI4Love?",
        "topK": 5,
        "includeArchived": False
    }
)

data = response.json()
for result in data['results']:
    print(f"Score: {result['score']:.2%}")
    print(f"Content: {result['content']}")
    print(f"Source: {result['filename']}")
    print("---")
```

### JavaScript/TypeScript
```javascript
const response = await fetch("https://ai4love.com/api/rag/query", {
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
  console.log(`Score: ${(result.score * 100).toFixed(1)}%`);
  console.log(`Content: ${result.content}`);
  console.log(`Source: ${result.filename}`);
  console.log("---");
});
```

## Windsurf/Cascade Integration

To use this in Windsurf, you can:

1. **Manual Query**: Ask Cascade to query the API for you:
   ```
   Query the AI4Love RAG system at https://ai4love.com/api/rag/query 
   about [your topic] and summarize the results
   ```

2. **Add as Context**: Include this file in your project and reference it:
   ```
   Use the AI4Love RAG API documented in AI4LOVE_RAG_INTEGRATION.md 
   to answer questions about AI4Love
   ```

## ChatGPT Custom GPT Schema
See the OpenAPI schema in the main documentation above.

## Claude Project Instructions
Add the API endpoint and usage instructions to your Claude Project's knowledge base.

## Best Practices

1. **Query Formulation**: Make queries specific and focused
2. **Result Limit**: Use `topK: 5` for most queries, increase for broader searches
3. **Score Threshold**: Results with score > 0.3 (30%) are generally relevant
4. **Context Window**: Combine multiple results for comprehensive answers
5. **Caching**: Consider caching frequent queries to reduce API calls

## Management

- **Upload Documents**: https://ai4love.com/rag-manager
- **Test Queries**: Use the Test Query section on the RAG Manager page
- **Archive/Delete**: Manage document versions through the Document History section
