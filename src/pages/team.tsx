import Layout from '@/components/Layout'

export default function Team() {
  const title = "Our Team - AI4Love"
  const description = "Meet the AI4Love team - nonprofit veterans and AI specialists building relationship intelligence technology for the social impact sector."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/team">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Our Team</h1>
          <p>The AI4Love team brings together decades of nonprofit experience with cutting-edge AI expertise. We're united by a shared passion for helping mission-driven organizations build stronger relationships with their supporters.</p>

          <h2>Leadership Team</h2>
          
          <div className="mb-12">
            <h3>Sarah Chen</h3>
            <p className="font-semibold text-gray-700">Co-Founder & CEO</p>
            <p>Sarah brings 15 years of nonprofit leadership experience, having previously served as Chief Development Officer at a major hospital foundation. She experienced firsthand the challenges of maintaining meaningful relationships with thousands of supporters and became determined to solve this problem through technology.</p>
          </div>
          
          <div className="mb-12">
            <h3>Michael Rodriguez</h3>
            <p className="font-semibold text-gray-700">Co-Founder & CTO</p>
            <p>Michael is an AI specialist with a background in natural language processing and relationship modeling. Before co-founding AI4Love, he led AI research teams at major tech companies, focusing on building systems that understand human communication patterns and relationship dynamics.</p>
          </div>
          
          <div className="mb-12">
            <h3>Aisha Johnson</h3>
            <p className="font-semibold text-gray-700">Chief Product Officer</p>
            <p>Aisha has spent her career at the intersection of technology and social impact. With experience as both a nonprofit technology director and product leader at SaaS companies, she brings a unique perspective on building tools that truly serve nonprofit needs.</p>
          </div>

          <h2>Our Advisors</h2>
          
          <div className="mb-12">
            <h3>Dr. James Wilson</h3>
            <p className="font-semibold text-gray-700">AI Ethics Advisor</p>
            <p>Dr. Wilson is a leading researcher in AI ethics and responsible technology development. He ensures that AI4Love's technology is developed with strong ethical guidelines and a focus on enhancing human relationships rather than replacing them.</p>
          </div>
          
          <div className="mb-12">
            <h3>Elena Gomez</h3>
            <p className="font-semibold text-gray-700">Nonprofit Strategy Advisor</p>
            <p>Elena has 20+ years of experience in nonprofit leadership roles. As the former CEO of a major community foundation, she provides invaluable insights into the strategic challenges nonprofits face in relationship management.</p>
          </div>

          <h2>Join Our Team</h2>
          <p>We're always looking for passionate people who share our vision of transforming nonprofit relationships through intelligent technology. If you're excited about our mission and want to contribute your talents, we'd love to hear from you.</p>
          
          <p>Current openings:</p>
          <ul>
            <li>AI Research Engineer</li>
            <li>Nonprofit Success Manager</li>
            <li>Frontend Developer</li>
          </ul>
          
          <p>To apply, please send your resume and a brief note about why you're interested in AI4Love to <a href="mailto:careers@ai4love.com">careers@ai4love.com</a>.</p>
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
