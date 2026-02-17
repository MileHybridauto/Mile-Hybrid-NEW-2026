import './globals.css'

export const metadata = {
  title: "Mile Hybrid Automotive | Denver's Oldest Hybrid Shop Since 2008",
  description: "Denver's oldest and longest-running hybrid and EV specialist since 2008. Expert Toyota, Lexus, Tesla service at 30-50% less than dealer prices. ASE certified, lifetime labor warranty.",
  keywords: ["hybrid repair denver", "prius battery replacement", "tesla repair denver", "hybrid mechanic", "ev repair colorado", "toyota techstream diagnostic"],
  openGraph: {
    title: "Mile Hybrid Automotive | Denver's Oldest Hybrid Shop",
    description: "Save 30-50% on hybrid & EV repair. ASE certified, lifetime warranty, free loaners.",
    url: "https://www.milehybridauto.com",
    siteName: "Mile Hybrid Automotive",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code-here",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Mile Hybrid Automotive",
              "description": "Denver's oldest and longest-running hybrid and EV specialist since 2008.",
              "foundingDate": "2008",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5142 E 39th Ave",
                "addressLocality": "Denver",
                "addressRegion": "CO",
                "postalCode": "80207",
                "addressCountry": "US"
              },
              "telephone": "+17204454357",
              "email": "info@milehybridauto.com",
              "url": "https://www.milehybridauto.com",
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
                "reviewCount": "222"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
