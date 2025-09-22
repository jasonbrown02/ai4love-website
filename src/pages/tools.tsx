import { useState } from 'react'
import Layout from '@/components/Layout'

interface Tool {
  id: string
  name: string
  category: string
  logo?: string
}

// Nonprofit tools with actual logo files
const tools: Tool[] = [
  // Fundraising & CRM
  { id: 'salesforce', name: 'Salesforce Nonprofit Cloud', category: 'Fundraising & CRM', logo: '/platform-logos/Donor_&_Fundraising_CRMs/salesforce_nonprofit_cloud.jpeg' },
  { id: 'donorperfect', name: 'DonorPerfect', category: 'Fundraising & CRM', logo: '/platform-logos/Donor_&_Fundraising_CRMs/donorperfect.png' },
  { id: 'blackbaud', name: 'Blackbaud Raiser\'s Edge NXT', category: 'Fundraising & CRM', logo: '/platform-logos/Donor_&_Fundraising_CRMs/blackbaud_raisersedge_nxt_1.jpg' },
  { id: 'neon', name: 'Neon One', category: 'Fundraising & CRM', logo: '/platform-logos/Donor_&_Fundraising_CRMs/neon_one.png' },
  { id: 'bloomerang', name: 'Bloomerang', category: 'Fundraising & CRM', logo: '/platform-logos/Donor_&_Fundraising_CRMs/bloomerang.png' },
  { id: 'virtuous', name: 'Virtuous', category: 'Fundraising & CRM', logo: '/platform-logos/Donor_&_Fundraising_CRMs/virtuous.png' },
  { id: 'everyaction', name: 'EveryAction', category: 'Fundraising & CRM', logo: '/platform-logos/Donor_&_Fundraising_CRMs/everyaction.png' },
  { id: 'canadahelps', name: 'CanadaHelps', category: 'Fundraising & CRM', logo: '/platform-logos/Donor_&_Fundraising_CRMs/canada_helps.png' },
  { id: 'networkforgood', name: 'Network for Good', category: 'Fundraising & CRM', logo: '/platform-logos/Donor_&_Fundraising_CRMs/network_for_good.jpeg' },
  
  // Events & Peer-to-Peer
  { id: 'eventbrite', name: 'Eventbrite', category: 'Events & Peer-to-Peer', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/eventbrite.png' },
  { id: 'givebutter', name: 'Givebutter', category: 'Events & Peer-to-Peer', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/give_butter.png' },
  { id: 'classy', name: 'Classy', category: 'Events & Peer-to-Peer', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/classy.jpg' },
  { id: 'qgiv', name: 'Qgiv', category: 'Events & Peer-to-Peer', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/Qgiv.jpeg' },
  { id: 'fundraise', name: 'Fundraise', category: 'Events & Peer-to-Peer', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/fundraise.png' },
  { id: 'zeffy', name: 'Zeffy', category: 'Events & Peer-to-Peer', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/zeffy.png' },
  { id: 'clover', name: 'Clover', category: 'Events & Peer-to-Peer', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/clover.png' },
  
  // Marketing & Communications
  { id: 'mailchimp', name: 'Mailchimp', category: 'Marketing & Communications', logo: '/platform-logos/Marketing_&_Communications/mailchimp.png' },
  { id: 'constant-contact', name: 'Constant Contact', category: 'Marketing & Communications', logo: '/platform-logos/Marketing_&_Communications/constant_contact.png' },
  { id: 'wordpress', name: 'WordPress', category: 'Marketing & Communications', logo: '/platform-logos/Marketing_&_Communications/wordpress.png' },
  { id: 'squarespace', name: 'Squarespace', category: 'Marketing & Communications', logo: '/platform-logos/Marketing_&_Communications/squarespace.png' },
  { id: 'hubspot', name: 'HubSpot', category: 'Marketing & Communications', logo: '/platform-logos/Marketing_&_Communications/hubspot.png' },
  { id: 'keela', name: 'Keela', category: 'Marketing & Communications', logo: '/platform-logos/Marketing_&_Communications/keela.png' },
  { id: 'donorbox', name: 'Donorbox', category: 'Marketing & Communications', logo: '/platform-logos/Marketing_&_Communications/donorbox.png' },
  { id: 'wix', name: 'Wix', category: 'Marketing & Communications', logo: '/platform-logos/Marketing_&_Communications/wix.png' },
  { id: 'drupal', name: 'Drupal', category: 'Marketing & Communications', logo: '/platform-logos/Marketing_&_Communications/drupal.png' },
  { id: 'emma', name: 'Emma', category: 'Marketing & Communications', logo: '/platform-logos/Marketing_&_Communications/emma.jpeg' },
  { id: 'campaign-monitor', name: 'Campaign Monitor', category: 'Marketing & Communications', logo: '/platform-logos/Marketing_&_Communications/campaign_monitor.png' },
  { id: 'little-green-light', name: 'Little Green Light', category: 'Marketing & Communications', logo: '/platform-logos/Marketing_&_Communications/little-green-light.png' },
  
  // Productivity & Collaboration
  { id: 'slack', name: 'Slack', category: 'Productivity & Collaboration', logo: '/platform-logos/Productivity_&_Collaboration/slack.jpeg' },
  { id: 'microsoft-365', name: 'Microsoft 365', category: 'Productivity & Collaboration', logo: '/platform-logos/Productivity_&_Collaboration/microsoft_365.png' },
  { id: 'google-workspace', name: 'Google Workspace', category: 'Productivity & Collaboration', logo: '/platform-logos/Productivity_&_Collaboration/google_workspace.png' },
  { id: 'zoom', name: 'Zoom', category: 'Productivity & Collaboration', logo: '/platform-logos/Productivity_&_Collaboration/zoom.png' },
  { id: 'dropbox', name: 'Dropbox', category: 'Productivity & Collaboration', logo: '/platform-logos/Productivity_&_Collaboration/dropbox.png' },
  { id: 'sync', name: 'Sync', category: 'Productivity & Collaboration', logo: '/platform-logos/Productivity_&_Collaboration/sync.png' },
  
  // Finance & Operations
  { id: 'quickbooks', name: 'QuickBooks', category: 'Finance & Operations', logo: '/platform-logos/Finance_&_Operations/intuit_quickbooks.png' },
  { id: 'sage', name: 'Sage Intacct', category: 'Finance & Operations', logo: '/platform-logos/Finance_&_Operations/sage_intacct.png' },
  { id: 'stripe', name: 'Stripe', category: 'Finance & Operations', logo: '/platform-logos/Finance_&_Operations/stripe.png' },
  { id: 'square', name: 'Square', category: 'Finance & Operations', logo: '/platform-logos/Finance_&_Operations/square.png' },
  { id: 'paypal', name: 'PayPal Giving Fund', category: 'Finance & Operations', logo: '/platform-logos/Finance_&_Operations/paypal_giving_fund.png' }
]

const categories = [
  'Fundraising & CRM',
  'Events & Peer-to-Peer',
  'Marketing & Communications',
  'Productivity & Collaboration',
  'Finance & Operations'
]

export default function ToolsMapping() {
  const title = "Which tools do you use? - AI4Love"
  const description = "Discover how AI4Love connects your nonprofit's existing tools into one intelligent engagement layer."
  
  const [selectedTools, setSelectedTools] = useState<string[]>([])
  const [showConnections, setShowConnections] = useState(false)

  const toggleTool = (toolId: string) => {
    setSelectedTools(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    )
  }

  const getSelectedToolNames = () => {
    return tools
      .filter(tool => selectedTools.includes(tool.id))
      .map(tool => tool.name)
  }

  const renderToolCard = (tool: Tool) => {
    const isSelected = selectedTools.includes(tool.id)
    
    return (
      <div
        key={tool.id}
        onClick={() => toggleTool(tool.id)}
        className={`
          relative cursor-pointer rounded-xl border-2 p-6 transition-all duration-300 hover:scale-105
          ${isSelected 
            ? 'border-red-500 bg-red-50 shadow-lg' 
            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
          }
        `}
        style={isSelected ? {
          boxShadow: '0 0 20px rgba(236, 59, 37, 0.3)',
          backgroundColor: 'rgba(236, 59, 37, 0.05)'
        } : {}}
      >
        {/* Logo area */}
        <div className="flex h-16 items-center justify-center mb-4 bg-white rounded-lg p-2">
          {tool.logo ? (
            <img 
              src={tool.logo} 
              alt={tool.name}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="text-2xl font-bold text-gray-400">
              {tool.name.charAt(0)}
            </div>
          )}
        </div>
        
        {isSelected && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
    )
  }

  const renderConnectionsDiagram = () => {
    const selectedToolsData = tools.filter(tool => selectedTools.includes(tool.id))
    
    // Generate dynamic stories based on selected tools
    const generateDynamicStories = () => {
      const toolNames = selectedToolsData.map(t => t.name)
      const connectionExamples = []
      
      // Cross-platform connections
      if (toolNames.some(name => name.includes('Constant Contact')) && toolNames.some(name => name.includes('Eventbrite'))) {
        connectionExamples.push("We notice when your Constant Contact volunteer also shows up at an Eventbrite fundraiser.")
      }
      if (toolNames.some(name => name.includes('Zoom')) && toolNames.some(name => name.includes('Stripe'))) {
        connectionExamples.push("We surface when your Zoom attendee is also a recurring Stripe donor.")
      }
      if (toolNames.some(name => name.includes('Mailchimp')) && toolNames.some(name => name.includes('DonorPerfect'))) {
        connectionExamples.push("We connect your Mailchimp subscribers to their DonorPerfect giving history.")
      }
      if (toolNames.some(name => name.includes('Salesforce')) && toolNames.some(name => name.includes('WordPress'))) {
        connectionExamples.push("We link Salesforce contacts to their WordPress website engagement.")
      }
      if (toolNames.some(name => name.includes('Google')) && toolNames.some(name => name.includes('Bloomerang'))) {
        connectionExamples.push("We match Google Workspace volunteers with their Bloomerang donation patterns.")
      }
      if (toolNames.some(name => name.includes('CanadaHelps')) && toolNames.some(name => name.includes('Google'))) {
        connectionExamples.push("We see that the person who gave through CanadaHelps is also a volunteer listed in Google Sheets.")
      }
      if (toolNames.some(name => name.includes('Slack')) && toolNames.some(name => name.includes('Stripe'))) {
        connectionExamples.push("We recognize when a Slack conversation overlaps with a Stripe recurring gift.")
      }
      if (toolNames.some(name => name.includes('HubSpot')) && toolNames.some(name => name.includes('Eventbrite'))) {
        connectionExamples.push("We connect HubSpot marketing contacts to their Eventbrite event participation.")
      }
      if (toolNames.some(name => name.includes('QuickBooks')) && toolNames.some(name => name.includes('Virtuous'))) {
        connectionExamples.push("We align QuickBooks financial data with Virtuous donor relationship insights.")
      }
      if (toolNames.some(name => name.includes('WordPress')) && toolNames.some(name => name.includes('Stripe'))) {
        connectionExamples.push("We monitor WordPress blog engagement from your Stripe recurring donors.")
      }
      
      // Add generic examples if not enough specific ones
      if (connectionExamples.length === 0 && selectedToolsData.length >= 2) {
        connectionExamples.push(`We notice when someone appears in both ${toolNames[0]} and ${toolNames[1]}.`)
      }
      if (connectionExamples.length < 2 && selectedToolsData.length >= 2) {
        connectionExamples.push(`We connect data between ${toolNames[0]} and ${toolNames[1]} to reveal the full story.`)
      }
      
      return connectionExamples.slice(0, 3)
    }
    
    const dynamicConnections = generateDynamicStories()
    
    return (
      <div className="mt-8 space-y-8">
        {/* Version 1: The Hidden Connections */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-semibold font-poppins text-center mb-8" style={{ color: '#ec3b25' }}>
            The Story Beneath Your Systems
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Without AI4Love */}
            <div className="space-y-4">
              <h4 className="font-semibold font-poppins text-gray-700 mb-4">
                Without AI4Love
              </h4>
              <div className="space-y-3 text-gray-600 font-poppins leading-relaxed">
                <p>Donor CRM, event signup, and email list live in silos.</p>
                <p>You see fragments of data, not full journeys.</p>
                <p>Connections between supporters are hidden.</p>
              </div>
            </div>
            
            {/* With AI4Love */}
            <div className="space-y-4 rounded-xl p-6" style={{ backgroundColor: 'rgba(236, 59, 37, 0.1)' }}>
              <h4 className="font-semibold font-poppins text-gray-700 mb-4">
                With AI4Love
              </h4>
              <div className="space-y-3 font-poppins leading-relaxed">
                {dynamicConnections.length > 0 ? (
                  dynamicConnections.map((story: string, index: number) => (
                    <p key={index} className="flex items-start space-x-3">
                      <span className="text-lg mt-0.5" style={{ color: '#ec3b25' }}>✓</span>
                      <span className="font-bold text-gray-700">{story}</span>
                    </p>
                  ))
                ) : (
                  <p className="flex items-start space-x-3">
                    <span className="text-lg mt-0.5" style={{ color: '#ec3b25' }}>✓</span>
                    <span className="font-bold text-gray-700">We connect those dots quietly, so you never miss the bigger story.</span>
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-100 pt-6">
            <p className="text-lg font-poppins text-gray-700 italic">
              It's not about more dashboards. It's about seeing the hidden connections that make your community whole.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/tools-mapping">
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4" style={{ color: '#ec3b25' }}>
              Which tools do you use?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-poppins max-w-3xl mx-auto leading-relaxed">
              Click the logos below to highlight the tools your organization uses. 
              At the bottom, you'll see a summary of your selections and how AI4Love can connect them.
            </p>
          </div>

          {/* Tools Grid */}
          {categories.map(category => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold font-poppins mb-6 text-center" style={{ color: '#ec3b25' }}>
                {category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {tools
                  .filter(tool => tool.category === category)
                  .map(renderToolCard)
                }
              </div>
            </div>
          ))}

          {/* Summary Section */}
          {selectedTools.length > 0 && (
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-semibold font-poppins text-gray-800 mb-4">
                  Your Selection
                </h3>
                <p className="text-lg text-gray-700 font-poppins mb-6 leading-relaxed">
                  You are using: <span className="font-semibold text-red-500">
                    {getSelectedToolNames().join(', ')}
                  </span>. AI4Love connects these systems into one intelligent engagement layer.
                </p>
                
                <button
                  onClick={() => setShowConnections(!showConnections)}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-poppins font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {showConnections ? 'Hide Connections' : 'Show Connections'}
                </button>
              </div>
              
              {showConnections && renderConnectionsDiagram()}
            </div>
          )}

          {/* Empty State */}
          {selectedTools.length === 0 && (
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-poppins text-gray-600 mb-2">
                  Select your tools to get started
                </h3>
                <p className="text-gray-500 font-poppins">
                  Click on the tools your organization uses to see how AI4Love can connect them.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
