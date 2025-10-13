import Head from 'next/head'
import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  canonicalUrl?: string
}

export default function Layout({ 
  children, 
  title = "AI4Love - Rethinking Generosity", 
  description = "AI-powered relationship intelligence for nonprofits and foundations",
  canonicalUrl = ""
}: LayoutProps) {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-white text-gray-900">
        <header className="container mx-auto px-6 py-8">
          <div className="flex items-center">
            <Link href="/">
              <div className="cursor-pointer flex items-center">
                <span className="font-poppins font-bold text-3xl text-brand-black">ai4</span>
                <span className="font-poppins font-bold text-3xl text-red-500 ml-1">♥</span>
              </div>
            </Link>
          </div>
          <p className="text-sm text-gray-600 mt-2 font-poppins">Rethinking Generosity</p>
        </header>

        <main className="container mx-auto px-6 pb-16">
          {children}
        </main>

        <footer className="bg-gray-50 border-t">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <span className="font-poppins font-bold text-xl text-brand-black">ai4</span>
                  <span className="font-poppins font-bold text-xl text-red-500 ml-1">♥</span>
                </div>
                <p className="text-gray-600 font-poppins text-sm">
                  Intelligence-layer platform for nonprofits, providing relationship insights without taking control of data.
                </p>
              </div>
              
              <div>
                <h3 className="font-poppins font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2 text-sm text-gray-600 font-poppins">
                  <li>Generosity Engine</li>
                  <li>Insights Dashboard</li>
                  <li>Recognition Engine</li>
                  <li>Engagement Engine</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-poppins font-semibold mb-4">Contact</h3>
                <p className="text-sm text-gray-600 font-poppins">
                  Ready to transform your supporter relationships?<br/>
                  <a href="mailto:hello@ai4love.com" className="text-red-500 hover:underline">hello@ai4love.com</a>
                </p>
              </div>
            </div>
            
            <div className="border-t mt-8 pt-8 text-center">
              <p className="text-xs text-gray-500 font-poppins">
                © 2025 AI4Love. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
