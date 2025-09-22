import { useState, useCallback, useEffect } from 'react'
import HomeLayout from '@/components/HomeLayout'
import { supabase } from '@/lib/supabase'

// Component for the logged-in state
function LoggedInView({ orgName }: { orgName: string }) {
  const [showContactOptions, setShowContactOptions] = useState(false)
  const [chatbotOrgName, setChatbotOrgName] = useState(orgName || 'Friend')

  useEffect(() => {
    // Fetch organization info from API
    const fetchOrgInfo = async () => {
      try {
        // Use a placeholder userId for now - this should be replaced with actual Passage user ID
        const userId = 'current-user' // TODO: Replace with actual Passage user ID
        const response = await fetch(`/api/org-info?userId=${userId}`)
        
        if (response.ok) {
          const data = await response.json()
          setChatbotOrgName(data.orgName || orgName || 'Friend')
        } else {
          setChatbotOrgName(orgName || 'Friend')
        }
      } catch (error) {
        console.error('Error fetching org info:', error)
        setChatbotOrgName(orgName || 'Friend')
      }
    }

    fetchOrgInfo()
  }, [orgName])

  useEffect(() => {
    // Load the chatbot script first
    const script = document.createElement('script')
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/01996e6148977f2f87f4c0acb4ff6c7518c3/embed.js'
    script.async = true
    
    // Set up configuration before loading the script
    ;(window as any).jotformEmbedConfig = {
      orgName: chatbotOrgName,
      customData: {
        organizationName: chatbotOrgName,
        userType: 'authenticated'
      }
    }
    
    document.body.appendChild(script)

    // Try to customize the chatbot appearance after it loads
    const checkForChatbot = setInterval(() => {
      // Look for common chatbot elements and try to style them
      const chatElements = document.querySelectorAll('[class*="jotform"], [class*="chat"], [id*="chat"], iframe')
      if (chatElements.length > 0) {
        console.log('Found chatbot elements:', chatElements.length, 'Organization name:', chatbotOrgName)
        chatElements.forEach(element => {
          const htmlElement = element as HTMLElement
          // Try to integrate the chatbot into our container
          const container = document.getElementById('ai4love-chat-container')
          if (container && htmlElement.parentNode !== container) {
            // Move the chatbot into our container if possible
            try {
              container.innerHTML = ''
              container.appendChild(htmlElement)
              htmlElement.style.width = '100%'
              htmlElement.style.height = '100%'
              htmlElement.style.minHeight = '500px'
              htmlElement.style.border = 'none'
              htmlElement.style.borderRadius = '8px'
              htmlElement.style.backgroundColor = 'transparent'
              
              // If it's an iframe, ensure it's properly sized and has orgName parameter
              if (htmlElement.tagName === 'IFRAME') {
                const iframe = htmlElement as HTMLIFrameElement
                htmlElement.style.minHeight = '600px'
                htmlElement.style.maxHeight = '800px'
                
                // Add orgName parameter to iframe src if it doesn't already have it
                console.log('Original iframe src:', iframe.src)
                if (iframe.src && !iframe.src.includes('orgName=')) {
                  const separator = iframe.src.includes('?') ? '&' : '?'
                  const newSrc = `${iframe.src}${separator}orgName=${encodeURIComponent(chatbotOrgName)}`
                  console.log('Updated iframe src:', newSrc)
                  iframe.src = newSrc
                } else {
                  console.log('orgName already in URL or no src found')
                }
                
                // Also try to send organization name via postMessage
                iframe.onload = () => {
                  try {
                    iframe.contentWindow?.postMessage({
                      type: 'setOrgName',
                      orgName: chatbotOrgName,
                      organizationName: chatbotOrgName
                    }, '*')
                  } catch (e) {
                    console.log('Could not send postMessage to iframe:', e)
                  }
                }
              }
            } catch (e) {
              console.log('Could not move chatbot element:', e)
            }
          } else if (htmlElement.parentNode === container) {
            // If already in container, just ensure proper styling
            htmlElement.style.width = '100%'
            htmlElement.style.height = '100%'
            htmlElement.style.minHeight = '500px'
            htmlElement.style.border = 'none'
            htmlElement.style.borderRadius = '8px'
            
            if (htmlElement.tagName === 'IFRAME') {
              const iframe = htmlElement as HTMLIFrameElement
              htmlElement.style.minHeight = '600px'
              htmlElement.style.maxHeight = '800px'
              
              // Add orgName parameter to iframe src if it doesn't already have it
              console.log('Original iframe src (existing):', iframe.src)
              if (iframe.src && !iframe.src.includes('orgName=')) {
                const separator = iframe.src.includes('?') ? '&' : '?'
                const newSrc = `${iframe.src}${separator}orgName=${encodeURIComponent(chatbotOrgName)}`
                console.log('Updated iframe src (existing):', newSrc)
                iframe.src = newSrc
              } else {
                console.log('orgName already in URL or no src found (existing)')
              }
              
              // Also try to send organization name via postMessage
              iframe.onload = () => {
                try {
                  iframe.contentWindow?.postMessage({
                    type: 'setOrgName',
                    orgName: chatbotOrgName,
                    organizationName: chatbotOrgName
                  }, '*')
                } catch (e) {
                  console.log('Could not send postMessage to iframe:', e)
                }
              }
            }
          }
        })
        clearInterval(checkForChatbot)
      }
    }, 1000)

    // Clear interval after 10 seconds to avoid infinite checking
    setTimeout(() => clearInterval(checkForChatbot), 10000)

    // Cleanup function to remove script when component unmounts
    return () => {
      clearInterval(checkForChatbot)
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [chatbotOrgName])

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Welcome content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-8 py-8 lg:py-0 text-white">
        <div className="max-w-lg mx-auto lg:mx-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-poppins text-center lg:text-left">
            Welcome, {orgName}
          </h1>
          
          <div className="space-y-4 text-base lg:text-lg font-poppins opacity-90 mb-8 text-center lg:text-left">
            <p>
              We're excited to help you unlock the power of relationship intelligence for your organization.
            </p>
            <p>
              Our AI-powered platform transforms your supporter data into actionable insights, helping you build stronger relationships and drive greater impact.
            </p>
          </div>

          {/* Contact Options */}
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <button
              onClick={() => setShowContactOptions(!showContactOptions)}
              className="bg-white px-6 py-3 rounded-full font-poppins font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 shadow-lg"
              style={{ color: '#ec3b25' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Contact Us</span>
            </button>

            {showContactOptions && (
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 space-y-3 w-full max-w-sm">
                <p className="text-white font-poppins text-sm mb-3">Choose how you'd like to connect:</p>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => {
                      // Trigger the chatbot to open
                      const chatButton = document.querySelector('[data-testid="chat-button"]') as HTMLElement
                      if (chatButton) {
                        chatButton.click()
                      } else {
                        // Fallback - try to find any chat-related element
                        const chatElements = document.querySelectorAll('[class*="chat"], [id*="chat"], [class*="jotform"]')
                        if (chatElements.length > 0) {
                          (chatElements[0] as HTMLElement).click()
                        }
                      }
                      setShowContactOptions(false)
                    }}
                    className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg font-poppins hover:bg-opacity-30 transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Start Chat</span>
                  </button>
                  <a
                    href="mailto:hello@ai4love.com"
                    className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg font-poppins hover:bg-opacity-30 transition-colors flex items-center space-x-2"
                    onClick={() => setShowContactOptions(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right side - Integrated Chat Area */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 lg:px-8 py-8 lg:py-4">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 w-full h-full flex flex-col">
          <div className="text-center mb-4">
            <div className="bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-poppins font-semibold text-white mb-2">
              AI Assistant
            </h3>
            <p className="text-white opacity-80 font-poppins text-xs">
              Ask me anything about AI4Love or relationship intelligence
            </p>
          </div>
          
          {/* Chat integration area - much larger and more usable */}
          <div id="ai4love-chat-container" className="flex-1 bg-white bg-opacity-5 rounded-lg p-2 flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
            <div className="text-center text-white opacity-60">
              <div className="animate-pulse">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full mx-auto mb-2"></div>
                <p className="text-sm font-poppins">Chat loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Home() {
  const title = "AI4Love - Relationship Intelligence for Nonprofits"
  const description = "AI-powered relationship intelligence platform for nonprofits. Transform supporter data into actionable insights without replacing existing systems."
  
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [orgName, setOrgName] = useState('')
  const [error, setError] = useState('')
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Heart animation effect
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const initTimer = setTimeout(() => {
      const maxHearts = 8;
      const hearts: Array<{ x: number; y: number; el: HTMLElement }> = [];
      let visibleHeartCount = 0;
      let youLabelShown = false; // Flag to ensure "(you)" only appears once
      const svg = document.getElementById('connections');
      const animationContainer = document.getElementById('animation-container');
      
      if (!svg || !animationContainer) return;

      // Random heart number to show "(you)" on - could be 3rd, 5th, 7th, or 10th
      const possibleHeartNumbers = [3, 5, 7, 10];
      const randomHeartNumber = possibleHeartNumbers[Math.floor(Math.random() * possibleHeartNumbers.length)];

      // Bottom heart position (from HomeLayout)
      const bottomHeartX = window.innerWidth / 2;
      const bottomHeartY = window.innerHeight - 48;

      function createHeart(x: number, y: number) {
        if (!animationContainer) return;
        const div = document.createElement('div');
        div.classList.add('heart');
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        div.innerHTML = `
          <svg viewBox="0 0 24 24" width="25" height="25" fill="white" opacity="0.5">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>`;
        animationContainer.appendChild(div);
        hearts.push({ x, y, el: div });
        
        // Check if this heart is visible on screen
        const isVisible = typeof window !== 'undefined' && x >= 0 && x <= window.innerWidth && y >= 0 && y <= window.innerHeight;
        if (isVisible) {
          visibleHeartCount++;
          // Add "(you)" label to the randomly selected visible heart number
          if (!youLabelShown && visibleHeartCount === randomHeartNumber) {
            const label = document.createElement('div');
            label.style.position = 'absolute';
            label.style.left = `${x}px`;
            label.style.top = `${y + 30}px`;
            label.style.transform = 'translate(-50%, 0)';
            label.style.color = 'rgba(255,255,255,0.7)';
            label.style.fontSize = '12px';
            label.style.fontFamily = 'Poppins, sans-serif';
            label.style.pointerEvents = 'none';
            label.style.zIndex = '2';
            label.textContent = '(you)';
            animationContainer.appendChild(label);
            youLabelShown = true;
          }
        }
        
        drawConnections();
      }

      function drawConnections() {
        if (!svg) return;
        svg.innerHTML = '';
        
        // Draw connections between hearts (simplified)
        for (let i = 0; i < hearts.length; i++) {
          for (let j = i + 1; j < hearts.length; j++) {
            const dx = hearts[j].x - hearts[i].x;
            const dy = hearts[j].y - hearts[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > 30 && distance < 300) { // Only draw reasonable connections
              const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
              line.setAttribute("x1", hearts[i].x.toString());
              line.setAttribute("y1", hearts[i].y.toString());
              line.setAttribute("x2", hearts[j].x.toString());
              line.setAttribute("y2", hearts[j].y.toString());
              line.setAttribute("stroke", "rgba(255,255,255,0.15)");
              line.setAttribute("stroke-width", "1");
              svg.appendChild(line);
            }
          }
        }
      }

      function spawnHeart() {
        if (hearts.length >= maxHearts || typeof window === 'undefined') return;
        
        // Create hearts with better distribution
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        createHeart(x, y);
      }

      // Start animation with better timing
      spawnHeart();
      let count = 1;
      const interval = setInterval(() => {
        if (count >= maxHearts) {
          clearInterval(interval);
        } else {
          spawnHeart();
          count++;
        }
      }, 5000);

      // Cleanup function for the animation
      return () => {
        clearInterval(interval);
        hearts.forEach(heart => {
          if (heart.el && heart.el.parentNode) {
            heart.el.parentNode.removeChild(heart.el);
          }
        });
      };
    }, 100);
    
    // Cleanup function for the useEffect
    return () => {
      clearTimeout(initTimer);
    };
  }, [])

  const handleSubmit = useCallback(async () => {
    // Reset error state
    setError('')
    
    // Check if Supabase is available
    if (!supabase) {
      console.error('Supabase client is not available - check environment variables')
      setIsTransitioning(false)
      setError('Database connection not available. Please check configuration.')
      return
    }
    
    // Validate format before submitting
    if (!isValidRegistrationFormat(registrationNumber)) {
      setError('Please enter a charity registration number')
      return
    }
    
    setIsTransitioning(true)
    
    try {
      // Format the registration number to match your database format
      const formattedNumber = formatRegistrationNumber(registrationNumber)
      console.log('Original input:', registrationNumber)
      console.log('Formatted number:', formattedNumber)
      console.log('Supabase client available:', !!supabase)
      
      // Test Supabase connection first
      console.log('Testing Supabase connection...')
      const { data: testData, error: testError, count: testCount } = await supabase
        .from('NonProfitNumber')
        .select('*', { count: 'exact' })
        .limit(1)
      
      console.log('Connection test result:', { testData, testError, testCount })
      
      if (testError) {
        console.error('Supabase connection test failed:', testError)
        console.error('Error details:', {
          message: testError.message,
          details: testError.details,
          hint: testError.hint,
          code: testError.code
        })
        throw new Error(`Database connection failed: ${testError.message} (${testError.code})`)
      }
      
      console.log('Supabase connection test successful. Table has', testCount, 'total records')
      
      // Query the database for the nonprofit organization
      // Try different possible column names for the business number
      let data, error;
      
      // First, let's get a sample record to see the column structure
      const { data: sampleData } = await supabase
        .from('NonProfitNumber')
        .select('*')
        .limit(1)
      
      if (sampleData && sampleData.length > 0) {
        const columns = Object.keys(sampleData[0])
        console.log('Available columns:', columns)
        
        // Try to find the right column name for business number
        const possibleColumns = ['BN', 'bn', 'business_number', 'registration_number', 'charity_number', 'number', 'id']
        const matchingColumn = possibleColumns.find(col => columns.includes(col))
        
        if (matchingColumn) {
          console.log(`Using column: ${matchingColumn}`)
          
          // Try multiple search patterns for the formatted number
          const searchPatterns = [
            formattedNumber, // Full number as entered: 118829803RR0001
            formattedNumber.replace('RR', ''), // Without RR: 118829803001  
            formattedNumber.split('RR')[0], // Just business number: 118829803
            `%${formattedNumber}%`, // Wildcard search
            `%${formattedNumber.split('RR')[0]}%` // Wildcard search for business number
          ]
          
          console.log('Trying search patterns:', searchPatterns)
          
          // Try each pattern until we find a match
          for (const pattern of searchPatterns) {
            console.log(`Searching with pattern: ${pattern}`)
            const result = await supabase
              .from('NonProfitNumber')
              .select('*')
              .ilike(matchingColumn, pattern)
              .limit(1)
            
            if (result.data && result.data.length > 0) {
              console.log(`Found match with pattern: ${pattern}`)
              data = result.data
              error = result.error
              break
            }
          }
          
          // If no patterns worked, use the original query for error handling
          if (!data || data.length === 0) {
            const result = await supabase
              .from('NonProfitNumber')
              .select('*')
              .ilike(matchingColumn, formattedNumber)
              .limit(1)
            data = result.data
            error = result.error
          }
        } else {
          throw new Error(`No suitable column found. Available columns: ${columns.join(', ')}`)
        }
      } else {
        // Table appears empty with our limit(1) query, but let's try a broader search
        console.log('No sample data with limit(1), trying broader search...')
        
        // Try to get any records without limit to see if data exists
        console.log('Attempting broader search with limit 10...')
        const { data: allData, error: allError, count: allCount } = await supabase
          .from('NonProfitNumber')
          .select('*', { count: 'exact' })
          .limit(10)
        
        console.log('Broader search result:', { allData, allError, allCount })
        
        if (allError) {
          console.error('Error in broader search:', allError)
          throw new Error(`Error accessing table: ${allError.message} (Code: ${allError.code})`)
        }
        
        if (allData && allData.length > 0) {
          console.log('Found data in broader search:', allData)
          const columns = Object.keys(allData[0])
          console.log('Available columns:', columns)
          
          // Try to find the right column name for business number
          const possibleColumns = ['BN', 'bn', 'business_number', 'registration_number', 'charity_number', 'number', 'id', 'Business_Number']
          const matchingColumn = possibleColumns.find(col => columns.includes(col))
          
          if (matchingColumn) {
            console.log(`Using column: ${matchingColumn}`)
            
            // Try multiple search patterns for the formatted number
            const searchPatterns = [
              formattedNumber, // Full number as entered: 118829803RR0001
              formattedNumber.replace('RR', ''), // Without RR: 118829803001  
              formattedNumber.split('RR')[0], // Just business number: 118829803
              `%${formattedNumber}%`, // Wildcard search
              `%${formattedNumber.split('RR')[0]}%` // Wildcard search for business number
            ]
            
            console.log('Trying search patterns:', searchPatterns)
            
            // Try each pattern until we find a match
            for (const pattern of searchPatterns) {
              console.log(`Searching with pattern: ${pattern}`)
              const result = await supabase
                .from('NonProfitNumber')
                .select('*')
                .ilike(matchingColumn, pattern)
                .limit(1)
              
              if (result.data && result.data.length > 0) {
                console.log(`Found match with pattern: ${pattern}`)
                data = result.data
                error = result.error
                break
              }
            }
            
            // If no patterns worked, use the original query for error handling
            if (!data || data.length === 0) {
              const result = await supabase
                .from('NonProfitNumber')
                .select('*')
                .ilike(matchingColumn, formattedNumber)
                .limit(1)
              data = result.data
              error = result.error
            }
          } else {
            throw new Error(`No suitable column found for business number. Available columns: ${columns.join(', ')}. Please check which column contains the charity registration numbers.`)
          }
        } else {
          console.log('No data found in broader search. Total count:', allCount)
          throw new Error(`Table appears to be empty. Total records: ${allCount}. This could be due to Row Level Security (RLS) policies blocking access, or the table truly being empty. Please check your Supabase RLS settings.`)
        }
      }
      
      console.log('Query result:', { data, error })
      
      if (error) {
        console.error('Supabase query error:', error)
        throw new Error(`Database query failed: ${error.message}`)
      }
      
      if (data && data.length > 0) {
        // We found the organization in the database
        const org = data[0]
        console.log('Found organization:', org)
        setOrgName(org.Name || org.name || org.text || org.organization_name || `Organization ${formattedNumber}`)
        
        // Show the welcome screen after a delay
        setTimeout(() => {
          setSubmitted(true)
          setIsTransitioning(false)
        }, 1500)
      } else {
        // Organization not found in database
        setIsTransitioning(false)
        setError('Nonprofit number not found. Please check the number and try again.')
      }
    } catch (err: any) {
      console.error('Error validating nonprofit organization:', err)
      setIsTransitioning(false)
      setError(err.message || 'Error validating nonprofit organization. Please try again.')
    }
  }, [registrationNumber])


  // Format registration number to match database format
  const formatRegistrationNumber = (number: string) => {
    // Remove all non-alphanumeric characters first
    const cleaned = number.replace(/[^a-zA-Z0-9]/g, '').toUpperCase()
    
    // For Canadian charity registration numbers (format: 123456789RR0001)
    // Keep the full number as the database likely stores it complete
    return cleaned
  }
  
  // Validate registration number format
  const isValidRegistrationFormat = (number: string) => {
    // Very flexible validation - just check that something was entered
    // With 1M+ entries, we don't know all possible formats
    const trimmed = number.trim()
    return trimmed.length > 0
  }
  
  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <HomeLayout title={title} description={description} canonicalUrl="https://ai4love.com">
      {/* Red background with heart animation */}
      <div className="fixed inset-0" style={{ backgroundColor: '#ec3b25' }}>
        {/* Animation container */}
        <div id="animation-container" className="absolute inset-0">
          <svg id="connections" className="absolute inset-0 w-full h-full pointer-events-none z-0"></svg>
        </div>
      </div>
      
      <style jsx global>{`
        body {
          margin: 0;
          overflow: hidden;
        }
        .heart {
          position: absolute;
          width: 25px;
          height: 25px;
          transform: translate(-50%, -50%);
          opacity: 0.5;
          animation: pulse 4s infinite;
          z-index: 1;
          pointer-events: none;
        }
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
        
        /* Chatbot styling overrides for better usability */
        #ai4love-chat-container iframe,
        #ai4love-chat-container [class*="jotform"],
        #ai4love-chat-container [class*="chat"] {
          width: 100% !important;
          height: 100% !important;
          min-height: 500px !important;
          max-height: 800px !important;
          border: none !important;
          border-radius: 8px !important;
          background: transparent !important;
        }
        
        /* Ensure chat input and messages are visible */
        #ai4love-chat-container input,
        #ai4love-chat-container textarea,
        #ai4love-chat-container [class*="message"],
        #ai4love-chat-container [class*="input"] {
          font-size: 14px !important;
          line-height: 1.4 !important;
          padding: 8px !important;
        }
        
        /* Make sure the chat container takes full space */
        #ai4love-chat-container {
          display: flex !important;
          flex-direction: column !important;
          height: 100% !important;
        }
      `}</style>

      {/* Content */}
      {!submitted ? (
        <div className="relative z-20 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-xl px-6">
            <div className="text-white">
              <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 font-poppins">
                We're glad we found you.
              </h1>
              <div className="flex mt-6">
                <input
                  type="text"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter charity/nonprofit registration number"
                  className="flex-grow px-6 py-4 rounded-l-full text-gray-800 font-poppins focus:outline-none"
                  disabled={isTransitioning}
                />
                <button 
                  onClick={handleSubmit}
                  disabled={isTransitioning || !registrationNumber}
                  className="bg-white p-4 rounded-r-full hover:bg-gray-100 transition-colors focus:outline-none disabled:opacity-50"
                  style={{ color: '#ec3b25' }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              {error && (
                <p className="mt-4 text-white font-poppins">{error}</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-20">
          <LoggedInView orgName={orgName} />
        </div>
      )}
    </HomeLayout>
  )
}
