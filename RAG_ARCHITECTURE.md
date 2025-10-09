# RAG System Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        RAG Manager UI                            │
│                    (ai4love.com/rag-manager)                     │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Upload     │  │   Archive    │  │    Delete    │          │
│  │  Documents   │  │  Management  │  │  Documents   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         API Layer                                │
│                                                                   │
│  /api/rag/upload     - Upload & process documents               │
│  /api/rag/documents  - List all documents                        │
│  /api/rag/archive    - Archive/unarchive documents              │
│  /api/rag/delete     - Delete documents                          │
│  /api/rag/query      - Query RAG system (PUBLIC)                │
│  /api/rag/info       - Get connection details                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
        ┌───────────────────┐   ┌──────────────────┐
        │   OpenAI API      │   │   Pinecone DB    │
        │                   │   │                  │
        │ - Text Embeddings │   │ - Vector Storage │
        │ - Model:          │   │ - Similarity     │
        │   text-embedding  │   │   Search         │
        │   -3-small        │   │ - Metadata       │
        │ - Dimensions:     │   │   Filtering      │
        │   1536            │   │                  │
        └───────────────────┘   └──────────────────┘
                                          │
                                          ▼
                              ┌───────────────────────┐
                              │   AI Tools Access     │
                              │                       │
                              │  - ChatGPT            │
                              │  - Claude             │
                              │  - Perplexity         │
                              │  - Custom Apps        │
                              └───────────────────────┘
```

## Data Flow

### 1. Document Upload Flow

```
User Uploads File
      │
      ▼
Extract Text (PDF/Word/TXT/MD)
      │
      ▼
Chunk Text (1000 chars per chunk)
      │
      ▼
Generate Embeddings (OpenAI)
      │
      ▼
Store in Pinecone with Metadata:
  - documentId
  - filename
  - timestamp
  - version
  - isLatest: true
  - isArchived: false
  - chunkIndex
  - content
      │
      ▼
Mark Previous Versions as isLatest: false
      │
      ▼
Return Success to User
```

### 2. Query Flow (RAG)

```
AI Tool Sends Query
      │
      ▼
Generate Query Embedding (OpenAI)
      │
      ▼
Search Pinecone with Filters:
  - isLatest: true
  - isArchived: false
      │
      ▼
Return Top K Similar Chunks
      │
      ▼
AI Tool Uses Context to Answer
```

### 3. Archive Flow

```
User Clicks Archive
      │
      ▼
Find All Chunks for Document
      │
      ▼
Update Metadata:
  - isArchived: true
      │
      ▼
Document Excluded from Queries
```

## Database Schema (Pinecone Metadata)

```javascript
{
  id: "doc_1728419400000_chunk_0",  // Unique chunk ID
  values: [0.123, -0.456, ...],      // 1536-dimensional embedding
  metadata: {
    id: "doc_1728419400000",         // Document ID (shared by all chunks)
    filename: "ai4love_guide.pdf",   // Original filename
    content: "AI4Love is...",         // Actual text content
    timestamp: "2025-10-08T18:30:00Z", // Upload timestamp
    version: "2025-10-08T18:30:00Z",  // Version identifier
    isLatest: true,                   // Is this the current version?
    isArchived: false,                // Is this archived?
    fileType: "application/pdf",      // MIME type
    chunkIndex: 0,                    // Chunk number
    totalChunks: 15                   // Total chunks in document
  }
}
```

## API Endpoints Detail

### Upload Endpoint
```
POST /api/rag/upload
Content-Type: multipart/form-data

Request:
  - file: <binary file data>

Response:
{
  "success": true,
  "documentId": "doc_1728419400000",
  "filename": "guide.pdf",
  "chunks": 15,
  "timestamp": "2025-10-08T18:30:00Z"
}
```

### Query Endpoint (PUBLIC)
```
POST /api/rag/query
Content-Type: application/json

Request:
{
  "query": "What is AI4Love?",
  "topK": 5,
  "includeArchived": false
}

Response:
{
  "success": true,
  "query": "What is AI4Love?",
  "results": [
    {
      "id": "doc_123_chunk_0",
      "score": 0.95,
      "content": "AI4Love is a platform...",
      "filename": "guide.pdf",
      "timestamp": "2025-10-08T18:30:00Z"
    }
  ]
}
```

### Documents List
```
GET /api/rag/documents

