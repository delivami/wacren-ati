import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactUI from '@/components/ContactUI';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata = {
  title: 'Contact Us | WACREN ATI',
  description: 'Get in touch with the Africa Training Initiative team. Our headquarters is located in Accra, Ghana. Discuss training, partnerships, or implementation needs.',
  openGraph: {
    title: 'Contact WACREN ATI | Get in Touch',
    description: 'Reach out to the ATI team for inquiries regarding capacity building, training programs, and regional collaborations.',
  }
};

export default async function ContactPage() {
  const t = await getTranslations('ContactPage');

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ati.wacren.net"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://ati.wacren.net/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-bg-soft flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-primary text-white py-[51px] lg:py-[68px] overflow-hidden">
          {/* Brand Identity Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 opacity-40" style={{ 
              background: 'radial-gradient(circle at 70% 30%, rgba(230,126,34,0.15) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)' 
            }}></div>
            <div className="absolute bottom-0 left-0 w-full h-[170px] bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
          
          {/* Subtle Digital Grid (Very low opacity) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

          <div className="container-wf relative z-10 flex justify-center w-full">
            <div className="text-center w-full max-w-[1020px] flex flex-col items-center">
              
              <AnimateOnScroll animation="fadeInUp">
                <h1 className="text-[27px] sm:text-[34px] md:text-[44px] lg:text-[54px] font-serif leading-[1.1] mb-4 tracking-tighter">
                  {t('heroTitlePrefix')} <span className="text-accent">{t('heroTitleHighlight')}</span>
                </h1>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.2 }}>
                <p className="text-[14px] md:text-[15px] text-white/80 leading-[1.6] max-w-[723px]">
                  {t('heroDesc')}
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <ContactUI />
      </main>

      <Footer />
    </div>
  );
}
