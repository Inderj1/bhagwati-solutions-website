import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const siteUrl = "https://www.bhagwatihomesolutions.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bhagwati Home Solutions — PVC Doors, UPVC Windows, False Ceilings & Modular Kitchens in Faridabad",
    template: "%s | Bhagwati Home Solutions Faridabad",
  },
  description:
    "Authorized Sintex distributor in Faridabad since 2000. 25+ years of expertise in PVC doors, UPVC windows & doors, PVC false ceilings, wall panels, modular kitchens & home furniture. Best prices in Delhi NCR. Call +91 99998 86780 for a free quote.",
  keywords: [
    "PVC doors Faridabad",
    "UPVC windows Faridabad",
    "PVC false ceiling Faridabad",
    "PVC wall panels Faridabad",
    "modular kitchen Faridabad",
    "Sintex doors Faridabad",
    "Sintex PVC doors",
    "Sintex authorized dealer Faridabad",
    "home improvement Faridabad",
    "home renovation Faridabad",
    "PVC doors price Faridabad",
    "UPVC windows price Delhi NCR",
    "false ceiling installation Faridabad",
    "wall panel installation Faridabad",
    "bathroom doors Faridabad",
    "waterproof doors",
    "termite proof doors",
    "PVC doors near me",
    "UPVC windows near me",
    "modular kitchen near me",
    "home solutions Faridabad",
    "Bhagwati Home Solutions",
    "best PVC doors in Faridabad",
    "affordable modular kitchen Faridabad",
    "home interior Faridabad",
    "PVC ceiling Faridabad",
    "UPVC doors and windows Delhi NCR",
    "Sector 16 Faridabad PVC doors",
  ],
  authors: [{ name: "Bhagwati Home Solutions & Distributing Company" }],
  creator: "Bhagwati Home Solutions",
  publisher: "Bhagwati Home Solutions & Distributing Company",
  formatDetection: {
    telephone: true,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Bhagwati Home Solutions",
    title: "Bhagwati Home Solutions — PVC Doors, UPVC Windows, False Ceilings & Modular Kitchens in Faridabad",
    description:
      "Authorized Sintex distributor in Faridabad since 2000. Premium PVC doors, UPVC windows, false ceilings, wall panels & modular kitchens at best prices. Free consultation & expert installation.",
    images: [
      {
        url: "/images/hously-1.png",
        width: 1200,
        height: 630,
        alt: "Bhagwati Home Solutions — Premium Home Interiors in Faridabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhagwati Home Solutions — PVC Doors, UPVC Windows & Modular Kitchens in Faridabad",
    description:
      "Authorized Sintex distributor. 25+ years expertise in PVC doors, UPVC windows, false ceilings, wall panels & modular kitchens. Best prices in Delhi NCR.",
    images: ["/images/hously-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": siteUrl,
              name: "Bhagwati Home Solutions & Distributing Company",
              alternateName: "Bhagwati Home Solutions",
              description:
                "Authorized Sintex distributor in Faridabad since 2000. PVC doors, UPVC windows & doors, PVC false ceilings, wall panels, modular kitchens & home furniture at best prices in Delhi NCR.",
              url: siteUrl,
              telephone: "+919999886780",
              email: "",
              foundingDate: "2000",
              priceRange: "₹₹",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, UPI, Bank Transfer",
              image: `${siteUrl}/images/hously-1.png`,
              logo: `${siteUrl}/images/bhagwati-logo.svg`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "SCO 84-85, Kesar Building, Huda Market",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                postalCode: "121002",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.410,
                longitude: 77.312,
              },
              areaServed: [
                { "@type": "City", name: "Faridabad" },
                { "@type": "City", name: "Delhi" },
                { "@type": "City", name: "Noida" },
                { "@type": "City", name: "Gurgaon" },
                { "@type": "State", name: "Haryana" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "10:00",
                closes: "19:00",
              },
              sameAs: [
                "https://wa.me/919999886780",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Home Solutions Products",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "PVC Doors",
                    description: "Waterproof, termite-proof Sintex PVC doors for bathrooms, bedrooms & kitchens. Starting from ₹1,500.",
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "UPVC Windows & Doors",
                    description: "Energy-efficient multi-chambered UPVC frames with thermal insulation and noise reduction.",
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "PVC False Ceilings",
                    description: "Lightweight, moisture-resistant PVC false ceilings installed in 1-2 days. Starting from ₹70/sq ft.",
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "PVC Wall Panels",
                    description: "Elegant PVC wall panels that replace paint, tiles & wallpaper. Starting from ₹40/sq ft.",
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Modular Kitchens",
                    description: "Fully customized modular kitchen layouts with premium hardware and fittings.",
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Home Furniture",
                    description: "Living room, bedroom & storage furniture built with durable PVC and UPVC materials.",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "250",
                bestRating: "5",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What types of PVC doors do you offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We are authorized Sintex distributors and offer a complete range of PVC doors including bathroom doors, bedroom doors, kitchen doors, and balcony doors. Available in multiple colors. All doors are 24mm thick, waterproof, termite-proof, and virtually maintenance-free.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between PVC and UPVC?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PVC (Polyvinyl Chloride) is used in doors, ceilings, and wall panels. UPVC (Unplasticized PVC) is more rigid, ideal for windows and external doors with superior thermal insulation and noise reduction up to 80%.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are PVC false ceilings suitable for bathrooms and kitchens?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. PVC false ceilings are 100% waterproof, mold-resistant, and ideal for bathrooms, kitchens, balconies, and basements. Installation takes just 1-2 days with almost no maintenance required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long do your products last?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PVC doors and UPVC windows last 20-25 years with minimal maintenance. PVC false ceilings and wall panels have a lifespan of 15-20 years. Sintex products are termite-proof, rot-proof, and weather resistant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide installation services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide end-to-end professional installation for all products. Our trained team handles site measurement, product fitting, and finishing with clean, on-time completion.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which areas do you serve?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We serve all areas of Faridabad, as well as the wider Delhi NCR region including Noida, Gurgaon, and parts of South Delhi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I get a price quote?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Call us at +91 9999886780, WhatsApp us, or visit our showroom at SCO 84-85, Kesar Building, Huda Market, Sector 16, Faridabad. We also offer free site visits for accurate pricing.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
