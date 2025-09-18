import Layout from '@/components/Layout'
import { useState } from 'react'

export default function ContentStructuringChecklist() {
  const title = "Content Structuring Checklist for AEO/GEO - AI4Love"
  const description = "Interactive checklist to optimize your nonprofit's content for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). Ensure your organization is discoverable by AI assistants and search engines."
  
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({})
  
  const handleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const checklistSections = [
    {
      title: "Foundation Setup",
      items: [
        { id: "org-schema", text: "Implement Organization schema markup on homepage", priority: "High" },
        { id: "mission-clear", text: "Write clear, AI-readable mission statement", priority: "High" },
        { id: "contact-info", text: "Include complete contact information with schema", priority: "High" },
        { id: "social-links", text: "Add social media links with proper markup", priority: "Medium" },
        { id: "logo-image", text: "Include high-quality logo with proper dimensions", priority: "Medium" }
      ]
    },
    {
      title: "Answer Engine Optimization (AEO)",
      items: [
        { id: "faq-schema", text: "Implement FAQ schema on help/FAQ pages", priority: "High" },
        { id: "question-headlines", text: "Structure content with question-based headlines", priority: "High" },
        { id: "immediate-answers", text: "Provide direct answers in first 40-60 words", priority: "High" },
        { id: "numbered-lists", text: "Use numbered/bulleted lists for multi-part answers", priority: "Medium" },
        { id: "how-to-schema", text: "Add HowTo schema for process explanations", priority: "Medium" }
      ]
    },
    {
      title: "Generative Engine Optimization (GEO)",
      items: [
        { id: "impact-metrics", text: "Include quantified impact data with context", priority: "High" },
        { id: "financial-transparency", text: "Display financial information in standardized format", priority: "High" },
        { id: "comparative-context", text: "Provide sector benchmarks and comparisons", priority: "Medium" },
        { id: "program-descriptions", text: "Write specific, detailed program descriptions", priority: "Medium" },
        { id: "beneficiary-data", text: "Include clear beneficiary numbers and outcomes", priority: "High" }
      ]
    },
    {
      title: "Donor-Focused Content",
      items: [
        { id: "donation-impact", text: "Explain specific impact of different donation amounts", priority: "High" },
        { id: "donation-schema", text: "Implement DonateAction schema on giving pages", priority: "Medium" },
        { id: "financial-ratios", text: "Display program expense ratios prominently", priority: "High" },
        { id: "donor-testimonials", text: "Include donor testimonials with Review schema", priority: "Medium" },
        { id: "giving-options", text: "Clearly explain all giving options and methods", priority: "Medium" }
      ]
    },
    {
      title: "Volunteer Engagement",
      items: [
        { id: "volunteer-schema", text: "Add VolunteerOpportunity schema to opportunity listings", priority: "High" },
        { id: "skill-requirements", text: "List specific skills needed for each opportunity", priority: "High" },
        { id: "time-commitments", text: "Specify time commitments and scheduling flexibility", priority: "High" },
        { id: "volunteer-process", text: "Explain volunteer application and onboarding process", priority: "Medium" },
        { id: "volunteer-benefits", text: "Highlight volunteer benefits and recognition", priority: "Medium" }
      ]
    },
    {
      title: "Event Optimization",
      items: [
        { id: "event-schema", text: "Implement Event schema for all fundraising events", priority: "High" },
        { id: "event-details", text: "Include complete event details (date, time, location)", priority: "High" },
        { id: "ticket-info", text: "Add ticket pricing and availability information", priority: "Medium" },
        { id: "event-faqs", text: "Create event-specific FAQ sections", priority: "Medium" },
        { id: "accessibility", text: "Include accessibility information for events", priority: "Medium" }
      ]
    },
    {
      title: "Technical Implementation",
      items: [
        { id: "json-ld", text: "Use JSON-LD format for all schema markup", priority: "High" },
        { id: "schema-testing", text: "Test schema markup with Google Rich Results Test", priority: "High" },
        { id: "mobile-optimization", text: "Ensure all content displays well on mobile devices", priority: "High" },
        { id: "page-speed", text: "Optimize page loading speed for better user experience", priority: "Medium" },
        { id: "canonical-urls", text: "Implement canonical URLs to avoid duplicate content", priority: "Medium" }
      ]
    },
    {
      title: "Content Quality",
      items: [
        { id: "clear-language", text: "Use clear, jargon-free language throughout site", priority: "High" },
        { id: "current-information", text: "Keep all information current and up-to-date", priority: "High" },
        { id: "consistent-messaging", text: "Maintain consistent messaging across all pages", priority: "Medium" },
        { id: "credibility-signals", text: "Include third-party ratings and certifications", priority: "Medium" },
        { id: "contact-accessibility", text: "Make contact information easily accessible", priority: "High" }
      ]
    }
  ]

  const totalItems = checklistSections.reduce((sum, section) => sum + section.items.length, 0)
  const completedItems = Object.values(checkedItems).filter(Boolean).length
  const completionPercentage = Math.round((completedItems / totalItems) * 100)

  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/content-structuring-checklist">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Content Structuring Checklist for AEO/GEO</h1>
          
          <div className="bg-green-50 p-4 rounded-lg mb-8">
            <p className="text-sm">
              <strong>Machine-First Context:</strong> This checklist implements the strategies outlined in our <a href="/machine-first-websites" className="text-blue-600 hover:text-blue-800">machine-first website guide</a>, covering both <a href="/answer-engine-optimization" className="text-blue-600 hover:text-blue-800">AEO</a> and <a href="/generative-engine-optimization" className="text-blue-600 hover:text-blue-800">GEO</a> best practices.
            </p>
          </div>
          
          <p className="text-xl text-gray-600 mb-8">
            Use this interactive checklist to optimize your nonprofit's content for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). Each item helps improve your discoverability by AI assistants and search engines.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Progress Tracker</h3>
              <span className="text-2xl font-bold text-blue-600">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {completedItems} of {totalItems} items completed
            </p>
          </div>

          <div className="space-y-8">
            {checklistSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{section.title}</h2>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={item.id} className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id={item.id}
                        checked={checkedItems[item.id] || false}
                        onChange={() => handleCheck(item.id)}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div className="flex-1">
                        <label 
                          htmlFor={item.id} 
                          className={`cursor-pointer ${checkedItems[item.id] ? 'line-through text-gray-500' : 'text-gray-700'}`}
                        >
                          {item.text}
                        </label>
                        <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                          item.priority === 'High' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            <h2>Implementation Priority Guide</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-red-800">High Priority Items</h3>
                <p className="text-sm text-red-700">
                  These items have the biggest impact on AI discoverability and should be implemented first. Focus on these for immediate improvements in search visibility and AI assistant recognition.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-yellow-800">Medium Priority Items</h3>
                <p className="text-sm text-yellow-700">
                  These items provide additional optimization benefits and should be implemented after high-priority items are complete. They enhance user experience and provide more comprehensive AI optimization.
                </p>
              </div>
            </div>

            <h2>Quick Start Guide</h2>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Week 1: Foundation (High Priority Only)</h3>
              <ul className="space-y-2 text-sm">
                <li>• Implement Organization schema markup on homepage</li>
                <li>• Add FAQ schema to your help/FAQ pages</li>
                <li>• Structure content with question-based headlines</li>
                <li>• Include quantified impact data with context</li>
                <li>• Display financial transparency information</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-4">Week 2: Content Optimization</h3>
              <ul className="space-y-2 text-sm">
                <li>• Provide direct answers in first 40-60 words of content</li>
                <li>• Add VolunteerOpportunity schema to opportunity listings</li>
                <li>• Explain specific impact of different donation amounts</li>
                <li>• List specific skills needed for volunteer opportunities</li>
                <li>• Test all schema markup with validation tools</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-4">Week 3: Enhancement & Testing</h3>
              <ul className="space-y-2 text-sm">
                <li>• Implement Event schema for fundraising events</li>
                <li>• Add DonateAction schema on giving pages</li>
                <li>• Include donor testimonials with Review schema</li>
                <li>• Optimize for mobile devices and page speed</li>
                <li>• Monitor performance in Google Search Console</li>
              </ul>
            </div>

            <h2>Common Implementation Mistakes to Avoid</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">⚠️ Avoid These Pitfalls</h3>
              <ul className="space-y-2">
                <li><strong>Incomplete Schema:</strong> Don't leave required fields empty in schema markup</li>
                <li><strong>Outdated Information:</strong> Keep all data current, especially event dates and contact info</li>
                <li><strong>Generic Answers:</strong> Avoid vague responses; be specific about impact and processes</li>
                <li><strong>Missing Mobile Optimization:</strong> Ensure all content works well on mobile devices</li>
                <li><strong>Untested Markup:</strong> Always validate schema markup before publishing</li>
              </ul>
            </div>

            <h2>Tools and Resources</h2>
          
          <p>
            For detailed examples of each schema type, visit our <a href="/schema-blueprints" className="text-blue-600 hover:text-blue-800">schema blueprints page</a>. For broader AI implementation guidance, see our <a href="/ai-for-nonprofits-guide" className="text-blue-600 hover:text-blue-800">complete AI guide</a>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Schema Testing</h4>
              <ul className="text-sm space-y-1">
                <li>• Google Rich Results Test</li>
                <li>• Schema.org Validator</li>
                <li>• JSON-LD Playground</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Performance Monitoring</h4>
              <ul className="text-sm space-y-1">
                <li>• Google Search Console</li>
                <li>• Google Analytics</li>
                <li>• PageSpeed Insights</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Content Optimization</h4>
              <ul className="text-sm space-y-1">
                <li>• AnswerThePublic</li>
                <li>• Google Trends</li>
                <li>• Nonprofit sector reports</li>
              </ul>
            </div>
          </div>

            <h2>Measuring Success</h2>
            
            <p>
              Track these metrics to measure the impact of your content structuring efforts:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold mb-2">Search Performance</h4>
                <ul className="text-sm space-y-1">
                  <li>• Featured snippet captures</li>
                  <li>• Rich results impressions</li>
                  <li>• Click-through rates</li>
                  <li>• Voice search rankings</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">AI Recognition</h4>
                <ul className="text-sm space-y-1">
                  <li>• AI assistant citations</li>
                  <li>• Recommendation frequency</li>
                  <li>• Information accuracy in AI responses</li>
                  <li>• Competitive positioning</li>
                </ul>
              </div>
            </div>

            <h2>Next Steps</h2>
            
            <p>
              Once you've completed this checklist, consider these advanced optimization strategies:
            </p>
            
            <ul>
              <li>Implement dynamic schema markup based on user behavior</li>
              <li>Create topic clusters around your core mission areas</li>
              <li>Develop AI-optimized content calendars</li>
              <li>Monitor and respond to AI assistant representations of your organization</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Need Help with Implementation?</h2>
          <p className="text-gray-600 mb-6 font-poppins">
            AI4Love can help you implement these optimizations as part of our comprehensive machine-first approach to nonprofit digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/schema-blueprints" 
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-blue-600 transition-colors text-center"
            >
              Get Ready-to-Use Schema Examples
            </a>
            <a 
              href="/ai-for-nonprofits-guide" 
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-green-600 transition-colors text-center"
            >
              Complete AI Implementation Guide
            </a>
            <a 
              href="/roi-calculator" 
              className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-purple-600 transition-colors text-center"
            >
              Calculate Implementation ROI
            </a>
            <a 
              href="mailto:hello@ai4love.com" 
              className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-red-600 transition-colors text-center"
            >
              Get Expert Help
            </a>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Related Implementation Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2">
                <a href="/machine-first-websites" className="text-blue-600 hover:text-blue-800">
                  Machine-First Foundation
                </a>
              </h3>
              <p className="text-sm text-gray-600">
                Learn the complete philosophy behind machine-first website design for nonprofits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2">
                <a href="/future-of-engagement" className="text-blue-600 hover:text-blue-800">
                  Future of AI Engagement
                </a>
              </h3>
              <p className="text-sm text-gray-600">
                Understand how AI is reshaping nonprofit supporter relationships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2">
                <a href="/case-studies" className="text-blue-600 hover:text-blue-800">
                  Implementation Success Stories
                </a>
              </h3>
              <p className="text-sm text-gray-600">
                See how nonprofits have successfully implemented machine-first strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
