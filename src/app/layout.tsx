import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import MuiThemeProvider from '@/components/MuiThemeProvider';
import ScrollToTop from '@/components/ScrollToTop';
import LocaleProvider from '@/components/LocaleProvider';
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "WACREN ATI - Africa Training Initiative | Capacity Building for NRENs",
  description: "Building Africa's Knowledge, Leadership & Technical Strength through capacity building for NRENs, network operators, and technical communities across Africa. Join ATI-6 training programs.",
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        <AppRouterCacheProvider>
          <MuiThemeProvider>
            <LocaleProvider>
              {children}
            </LocaleProvider>
            <ScrollToTop />
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
