import Layout from '@/components/Layout'

export default function Vision() {
  const title = "Our Vision - AI4Love"
  const description = "AI4Love envisions a world where every nonprofit can maintain meaningful relationships with all supporters through intelligent, human-centered technology."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/vision">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Our Vision</h1>
          <p>AI4Love envisions a world where every nonprofit can maintain meaningful relationships with all supporters through intelligent, human-centered technology.</p>

          <h2>The Future We're Building</h2>
          <p>We see a future where:</p>
          <ul>
            <li>Every supporter feels genuinely seen and appreciated by the organizations they support</li>
            <li>Nonprofit staff are freed from relationship management busywork to focus on meaningful human connection</li>
            <li>Organizations can scale their impact without sacrificing the personal touch</li>
            <li>Artificial intelligence enhances human relationships rather than replacing them</li>
            <li>The nonprofit sector leads in ethical, human-centered technology adoption</li>
          </ul>

          <h2>Our Long-Term Vision</h2>
          <p>By 2030, we aim to transform how nonprofits approach relationship management by making relationship intelligence as fundamental as CRM systems are today. We envision a world where:</p>
          
          <h3>For Supporters</h3>
          <ul>
            <li>Every interaction with an organization feels personalized and meaningful</li>
            <li>Recognition is timely, appropriate, and aligned with personal preferences</li>
            <li>The giving experience is frictionless and emotionally rewarding</li>
            <li>Long-term relationships with organizations deepen naturally over time</li>
          </ul>

          <h3>For Organizations</h3>
          <ul>
            <li>Staff intuitively understand the state of every supporter relationship</li>
            <li>Early warning systems prevent supporter disengagement</li>
            <li>Relationship management becomes proactive rather than reactive</li>
            <li>Data-driven insights guide strategy while preserving human judgment</li>
            <li>Resources are allocated to relationships with the highest impact potential</li>
          </ul>

          <h3>For the Sector</h3>
          <ul>
            <li>Donor retention rates increase dramatically across the board</li>
            <li>Staff burnout decreases as relationship management becomes more efficient</li>
            <li>More resources flow to mission-critical work rather than administrative overhead</li>
            <li>The sector establishes clear ethical standards for AI use</li>
            <li>Technology democratizes access to sophisticated relationship management capabilities</li>
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
