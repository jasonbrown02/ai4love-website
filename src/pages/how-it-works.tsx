import Layout from '@/components/Layout'

export default function HowItWorks() {
  const title = "How It Works - AI4Love"
  const description = "Learn how AI4Love's relationship intelligence platform works with your existing systems to transform supporter data into actionable insights."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/how-it-works">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>How AI4Love Works</h1>
          <p>AI4Love is an intelligence layer that works with your existing systems to transform supporter data into actionable relationship insights. Here's how it works:</p>

          <h2>1. Connect Your Data Sources</h2>
          <p>AI4Love connects to your existing CRM, email marketing platform, event management system, and other data sources through secure API integrations. We don't replace your systems - we make them smarter.</p>
          
          <p>Supported integrations include:</p>
          <ul>
            <li>Major CRMs (Salesforce, Raiser's Edge, DonorPerfect, etc.)</li>
            <li>Email marketing platforms (Mailchimp, Constant Contact, etc.)</li>
            <li>Event management systems</li>
            <li>Volunteer management platforms</li>
            <li>Custom databases via API</li>
          </ul>

          <h2>2. Relationship Intelligence Processing</h2>
          <p>Our platform processes your supporter data through specialized AI models trained specifically on nonprofit relationship dynamics:</p>
          
          <ul>
            <li><strong>Engagement Analysis</strong> - We analyze patterns of engagement across all touchpoints</li>
            <li><strong>Sentiment Analysis</strong> - We detect emotional signals in communications</li>
            <li><strong>Relationship Scoring</strong> - We calculate relationship strength scores for each supporter</li>
            <li><strong>Early Warning Detection</strong> - We identify signs of disengagement before they become problems</li>
            <li><strong>Opportunity Recognition</strong> - We spot potential for deeper engagement</li>
          </ul>

          <h2>3. Actionable Insights Dashboard</h2>
          <p>The AI4Love dashboard presents clear, actionable insights about your supporter relationships:</p>
          
          <ul>
            <li><strong>Relationship Health Overview</strong> - See the overall state of your supporter relationships</li>
            <li><strong>Priority Actions</strong> - Know exactly who needs attention and why</li>
            <li><strong>Engagement Opportunities</strong> - Discover untapped potential in your supporter base</li>
            <li><strong>Communication Recommendations</strong> - Get specific suggestions for effective outreach</li>
            <li><strong>Recognition Alerts</strong> - Never miss an opportunity to recognize supporters</li>
          </ul>

          <h2>4. Take Action in Your Existing Systems</h2>
          <p>Based on AI4Love's insights, your team takes action in your existing systems:</p>
          
          <ul>
            <li>Send personalized communications to at-risk donors</li>
            <li>Plan targeted engagement activities for specific segments</li>
            <li>Recognize supporters at the right moments</li>
            <li>Adjust communication strategies based on relationship data</li>
            <li>Measure the impact of your relationship-building efforts</li>
          </ul>

          <h2>5. Continuous Learning</h2>
          <p>AI4Love continuously learns from your data and actions:</p>
          
          <ul>
            <li>Models improve as they process more of your organization's unique data</li>
            <li>System adapts to your specific supporter relationship patterns</li>
            <li>Recommendations become more precise over time</li>
            <li>New insights emerge as the system detects evolving trends</li>
          </ul>

          <h2>Data Security and Privacy</h2>
          <p>We take data security and privacy seriously:</p>
          
          <ul>
            <li>All data is encrypted in transit and at rest</li>
            <li>We maintain SOC 2 compliance</li>
            <li>You maintain complete ownership and control of your data</li>
            <li>We never share your data with third parties</li>
            <li>Our systems are designed with privacy by design principles</li>
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
