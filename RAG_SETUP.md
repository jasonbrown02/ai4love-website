# RAG Manager Setup Guide

## Overview

The RAG (Retrieval Augmented Generation) Manager is a centralized system for managing your AI knowledge base using Pinecone vector database. It allows you to upload documents, manage versions, and provide a unified API for AI tools like ChatGPT, Claude, and Perplexity to access your data.

## Features

- **Document Upload**: Upload PDF, Word, text, and markdown files
- **Automatic Versioning**: Each upload is timestamped and tagged as the latest version
- **Archive Management**: Keep older versions archived without affecting current RAG queries
- **Unified API**: Single endpoint for all AI tools to query your knowledge base
- **Chunk Management**: Automatically splits large documents into optimal chunks for embedding

## Environment Variables

Add these variables to your `.env.local` file:

```bash
# Pinecone Configuration
PINECONE_API_KEY=your_pinecone_api_key_here
PINECONE_INDEX_NAME=ai4love-rag

# OpenAI Configuration (for embeddings)
OPENAI_API_KEY=your_openai_api_key_here

# Base URL (for API endpoint generation)
NEXT_PUBLIC_BASE_URL=https://ai4love.com
```

## Getting Your API Keys
### Pinecone API Key

1. Go to [Pinecone](https://www.pinecone.io/)
2. Sign up or log in
3. Create a new project
4. Create a new index with these settings:
   - **Name**: `ai4love-rag` (or use your existing `text-embedding-3-small` index)
   - **Dimensions**: `1536` (for OpenAI text-embedding-3-small)
   - **Metric**: `cosine`
5. Copy your API key from the dashboard

### OpenAI API Key

{{ ... }}
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy and save it securely

## Accessing the RAG Manager

Once set up, access the RAG Manager at:

```
https://your-domain.com/rag-manager
```

Or locally:

```
http://localhost:3000/rag-manager
```

**Note**: This page is not indexed by search engines (noindex, nofollow) and is intended for internal use only.

## Using the RAG Manager

### Uploading Documents

1. Click "Choose File" and select a document (PDF, Word, TXT, or MD)
2. The file will be automatically processed:
   - Text is extracted
   - Content is chunked into optimal sizes
   - Embeddings are generated using OpenAI
   - Vectors are stored in Pinecone
3. The new upload is automatically tagged as the "LATEST VERSION"

### Managing Document Versions

- **Latest Version**: Only the most recent upload is marked as "LATEST VERSION" and used in RAG queries
- **Archive**: Click "Archive" to keep older versions but exclude them from queries
- **Unarchive**: Click "Unarchive" to restore an archived document

### API Connection Details

Click "Show API Info" to see:
- API endpoint URL
- Example code in cURL, Python, and JavaScript
- Instructions for ChatGPT, Claude, and Perplexity integration

## API Endpoints

### Query RAG System

**Endpoint**: `POST /api/rag/query`

**Request Body**:
```json
{
  "query": "Your search query",
  "topK": 5,
  "includeArchived": false
}
```

**Response**:
```json
{
  "success": true,
  "query": "Your search query",
  "results": [
    {
      "id": "doc_123_chunk_0",
      "score": 0.95,
      "content": "Relevant text content...",
      "filename": "document.pdf",
      "timestamp": "2025-10-08T17:00:00.000Z"
    }
  ]
}
```

### Upload Document

**Endpoint**: `POST /api/rag/upload`

**Request**: Multipart form data with file

**Response**:
```json
{
  "success": true,
  "message": "File uploaded successfully",
  "documentId": "doc_123",
  "filename": "document.pdf",
  "chunks": 15,
  "timestamp": "2025-10-08T17:00:00.000Z"
}
```

### List Documents

**Endpoint**: `GET /api/rag/documents`

**Response**:
```json
{
  "success": true,
  "documents": [
    {
      "id": "doc_123",
      "filename": "document.pdf",
      "timestamp": "2025-10-08T17:00:00.000Z",
      "version": "2025-10-08T17:00:00.000Z",
      "isLatest": true,
      "isArchived": false,
      "fileType": "application/pdf",
      "totalChunks": 15
    }
  ]
}
```

### Archive/Unarchive Document

**Endpoint**: `POST /api/rag/archive`

**Request Body**:
```json
{
  "documentId": "doc_123",
  "archive": true
}
```

**Response**:
```json
{
  "success": true,
  "message": "Document archived"
}
```

### Get Connection Info

**Endpoint**: `GET /api/rag/info`

Returns detailed connection information and examples for integrating with various AI tools.

## Integrating with AI Tools

### ChatGPT

1. Start a new ChatGPT conversation
2. Paste the instructions from the "ChatGPT" tab in the RAG Manager
3. ChatGPT will query your RAG system before answering questions

### Claude

1. Start a conversation with Claude
2. Provide the context from the "Claude" tab
3. Claude will use your RAG system for context-aware responses

### Perplexity

1. Use Perplexity's API focus feature
2. Provide your RAG endpoint
3. Perplexity will query your knowledge base

## Best Practices

1. **Regular Updates**: Upload new versions of your documents as your knowledge base evolves
2. **Archive Old Versions**: Keep historical versions archived for reference
3. **Monitor Chunks**: Ensure documents are chunked appropriately (aim for 500-1000 tokens per chunk)
4. **Test Queries**: Use the API to test queries and ensure relevant results are returned
5. **Secure Your Keys**: Never commit API keys to version control

## Troubleshooting

### Upload Fails

- Check file size (max 10MB)
- Ensure file format is supported (PDF, DOCX, TXT, MD)
- Verify OpenAI API key is valid and has credits

### No Results from Queries

- Ensure at least one document is uploaded and not archived
- Check that the document is marked as "LATEST VERSION"
- Verify Pinecone index is properly configured

### API Connection Issues

- Confirm environment variables are set correctly
- Check Pinecone index name matches configuration
- Verify API keys are valid and active

## Security Notes

- The RAG Manager page is not password-protected by default
- Consider adding authentication if deploying to production
- API keys are stored server-side and never exposed to the client
- The page has `noindex, nofollow` meta tags to prevent search engine indexing

## Support

For issues or questions, contact:
- Email: hello@ai4love.com
- Website: https://ai4love.com
