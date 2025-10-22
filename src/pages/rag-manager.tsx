import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

interface Document {
  id: string;
  filename: string;
  timestamp: string;
  version: string;
  isLatest: boolean;
  isArchived: boolean;
  fileType: string;
  totalChunks: number;
}

interface ConnectionInfo {
  apiEndpoint: string;
  method: string;
  exampleCurl: string;
  examplePython: string;
  exampleJavaScript: string;
  chatGPTInstructions: string;
  claudeInstructions: string;
  perplexityInstructions: string;
}

interface QueryResult {
  id: string;
  score: number;
  content: string;
  filename: string;
  timestamp: string;
}

export default function RAGManager() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [connectionInfo, setConnectionInfo] = useState<ConnectionInfo | null>(null);
  const [showConnectionInfo, setShowConnectionInfo] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'curl' | 'python' | 'javascript' | 'chatgpt' | 'claude' | 'perplexity'>('curl');
  const [uploadMessage, setUploadMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [queryText, setQueryText] = useState('');
  const [queryResults, setQueryResults] = useState<QueryResult[]>([]);
  const [querying, setQuerying] = useState(false);
  const [showQueryResults, setShowQueryResults] = useState(false);

  useEffect(() => {
    fetchDocuments();
    fetchConnectionInfo();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await fetch('/api/rag/documents');
      const data = await response.json();
      if (data.success) {
        setDocuments(data.documents);
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchConnectionInfo = async () => {
    try {
      const response = await fetch('/api/rag/info');
      const data = await response.json();
      setConnectionInfo(data);
    } catch (error) {
      console.error('Error fetching connection info:', error);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadMessage(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/rag/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setUploadMessage({ type: 'success', text: `Successfully uploaded ${data.filename} (${data.chunks} chunks)` });
        fetchDocuments();
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setUploadMessage({ type: 'error', text: data.message || 'Upload failed' });
      }
    } catch (error) {
      setUploadMessage({ type: 'error', text: 'Error uploading file' });
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleArchive = async (documentId: string, archive: boolean) => {
    try {
      const response = await fetch('/api/rag/archive', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ documentId, archive }),
      });

      const data = await response.json();

      if (data.success) {
        fetchDocuments();
      }
    } catch (error) {
      console.error('Error archiving document:', error);
    }
  };

  const handleDelete = async (documentId: string, filename: string) => {
    if (!confirm(`Are you sure you want to permanently delete "${filename}"? This action cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch('/api/rag/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ documentId }),
      });

      const data = await response.json();

      if (data.success) {
        setUploadMessage({ type: 'success', text: `Deleted ${filename} (${data.deletedChunks} chunks)` });
        fetchDocuments();
      } else {
        setUploadMessage({ type: 'error', text: data.message || 'Delete failed' });
      }
    } catch (error) {
      setUploadMessage({ type: 'error', text: 'Error deleting document' });
      console.error('Error deleting document:', error);
    }
  };

  const handleQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryText.trim()) return;

    setQuerying(true);
    setShowQueryResults(true);

    try {
      const response = await fetch('/api/rag/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: queryText,
          topK: 5,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setQueryResults(data.results);
      } else {
        setUploadMessage({ type: 'error', text: data.message || 'Query failed' });
      }
    } catch (error) {
      setUploadMessage({ type: 'error', text: 'Error querying RAG' });
      console.error('Error querying RAG:', error);
    } finally {
      setQuerying(false);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Head>
        <title>KindMind - AI4Love Sector Intelligence</title>
        <meta name="description" content="KindMind: The sector intelligence knowledge base powering AI4Love's recommendations" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="/logo/ai4love_blkred.svg" alt="AI4Love" className="h-10 w-auto" />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    KindMind
                  </h1>
                  <p className="text-sm text-gray-600 mt-1">
                    Sector Intelligence Knowledge Base — Latest nonprofit best practices powering all AI4Love recommendations
                  </p>
                </div>
              </div>
              <motion.button
                onClick={() => setShowConnectionInfo(!showConnectionInfo)}
                className="px-4 py-2 bg-[#ec3b25] text-white rounded-lg font-medium hover:bg-[#d63420] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showConnectionInfo ? 'Hide' : 'Show'} API Info
              </motion.button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Connection Info Panel */}
          <AnimatePresence>
            {showConnectionInfo && connectionInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    API Connection Details
                  </h2>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Endpoint:</strong> {connectionInfo.apiEndpoint}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Method:</strong> {connectionInfo.method}
                    </p>
                  </div>

                  {/* Tabs */}
                  <div className="flex space-x-2 mb-4 border-b border-gray-200">
                    {[
                      { key: 'curl', label: 'cURL' },
                      { key: 'python', label: 'Python' },
                      { key: 'javascript', label: 'JavaScript' },
                      { key: 'chatgpt', label: 'ChatGPT' },
                      { key: 'claude', label: 'Claude' },
                      { key: 'perplexity', label: 'Perplexity' },
                    ].map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setSelectedTab(tab.key as any)}
                        className={`px-4 py-2 font-medium transition-colors ${
                          selectedTab === tab.key
                            ? 'text-[#ec3b25] border-b-2 border-[#ec3b25]'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="relative">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      {selectedTab === 'curl' && connectionInfo.exampleCurl}
                      {selectedTab === 'python' && connectionInfo.examplePython}
                      {selectedTab === 'javascript' && connectionInfo.exampleJavaScript}
                      {selectedTab === 'chatgpt' && connectionInfo.chatGPTInstructions}
                      {selectedTab === 'claude' && connectionInfo.claudeInstructions}
                      {selectedTab === 'perplexity' && connectionInfo.perplexityInstructions}
                    </pre>
                    <button
                      onClick={() => {
                        const content = selectedTab === 'curl' ? connectionInfo.exampleCurl :
                                      selectedTab === 'python' ? connectionInfo.examplePython :
                                      selectedTab === 'javascript' ? connectionInfo.exampleJavaScript :
                                      selectedTab === 'chatgpt' ? connectionInfo.chatGPTInstructions :
                                      selectedTab === 'claude' ? connectionInfo.claudeInstructions :
                                      connectionInfo.perplexityInstructions;
                        copyToClipboard(content);
                      }}
                      className="absolute top-2 right-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Query Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Test KindMind Query
            </h2>
            <p className="text-gray-600 mb-4">
              Search the KindMind knowledge base to test sector intelligence retrieval.
            </p>
            
            <form onSubmit={handleQuery} className="space-y-4">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  value={queryText}
                  onChange={(e) => setQueryText(e.target.value)}
                  placeholder="Ask a question about nonprofit best practices..."
                  disabled={querying}
                  className="flex-1 px-4 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ec3b25]"
                />
                <motion.button
                  type="submit"
                  disabled={querying || !queryText.trim()}
                  className="px-6 py-3 bg-[#ec3b25] text-white rounded-lg font-medium hover:bg-[#d63420] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: querying ? 1 : 1.05 }}
                  whileTap={{ scale: querying ? 1 : 0.95 }}
                >
                  {querying ? 'Searching...' : 'Search'}
                </motion.button>
              </div>
            </form>

            {/* Query Results */}
            <AnimatePresence>
              {showQueryResults && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Results ({queryResults.length})
                    </h3>
                    <button
                      onClick={() => setShowQueryResults(false)}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Close
                    </button>
                  </div>
                  
                  {queryResults.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      No results found. Try a different query.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {queryResults.map((result, index) => (
                        <motion.div
                          key={result.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border border-gray-200 rounded-lg p-4 hover:border-[#ec3b25] transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-gray-700">
                                {result.filename}
                              </span>
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                                {(result.score * 100).toFixed(1)}% match
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {result.content}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Upload Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Upload to KindMind
            </h2>
            <p className="text-gray-600 mb-4">
              Upload research, best practices, and sector intelligence documents. The latest upload becomes the active knowledge source for AI4Love recommendations.
            </p>
            
            <div className="flex items-center space-x-4">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.txt,.md"
                onChange={handleFileUpload}
                disabled={uploading}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
              {uploading && (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#ec3b25]"></div>
                  <span className="text-sm text-gray-600">Uploading...</span>
                </div>
              )}
            </div>

            {uploadMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-lg ${
                  uploadMessage.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}
              >
                {uploadMessage.text}
              </motion.div>
            )}
          </div>

          {/* Documents List */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              KindMind Knowledge Base
            </h2>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ec3b25]"></div>
              </div>
            ) : documents.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No documents in KindMind yet. Upload your first sector intelligence document above!
              </div>
            ) : (
              <div className="space-y-4">
                {documents.map((doc) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`border rounded-lg p-4 ${
                      doc.isLatest && !doc.isArchived
                        ? 'border-[#ec3b25] bg-red-50'
                        : doc.isArchived
                        ? 'border-gray-300 bg-gray-50 opacity-60'
                        : 'border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{doc.filename}</h3>
                          {doc.isLatest && !doc.isArchived && (
                            <span className="px-2 py-1 bg-[#ec3b25] text-white text-xs font-medium rounded">
                              LATEST VERSION
                            </span>
                          )}
                          {doc.isArchived && (
                            <span className="px-2 py-1 bg-gray-400 text-white text-xs font-medium rounded">
                              ARCHIVED
                            </span>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <strong>Uploaded:</strong> {formatDate(doc.timestamp)}
                          </div>
                          <div>
                            <strong>Chunks:</strong> {doc.totalChunks}
                          </div>
                          <div>
                            <strong>Type:</strong> {doc.fileType}
                          </div>
                          <div>
                            <strong>ID:</strong> {doc.id}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 flex space-x-2">
                        <motion.button
                          onClick={() => handleArchive(doc.id, !doc.isArchived)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            doc.isArchived
                              ? 'bg-green-500 hover:bg-green-600 text-white'
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {doc.isArchived ? 'Unarchive' : 'Archive'}
                        </motion.button>
                        <motion.button
                          onClick={() => handleDelete(doc.id, doc.filename)}
                          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Delete
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
