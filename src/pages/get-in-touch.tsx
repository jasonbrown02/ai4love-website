import Layout from '@/components/Layout'

export default function GetInTouch() {
  const title = "Get in Touch - AI4Love"
  const description = "Connect with AI4Love to learn how our relationship intelligence platform can help your nonprofit build stronger supporter connections."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.ca/get-in-touch">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Thanks for scanning! We're excited to connect with you.
          </p>

          <div className="not-prose my-12 p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border-2 border-red-200">
            <h2 className="text-3xl font-bold font-poppins mb-4 text-gray-900">Let's Start a Conversation</h2>
            <p className="text-lg text-gray-700 mb-6 font-poppins">
              Whether you're curious about AI for nonprofits, want to explore how relationship intelligence can transform your supporter engagement, or just want to say hello—we'd love to hear from you.
            </p>
            <a 
              href="mailto:hello@ai4love.com" 
              className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Email Us: hello@ai4love.com
            </a>
          </div>

          <h2>What We Do</h2>
          <p>
            AI4Love builds relationship intelligence platforms for nonprofits and foundations. We help organizations understand and strengthen their connections with supporters through AI-powered insights.
          </p>

          <h2>Ways to Connect</h2>
          <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
              <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-900">General Inquiries</h3>
              <p className="text-gray-600 mb-3">Questions about our platform or services?</p>
              <a href="mailto:hello@ai4love.com" className="text-red-500 hover:text-red-600 font-medium">
                hello@ai4love.com →
              </a>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
              <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-900">Request a Demo</h3>
              <p className="text-gray-600 mb-3">See AI4Love in action for your organization</p>
              <a href="mailto:demo@ai4love.com" className="text-red-500 hover:text-red-600 font-medium">
                demo@ai4love.com →
              </a>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
              <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-900">Partnership Opportunities</h3>
              <p className="text-gray-600 mb-3">Explore collaboration possibilities</p>
              <a href="mailto:partnerships@ai4love.com" className="text-red-500 hover:text-red-600 font-medium">
                partnerships@ai4love.com →
              </a>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
              <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-900">Join Our Team</h3>
              <p className="text-gray-600 mb-3">Interested in working with us?</p>
              <a href="mailto:careers@ai4love.com" className="text-red-500 hover:text-red-600 font-medium">
                careers@ai4love.com →
              </a>
            </div>
          </div>

          <h2>Learn More</h2>
          <p>Explore our website to discover how AI4Love can help your organization:</p>
          <ul>
            <li><a href="/how-it-works">How It Works</a> - See our platform in detail</li>
            <li><a href="/case-studies">Case Studies</a> - Real results from nonprofits like yours</li>
            <li><a href="/about">About Us</a> - Our mission and vision</li>
            <li><a href="/faq">FAQ</a> - Common questions answered</li>
          </ul>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <p className="text-sm text-gray-500 font-poppins">
            ✓ QR Code Test Successful - This page is live and ready for your business cards!
          </p>
        </div>
      </div>
    </Layout>
  )
}
