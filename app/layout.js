import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.milehybridauto.com'),
  title: {
    default: "Mile Hybrid Automotive | Denver's Oldest Hybrid & EV Shop Since 2008",
    template: "%s | Mile Hybrid Automotive",
  },
  description: "Denver's oldest hybrid & EV specialist since 2008. Save 30-50% vs dealer on Toyota, Lexus, Tesla repair. ASE certified, lifetime labor warranty, loaner cars. 4.9★ rating, 25,000+ vehicles serviced. Call (720) 445-4357.",
  keywords: [
    "hybrid repair denver",
    "prius battery replacement denver",
    "tesla repair denver",
    "hybrid mechanic denver",
    "ev repair colorado",
    "toyota hybrid repair",
    "lexus hybrid repair",
    "hybrid battery replacement cost",
    "P0A80 diagnostic denver",
    "check hybrid system light",
    "prius red triangle warning",
    "toyota techstream diagnostic",
    "hybrid shop near me",
    "independent hybrid mechanic",
    "hybrid car service denver",
    "tesla control arm replacement",
    "gen 3 prius death rattle",
    "hybrid brake actuator repair",
    "best hybrid mechanic colorado",
    "affordable hybrid repair"
  ],
  alternates: {
    canonical: 'https://www.milehybridauto.com',
  },
  openGraph: {
    title: "Mile Hybrid Automotive | Denver's Oldest Hybrid Shop Since 2008",
    description: "Save 30-50% on hybrid & EV repair. ASE certified, lifetime warranty, free loaners. 25,000+ vehicles serviced. Denver's most trusted hybrid specialist.",
    url: "https://www.milehybridauto.com",
    siteName: "Mile Hybrid Automotive",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/hero-shop.jpg',
        width: 1200,
        height: 630,
        alt: "Mile Hybrid Automotive - Denver's Oldest Hybrid & EV Repair Shop",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mile Hybrid Automotive | Denver's Oldest Hybrid Shop",
    description: "Save 30-50% on hybrid & EV repair. ASE certified, lifetime warranty. 4.9★ rating. Call (720) 445-4357.",
    images: ['/hero-shop.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here",
  },
  other: {
    'geo.region': 'US-CO',
    'geo.placename': 'Denver',
    'geo.position': '39.770;-104.925',
    'ICBM': '39.770, -104.925',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.milehybridauto.com" />
        {/* AutoRepair Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Mile Hybrid Automotive",
              "image": "/hero-shop.jpg",
              "description": "Denver's oldest and longest-running hybrid and EV specialist since 2008. Expert Toyota, Lexus, Tesla service at 30-50% less than dealer prices.",
              "foundingDate": "2008",
              "slogan": "Denver's Oldest Hybrid Shop - Pioneering Since 2008",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5142 E 39th Ave",
                "addressLocality": "Denver",
                "addressRegion": "CO",
                "postalCode": "80207",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "39.770",
                "longitude": "-104.925"
              },
              "hasMap": "https://maps.google.com/?q=Mile+Hybrid+Automotive+5142+E+39th+Ave+Denver+CO",
              "telephone": "+17204454357",
              "email": "info@milehybridauto.com",
              "url": "https://www.milehybridauto.com",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:30",
                  "closes": "17:30"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "222",
                "bestRating": "5",
                "worstRating": "1"
              },
              "areaServed": [
                { "@type": "City", "name": "Denver" },
                { "@type": "City", "name": "Aurora" },
                { "@type": "City", "name": "Stapleton" },
                { "@type": "City", "name": "Park Hill" },
                { "@type": "City", "name": "Lowry" },
                { "@type": "City", "name": "Central Park" },
                { "@type": "City", "name": "Cherry Creek" },
                { "@type": "City", "name": "Highlands Ranch" },
                { "@type": "City", "name": "Lakewood" },
                { "@type": "City", "name": "Centennial" }
              ],
              "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
              "currenciesAccepted": "USD",
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Verified Customer" },
                  "reviewBody": "Eric and the team at MileHybrid are the best! They keep me and my little blue Prius on the road at 311,000 miles. They are professional and I trust their guidance. I never feel like I am being sold, they do what is needed at a reasonable price."
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Prius Owner" },
                  "reviewBody": "Mile Hybrid saved me over $1,000 on what the dealer quoted for a hybrid battery. Same OEM part, but Eric explained all my options clearly. They even had a loaner car ready for me. This is how car service should be."
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Kia Niro Owner" },
                  "reviewBody": "Honest and friendly. The mechanic told me that while they could verify the codes, he was sure they would not bring my trip to a screeching halt. Peace of mind that Mile Hybrid team is looking out for me, not trying to upsell unnecessary repairs."
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Hybrid & EV Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Hybrid Battery Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Hybrid Battery Replacement",
                          "description": "New OEM or certified reconditioned hybrid battery installation. Save 30-50% vs dealer pricing.",
                          "provider": { "@type": "AutoRepair", "name": "Mile Hybrid Automotive" },
                          "areaServed": { "@type": "City", "name": "Denver" },
                          "serviceType": "Hybrid Battery Replacement"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "P0A80 Hybrid System Diagnostic",
                          "description": "Comprehensive hybrid battery and system diagnostics using Toyota Techstream dealer-level software.",
                          "provider": { "@type": "AutoRepair", "name": "Mile Hybrid Automotive" },
                          "areaServed": { "@type": "City", "name": "Denver" },
                          "serviceType": "Hybrid System Diagnostic"
                        }
                      }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Tesla & EV Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Tesla Control Arm Replacement",
                          "description": "Model 3/Y control arm and suspension repair at independent shop pricing.",
                          "provider": { "@type": "AutoRepair", "name": "Mile Hybrid Automotive" },
                          "areaServed": { "@type": "City", "name": "Denver" },
                          "serviceType": "Tesla Suspension Repair"
                        }
                      }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "General Maintenance",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Hybrid Oil Change & 50-Point Inspection",
                          "description": "Synthetic oil, filter, tire rotation plus hybrid-specific system checks.",
                          "provider": { "@type": "AutoRepair", "name": "Mile Hybrid Automotive" },
                          "areaServed": { "@type": "City", "name": "Denver" },
                          "serviceType": "Oil Change"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Pre-Purchase Hybrid Inspection",
                          "description": "Battery health test plus 150-point inspection for used hybrid and EV buyers.",
                          "provider": { "@type": "AutoRepair", "name": "Mile Hybrid Automotive" },
                          "areaServed": { "@type": "City", "name": "Denver" },
                          "serviceType": "Vehicle Inspection"
                        }
                      }
                    ]
                  }
                ]
              }
            })
          }}
        />
        {/* WebSite Schema for sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Mile Hybrid Automotive",
              "url": "https://www.milehybridauto.com",
              "description": "Denver's oldest hybrid and EV repair specialist since 2008.",
              "publisher": {
                "@type": "AutoRepair",
                "name": "Mile Hybrid Automotive"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
