import Layout from '@/components/Layout'

export default function Mission() {
  const title = "Our Mission - AI4Love"
  const description = "AI4Love's mission is to transform nonprofit relationships through AI-powered intelligence that enhances human connection without replacing it."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/mission">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Our Mission</h1>
          <p>At AI4Love, we believe that technology should enhance human connection, not replace it. Our mission is to transform how nonprofits build and maintain relationships with their supporters through intelligence that amplifies human capacity.</p>

          <h2>Why We Exist</h2>
          <p>Nonprofits face increasing pressure to do more with less. Staff are overwhelmed, supporter expectations are rising, and traditional approaches to relationship management are failing to scale. We exist to solve this fundamental challenge.</p>

          <h2>Our Core Beliefs</h2>
          <ul>
            <li><strong>Relationships matter most</strong> - The strength of supporter relationships determines organizational success</li>
            <li><strong>Intelligence, not automation</strong> - AI should provide insights for humans to act on, not replace human judgment</li>
            <li><strong>Data sovereignty</strong> - Organizations should maintain complete control of their data</li>
            <li><strong>Ethical AI</strong> - Technology must be developed with clear ethical guidelines and transparency</li>
            <li><strong>Accessibility</strong> - Powerful technology should be accessible to organizations of all sizes</li>
          </ul>

          <h2>Our Approach</h2>
          <p>We've built an intelligence layer that sits on top of existing systems, continuously monitoring relationships and surfacing actionable insights. Instead of replacing your team, we make them superhuman - able to maintain thousands of meaningful relationships with the personal touch that only humans can provide.</p>

          <h2>Our Impact Goals</h2>
          <ul>
            <li>Help nonprofits increase donor retention by 30%</li>
            <li>Reduce staff burnout by eliminating relationship management guesswork</li>
            <li>Enable personalized supporter experiences at scale</li>
            <li>Democratize access to relationship intelligence technology</li>
            <li>Set the standard for ethical AI use in the nonprofit sector</li>
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
