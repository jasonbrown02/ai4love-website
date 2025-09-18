import Layout from '@/components/Layout'

export default function SchemaBlueprints() {
  const title = "Schema Blueprints for Nonprofits - AI4Love"
  const description = "Ready-to-use JSON-LD schema markup examples for nonprofit websites. Implement structured data for donor events, volunteer opportunities, FAQs, and organizational information to improve AI discoverability."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/schema-blueprints">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Schema Blueprints for Nonprofits</h1>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-8">
            <p className="text-sm">
              <strong>Machine-First Context:</strong> These schema blueprints are essential components of <a href="/machine-first-websites" className="text-blue-600 hover:text-blue-800">machine-first website design</a>, enabling both <a href="/answer-engine-optimization" className="text-blue-600 hover:text-blue-800">Answer Engine Optimization (AEO)</a> and <a href="/generative-engine-optimization" className="text-blue-600 hover:text-blue-800">Generative Engine Optimization (GEO)</a>.
            </p>
          </div>
          
          <p className="text-xl text-gray-600 mb-8">
            Ready-to-implement JSON-LD schema markup examples designed specifically for nonprofit organizations. Copy, customize, and deploy these blueprints to make your content more discoverable by search engines and AI assistants.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-4">Why Schema Markup Matters for Nonprofits</h3>
            <ul className="space-y-2">
              <li><strong>Enhanced Search Visibility:</strong> Rich snippets and featured answers in search results</li>
              <li><strong>AI Assistant Recognition:</strong> Better representation in ChatGPT, Claude, and other AI responses</li>
              <li><strong>Improved Credibility:</strong> Structured data signals legitimacy to search engines</li>
              <li><strong>Better User Experience:</strong> More informative search results for potential supporters</li>
            </ul>
          </div>

          <h2>1. Nonprofit Organization Schema</h2>
          
          <p>
            The foundation schema for your nonprofit organization. This should be included on your homepage and about page.
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 text-sm font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Your Nonprofit Name",
  "alternateName": "YNN",
  "description": "Brief description of your mission and work",
  "url": "https://yournonprofit.org",
  "logo": {
    "@type": "ImageObject",
    "url": "https://yournonprofit.org/logo.png",
    "width": 400,
    "height": 400
  },
  "image": "https://yournonprofit.org/main-image.jpg",
  "foundingDate": "2010-01-15",
  "founder": {
    "@type": "Person",
    "name": "Founder Name"
  },
  "mission": "Your organization's mission statement",
  "areaServed": {
    "@type": "Place",
    "name": "Geographic area you serve"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "email": "info@yournonprofit.org"
  },
  "sameAs": [
    "https://facebook.com/yournonprofit",
    "https://twitter.com/yournonprofit",
    "https://linkedin.com/company/yournonprofit"
  ],
  "nonprofitStatus": "501(c)(3)",
  "taxID": "12-3456789",
  "keywords": "nonprofit, charity, community service, social impact"
}`}
          </div>

          <h2>2. Fundraising Event Schema</h2>
          
          <p>
            Use this schema for fundraising events, galas, charity runs, and other supporter gatherings.
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 text-sm font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "FundraisingEvent",
  "name": "Annual Charity Gala 2024",
  "description": "Join us for an evening of celebration and fundraising to support our mission",
  "startDate": "2024-06-15T18:00:00-05:00",
  "endDate": "2024-06-15T22:00:00-05:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Grand Ballroom",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "456 Event Avenue",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    }
  },
  "image": "https://yournonprofit.org/gala-image.jpg",
  "organizer": {
    "@type": "NGO",
    "name": "Your Nonprofit Name",
    "url": "https://yournonprofit.org"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://yournonprofit.org/gala-tickets",
    "price": "150",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-01-01T00:00:00-05:00"
  },
  "maximumAttendeeCapacity": 300,
  "fundraisingGoal": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "50000"
  }
}`}
          </div>

          <h2>3. Volunteer Opportunity Schema</h2>
          
          <p>
            Structure your volunteer opportunities to help potential volunteers find the right match through search engines and AI assistants.
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 text-sm font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "VolunteerOpportunity",
  "name": "Food Bank Volunteer",
  "description": "Help sort and distribute food to families in need",
  "hiringOrganization": {
    "@type": "NGO",
    "name": "Your Nonprofit Name",
    "url": "https://yournonprofit.org"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "789 Service Street",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    }
  },
  "datePosted": "2024-01-15",
  "validThrough": "2024-12-31",
  "employmentType": "VOLUNTEER",
  "workHours": "Flexible, 2-4 hours per week",
  "skills": [
    "Physical ability to lift 25 lbs",
    "Attention to detail",
    "Team collaboration"
  ],
  "qualifications": [
    "Must be 16 years or older",
    "Background check required",
    "Orientation attendance required"
  ],
  "benefits": [
    "Community service hours",
    "Training provided",
    "Flexible scheduling",
    "Make direct impact on hunger relief"
  ],
  "applicationInstructions": "Apply online at yournonprofit.org/volunteer or call 555-123-4567"
}`}
          </div>

          <h2>4. Nonprofit FAQ Schema</h2>
          
          <p>
            Structure your frequently asked questions to appear in featured snippets and AI assistant responses.
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 text-sm font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What percentage of donations goes directly to programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "85% of all donations go directly to our programs and services. Administrative costs account for 10%, and fundraising expenses are 5%. This efficiency rating places us in the top 15% of nonprofits in our sector according to Charity Navigator."
      }
    },
    {
      "@type": "Question",
      "name": "How can I volunteer with your organization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can volunteer by completing our online application at yournonprofit.org/volunteer. After submitting your application, you'll attend a brief orientation session and can then choose from various volunteer opportunities that match your interests and schedule."
      }
    },
    {
      "@type": "Question",
      "name": "What impact does a $100 donation make?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A $100 donation provides 50 meals for families in need, supports 2 hours of job training for unemployed individuals, or funds school supplies for 5 children. Every dollar donated creates measurable impact in our community."
      }
    },
    {
      "@type": "Question",
      "name": "How do you measure your impact?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We measure impact through multiple metrics: number of people served, program completion rates, long-term outcome tracking, and beneficiary feedback surveys. We publish an annual impact report with detailed statistics and success stories."
      }
    }
  ]
}`}
          </div>

          <h2>5. Donation Action Schema</h2>
          
          <p>
            Make your donation pages more discoverable and actionable with proper schema markup.
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 text-sm font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "agent": {
    "@type": "Person",
    "name": "Potential Donor"
  },
  "recipient": {
    "@type": "NGO",
    "name": "Your Nonprofit Name",
    "url": "https://yournonprofit.org"
  },
  "object": {
    "@type": "MonetaryGrant",
    "funder": {
      "@type": "Person",
      "name": "Donor"
    },
    "amount": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "50"
    }
  },
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": "https://yournonprofit.org/donate",
    "actionPlatform": [
      "http://schema.org/DesktopWebPlatform",
      "http://schema.org/MobileWebPlatform"
    ]
  },
  "result": {
    "@type": "Thing",
    "name": "Community Impact",
    "description": "Your donation directly supports families in need in our community"
  }
}`}
          </div>

          <h2>6. Program/Service Schema</h2>
          
          <p>
            Highlight your nonprofit's programs and services with structured data that AI systems can easily understand.
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 text-sm font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Emergency Food Assistance Program",
  "description": "Provides emergency food supplies to families facing food insecurity",
  "provider": {
    "@type": "NGO",
    "name": "Your Nonprofit Name",
    "url": "https://yournonprofit.org"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Metro City Area"
  },
  "audience": {
    "@type": "Audience",
    "name": "Families experiencing food insecurity"
  },
  "serviceType": "Emergency Food Assistance",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Food Assistance Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Weekly Food Box",
          "description": "Nutritious groceries for a family of four for one week"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fresh Produce Distribution",
          "description": "Fresh fruits and vegetables distributed twice weekly"
        }
      }
    ]
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://yournonprofit.org/food-assistance",
    "serviceSmsNumber": "555-FOOD-HELP"
  }
}`}
          </div>

          <h2>7. Impact/Review Schema</h2>
          
          <p>
            Showcase beneficiary testimonials and impact stories with review schema to build credibility.
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 text-sm font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "NGO",
    "name": "Your Nonprofit Name"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "name": "Life-changing support during difficult times",
  "author": {
    "@type": "Person",
    "name": "Sarah M."
  },
  "reviewBody": "When my family faced unexpected job loss, this organization provided not just food assistance but also job training that helped me find stable employment. Their support was comprehensive and delivered with dignity and respect.",
  "datePublished": "2024-01-15",
  "publisher": {
    "@type": "NGO",
    "name": "Your Nonprofit Name"
  }
}`}
          </div>

          <h2>Implementation Guidelines</h2>
          
          <p>
            For comprehensive implementation guidance, see our <a href="/content-structuring-checklist" className="text-blue-600 hover:text-blue-800">content structuring checklist</a> and <a href="/machine-first-websites" className="text-blue-600 hover:text-blue-800">machine-first website guide</a>.
          </p>

          <h3>1. Where to Place Schema Markup</h3>
          <ul>
            <li><strong>Organization Schema:</strong> Homepage, About page</li>
            <li><strong>Event Schema:</strong> Individual event pages</li>
            <li><strong>Volunteer Schema:</strong> Volunteer opportunity listings</li>
            <li><strong>FAQ Schema:</strong> FAQ pages, help sections</li>
            <li><strong>Donation Schema:</strong> Donation pages, giving forms</li>
            <li><strong>Program Schema:</strong> Program description pages</li>
            <li><strong>Review Schema:</strong> Testimonial pages, impact stories</li>
          </ul>

          <h3>2. Technical Implementation</h3>
          
          <p>Add schema markup to your HTML pages using JSON-LD format in the &lt;head&gt; section:</p>

          <div className="bg-gray-100 p-4 rounded-lg my-4">
            <code className="text-sm">
              &lt;script type="application/ld+json"&gt;<br/>
              {`{/* Your schema markup here */}`}<br/>
              &lt;/script&gt;
            </code>
          </div>

          <h3>3. Testing Your Schema</h3>
          
          <p>Always test your schema markup using these tools:</p>
          <ul>
            <li><strong>Google Rich Results Test:</strong> Test for Google search features</li>
            <li><strong>Schema.org Validator:</strong> Validate syntax and structure</li>
            <li><strong>Google Search Console:</strong> Monitor rich results performance</li>
          </ul>

          <h2>Customization Tips</h2>

          <div className="bg-yellow-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-4">Best Practices for Nonprofit Schema</h3>
            <ul className="space-y-2">
              <li><strong>Be Specific:</strong> Use exact dates, numbers, and locations when possible</li>
              <li><strong>Stay Current:</strong> Update schema markup when information changes</li>
              <li><strong>Include Images:</strong> Add high-quality images with proper dimensions</li>
              <li><strong>Use Real Data:</strong> Never use placeholder or fake information</li>
              <li><strong>Test Regularly:</strong> Validate markup after any website changes</li>
            </ul>
          </div>

          <h2>Advanced Schema Combinations</h2>
          
          <p>
            For maximum impact, combine multiple schema types on the same page. For example, an event page might include both Event schema and FAQ schema for common event questions.
          </p>

          <h3>Multi-Schema Example: Event + FAQ</h3>
          
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 text-sm font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FundraisingEvent",
      "name": "Annual Charity Walk",
      // ... event details
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should I bring to the charity walk?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bring comfortable walking shoes, water bottle, and your registration confirmation. We'll provide t-shirts and refreshments."
          }
        }
      ]
    }
  ]
}`}
          </div>

          <h2>Measuring Schema Success</h2>
          
          <p>Track these metrics to measure the impact of your schema implementation:</p>
          
          <ul>
            <li><strong>Rich Results Impressions:</strong> How often your rich snippets appear</li>
            <li><strong>Click-Through Rates:</strong> Improvement in search result clicks</li>
            <li><strong>Featured Snippet Captures:</strong> Questions where you appear as the featured answer</li>
            <li><strong>AI Citation Frequency:</strong> How often AI assistants reference your organization</li>
          </ul>

          <h2>Getting Started Checklist</h2>
          
          <div className="bg-green-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-4">Schema Implementation Checklist</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Add Organization schema to homepage</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Implement FAQ schema on help pages</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Add Event schema to fundraising events</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Structure volunteer opportunities with schema</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Add Donation schema to giving pages</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Test all schema with validation tools</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Monitor performance in Search Console</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Need Help Implementing Schema Markup?</h2>
          <p className="text-gray-600 mb-6 font-poppins">
            AI4Love can help you implement and optimize schema markup as part of our comprehensive machine-first optimization approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/content-structuring-checklist" 
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-blue-600 transition-colors text-center"
            >
              Get Schema Implementation Checklist
            </a>
            <a 
              href="/machine-first-websites" 
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-green-600 transition-colors text-center"
            >
              Learn Machine-First Design
            </a>
            <a 
              href="/generative-engine-optimization" 
              className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-purple-600 transition-colors text-center"
            >
              Advanced GEO Strategies
            </a>
            <a 
              href="mailto:hello@ai4love.com" 
              className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-red-600 transition-colors text-center"
            >
              Get Implementation Help
            </a>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Related Schema Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2">
                <a href="/answer-engine-optimization" className="text-blue-600 hover:text-blue-800">
                  AEO Schema Implementation
                </a>
              </h3>
              <p className="text-sm text-gray-600">
                Learn how to structure FAQ and HowTo schema for featured snippets and voice search.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2">
                <a href="/ai-for-nonprofits-guide" className="text-blue-600 hover:text-blue-800">
                  AI Implementation Strategy
                </a>
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive guide to implementing AI solutions that work with your schema strategy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2">
                <a href="/case-studies" className="text-blue-600 hover:text-blue-800">
                  Schema Success Stories
                </a>
              </h3>
              <p className="text-sm text-gray-600">
                See how nonprofits have improved discoverability through structured data implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
