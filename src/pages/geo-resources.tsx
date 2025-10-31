import Layout from '@/components/Layout'
import { useState } from 'react'

export default function GEOResources() {
  const title = "GEO Resources Hub: Complete Guide to Generative Engine Optimization for Nonprofits - AI4Love"
  const description = "Your complete resource hub for Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). Access guides, checklists, schema blueprints, and implementation strategies to optimize your nonprofit for AI discovery."
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "GEO Resources Hub for Nonprofits",
        "description": description,
        "author": {
          "@type": "Organization",
          "name": "AI4Love"
        },
        "publisher": {
          "@type": "Organization",
          "name": "AI4Love",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ai4love.com/logo.svg"
          }
        },
        "datePublished": "2025-01-31",
        "dateModified": "2025-01-31",
        "about": [
          "Generative Engine Optimization",
          "Answer Engine Optimization",
          "Machine-First Websites",
          "Nonprofit AI Strategy",
          "Schema Markup"
        ]
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Article",
              "name": "Machine-First Websites for Nonprofits",
              "url": "https://ai4love.com/machine-first-websites",
              "description": "Foundation guide to machine-first design principles"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Article",
              "name": "Generative Engine Optimization (GEO)",
              "url": "https://ai4love.com/generative-engine-optimization",
              "description": "Optimize for AI assistants like ChatGPT, Claude, and Perplexity"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Article",
              "name": "Answer Engine Optimization (AEO)",
              "url": "https://ai4love.com/answer-engine-optimization",
              "description": "Master featured snippets and voice search optimization"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Article",
              "name": "Content Structuring Checklist",
              "url": "https://ai4love.com/content-structuring-checklist",
              "description": "Interactive checklist for AEO/GEO implementation"
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Article",
              "name": "Schema Blueprints for Nonprofits",
              "url": "https://ai4love.com/schema-blueprints",
              "description": "Ready-to-use JSON-LD schema markup examples"
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ai4love.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "GEO Resources Hub",
            "item": "https://ai4love.com/geo-resources"
          }
        ]
      }
    ]
  }

  const resources = [
    {
      id: 'machine-first',
      category: 'foundation',
      title: 'Machine-First Websites for Nonprofits',
      url: '/machine-first-websites',
      description: 'Learn the foundational principles of machine-first design that encompasses SEO, AEO, and GEO. Understand why nonprofits must optimize for both human and AI audiences.',
      icon: '🏗️',
      difficulty: 'Beginner',
      readTime: '15 min',
      priority: 'Start Here'
    },
    {
      id: 'geo',
      category: 'core',
      title: 'Generative Engine Optimization (GEO)',
      url: '/generative-engine-optimization',
      description: 'Master GEO to ensure AI assistants like ChatGPT, Claude, Perplexity, and Gemini accurately represent and recommend your nonprofit. Critical for the 12-18 month adoption window.',
      icon: '🤖',
      difficulty: 'Intermediate',
      readTime: '20 min',
      priority: 'High Priority'
    },
    {
      id: 'aeo',
      category: 'core',
      title: 'Answer Engine Optimization (AEO)',
      url: '/answer-engine-optimization',
      description: 'Optimize for featured snippets, voice search, and AI-powered answer engines. Learn how to structure content for zero-click search success and voice assistant dominance.',
      icon: '💬',
      difficulty: 'Intermediate',
      readTime: '18 min',
      priority: 'High Priority'
    },
    {
      id: 'checklist',
      category: 'implementation',
      title: 'Content Structuring Checklist',
      url: '/content-structuring-checklist',
      description: 'Interactive checklist with 40+ actionable items to optimize your nonprofit\'s content for AEO and GEO. Track your progress and prioritize high-impact tasks.',
      icon: '✅',
      difficulty: 'Beginner',
      readTime: '10 min',
      priority: 'Quick Start'
    },
    {
      id: 'schema',
      category: 'implementation',
      title: 'Schema Blueprints for Nonprofits',
      url: '/schema-blueprints',
      description: 'Ready-to-use JSON-LD schema markup examples for nonprofit organizations, events, volunteer opportunities, FAQs, and donation pages. Copy, customize, and deploy.',
      icon: '📋',
      difficulty: 'Intermediate',
      readTime: '25 min',
      priority: 'Essential'
    }
  ]

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory)

  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/geo-resources">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">GEO Resources Hub</h1>
          <p className="text-2xl text-gray-600 mb-8">
            Your complete guide to Generative Engine Optimization and Answer Engine Optimization for nonprofits
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-12 not-prose">
            <h2 className="text-xl font-semibold text-red-800 mb-3">⏰ Critical 12-18 Month Window</h2>
            <p className="text-red-700 mb-4">
              AI models like ChatGPT, Claude, Perplexity, and Gemini are <strong>actively forming their knowledge base RIGHT NOW</strong> about which nonprofits to cite and recommend. Organizations that publish comprehensive, well-structured content in the next 12-18 months will become the default citations for years to come.
            </p>
            <p className="text-red-700 font-semibold">
              This is your window to establish authority. Start with the resources below.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-12 not-prose">
            <h2 className="text-2xl font-semibold mb-6">Why GEO Matters for Nonprofits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg">The AI Search Revolution</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>180M+</strong> monthly ChatGPT users asking about nonprofits</li>
                  <li>• <strong>10M+</strong> monthly Perplexity users seeking answers</li>
                  <li>• <strong>1B+</strong> Google AI Overview queries per month</li>
                  <li>• <strong>50%</strong> of searches will be voice-based by 2025</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Impact on Nonprofits</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>73%</strong> of donors research nonprofits online before giving</li>
                  <li>• <strong>68%</strong> of donors use search engines to find charities</li>
                  <li>• <strong>45%</strong> of donors under 40 use AI assistants for research</li>
                  <li>• <strong>35%</strong> of clicks go to featured snippet results</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-6">Browse Resources</h2>
          
          <div className="flex flex-wrap gap-3 mb-8 not-prose">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Resources (5)
            </button>
            <button
              onClick={() => setSelectedCategory('foundation')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'foundation'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Foundation (1)
            </button>
            <button
              onClick={() => setSelectedCategory('core')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'core'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Core Concepts (2)
            </button>
            <button
              onClick={() => setSelectedCategory('implementation')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'implementation'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Implementation (2)
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
            {filteredResources.map((resource) => (
              <a
                key={resource.id}
                href={resource.url}
                className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{resource.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    resource.priority === 'Start Here' ? 'bg-green-100 text-green-800' :
                    resource.priority === 'High Priority' ? 'bg-red-100 text-red-800' :
                    resource.priority === 'Quick Start' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {resource.priority}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{resource.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">{resource.difficulty}</span>
                  <span>{resource.readTime}</span>
                </div>
              </a>
            ))}
          </div>

          <h2 className="text-3xl font-semibold mb-6">Learning Paths</h2>

          <div className="space-y-6 mb-12 not-prose">
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-800">🚀 Quick Start (2-3 hours)</h3>
              <p className="text-green-700 mb-4">Get immediate results with high-impact optimizations</p>
              <ol className="space-y-2 text-sm">
                <li><strong>1.</strong> Read <a href="/machine-first-websites" className="text-blue-600 hover:underline">Machine-First Websites</a> (15 min)</li>
                <li><strong>2.</strong> Review <a href="/content-structuring-checklist" className="text-blue-600 hover:underline">Content Structuring Checklist</a> (10 min)</li>
                <li><strong>3.</strong> Implement Organization schema from <a href="/schema-blueprints" className="text-blue-600 hover:underline">Schema Blueprints</a> (30 min)</li>
                <li><strong>4.</strong> Create FAQ page with schema markup (60 min)</li>
                <li><strong>5.</strong> Test with AI assistants (15 min)</li>
              </ol>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">📚 Comprehensive Path (1-2 weeks)</h3>
              <p className="text-blue-700 mb-4">Deep dive into all aspects of GEO and AEO</p>
              <ol className="space-y-2 text-sm">
                <li><strong>Week 1:</strong> Read all foundation and core concept pages</li>
                <li><strong>Week 1:</strong> Complete content structuring checklist</li>
                <li><strong>Week 2:</strong> Implement all schema markup from blueprints</li>
                <li><strong>Week 2:</strong> Optimize existing content for AEO</li>
                <li><strong>Week 2:</strong> Test and validate all implementations</li>
              </ol>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-800">🎯 Priority-Based Path (Ongoing)</h3>
              <p className="text-purple-700 mb-4">Focus on highest-impact items first</p>
              <ol className="space-y-2 text-sm">
                <li><strong>Priority 1:</strong> Organization schema + Mission statement (Day 1)</li>
                <li><strong>Priority 2:</strong> FAQ schema + Financial transparency (Day 2-3)</li>
                <li><strong>Priority 3:</strong> Impact metrics + Donor questions (Week 1)</li>
                <li><strong>Priority 4:</strong> Volunteer opportunities + Event schema (Week 2)</li>
                <li><strong>Priority 5:</strong> Advanced optimization + Testing (Week 3-4)</li>
              </ol>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-6">Implementation Tools</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12 not-prose">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Schema Testing</h3>
              <ul className="space-y-2 text-sm">
                <li>• <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Rich Results Test</a></li>
                <li>• <a href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Schema.org Validator</a></li>
                <li>• <a href="https://json-ld.org/playground/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JSON-LD Playground</a></li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">AI Testing</h3>
              <ul className="space-y-2 text-sm">
                <li>• <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ChatGPT</a></li>
                <li>• <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Claude</a></li>
                <li>• <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Perplexity</a></li>
                <li>• <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gemini</a></li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Performance Monitoring</h3>
              <ul className="space-y-2 text-sm">
                <li>• <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Search Console</a></li>
                <li>• <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics</a></li>
                <li>• <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PageSpeed Insights</a></li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-6">Success Metrics</h2>

          <div className="bg-yellow-50 p-6 rounded-lg mb-12 not-prose">
            <h3 className="text-lg font-semibold mb-4">Track These KPIs Monthly</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">AI Citation Metrics</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Frequency of AI assistant mentions</li>
                  <li>• Accuracy of AI-generated information</li>
                  <li>• Recommendation rate in AI responses</li>
                  <li>• Competitive positioning vs. similar orgs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Search Performance</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Featured snippet captures</li>
                  <li>• Rich results impressions</li>
                  <li>• Voice search rankings</li>
                  <li>• Zero-click impression growth</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-6">Next Steps</h2>

          <div className="bg-gray-50 p-8 rounded-lg not-prose">
            <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-6">
              Choose your path based on your current needs and available time. Remember, the 12-18 month window is closing—start today to establish your nonprofit as an AI-recognized authority.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="/machine-first-websites"
                className="block bg-green-500 text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-green-600 transition-colors"
              >
                Start with Foundation
              </a>
              <a
                href="/content-structuring-checklist"
                className="block bg-blue-500 text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-blue-600 transition-colors"
              >
                Jump to Checklist
              </a>
              <a
                href="/schema-blueprints"
                className="block bg-purple-500 text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-purple-600 transition-colors"
              >
                Get Schema Examples
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Need Expert Help?</h2>
          <p className="text-gray-600 mb-6 font-poppins">
            AI4Love's relationship intelligence platform is built with machine-first principles at its core. We can help you implement GEO and AEO strategies that position your nonprofit for AI-powered discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/ai-for-nonprofits-guide" 
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-blue-600 transition-colors text-center"
            >
              Complete AI Implementation Guide
            </a>
            <a 
              href="/roi-calculator" 
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-green-600 transition-colors text-center"
            >
              Calculate Your ROI
            </a>
            <a 
              href="mailto:hello@ai4love.com" 
              className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-red-600 transition-colors text-center"
            >
              Get Expert Help
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