Response:
{
  "success": true,
  "documents": [
    {
      "id": "doc_123",
      "filename": "guide.pdf",
      "timestamp": "2025-10-08T18:30:00Z",
      "version": "2025-10-08T18:30:00Z",
      "isLatest": true,
      "isArchived": false,
      "fileType": "application/pdf",
      "totalChunks": 15
    }
  ]
}
```

## Security Model

### Current Implementation
- **RAG Manager Page**: No authentication (internal use)
- **Query API**: Public (for AI tool access)
- **Upload/Delete/Archive APIs**: No authentication (should add in production)
- **API Keys**: Server-side only, never exposed to client

### Production Recommendations
1. Add authentication to RAG Manager page
2. Add API key authentication for upload/delete/archive
3. Keep query endpoint public OR add API key for AI tools
4. Implement rate limiting
5. Add CORS restrictions
6. Monitor usage and set quotas

## Cost Structure

### OpenAI Costs
- **Embeddings**: ~$0.00002 per 1K tokens
- **Example**: 100-page document ≈ 50K tokens ≈ $0.001

### Pinecone Costs
- **Free Tier**: 1 index, 100K vectors
- **Starter**: $70/month for 5M vectors
- **Scale as needed**

### Estimated Monthly Costs (Light Usage)
- 100 documents/month: ~$0.10 (OpenAI)
- Pinecone: Free tier or $70/month
- **Total**: $0.10 - $70.10/month

## Scalability Considerations

### Current Limits
- File size: 10MB per upload
- Chunk size: 1000 characters
- Embedding dimension: 1536
- Query top K: Configurable (default 5)

### Scaling Options
1. **More Documents**: Upgrade Pinecone plan
2. **Larger Files**: Increase chunk processing
3. **Better Embeddings**: Use larger OpenAI models
4. **Faster Queries**: Add caching layer
5. **Multi-tenancy**: Add namespace support in Pinecone

## Monitoring & Observability

### Key Metrics to Track
- Upload success rate
- Query latency
- Embedding generation time
- Pinecone query performance
- API error rates
- Cost per query

### Recommended Tools
- Pinecone dashboard for vector DB metrics
- OpenAI usage dashboard for API costs
- Next.js analytics for page performance
- Custom logging for business metrics

## Future Enhancements

### Potential Features
1. **Multi-file upload**: Batch processing
2. **URL ingestion**: Scrape and index web pages
3. **Scheduled updates**: Auto-refresh from sources
4. **Advanced filtering**: By date, type, tags
5. **Analytics dashboard**: Usage stats and insights
6. **Webhook notifications**: Alert on uploads/changes
7. **Version comparison**: Diff between document versions
8. **Export functionality**: Download processed data
9. **Team collaboration**: Multi-user access
10. **Custom embeddings**: Fine-tuned models

## Integration Patterns

### Pattern 1: Direct API Access
```
AI Tool → Query API → Pinecone → Results → AI Tool
```

### Pattern 2: Middleware Integration
```
AI Tool → Your Backend → Query API → Results → Your Backend → AI Tool
```

### Pattern 3: Webhook Pattern
```
Document Upload → Webhook → External System → Process → Update
```

## Troubleshooting Guide

### Common Issues

**Issue**: Upload fails
- Check: File size, format, OpenAI credits
- Solution: Reduce file size or add credits

**Issue**: No query results
- Check: Document uploaded, not archived, isLatest=true
- Solution: Re-upload or unarchive document

**Issue**: Slow queries
- Check: Pinecone region, network latency
- Solution: Use closer region or add caching

**Issue**: High costs
- Check: Number of embeddings, query frequency
- Solution: Optimize chunk size, add caching

## Best Practices

1. **Document Management**
   - Keep documents under 5MB for faster processing
   - Use descriptive filenames
   - Archive old versions regularly

2. **Query Optimization**
   - Use specific queries for better results
   - Adjust topK based on use case
   - Filter archived documents

3. **Cost Management**
   - Monitor OpenAI usage
   - Optimize chunk sizes
   - Cache frequent queries

4. **Security**
   - Rotate API keys regularly
   - Add authentication in production
   - Monitor for unusual activity

5. **Maintenance**
   - Update documents regularly
   - Clean up unused documents
   - Review and optimize performance
