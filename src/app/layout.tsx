import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import MuiThemeProvider from '@/components/MuiThemeProvider';
import ScrollToTop from '@/components/ScrollToTop';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${outfit.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <MuiThemeProvider>
            {children}
            <ScrollToTop />
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
