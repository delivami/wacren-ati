import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import RelatedProgrammes from '@/components/RelatedProgrammes';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WACREN ATI - Africa Training Initiative",
  description: "WACREN's flagship technical capacity development programme for African research and education networks.",
  alternates: {
    canonical: 'https://ati.wacren.net/',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-outfit">
      <Navigation />
      
      <Hero />
      
      <About />
      
      <RelatedProgrammes />
      
      <Footer />
    </main>
  );
}
