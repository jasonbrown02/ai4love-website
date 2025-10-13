import { useRouter } from 'next/router'
import { useState } from 'react'
import Layout from '@/components/Layout'

// Organization data mapping
const orgData: Record<string, { name: string; sector: string }> = {
  'JBHF': { 
    name: 'Joseph Brant Hospital Foundation', 
    sector: 'Healthcare'
  },
  // Add more organizations as needed
}

export default function DemoFeedbackHub() {
  const router = useRouter()
  const { slug } = router.query
  const orgSlug = (slug as string)?.toUpperCase() || ''
  const org = orgData[orgSlug] || { name: '', sector: 'Nonprofit' }
  
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    organization: org.name,
    resonated: '',
    useful: '',
    concerns: '',
    followUp: '',
    other: ''
  })
  
  const [emailForm, setEmailForm] = useState({
    email: '',
    launchPartner: false
  })
  
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/submit-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...feedbackForm,
          orgSlug,
          timestamp: new Date().toISOString()
        })
      })
      
      if (response.ok) {
        setFeedbackSubmitted(true)
        // Reset form
        setFeedbackForm({
          name: '',
          email: '',
          organization: org.name,
          resonated: '',
          useful: '',
          concerns: '',
          followUp: '',
          other: ''
        })
      } else {
        const errorData = await response.text()
        console.error('API error:', response.status, errorData)
        alert(`Error: ${response.status} - ${errorData}`)
      }
    } catch (error) {
      console.error('Error submitting feedback:', error)
      alert('There was an error submitting your feedback. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted, starting API call...')
    setIsSubmitting(true)
    
    try {
      console.log('Calling /api/subscribe with:', { ...emailForm, orgSlug })
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...emailForm,
          orgSlug,
          timestamp: new Date().toISOString()
        })
      })
      
      if (response.ok) {
        setEmailSubmitted(true)
        setEmailForm({ email: '', launchPartner: false })
      } else {
        const errorData = await response.text()
        console.error('API error:', response.status, errorData)
        alert(`Error: ${response.status} - ${errorData}`)
      }
    } catch (error) {
      console.error('Error subscribing:', error)
      alert('There was an error subscribing. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const title = org.name 
    ? `Thank you, ${org.name} - AI4Love Feedback Hub`
    : "Thank you for helping shape AI4Love"
  
  const description = "Your insights are helping us build meaningful relationship intelligence for the nonprofit sector."

  return (
    <Layout title={title} description={description}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            {org.name ? (
              <>Thank you, <span className="text-brand-red">{org.name}</span> team, for helping shape AI4Love</>
            ) : (
              <>Thank you for helping shape AI4Love</>
            )}
          </h1>
          <p className="text-xl text-gray-600 font-poppins">
            Your insights from today's conversation are helping us build something meaningful for the nonprofit sector.
          </p>
        </div>

        {/* Request Demo Access - Coming Soon */}
        <div className="mb-16 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border-2 border-gray-700 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-3 text-white">
            Request Access to Our Demo
          </h2>
          <p className="text-lg text-gray-300 font-poppins mb-6">
            We're building something special and can't wait to show you. 
            Early access coming soon—be among the first to experience it.
          </p>
          <a 
            href="mailto:scott@ai4love.com?subject=Demo Access Request"
            className="inline-block bg-brand-red text-white px-8 py-3 rounded-lg font-poppins font-semibold text-lg hover:bg-red-600 transition-colors"
          >
            Request Early Access
          </a>
        </div>

        {/* Section 1: Key Concepts */}
        <div className="mb-16 p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border-2 border-red-200">
          <h2 className="text-3xl font-bold font-poppins mb-6 text-gray-900">Key Concepts From Today</h2>
          <p className="text-lg text-gray-700 mb-6 font-poppins">
            We talked about how AI4Love acts as an intelligence layer for your supporter relationships.
            Here are the core ideas we explored:
          </p>
          <ul className="space-y-3 text-gray-800 font-poppins">
            <li className="flex items-start">
              <span className="text-brand-red mr-3 text-xl">•</span>
              <span><strong>Relationship Intelligence Dashboard</strong>—a smart layer over your existing systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red mr-3 text-xl">•</span>
              <span><strong>Early warning alerts</strong> for donor disengagement</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red mr-3 text-xl">•</span>
              <span><strong>Volunteer engagement tracking</strong> and optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red mr-3 text-xl">•</span>
              <span><strong>Real-time insights</strong> without replacing your CRM</span>
            </li>
          </ul>
          <div className="mt-6">
            <a 
              href="/downloads/ai4love-overview.pdf" 
              className="inline-flex items-center text-brand-red hover:text-red-700 font-semibold font-poppins"
            >
              Want to see the full overview? Download the PDF →
            </a>
          </div>
        </div>

        {/* Section 2: Feedback Form - MOST IMPORTANT */}
        <div className="mb-16 p-8 bg-white rounded-xl border-2 border-gray-200 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-poppins mb-3 text-gray-900">
              We Value Your Insights
            </h2>
            <p className="text-lg text-gray-600 font-poppins">
              You're not a prospect—you're a partner in building this.<br/>
              Your perspective matters more than you might think.
            </p>
          </div>

          {feedbackSubmitted ? (
            <div className="text-center p-8 bg-green-50 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold font-poppins text-green-800 mb-2">
                Got it—thank you! 🙏
              </h3>
              <p className="text-green-700 font-poppins">
                We'll review this and likely follow up within a few days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold font-poppins text-gray-700 mb-2">
                    Name <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent font-poppins"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold font-poppins text-gray-700 mb-2">
                    Email <span className="text-gray-400 font-normal">(optional, but suggested for follow-up)</span>
                  </label>
                  <input
                    type="email"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent font-poppins"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold font-poppins text-gray-700 mb-2">
                  Your Role/Position <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={feedbackForm.organization}
                  onChange={(e) => setFeedbackForm({...feedbackForm, organization: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent font-poppins"
                  placeholder="e.g., Executive Director, Development Manager"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold font-poppins text-gray-700 mb-2">
                  What resonated with you today?
                </label>
                <textarea
                  value={feedbackForm.resonated}
                  onChange={(e) => setFeedbackForm({...feedbackForm, resonated: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent font-poppins"
                  placeholder="Share what stood out to you..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold font-poppins text-gray-700 mb-2">
                  What would make this more useful for your organization?
                </label>
                <textarea
                  value={feedbackForm.useful}
                  onChange={(e) => setFeedbackForm({...feedbackForm, useful: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent font-poppins"
                  placeholder="Your ideas and suggestions..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold font-poppins text-gray-700 mb-2">
                  What concerns or questions came up?
                </label>
                <textarea
                  value={feedbackForm.concerns}
                  onChange={(e) => setFeedbackForm({...feedbackForm, concerns: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent font-poppins"
                  placeholder="Any concerns or questions..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold font-poppins text-gray-700 mb-3">
                  Can we follow up with you as we build this out?
                </label>
                <div className="space-y-2">
                  {['Yes', 'No', 'Maybe'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="followUp"
                        value={option}
                        checked={feedbackForm.followUp === option}
                        onChange={(e) => setFeedbackForm({...feedbackForm, followUp: e.target.value})}
                        className="w-4 h-4 text-brand-red focus:ring-brand-red"
                      />
                      <span className="ml-2 font-poppins text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold font-poppins text-gray-700 mb-2">
                  Anything else on your mind? <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  value={feedbackForm.other}
                  onChange={(e) => setFeedbackForm({...feedbackForm, other: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent font-poppins"
                  placeholder="Any other thoughts..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-red text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Your Thoughts'}
              </button>
            </form>
          )}
        </div>

        {/* Section 3: Stay in the Loop - EMPHASIZED */}
        <div className="mb-16 p-8 bg-brand-black rounded-xl border-2 border-gray-800">
          <h2 className="text-3xl font-bold font-poppins mb-3 text-white">
            Want Updates As We Build?
          </h2>
          <p className="text-lg text-gray-300 font-poppins mb-6">
            We're building in the open with input from people like you. 
            Join our early adopter community to get development updates, sneak peeks, and first access when we launch.
          </p>
          <p className="text-sm text-gray-400 font-poppins mb-6">
            You'll get updates roughly monthly—only when there's something worth sharing.
          </p>

          {emailSubmitted ? (
            <div className="text-center p-6 bg-green-900 rounded-lg border-2 border-green-700">
              <p className="text-green-100 font-poppins font-semibold">
                ✓ You're on the list! We'll keep you posted.
              </p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={emailForm.email}
                  onChange={(e) => setEmailForm({...emailForm, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent font-poppins placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={emailForm.launchPartner}
                    onChange={(e) => setEmailForm({...emailForm, launchPartner: e.target.checked})}
                    className="w-4 h-4 text-brand-red focus:ring-brand-red mt-1"
                  />
                  <span className="ml-2 font-poppins text-gray-300">
                    I'm interested in being a launch partner
                  </span>
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-red text-white px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Keep Me Posted'}
              </button>
            </form>
          )}
        </div>

        {/* Section 4: Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-poppins mb-6 text-gray-900">
            Everything From Today's Meeting
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-brand-red transition-colors">
              <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-900">
                Product Overview PDF
              </h3>
              <p className="text-gray-600 mb-4 font-poppins">
                Download our "Rethinking Generosity" overview
              </p>
              <a 
                href="/downloads/ai4love-overview.pdf" 
                className="inline-flex items-center text-brand-red hover:text-red-700 font-semibold font-poppins"
              >
                Download PDF →
              </a>
            </div>

            <div className="p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-brand-red transition-colors">
              <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-900">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-2 font-poppins">
                <strong>Scott:</strong> <a href="mailto:scott@ai4love.com" className="text-brand-red hover:underline">scott@ai4love.com</a>
              </p>
              <p className="text-gray-600 mb-2 font-poppins">
                <strong>Jason:</strong> <a href="mailto:jason@ai4love.ca" className="text-brand-red hover:underline">jason@ai4love.ca</a>
              </p>
              <p className="text-gray-600 mb-4 font-poppins">
                Questions? Just reach out—we're real people, not a sales team.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-lg text-gray-600 font-poppins mb-2">
            Your insights are shaping the future of nonprofit relationship intelligence.
          </p>
          <div className="flex items-center justify-center mt-4">
            <span className="font-poppins font-bold text-2xl text-brand-black">ai4</span>
            <span className="font-poppins font-bold text-2xl text-red-500 ml-1">♥</span>
            <span className="ml-3 text-gray-500 font-poppins">— Rethinking Generosity</span>
          </div>
          <p className="text-sm text-gray-400 font-poppins mt-4">
            © 2025 AI4Love. Built with care. | <a href="/privacy" className="hover:text-brand-red">Privacy Policy</a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
