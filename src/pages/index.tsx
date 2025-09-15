import Layout from '@/components/Layout'

export default function Home() {
  const title = "AI4Love - Relationship Intelligence for Nonprofits"
  const description = "AI-powered relationship intelligence platform for nonprofits with $5M+ revenue. Transform supporter data into actionable insights without replacing existing systems."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Relationship Intelligence for Nonprofits</h1>
          <p>AI4Love is an intelligence-layer platform for nonprofits with $5M+ annual revenue, providing relationship insights and recommendations without taking control of your data or actions.</p>

          <h2>We Turn Your Supporter Data Into Relationship Intelligence</h2>
          <p>Instead of replacing systems, AI4Love adds an intelligence layer that:</p>
          <ul>
            <li>Continuously monitors all supporter relationships</li>
            <li>Surfaces insights like "10 donors showing early warning signs of disengagement"</li>
            <li>Provides specific recommendations and sample messaging</li>
            <li>Keeps all data and actions within your existing systems</li>
          </ul>

          <h2>Three Pillars of Support</h2>

          <h3>1. Donors</h3>
          <ul>
            <li>Strengthen loyalty through smart touchpoints</li>
            <li>Adapt messaging based on past giving behavior</li>
            <li>Make every donor feel seen, appreciated, and involved</li>
          </ul>

          <h3>2. Volunteers</h3>
          <ul>
            <li>Understand their preferences and availability</li>
            <li>Nudge toward continued involvement and celebration</li>
            <li>Make coordination simple and recognition automatic</li>
          </ul>

          <h3>3. Community</h3>
          <ul>
            <li>Track engagement beyond donations or volunteering</li>
            <li>Identify micro-actions and loyalty trends</li>
            <li>Create long-term relationships with your broader network</li>
          </ul>

          <h2>The Smart Assistant Analogy</h2>
          <p>Think of this as having a really smart assistant who never sleeps, continuously watching all your supporter relationships and tapping you on the shoulder when something needs attention. It doesn't send emails for you - it tells you exactly who needs attention and why.</p>

          <h2>Target Organizations</h2>
          <p>We serve nonprofits and foundations with forward-thinking leadership, existing digital infrastructure, data-rich environments, and recognition of operational inefficiencies. Our clients include:</p>
          <ul>
            <li>Hospital foundations</li>
            <li>University foundations</li>
            <li>Large community foundations</li>
            <li>National nonprofits</li>
            <li>Corporate foundations</li>
          </ul>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Ready to Transform Your Supporter Relationships?</h2>
          <p className="text-gray-600 mb-6 font-poppins">
            Discover how AI4Love's intelligence layer can help your organization build deeper, more meaningful connections with supporters.
          </p>
          <a 
            href="mailto:hello@ai4love.com" 
            className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg font-poppins font-medium hover:bg-red-600 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </Layout>
  )
}
