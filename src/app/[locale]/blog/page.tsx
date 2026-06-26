import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Blog | WACREN Africa Training Initiative',
  description: 'Insights, news and updates from the WACREN ATI community — stories from trainers, alumni and NREN professionals across Africa.',
};

export default async function BlogPage() {
  const t = await getTranslations('BlogPage');

  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-primary text-white py-[100px] lg:py-[140px] overflow-hidden">
          {/* Brand Identity Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 opacity-40" style={{ 
              background: 'radial-gradient(circle at 70% 30%, rgba(230,126,34,0.15) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)' 
            }}></div>
            <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
          
          {/* Subtle Digital Grid (Very low opacity) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

          <div className="container-wf relative z-10 flex justify-center w-full">
            <div className="text-center w-full max-w-[1200px] flex flex-col items-center">
              
              <AnimateOnScroll animation="fadeInUp">
                <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] xl:text-[90px] font-serif leading-[1.1] mb-6 tracking-tighter md:whitespace-nowrap">
                  {t('heroTitlePrefix')} <span className="text-accent">{t('heroTitleHighlight')}</span> {t('heroTitleSuffix')}
                </h1>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.2 }}>
                <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.6] max-w-[850px]">
                  {t('heroDesc')}
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Content placeholder */}
        <section className="py-20 bg-bg-soft">
          <div className="container-wf text-center">
            <AnimateOnScroll animation="fadeInUp">
              <p className="text-gray-500 text-lg">{t('comingSoon')}</p>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
