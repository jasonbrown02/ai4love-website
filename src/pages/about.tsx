import Layout from '@/components/Layout'

export default function About() {
  const title = "About Us - AI4Love"
  const description = "AI4Love is a team of nonprofit veterans and AI specialists building relationship intelligence technology that helps organizations deepen supporter connections."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/about">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>About AI4Love</h1>
          <p>AI4Love was founded in 2024 by a team of nonprofit veterans and AI specialists who recognized that relationship management was the missing piece in nonprofit technology.</p>

          <h2>Our Story</h2>
          <p>After decades of combined experience in the nonprofit sector, our founders saw a consistent pattern: organizations were investing heavily in CRM systems and marketing automation, but still struggling to maintain meaningful relationships with supporters at scale.</p>
          
          <p>The problem wasn't a lack of data or tools - it was a lack of intelligence to make sense of it all and surface actionable insights. Existing solutions either required replacing entire technology stacks or offered generic AI that wasn't tailored to nonprofit relationship dynamics.</p>
          
          <p>AI4Love was born from the belief that nonprofits deserve better. We set out to build an intelligence layer that works with existing systems, understands the unique nature of nonprofit relationships, and provides specific, actionable insights rather than generic recommendations.</p>

          <h2>Our Approach</h2>
          <p>We take a fundamentally different approach to nonprofit technology:</p>
          <ul>
            <li><strong>Intelligence, not replacement</strong> - We don't replace your existing systems; we make them smarter</li>
            <li><strong>Relationship-focused</strong> - Everything we build starts with understanding human relationships</li>
            <li><strong>Sector-specific</strong> - Our models are trained specifically on nonprofit relationship dynamics</li>
            <li><strong>Actionable insights</strong> - We provide specific recommendations, not just data</li>
            <li><strong>Human-centered design</strong> - Our tools are built for busy nonprofit professionals</li>
          </ul>

          <h2>Our Values</h2>
          <ul>
            <li><strong>Empathy</strong> - We deeply understand the challenges nonprofits face</li>
            <li><strong>Integrity</strong> - We're transparent about what our technology can and cannot do</li>
            <li><strong>Excellence</strong> - We hold ourselves to the highest standards in everything we build</li>
            <li><strong>Collaboration</strong> - We work closely with our clients as partners, not vendors</li>
            <li><strong>Impact</strong> - We measure our success by the positive change our clients create</li>
          </ul>

          <h2>Our Commitment</h2>
          <p>We're committed to building technology that serves humanity, not the other way around. That means developing AI that enhances human connection rather than replacing it, respecting data privacy and sovereignty, and ensuring our tools are accessible to organizations of all sizes.</p>
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
