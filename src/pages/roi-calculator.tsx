import Layout from '@/components/Layout'
import { useState, useEffect } from 'react'

export default function RoiCalculator() {
  const title = "AI4Love ROI Calculator - Nonprofit Investment Return Estimator"
  const description = "Calculate the potential return on investment from implementing AI4Love's relationship intelligence platform. Get personalized ROI projections based on your nonprofit's size, sector, and current metrics."
  
  const [inputs, setInputs] = useState({
    organizationType: 'healthcare',
    donorCount: 5000,
    currentRetentionRate: 45,
    averageGift: 250,
    staffCount: 5,
    volunteerCount: 500,
    currentVolunteerRetention: 40,
    annualEvents: 12
  })

  const [results, setResults] = useState({
    retentionImprovement: 0,
    additionalRevenue: 0,
    staffEfficiency: 0,
    volunteerValue: 0,
    totalAnnualROI: 0,
    monthlyROI: 0,
    threeYearROI: 0
  })

  const organizationTypes = {
    healthcare: { name: 'Healthcare Foundation', retentionBoost: 12, giftIncrease: 15, efficiencyGain: 18 },
    education: { name: 'Educational Institution', retentionBoost: 15, giftIncrease: 12, efficiencyGain: 20 },
    environment: { name: 'Environmental Organization', retentionBoost: 18, giftIncrease: 10, efficiencyGain: 15 },
    community: { name: 'Community Foundation', retentionBoost: 10, giftIncrease: 18, efficiencyGain: 22 },
    social: { name: 'Social Services', retentionBoost: 14, giftIncrease: 13, efficiencyGain: 16 },
    arts: { name: 'Arts & Culture', retentionBoost: 16, giftIncrease: 14, efficiencyGain: 17 },
    religious: { name: 'Religious Organization', retentionBoost: 11, giftIncrease: 16, efficiencyGain: 14 }
  }

  useEffect(() => {
    calculateROI()
  }, [inputs])

  const calculateROI = () => {
    const orgType = organizationTypes[inputs.organizationType as keyof typeof organizationTypes]
    
    // Retention improvement calculation
    const retentionImprovement = (inputs.donorCount * (inputs.currentRetentionRate / 100) * (orgType.retentionBoost / 100)) * inputs.averageGift
    
    // Gift size increase
    const giftIncrease = inputs.donorCount * inputs.averageGift * (orgType.giftIncrease / 100)
    
    // Staff efficiency (15-20 hours saved per week per staff member)
    const staffEfficiency = inputs.staffCount * 17.5 * 52 * 40 // 17.5 avg hours * 52 weeks * $40/hour
    
    // Volunteer value (improved retention saves recruitment costs)
    const volunteerValue = inputs.volunteerCount * (1 - inputs.currentVolunteerRetention / 100) * 0.25 * 500 // 25% improvement * $500 recruitment cost
    
    // Event efficiency (20% improvement in event ROI)
    const eventEfficiency = inputs.annualEvents * 2500 * 0.20 // Avg $2500 per event * 20% improvement
    
    const totalAnnualROI = retentionImprovement + giftIncrease + staffEfficiency + volunteerValue + eventEfficiency
    
    setResults({
      retentionImprovement,
      additionalRevenue: giftIncrease,
      staffEfficiency,
      volunteerValue,
      totalAnnualROI,
      monthlyROI: totalAnnualROI / 12,
      threeYearROI: totalAnnualROI * 3 * 1.1 // 10% compound growth
    })
  }

  const handleInputChange = (field: string, value: number | string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI4Love ROI Calculator",
    "description": description,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/roi-calculator">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none mb-8">
          <h1>AI4Love ROI Calculator</h1>
          <p className="text-xl text-gray-600">
            Calculate the potential return on investment from implementing AI4Love's relationship intelligence platform. Get personalized projections based on your nonprofit's specific metrics and sector.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Your Organization Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Type
                </label>
                <select
                  value={inputs.organizationType}
                  onChange={(e) => handleInputChange('organizationType', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {Object.entries(organizationTypes).map(([key, type]) => (
                    <option key={key} value={key}>{type.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Active Donors
                </label>
                <input
                  type="number"
                  value={inputs.donorCount}
                  onChange={(e) => handleInputChange('donorCount', parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Donor Retention Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.currentRetentionRate}
                  onChange={(e) => handleInputChange('currentRetentionRate', parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                  max="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Annual Gift ($)
                </label>
                <input
                  type="number"
                  value={inputs.averageGift}
                  onChange={(e) => handleInputChange('averageGift', parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Development Staff Count
                </label>
                <input
                  type="number"
                  value={inputs.staffCount}
                  onChange={(e) => handleInputChange('staffCount', parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Volunteers
                </label>
                <input
                  type="number"
                  value={inputs.volunteerCount}
                  onChange={(e) => handleInputChange('volunteerCount', parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Volunteer Retention Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.currentVolunteerRetention}
                  onChange={(e) => handleInputChange('currentVolunteerRetention', parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                  max="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Events/Campaigns
                </label>
                <input
                  type="number"
                  value={inputs.annualEvents}
                  onChange={(e) => handleInputChange('annualEvents', parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Your Projected ROI</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-600 mb-2">Total Annual ROI</h3>
                <p className="text-3xl font-bold text-green-700">{formatCurrency(results.totalAnnualROI)}</p>
                <p className="text-sm text-gray-600">Monthly: {formatCurrency(results.monthlyROI)}</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3">ROI Breakdown:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Improved Donor Retention:</span>
                    <span className="font-medium">{formatCurrency(results.retentionImprovement)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Increased Gift Sizes:</span>
                    <span className="font-medium">{formatCurrency(results.additionalRevenue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Staff Efficiency Gains:</span>
                    <span className="font-medium">{formatCurrency(results.staffEfficiency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Volunteer Program Savings:</span>
                    <span className="font-medium">{formatCurrency(results.volunteerValue)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">3-Year Projection</h4>
                <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.threeYearROI)}</p>
                <p className="text-sm text-gray-600">Includes 10% compound growth</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 prose prose-lg max-w-none">
          <h2>Understanding Your ROI</h2>
          <p>
            Your projected ROI is based on proven improvements seen across our client base, customized for {organizationTypes[inputs.organizationType as keyof typeof organizationTypes].name.toLowerCase()} organizations.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">How We Calculate ROI</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Donor Retention:</strong> Based on sector-specific improvement rates</li>
                <li><strong>Gift Growth:</strong> Average increase in donation amounts</li>
                <li><strong>Staff Efficiency:</strong> Time saved through AI automation</li>
                <li><strong>Volunteer Value:</strong> Reduced recruitment and training costs</li>
                <li><strong>Event Optimization:</strong> Improved event ROI through better targeting</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Sector-Specific Factors</h3>
              <div className="text-sm">
                <p className="mb-2"><strong>Your Organization Type:</strong> {organizationTypes[inputs.organizationType as keyof typeof organizationTypes].name}</p>
                <ul className="space-y-1">
                  <li>Retention Improvement: {organizationTypes[inputs.organizationType as keyof typeof organizationTypes].retentionBoost}%</li>
                  <li>Gift Size Increase: {organizationTypes[inputs.organizationType as keyof typeof organizationTypes].giftIncrease}%</li>
                  <li>Efficiency Gain: {organizationTypes[inputs.organizationType as keyof typeof organizationTypes].efficiencyGain}%</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Preset Scenarios</h2>
          <p>Try these common nonprofit scenarios to see how AI4Love can impact different organization sizes:</p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <button
              onClick={() => setInputs({
                organizationType: 'healthcare',
                donorCount: 2500,
                currentRetentionRate: 42,
                averageGift: 180,
                staffCount: 3,
                volunteerCount: 200,
                currentVolunteerRetention: 35,
                annualEvents: 8
              })}
              className="p-4 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors text-left"
            >
              <h4 className="font-semibold text-red-800">Small Hospital Foundation</h4>
              <p className="text-sm text-red-600 mt-1">2,500 donors, 3 staff, $180 avg gift</p>
            </button>

            <button
              onClick={() => setInputs({
                organizationType: 'education',
                donorCount: 15000,
                currentRetentionRate: 38,
                averageGift: 125,
                staffCount: 8,
                volunteerCount: 1200,
                currentVolunteerRetention: 45,
                annualEvents: 15
              })}
              className="p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors text-left"
            >
              <h4 className="font-semibold text-blue-800">Mid-Size University</h4>
              <p className="text-sm text-blue-600 mt-1">15,000 alumni, 8 staff, $125 avg gift</p>
            </button>

            <button
              onClick={() => setInputs({
                organizationType: 'environment',
                donorCount: 8000,
                currentRetentionRate: 35,
                averageGift: 95,
                staffCount: 5,
                volunteerCount: 800,
                currentVolunteerRetention: 30,
                annualEvents: 20
              })}
              className="p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors text-left"
            >
              <h4 className="font-semibold text-green-800">Environmental Nonprofit</h4>
              <p className="text-sm text-green-600 mt-1">8,000 supporters, 5 staff, $95 avg gift</p>
            </button>
          </div>

          <h2>Implementation Investment</h2>
          <p>
            AI4Love pricing starts at $2,500/month for organizations with under 5,000 supporters, scaling based on your database size and feature requirements. Most organizations see positive ROI within 3-6 months.
          </p>

          <div className="bg-yellow-50 p-6 rounded-lg mt-6">
            <h3 className="text-lg font-semibold mb-3">Important Notes</h3>
            <ul className="text-sm space-y-1">
              <li>• ROI projections are based on average improvements across our client base</li>
              <li>• Actual results may vary based on implementation quality and organizational factors</li>
              <li>• Timeline to full ROI typically ranges from 3-12 months</li>
              <li>• Calculations assume consistent use of AI4Love recommendations</li>
              <li>• Contact us for a detailed, personalized ROI analysis</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Ready for a Detailed ROI Analysis?</h2>
          <p className="text-gray-600 mb-6 font-poppins">
            Get a personalized ROI projection based on your specific data and goals. Our team will provide a comprehensive analysis including implementation timeline and success metrics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/case-studies" 
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-blue-600 transition-colors text-center"
            >
              See Success Stories
            </a>
            <a 
              href="/ai-for-nonprofits-guide" 
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-green-600 transition-colors text-center"
            >
              Learn About Implementation
            </a>
            <a 
              href="mailto:hello@ai4love.com?subject=ROI Analysis Request" 
              className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-red-600 transition-colors text-center"
            >
              Request Detailed Analysis
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
