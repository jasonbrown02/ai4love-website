import { useState, useCallback, useEffect } from 'react'
import HomeLayout from '@/components/HomeLayout'
import MapComponent from '@/components/MapComponent'

// CRA API URL for charity lookup
const CRA_API_URL = 'https://apps.cra-arc.gc.ca/ebci/hacc/srch/pub/dsplyRprtngPrd'

// Define types for our charitable organizations database
type CharityInfo = {
  name: string;
  lat: number;
  lng: number;
}

type CharityDatabase = {
  [key: string]: CharityInfo;
}

// Burlington, Ontario coordinates (AI4Love headquarters)
const BURLINGTON_COORDS = {
  lat: 43.3255,
  lng: -79.7990
}

// Mock database of charitable organizations with their registration numbers and locations
const charitableOrgs: CharityDatabase = {
  // Real Canadian charity registration numbers with their names and approximate locations
  '118925593RR0001': { name: 'Terry Fox Foundation', lat: 43.6532, lng: -79.3832 }, // Toronto
  '107761694RR0001': { name: 'Heart and Stroke Foundation of Canada', lat: 45.5017, lng: -73.5673 }, // Montreal
  '118829803RR0001': { name: 'Canadian Cancer Society', lat: 49.2827, lng: -123.1207 }, // Vancouver
  '119218923RR0001': { name: 'United Way of Greater Toronto', lat: 43.6532, lng: -79.3832 }, // Toronto
  '119219814RR0001': { name: 'Canadian Red Cross Society', lat: 45.4215, lng: -75.6972 }, // Ottawa
  '108160995RR0001': { name: 'SickKids Foundation', lat: 43.6571, lng: -79.3878 }, // Toronto
  '119110484RR0001': { name: 'World Vision Canada', lat: 43.8561, lng: -79.3370 }, // Markham
  '130650757RR0001': { name: 'Doctors Without Borders Canada', lat: 43.6481, lng: -79.4042 }, // Toronto
  '106863038RR0001': { name: 'Nature Conservancy of Canada', lat: 43.6481, lng: -79.3780 }, // Toronto
  '118834852RR0001': { name: 'Salvation Army Canada', lat: 43.7184, lng: -79.3780 } // Toronto
}

type Location = {
  lat: number
  lng: number
}

export default function Home() {
  const title = "AI4Love - Relationship Intelligence for Nonprofits"
  const description = "AI-powered relationship intelligence platform for nonprofits. Transform supporter data into actionable insights without replacing existing systems."
  
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [location, setLocation] = useState<Location>(BURLINGTON_COORDS)
  const [submitted, setSubmitted] = useState(false)
  const [orgName, setOrgName] = useState('')
  const [error, setError] = useState('')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [animating, setAnimating] = useState(false)

  const handleSubmit = useCallback(async () => {
    // Reset error state
    setError('')
    setIsTransitioning(true)
    
    try {
      // Format the registration number to match CRA format (e.g., 123456789RR0001)
      const formattedNumber = formatRegistrationNumber(registrationNumber)
      
      // In a production environment, you would make an API call to the CRA
      // Since we can't directly query the CRA API from the client side due to CORS,
      // you would typically use a serverless function or backend API
      
      // Check if the registration number exists in our mock database
      const org = charitableOrgs[formattedNumber]
      
      if (org) {
        // We found the organization in our database
        setLocation({
          lat: org.lat,
          lng: org.lng
        })
        
        // Set the organization name from our database
        setOrgName(org.name)
        
        // Show the welcome screen after a delay
        setTimeout(() => {
          setSubmitted(true)
          setIsTransitioning(false)
        }, 1500)
      } else if (isValidRegistrationFormat(formattedNumber)) {
        // If it's a valid format but not in our database, we'll accept it as a generic organization
        // In a real implementation, this would be an API call to validate against the CRA database
        
        // Use a default location for Toronto
        setLocation({
          lat: 43.6532,
          lng: -79.3832
        })
        
        // Use a generic name based on the registration number
        setOrgName(`Organization ${formattedNumber.substring(0, 6)}`)
        
        // Show the welcome screen after a delay
        setTimeout(() => {
          setSubmitted(true)
          setIsTransitioning(false)
        }, 1500)
      } else {
        setIsTransitioning(false)
        setError('Invalid charitable organization number format. Please enter a valid Canadian charity registration number (e.g., 118925593RR0001)')
      }
    } catch (err) {
      console.error('Error validating charitable organization:', err)
      setIsTransitioning(false)
      setError('Error validating charitable organization. Please try again.')
    }
  }, [registrationNumber])

  // Effect to handle animation when location changes
  useEffect(() => {
    if (submitted) {
      setAnimating(true)
      const timer = setTimeout(() => {
        setAnimating(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [location, submitted])

  // Format registration number to CRA format
  const formatRegistrationNumber = (number: string) => {
    // Remove all non-alphanumeric characters
    const cleaned = number.replace(/[^a-zA-Z0-9]/g, '')
    return cleaned.toUpperCase()
  }
  
  // Validate registration number format
  const isValidRegistrationFormat = (number: string) => {
    // Canadian charity registration numbers are typically in the format: 123456789RR0001
    // For this example, we'll accept any number that's at least 9 characters
    return number.length >= 9
  }
  
  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <HomeLayout title={title} description={description} canonicalUrl="https://ai4love.com">
      {/* Interactive Map Background */}
      <div className="absolute inset-0 z-0">
        <MapComponent 
          center={location} 
          zoom={submitted ? 12 : 10}
          markerTitle={submitted ? orgName : 'AI4Love Headquarters'}
          transitionDuration={1500}
        />
        
        {/* Semi-transparent overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        
        {/* Animation overlay */}
        {animating && (
          <div 
            className="absolute inset-0 bg-white z-20" 
            style={{
              opacity: 0,
              animation: 'flash 1.5s ease-out'
            }}
          ></div>
        )}
        
        {/* Add keyframe animations to the global styles */}
        <style jsx global>{`
          @keyframes flash {
            0% { opacity: 0.8; }
            100% { opacity: 0; }
          }
        `}</style>
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-xl px-6">
          {!submitted ? (
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 font-poppins">
                Enter your<br />
charitable<br />
registration<br />
number
              </h1>
              
              <div className="flex mt-6">
                <input
                  type="text"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter charity number (e.g. 118925593RR0001)"
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
            <div className="text-white text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
                Welcome<br />
                {orgName}
              </h1>
              
              <div className="flex justify-center space-x-8 mt-12">
                <a 
                  href="mailto:hello@ai4love.com"
                  className="flex flex-col items-center text-white hover:text-gray-200 transition-colors"
                >
                  <div className="bg-white rounded-full p-4 mb-3">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <span className="font-poppins">talk to us</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/company/ai4love"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-white hover:text-gray-200 transition-colors"
                >
                  <div className="bg-white rounded-full p-4 mb-3">
                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="font-poppins">connect on LinkedIn</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </HomeLayout>
  )
}
