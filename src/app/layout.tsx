import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Devanagari, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/brand";

/*- Google Fonts- */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

/*- SEO Metadata- */
export const metadata: Metadata = {
  title: BRAND.SEO_TITLE,
  description: BRAND.SEO_DESCRIPTION,
  keywords: BRAND.SEO_KEYWORDS,

  metadataBase: new URL("https://mamashrichahavale.com"), // Update with actual domain

  openGraph: {
    type: "website",
    locale: "mr_IN",
    alternateLocale: ["en_IN"],
    url: "https://mamashrichahavale.com",
    siteName: BRAND.NAME_ENGLISH,
    title: BRAND.SEO_TITLE,
    description: BRAND.SEO_DESCRIPTION,
    images: [
      {
        url: BRAND.OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BRAND.NAME_MARATHI} — Jaggery Tea Premix`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: BRAND.SEO_TITLE,
    description: BRAND.SEO_DESCRIPTION,
    images: [BRAND.OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  alternates: {
    canonical: "https://mamashrichahavale.com",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/logo.svg", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/logo.svg", sizes: "180x180" }],
    shortcut: "/logo.svg",
  },

  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2A0D04",
};

/*- Schema.org structured data- */
function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.NAME_ENGLISH,
    alternateName: BRAND.NAME_MARATHI,
    description: BRAND.SEO_DESCRIPTION,
    url: "https://mamashrichahavale.com",
    telephone: `+91${BRAND.PHONE}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: BRAND.CITY,
      addressRegion: BRAND.STATE,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.8762,
      longitude: 75.3433,
    },
    priceRange: BRAND.PRICE_RANGE,
    servesCuisine: "Indian",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [BRAND.FACEBOOK_URL],
    offers: {
      "@type": "Offer",
      name: BRAND.PRODUCT_NAME_ENGLISH,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="mr"
      className={`${plusJakarta.variable} ${notoDevanagari.variable} ${playfair.variable}`}
    >
      <head>
        <StructuredData />
        {/* Override CSS font variables with actual loaded fonts */}
        <style>{`
          :root {
            --font-sans: var(--font-plus-jakarta), 'Noto Sans', system-ui, sans-serif;
            --font-devanagari: var(--font-noto-devanagari), 'Poppins', sans-serif;
            --font-display: var(--font-playfair), 'Georgia', serif;
          }
        `}</style>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

