import Layout from '@/components/Layout'

export default function RoiCalculator() {
  const title = "ROI Calculator - AI4Love"
  const description = "Calculate the potential return on investment from implementing AI4Love's relationship intelligence platform for your nonprofit organization."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/roi-calculator">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>ROI Calculator</h1>
          <p>Understanding the potential return on investment is crucial when considering any new technology. Our ROI framework helps you quantify the potential value of relationship intelligence for your organization.</p>

          <h2>The Value of Relationship Intelligence</h2>
          <p>AI4Love's relationship intelligence platform delivers ROI through several key mechanisms:</p>
          
          <ul>
            <li><strong>Improved Donor Retention</strong> - Reducing donor churn directly impacts revenue</li>
            <li><strong>Enhanced Staff Efficiency</strong> - Saving staff time allows for more high-value activities</li>
            <li><strong>Increased Giving</strong> - Better relationships lead to larger and more frequent gifts</li>
            <li><strong>Volunteer Retention</strong> - Keeping volunteers engaged reduces recruitment and training costs</li>
            <li><strong>Operational Savings</strong> - More efficient processes reduce administrative costs</li>
          </ul>

          <h2>ROI Framework</h2>
          <p>Our ROI calculation considers both direct financial returns and operational efficiencies:</p>
          
          <h3>Direct Financial Impact</h3>
          <ul>
            <li><strong>Donor Retention Improvement</strong> - Each 1% improvement in retention typically yields 4% revenue increase</li>
            <li><strong>Average Gift Increase</strong> - Better relationships typically lead to 10-15% larger gifts</li>
            <li><strong>Giving Frequency</strong> - Engaged donors give 20-30% more often</li>
            <li><strong>Major Gift Pipeline</strong> - Improved relationship intelligence identifies 15-25% more major gift prospects</li>
            <li><strong>Volunteer-to-Donor Conversion</strong> - Typically increases by 25-40% with better relationship management</li>
          </ul>

          <h3>Operational Efficiency Impact</h3>
          <ul>
            <li><strong>Staff Time Savings</strong> - Organizations typically save 15-20 hours per week per development officer</li>
            <li><strong>Reduced Acquisition Costs</strong> - Better retention means less spent on acquiring new donors</li>
            <li><strong>Communication Efficiency</strong> - More targeted communications reduce waste by 20-30%</li>
            <li><strong>Meeting Preparation Time</strong> - Typically reduced by 50-70%</li>
            <li><strong>Reporting Time</strong> - Automated insights reduce reporting time by 40-60%</li>
          </ul>

          <h2>Sample ROI Calculation</h2>
          <p>For a mid-sized nonprofit with:</p>
          <ul>
            <li>5,000 active donors</li>
            <li>Current retention rate of 45%</li>
            <li>Average annual gift of $250</li>
            <li>5 development staff</li>
          </ul>

          <p><strong>Potential Annual Impact:</strong></p>
          <ul>
            <li>10% improvement in retention = 500 additional donors retained</li>
            <li>500 donors × $250 average gift = $125,000 in preserved annual giving</li>
            <li>15% increase in average gift size = $37.50 per donor</li>
            <li>$37.50 × 5,000 donors = $187,500 in additional annual giving</li>
            <li>15 hours saved per week per development officer = 3,900 hours annually</li>
            <li>3,900 hours × $40 average hourly cost = $156,000 in staff efficiency</li>
          </ul>

          <p><strong>Total Annual ROI: $468,500</strong></p>

          <h2>Calculate Your Organization's ROI</h2>
          <p>For a personalized ROI calculation based on your organization's specific metrics, please contact us. We'll work with you to develop a detailed analysis of the potential return on investment for implementing AI4Love's relationship intelligence platform.</p>
          
          <p>Our ROI assessment includes:</p>
          <ul>
            <li>Detailed analysis of your current relationship management metrics</li>
            <li>Customized projections based on your organization's data</li>
            <li>Comparison with industry benchmarks for similar organizations</li>
            <li>Timeline for expected returns</li>
            <li>Implementation cost considerations</li>
          </ul>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Ready for a Personalized ROI Analysis?</h2>
          <p className="text-gray-600 mb-6 font-poppins">
            Contact us to schedule a consultation and receive a detailed ROI projection for your organization.
          </p>
          <a 
            href="mailto:hello@ai4love.com" 
            className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg font-poppins font-medium hover:bg-red-600 transition-colors"
          >
            Request ROI Analysis
          </a>
        </div>
      </div>
    </Layout>
  )
}
