import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
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
      locale: locale === 'fr' ? 'fr_FR' : locale === 'pt' ? 'pt_PT' : 'en_US',
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
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
