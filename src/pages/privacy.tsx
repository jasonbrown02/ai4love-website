import Layout from '@/components/Layout'

export default function Privacy() {
  const title = "Privacy Policy - AI4Love"
  const description = "AI4Love privacy policy and data handling practices."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/privacy">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: January 2025</p>

          <h2>Introduction</h2>
          <p>
            AI4Love ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>We may collect information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Organization name and details</li>
            <li>Feedback, questions, and other communications</li>
            <li>Email subscription preferences</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>Device and browser information</li>
            <li>IP address and location data</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referral sources</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you updates about our products and services (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Analyze usage patterns and trends</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist us in operating our website and services</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your explicit consent</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to processing of your personal information</li>
          </ul>

          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
          </p>

          <h2>Email Communications</h2>
          <p>
            If you subscribe to our email list, we will send you updates about our products and services. You can unsubscribe at any time by clicking the unsubscribe link in our emails or contacting us directly.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p>
            Email: <a href="mailto:privacy@ai4love.com">privacy@ai4love.com</a><br/>
            Website: <a href="https://ai4love.com">ai4love.com</a>
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold font-poppins mb-2">GDPR Compliance</h3>
            <p className="text-sm text-gray-600">
              For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). You have additional rights under GDPR, including the right to data portability and the right to lodge a complaint with a supervisory authority.
            </p>
          </div>

          <div className="mt-6 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold font-poppins mb-2">CCPA Compliance</h3>
            <p className="text-sm text-gray-600">
              For California residents, we comply with the California Consumer Privacy Act (CCPA). You have the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your information (which we do not engage in).
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
