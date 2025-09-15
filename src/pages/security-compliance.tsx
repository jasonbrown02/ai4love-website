import Layout from '@/components/Layout'

export default function SecurityCompliance() {
  const title = "Security & Compliance - AI4Love"
  const description = "Learn about AI4Love's comprehensive security and compliance measures designed to protect your organization's data and maintain privacy."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/security-compliance">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Security & Compliance</h1>
          <p>At AI4Love, we understand that nonprofits handle sensitive supporter data. Our security and compliance framework is designed to ensure your data remains protected while still enabling powerful relationship intelligence.</p>

          <h2>Our Security Approach</h2>
          <p>We've built security into every layer of our platform:</p>
          
          <h3>Data Protection</h3>
          <ul>
            <li><strong>Encryption</strong> - All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
            <li><strong>Data Minimization</strong> - We only process the data necessary for relationship intelligence</li>
            <li><strong>Secure API Connections</strong> - All integrations use secure, authenticated API connections</li>
            <li><strong>Regular Security Audits</strong> - Independent security experts regularly test our systems</li>
          </ul>

          <h3>Infrastructure Security</h3>
          <ul>
            <li><strong>Cloud Security</strong> - We leverage enterprise-grade cloud infrastructure with comprehensive security controls</li>
            <li><strong>Network Security</strong> - Multiple layers of firewalls and intrusion detection systems</li>
            <li><strong>Access Controls</strong> - Strict role-based access controls for all systems</li>
            <li><strong>Monitoring</strong> - 24/7 security monitoring and alerting</li>
          </ul>

          <h2>Compliance Certifications</h2>
          <p>We maintain rigorous compliance with industry standards:</p>
          <ul>
            <li><strong>SOC 2 Type II</strong> - Comprehensive audit of security, availability, and confidentiality controls</li>
            <li><strong>GDPR Compliance</strong> - Full compliance with European data protection regulations</li>
            <li><strong>CCPA Compliance</strong> - Adherence to California Consumer Privacy Act requirements</li>
            <li><strong>HIPAA Compliance</strong> - Available for healthcare organizations handling PHI</li>
          </ul>

          <h2>Data Ownership & Privacy</h2>
          <p>We believe in complete data sovereignty:</p>
          <ul>
            <li><strong>You Own Your Data</strong> - Your organization maintains full ownership of all data</li>
            <li><strong>No Data Sharing</strong> - We never share your data with third parties</li>
            <li><strong>Data Deletion</strong> - You can request complete deletion of your data at any time</li>
            <li><strong>Privacy by Design</strong> - Our systems are built with privacy as a foundational principle</li>
          </ul>

          <h2>Security Practices</h2>
          <ul>
            <li><strong>Employee Background Checks</strong> - All team members undergo thorough background checks</li>
            <li><strong>Security Training</strong> - Regular security awareness training for all staff</li>
            <li><strong>Secure Development</strong> - Secure coding practices and regular code reviews</li>
            <li><strong>Vulnerability Management</strong> - Proactive identification and remediation of vulnerabilities</li>
            <li><strong>Incident Response</strong> - Comprehensive incident response plan with regular testing</li>
          </ul>

          <h2>Security Documentation</h2>
          <p>We provide comprehensive security documentation to our clients:</p>
          <ul>
            <li>Security white papers</li>
            <li>Compliance certifications</li>
            <li>Data processing agreements</li>
            <li>Security questionnaire responses</li>
          </ul>

          <p>For detailed security information or to request our security documentation, please contact our security team at <a href="mailto:security@ai4love.com">security@ai4love.com</a>.</p>
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
