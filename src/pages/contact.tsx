import Layout from '@/components/Layout'

export default function Contact() {
  const title = "Contact Us - AI4Love"
  const description = "Get in touch with the AI4Love team to learn how our relationship intelligence platform can help your nonprofit build stronger supporter connections."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/contact">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you and discuss how AI4Love can help your organization build stronger relationships with supporters.</p>

          <h2>Get in Touch</h2>
          <p>The best way to reach us is by email at <a href="mailto:hello@ai4love.com">hello@ai4love.com</a>.</p>
          
          <p>Our team will respond within one business day to schedule a conversation about your organization's needs.</p>

          <h2>Request a Demo</h2>
          <p>Interested in seeing AI4Love in action? We'd be happy to provide a personalized demo for your organization.</p>
          
          <p>Please email us at <a href="mailto:demo@ai4love.com">demo@ai4love.com</a> with the following information:</p>
          <ul>
            <li>Your name and title</li>
            <li>Organization name</li>
            <li>Organization size and type</li>
            <li>Current CRM or database system</li>
            <li>Key relationship management challenges you're facing</li>
          </ul>

          <h2>Partnership Inquiries</h2>
          <p>If you're interested in exploring partnership opportunities with AI4Love, please contact our partnerships team at <a href="mailto:partnerships@ai4love.com">partnerships@ai4love.com</a>.</p>

          <h2>Media Inquiries</h2>
          <p>For media inquiries, please contact <a href="mailto:media@ai4love.com">media@ai4love.com</a>.</p>

          <h2>Careers</h2>
          <p>Interested in joining our team? View our current openings on our <a href="/team">Team page</a> and send your application to <a href="mailto:careers@ai4love.com">careers@ai4love.com</a>.</p>

          <h2>Security</h2>
          <p>To report security concerns or vulnerabilities, please contact our security team at <a href="mailto:security@ai4love.com">security@ai4love.com</a>.</p>

          <h2>Office Location</h2>
          <p>
            AI4Love, Inc.<br />
            123 Innovation Way<br />
            San Francisco, CA 94105<br />
            United States
          </p>
          
          <p>Please note that we operate primarily remotely and meetings are typically conducted via video conference.</p>
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
