import { useState, useCallback, useEffect } from 'react'
import HomeLayout from '@/components/HomeLayout'
import { supabase } from '@/lib/supabase'

// Component for the logged-in state
function LoggedInView({ orgName }: { orgName: string }) {
  useEffect(() => {
    // Load the chatbot script when component mounts
    const script = document.createElement('script')
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/01996e6148977f2f87f4c0acb4ff6c7518c3/embed.js'
    script.async = true
    document.body.appendChild(script)

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="text-white text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 font-poppins">
        Welcome {orgName}
      </h1>
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
      // For now, simulate success without database lookup
      setOrgName('Your Organization')
      setTimeout(() => {
        setSubmitted(true)
        setIsTransitioning(false)
      }, 1500)
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
      console.log('Searching for formatted number:', formattedNumber)
      
      // Test Supabase connection first
      const { data: testData, error: testError } = await supabase
        .from('NonProfitNumber')
        .select('*', { count: 'exact' })
        .limit(1)
      
      if (testError) {
        console.error('Supabase connection test failed:', testError)
        throw new Error(`Database connection failed: ${testError.message}`)
      }
      
      console.log('Supabase connection test successful')
      
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
          const result = await supabase
            .from('NonProfitNumber')
            .select('*')
            .ilike(matchingColumn, formattedNumber)
            .limit(1)
          data = result.data
          error = result.error
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
            const result = await supabase
              .from('NonProfitNumber')
              .select('*')
              .ilike(matchingColumn, formattedNumber)
              .limit(1)
            data = result.data
            error = result.error
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
    const cleaned = number.replace(/[^a-zA-Z0-9]/g, '')
    
    // If it has RR in it (Canadian format), extract just the number part before RR
    if (cleaned.includes('RR')) {
      const beforeRR = cleaned.split('RR')[0]
      return beforeRR
    }
    
    // Otherwise return the cleaned number
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
      <div className="fixed inset-0 bg-red-600" style={{ backgroundColor: '#C8102E' }}>
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
      `}</style>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-xl px-6">
          {!submitted ? (
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
                  className="bg-white text-red-500 p-4 rounded-r-full hover:bg-gray-100 transition-colors focus:outline-none disabled:opacity-50"
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
          ) : (
            <LoggedInView orgName={orgName} />
          )}
        </div>
      </div>
    </HomeLayout>
  )
}
