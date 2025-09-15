import Layout from '@/components/Layout'

export default function IntegrationPartners() {
  const title = "Integration Partners - AI4Love"
  const description = "Explore AI4Love's extensive integration ecosystem that connects with your existing nonprofit systems to provide seamless relationship intelligence."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/integration-partners">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Integration Partners</h1>
          <p>AI4Love's relationship intelligence platform is designed to work seamlessly with your existing technology ecosystem. Our extensive integration partnerships ensure that you can leverage relationship intelligence without replacing your current systems.</p>

          <h2>Our Integration Philosophy</h2>
          <p>We believe in enhancing your existing technology investments, not replacing them:</p>
          
          <ul>
            <li><strong>Work with What You Have</strong> - We connect to your current systems rather than requiring replacement</li>
            <li><strong>Secure Connections</strong> - All integrations use secure, authenticated API connections</li>
            <li><strong>Bidirectional Data Flow</strong> - Information flows both ways between systems</li>
            <li><strong>Minimal IT Resources</strong> - Most integrations can be set up with minimal IT involvement</li>
            <li><strong>Continuous Updates</strong> - We maintain integrations as partner systems evolve</li>
          </ul>

          <h2>CRM & Donor Management Integrations</h2>
          <p>We integrate with all major nonprofit CRM and donor management systems:</p>
          
          <ul>
            <li><strong>Blackbaud Products</strong> - Raiser's Edge NXT, Blackbaud CRM, eTapestry</li>
            <li><strong>Salesforce</strong> - NPSP, Salesforce.org Elevate</li>
            <li><strong>DonorPerfect</strong> - All editions</li>
            <li><strong>Bloomerang</strong> - All editions</li>
            <li><strong>Neon CRM</strong> - All editions</li>
            <li><strong>Virtuous</strong> - All editions</li>
            <li><strong>Little Green Light</strong> - All editions</li>
            <li><strong>Kindful</strong> - All editions</li>
            <li><strong>Foundation Systems</strong> - FIMS, Foundant, CommunitySuite</li>
          </ul>

          <h2>Marketing & Communication Integrations</h2>
          <p>We connect with your communication platforms to provide relationship intelligence:</p>
          
          <ul>
            <li><strong>Email Marketing</strong> - Mailchimp, Constant Contact, Emma, Campaign Monitor</li>
            <li><strong>Marketing Automation</strong> - HubSpot, Pardot, Marketo</li>
            <li><strong>SMS Platforms</strong> - Twilio, EZ Texting, TextMagic</li>
            <li><strong>Social Media</strong> - Hootsuite, Buffer, Sprout Social</li>
            <li><strong>Survey Tools</strong> - SurveyMonkey, Typeform, Google Forms</li>
          </ul>

          <h2>Event & Volunteer Management Integrations</h2>
          <p>We integrate with platforms that manage critical engagement touchpoints:</p>
          
          <ul>
            <li><strong>Event Management</strong> - Eventbrite, Cvent, OneCause, Givebutter</li>
            <li><strong>Volunteer Management</strong> - VolunteerHub, SignUpGenius, GivePulse, Galaxy Digital</li>
            <li><strong>Peer-to-Peer Fundraising</strong> - Classy, DonorDrive, Funraise, QGiv</li>
            <li><strong>Auction Platforms</strong> - OneCause, Auctria, Handbid</li>
          </ul>

          <h2>Financial & Payment Integrations</h2>
          <p>We connect with your financial systems to incorporate giving data:</p>
          
          <ul>
            <li><strong>Payment Processors</strong> - Stripe, PayPal, Authorize.net, Braintree</li>
            <li><strong>Accounting Software</strong> - QuickBooks, Sage Intacct, Financial Edge</li>
            <li><strong>Giving Platforms</strong> - Givebutter, Donately, Givelify, Tithely</li>
            <li><strong>Donor-Advised Fund Platforms</strong> - DAF Direct, Fidelity Charitable, Schwab Charitable</li>
          </ul>

          <h2>Custom & Specialized Integrations</h2>
          <p>We also support specialized nonprofit technology needs:</p>
          
          <ul>
            <li><strong>Advocacy Platforms</strong> - Phone2Action, Salsa, EveryAction</li>
            <li><strong>Grant Management</strong> - Foundant GLM, Fluxx, SmartSimple</li>
            <li><strong>Wealth Screening</strong> - iWave, DonorSearch, WealthEngine</li>
            <li><strong>Custom Databases</strong> - We can connect to custom-built systems via API</li>
            <li><strong>Data Warehouses</strong> - Snowflake, BigQuery, Redshift</li>
          </ul>

          <h2>Integration Process</h2>
          <p>Our integration process is designed to be simple and efficient:</p>
          
          <ol>
            <li>We assess your current technology ecosystem</li>
            <li>We recommend the most appropriate integration approach</li>
            <li>We handle the technical setup and configuration</li>
            <li>We test all data flows thoroughly</li>
            <li>We monitor and maintain the integration ongoing</li>
          </ol>
          
          <p>Most standard integrations can be completed within 1-2 weeks as part of the implementation process.</p>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Ready to Connect Your Systems?</h2>
          <p className="text-gray-600 mb-6 font-poppins">
            Contact us to discuss how AI4Love can integrate with your specific technology ecosystem.
          </p>
          <a 
            href="mailto:hello@ai4love.com" 
            className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg font-poppins font-medium hover:bg-red-600 transition-colors"
          >
            Discuss Integration Options
          </a>
        </div>
      </div>
    </Layout>
  )
}
