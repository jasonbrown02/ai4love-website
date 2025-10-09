# RAG Manager Setup Checklist

## ✅ Pre-Setup Checklist

- [ ] Have a Pinecone account ([Sign up here](https://www.pinecone.io/))
- [ ] Have an OpenAI account ([Sign up here](https://platform.openai.com/))
- [ ] Have API credits in OpenAI account

## 🔧 Configuration Steps

### 1. Pinecone Setup
- [ ] Log into Pinecone dashboard
- [ ] Use existing index `text-embedding-3-small` OR create new with these settings:
  - **Index Name**: `ai4love-rag`
  - **Dimensions**: `1536`
  - **Metric**: `cosine`
  - **Cloud**: Any (AWS recommended)
  - **Region**: Closest to your users
- [ ] Copy your API key from the dashboard

### 2. OpenAI Setup
- [ ] Log into OpenAI platform
- [ ] Navigate to API Keys section
- [ ] Create a new API key
- [ ] Copy and save the API key securely
- [ ] Ensure you have credits (check billing section)

### 3. Environment Variables
- [ ] Open or create `.env.local` in your project root
- [ ] Add the following variables:
```bash
PINECONE_API_KEY=your_pinecone_api_key_here
PINECONE_INDEX_NAME=ai4love-rag
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_BASE_URL=https://ai4love.com
```
- [ ] Replace placeholder values with your actual API keys
- [ ] Save the file

### 4. Install Dependencies (Already Done ✓)
- [x] Pinecone SDK installed
- [x] File upload libraries installed
- [x] TypeScript types installed

### 5. Start Development Server
- [ ] Run `npm run dev`
- [ ] Navigate to `http://localhost:3000/rag-manager`
- [ ] Verify the page loads without errors

## 🧪 Testing Steps

### 1. Upload Test
- [ ] Prepare a test document (PDF, Word, or TXT)
- [ ] Click "Choose File" on the RAG Manager page
- [ ] Select your test document
- [ ] Wait for upload to complete
- [ ] Verify success message appears
- [ ] Check that document appears in the list with "LATEST VERSION" badge

### 2. API Test
- [ ] Click "Show API Info" button
- [ ] Copy the cURL example
- [ ] Open terminal and run the cURL command
- [ ] Verify you get results back with your uploaded content

### 3. Archive Test
- [ ] Click "Archive" on a document
- [ ] Verify the badge changes to "ARCHIVED"
- [ ] Test the API again - archived document should not appear in results
- [ ] Click "Unarchive" to restore

### 4. Delete Test
- [ ] Upload a test document you don't need
- [ ] Click "Delete" button
- [ ] Confirm the deletion
- [ ] Verify document is removed from the list

## 🤖 AI Tool Integration

### ChatGPT
- [ ] Copy the ChatGPT instructions from the RAG Manager
- [ ] Start a new ChatGPT conversation
- [ ] Paste the instructions
- [ ] Ask a question about your uploaded content
- [ ] Verify ChatGPT queries your RAG system and uses the context

### Claude
- [ ] Copy the Claude instructions
- [ ] Start a new Claude conversation
- [ ] Provide the context
- [ ] Test with a question about your content

### Perplexity
- [ ] Copy the Perplexity instructions
- [ ] Use Perplexity's API focus feature
- [ ] Provide your RAG endpoint
- [ ] Test with queries

## 🚀 Production Deployment

### Before Going Live
- [ ] Verify all environment variables are set in production
- [ ] Test file upload with production URL
- [ ] Test API endpoint accessibility
- [ ] Consider adding authentication to `/rag-manager` page
- [ ] Set up monitoring for API usage
- [ ] Review Pinecone usage limits and upgrade if needed
- [ ] Review OpenAI usage limits and set budgets

### Security Considerations
- [ ] Ensure `.env.local` is in `.gitignore`
- [ ] Never commit API keys to version control
- [ ] Consider rate limiting on API endpoints
- [ ] Add authentication if RAG manager will be publicly accessible
- [ ] Review CORS settings if needed

## 📊 Monitoring

### Regular Checks
- [ ] Monitor Pinecone usage dashboard
- [ ] Monitor OpenAI API usage and costs
- [ ] Check document upload success rate
- [ ] Review query performance and accuracy
- [ ] Update documents regularly to keep RAG current

## 🆘 Troubleshooting Checklist

If uploads fail:
- [ ] Check file size (must be < 10MB)
- [ ] Verify file format is supported
- [ ] Check OpenAI API key is valid
- [ ] Verify you have OpenAI credits
- [ ] Check browser console for errors

If queries return no results:
- [ ] Ensure at least one document is uploaded
- [ ] Verify document is not archived
- [ ] Check Pinecone index name matches config
- [ ] Test with a simple, direct query

If API connection fails:
- [ ] Verify environment variables are set
- [ ] Check Pinecone API key is valid
- [ ] Ensure index exists in Pinecone
- [ ] Check network connectivity

## 📝 Maintenance Schedule

### Weekly
- [ ] Review uploaded documents
- [ ] Archive outdated content
- [ ] Test API endpoint functionality

### Monthly
- [ ] Review API usage and costs
- [ ] Update knowledge base with new content
- [ ] Test AI tool integrations
- [ ] Check for any error logs

### Quarterly
- [ ] Review and optimize chunk sizes
- [ ] Evaluate embedding model performance
- [ ] Consider upgrading Pinecone plan if needed
- [ ] Update documentation

## ✨ Success Criteria

You'll know everything is working when:
- ✅ Documents upload successfully and appear in the list
- ✅ Latest version is clearly marked
- ✅ API queries return relevant results
- ✅ ChatGPT/Claude/Perplexity can access your knowledge base
- ✅ Archive/unarchive functions work correctly
- ✅ Delete removes documents completely
- ✅ No errors in browser console or server logs

## 📚 Resources

- [RAG Setup Guide](./RAG_SETUP.md) - Full documentation
- [Quick Start Guide](./RAG_QUICK_START.md) - Quick reference
- [Pinecone Docs](https://docs.pinecone.io/)
- [OpenAI Embeddings Guide](https://platform.openai.com/docs/guides/embeddings)

---

**Need Help?** Contact hello@ai4love.com
