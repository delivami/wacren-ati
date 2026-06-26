import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import MuiThemeProvider from '@/components/MuiThemeProvider';
import ScrollToTop from '@/components/ScrollToTop';
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "WACREN ATI - Africa Training Initiative | Capacity Building for NRENs",
  description: "Building Africa's Knowledge, Leadership & Technical Strength through capacity building for NRENs, network operators, and technical communities across Africa. Join ATI-6 training programs.",
  keywords: [
    "Africa", "Training", "NREN", "Network", "Education", "Research",
    "Capacity Building", "WACREN", "ATI", "Network Management",
    "Cybersecurity", "Leadership Development", "Technical Training"
  ],
  authors: [{ name: "WACREN ATI" }],
  creator: "WACREN ATI",
  publisher: "WACREN",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ati.wacren.net'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "WACREN ATI - Africa Training Initiative | Capacity Building for NRENs",
    description: "Building Africa's Knowledge, Leadership & Technical Strength through comprehensive capacity building for research and education networks, operators, and technical communities.",
    url: 'https://ati.wacren.net',
    siteName: 'WACREN ATI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WACREN ATI - Empowering Africa through Knowledge and Technical Strength',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "WACREN ATI - Africa Training Initiative",
    description: "Building Africa's Knowledge, Leadership & Technical Strength through capacity building.",
    images: ['/og-image.jpg'],
    creator: '@WACREN',
    site: '@WACREN',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WACREN ATI",
    "alternateName": "Africa Training Initiative",
    "description": "Capacity building initiative for African research and education networks",
    "url": "https://ati.wacren.net",
    "logo": "https://ati.wacren.net/logo.png",
    "sameAs": [
      "https://www.wacren.net",
      "https://www.ubuntu.net",
      "https://www.asren.net/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://ati.wacren.net/contact"
    },
    "foundingDate": "2014",
    "areaServed": {
      "@type": "Continent",
      "name": "Africa"
    },
    "knowsAbout": [
      "Network Engineering",
      "Cybersecurity",
      "Research and Education Networks",
      "Capacity Building",
      "Leadership Development"
    ]
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${outfit.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider>
            <MuiThemeProvider>
              {children}
              <ScrollToTop />
            </MuiThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
