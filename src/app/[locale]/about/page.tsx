import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'About ATI | WACREN Africa Training Initiative',
  description: 'Learn about the WACREN Africa Training Initiative — building knowledge, leadership and technical strength for research and education networks across Africa.',
};

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');
  const tFramework = await getTranslations('Framework');
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-primary text-white py-[60px] lg:py-[80px] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 opacity-40" style={{ 
              background: 'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(230,126,34,0.15) 0%, transparent 65%), radial-gradient(ellipse 30% 40% at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 60%)' 
            }}></div>
            <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>

          <div className="container-wf relative z-10 flex justify-center w-full">
            <div className="text-center w-full max-w-[1200px] flex flex-col items-center">
              <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-serif leading-[1.1] mb-4 tracking-tighter">
                {t('heroTitle')} <span className="text-accent">{t('heroHighlight')}</span>
              </h1>
              <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.6] max-w-[850px]">
                {t('heroDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-[100px] bg-white">
          <div className="container-wf">
            <AnimateOnScroll animation="fadeInUp" className="w-full text-left flex flex-col">
              <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] mb-[32px] tracking-tighter text-zinc-900 font-normal text-center">
                {t('sectionTitlePrefix')} <em className="not-italic text-primary">{t('sectionTitleHighlight')}</em>
              </h2>
              
              <div className="space-y-[24px] text-[16px] md:text-[18px] leading-[1.8] text-zinc-600 mb-[48px]">
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
                <p>{t('p3')}</p>
                <p>
                  {t('p4')} <a href="https://nog.ng/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">NgNOG</a>, <a href="https://ghnog.org.gh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">GhNOG</a>, and <a href="https://trustbroker.africa/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">TrustBroker Africa</a>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a 
                  href="https://survey.wacren.net/index.php/291743" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-[32px] py-[16px] bg-primary text-white rounded-[6px] font-bold text-[14px] hover:bg-primary-dark transition-all shadow-lg uppercase tracking-[0.05em]"
                >
                  {t('applyBtn')} →
                </a>
                <a
                  href="/documents/ATI-Programme-Framework.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-[32px] py-[16px] bg-accent text-white rounded-[6px] font-bold text-[14px] hover:bg-accent/90 transition-all shadow-lg uppercase tracking-[0.05em]"
                >
                  {tFramework('downloadBtn')}
                  <span className="transition-transform group-hover:translate-y-1">↓</span>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

