import Layout from '@/components/Layout'

export default function NonprofitAiEthics() {
  const title = "Nonprofit AI Ethics - AI4Love"
  const description = "Learn about AI4Love's ethical approach to AI in the nonprofit sector, focusing on human-centered technology that enhances rather than replaces human relationships."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/nonprofit-ai-ethics">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Nonprofit AI Ethics</h1>
          <p>At AI4Love, we believe that artificial intelligence in the nonprofit sector must be developed and deployed with the highest ethical standards. Our approach centers on human-augmented AI that enhances rather than replaces human relationships.</p>

          <h2>Our Ethical AI Principles</h2>
          <p>We've developed a comprehensive ethical framework for AI in the nonprofit sector:</p>
          
          <h3>1. Human-Centered Design</h3>
          <ul>
            <li>AI should enhance human capacity, not replace human judgment</li>
            <li>Technology should strengthen human connections, not automate them away</li>
            <li>Staff and supporters should always understand how AI is being used</li>
            <li>Human oversight must be maintained for all AI-informed decisions</li>
            <li>The human experience should be improved for both staff and supporters</li>
          </ul>

          <h3>2. Data Sovereignty and Privacy</h3>
          <ul>
            <li>Organizations must maintain complete ownership and control of their data</li>
            <li>Supporter privacy must be protected through rigorous safeguards</li>
            <li>Data should only be used for purposes aligned with organizational mission</li>
            <li>Transparency about data usage should be maintained with all stakeholders</li>
            <li>Data security must meet or exceed industry standards</li>
          </ul>

          <h3>3. Fairness and Inclusion</h3>
          <ul>
            <li>AI systems must be designed to avoid perpetuating biases</li>
            <li>Regular auditing for algorithmic bias should be conducted</li>
            <li>Diverse perspectives must be included in AI development</li>
            <li>Technology should be accessible to organizations of all sizes</li>
            <li>Benefits of AI should be distributed equitably across communities</li>
          </ul>

          <h3>4. Transparency and Explainability</h3>
          <ul>
            <li>Organizations should understand how AI recommendations are generated</li>
            <li>Staff should be able to explain AI-informed decisions to supporters</li>
            <li>Clear documentation of AI capabilities and limitations must be provided</li>
            <li>Regular reporting on AI system performance should be available</li>
            <li>No "black box" algorithms that can't be explained</li>
          </ul>

          <h3>5. Mission Alignment</h3>
          <ul>
            <li>AI should directly advance nonprofit mission and values</li>
            <li>Technology should strengthen rather than distract from core purpose</li>
            <li>AI should help organizations better serve their communities</li>
            <li>Impact measurement should include both efficiency and mission outcomes</li>
            <li>Technology should reflect and reinforce organizational values</li>
          </ul>

          <h2>Our Ethical Commitments</h2>
          <p>AI4Love makes the following concrete commitments:</p>
          
          <ul>
            <li><strong>Ethics Board</strong> - We maintain an independent ethics board with diverse nonprofit expertise</li>
            <li><strong>Regular Audits</strong> - Our systems undergo regular bias and ethics audits by third parties</li>
            <li><strong>Transparency Reports</strong> - We publish annual transparency reports on our AI systems</li>
            <li><strong>Client Control</strong> - Our clients maintain complete control over how AI is used with their data</li>
            <li><strong>Ongoing Education</strong> - We provide ethics training and resources to all clients</li>
          </ul>

          <h2>Setting Industry Standards</h2>
          <p>We're working to establish ethical standards for AI across the nonprofit sector:</p>
          
          <ul>
            <li>Collaborating with nonprofit technology associations on ethical guidelines</li>
            <li>Participating in cross-sector dialogues on responsible AI</li>
            <li>Publishing research and case studies on ethical AI implementation</li>
            <li>Advocating for appropriate regulation of AI in the social sector</li>
            <li>Sharing our ethical framework openly for adaptation by others</li>
          </ul>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Ready to Explore Ethical AI for Your Organization?</h2>
          <p className="text-gray-600 mb-6 font-poppins">
            Discover how AI4Love's ethical approach to AI can help your organization build stronger relationships while upholding your values.
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
