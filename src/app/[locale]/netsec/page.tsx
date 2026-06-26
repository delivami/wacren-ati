import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NetSecHero from '@/components/NetSecHero';
import NetSecContent from '@/components/NetSecContent';
import NetSecActivities from '@/components/NetSecActivities';
import NetSecRelationship from '@/components/NetSecRelationship';
import NetSecLaunch from '@/components/NetSecLaunch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ATI NetSec Forum | WACREN Cybersecurity",
  description: "Join the Africa Training Initiative (ATI) Cybersecurity Forum. Building Africa’s Research & Education Cybersecurity Community.",
  alternates: {
    canonical: 'https://ati.wacren.net/netsec',
  },
};

export default function NetSecPage() {
  return (
    <main className="min-h-screen bg-white font-outfit">
      <Navigation />
      
      <NetSecHero />
      <NetSecContent />
      <NetSecActivities />
      <NetSecRelationship />
      <NetSecLaunch />
      
      <Footer />
    </main>
  );
}
