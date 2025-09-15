import Head from 'next/head'

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
      
      <div className="min-h-screen bg-white text-gray-900">
        <div className="absolute top-6 right-6 z-10">
          <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-md">
            <span className="font-poppins font-bold text-3xl text-brand-black">ai4</span>
            <span className="font-poppins font-bold text-3xl text-red-500 ml-1">♥</span>
          </div>
        </div>

        <main className="min-h-screen">
          {children}
        </main>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <a href="mailto:hello@ai4love.com" className="text-white hover:text-gray-200 transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
