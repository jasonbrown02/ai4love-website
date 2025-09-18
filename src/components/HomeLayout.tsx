import Head from 'next/head'
import { motion } from 'framer-motion'

interface HomeLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  canonicalUrl?: string
}

export default function HomeLayout({ 
  children, 
  title = "AI4Love - Rethinking Generosity", 
  description = "AI-powered relationship intelligence for nonprofits and foundations",
  canonicalUrl = ""
}: HomeLayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI4Love",
    "description": description,
    "url": "https://ai4love.com",
    "logo": "https://ai4love.com/logo.svg",
    "foundingDate": "2024",
    "industry": "Nonprofit Technology",
    "serviceArea": "Global"
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen text-gray-900">
        <div className="absolute top-6 right-6 z-10">
          <motion.div 
            className="flex items-center bg-white px-4 py-2 rounded-full shadow-md"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(200, 16, 46, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img 
              src="/logo/ai4love_blkred.svg" 
              alt="AI4Love" 
              className="h-8 w-auto"
              whileHover={{ 
                // Playful laughing bounce
                y: [0, -2, 0, -1, 0],
                rotate: [0, -1, 1, -0.5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut"
              }}
            />
          </motion.div>
        </div>

        <main className="min-h-screen">
          {children}
        </main>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <motion.a 
            href="mailto:hello@ai4love.com" 
            className="text-white hover:text-gray-200 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.svg 
              className="w-8 h-8" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ 
                fill: "#ff6b6b",
                filter: "drop-shadow(0 0 8px rgba(255, 107, 107, 0.6))"
              }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </motion.svg>
          </motion.a>
        </div>
      </div>
    </>
  )
}
