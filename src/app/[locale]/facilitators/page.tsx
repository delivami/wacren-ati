import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Facilitators | WACREN Africa Training Initiative',
  description: 'Meet the expert facilitators driving the WACREN ATI training programmes across Africa.',
};

export default async function FacilitatorsPage() {
  const t = await getTranslations('FacilitatorsPage');
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-primary text-white py-[51px] lg:py-[68px] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 opacity-40" style={{ 
              background: 'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(230,126,34,0.15) 0%, transparent 65%), radial-gradient(ellipse 30% 40% at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 60%)' 
            }}></div>
            <div className="absolute bottom-0 left-0 w-full h-[170px] bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>

          <div className="container-wf relative z-10 flex justify-center w-full">
            <div className="text-center w-full max-w-[1020px] flex flex-col items-center">
              <h1 className="text-[27px] sm:text-[34px] md:text-[44px] lg:text-[54px] font-serif leading-[1.1] mb-4 tracking-tighter">
                {t('heroTitle')} <span className="text-accent">{t('heroHighlight')}</span>
              </h1>
              <p className="text-[15px] md:text-[16px] text-white/80 leading-[1.6] max-w-[723px]">
                {t('heroDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-[85px] bg-white">
          <div className="container-wf">
            <AnimateOnScroll animation="fadeInUp" className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-[54px] items-start">

              {/* Left — Roles */}
              <div>
                <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.2] mb-[17px] tracking-tighter text-zinc-900 font-normal">
                  {t('communityTitlePrefix')} <em className="not-italic text-primary">{t('communityTitleHighlight')}</em>
                </h2>
                <p className="text-[15px] md:text-[16px] leading-[1.8] text-zinc-500 mb-[31px]">
                  {t('communityDesc')}
                </p>

                <ul className="list-none p-0 m-0 flex flex-col gap-[14px]">
                  {(t.raw('communityRoles') as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-[12px] text-[15px] md:text-[16px] text-zinc-600 leading-[1.7]">
                      <span className="mt-[3px] shrink-0 w-[20px] h-[20px] rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px]">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — CTA Card */}
              <div className="lg:pt-[48px]">
                <div className="bg-primary text-white p-[34px] rounded-[10px] shadow-2xl">

                  <h3 className="font-serif text-[22px] leading-[1.3] mb-[14px] font-normal">
                    {t('ctaTitle')} <em className="not-italic text-accent">{t('ctaHighlight')}</em>
                  </h3>

                  <p className="text-[12px] leading-[1.8] text-white/75 mb-[27px]">
                    {t('ctaDesc')}
                  </p>

                  <a
                    href="https://survey.wacren.net/index.php/291743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-[14px] bg-accent text-white rounded-[5px] font-bold text-[12px] uppercase tracking-[0.06em] hover:bg-accent/90 transition-all shadow-lg no-underline"
                  >
                    {t('ctaBtn')}
                  </a>
                </div>
              </div>

            </AnimateOnScroll>
          </div>
        </section>
        {/* Areas of Expertise */}
        <section className="py-[85px] bg-zinc-50 border-t border-zinc-100">
          <div className="container-wf">
            <AnimateOnScroll animation="fadeInUp" className="text-center mb-[48px]">
              <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.2] tracking-tighter text-zinc-900 font-normal mb-[14px]">
                {t('expertiseTitlePrefix')} <em className="not-italic text-primary">{t('expertiseTitleHighlight')}</em>
              </h2>
              <p className="text-[15px] md:text-[16px] text-zinc-500 max-w-[476px] mx-auto leading-[1.8]">
                {t('expertiseDesc')}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="staggerChildren" childSelector=".expertise-card" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[17px]">
              {(t.raw('expertiseAreas') as {title: string, items: string[]}[]).map((area, i) => (
                <div
                  key={i}
                  className="expertise-card bg-white border-t-[2px] border-t-primary border border-zinc-100 rounded-b-[7px] p-[24px] flex flex-col gap-[12px]"
                >
                  <h3 className="text-[13px] font-bold text-zinc-900 leading-[1.3] pb-[12px] border-b border-zinc-100">
                    {area.title}
                  </h3>
                  <ul className="list-none p-0 m-0 flex flex-col gap-[9px]">
                    {area.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-[9px] text-[15px] md:text-[16px] text-zinc-500 leading-[1.6]">
                        <span className="text-primary shrink-0 font-bold mt-[1px]">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </AnimateOnScroll>
          </div>
        </section>
        {/* Who Should Apply */}
        <section className="py-[85px] bg-white">
          <div className="container-wf">
            <AnimateOnScroll animation="fadeInUp" className="max-w-[850px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-[54px] items-start mb-[34px]">
                {/* Left Side: Heading */}
                <div>
                  <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.2] tracking-tighter text-zinc-900 font-normal mb-[14px]">
                    {t('whoShouldApplyTitlePrefix')} <em className="not-italic text-primary">{t('whoShouldApplyTitleHighlight')}</em>
                  </h2>
                  <p className="text-[15px] md:text-[16px] text-zinc-500 leading-[1.8]">
                    {t('whoShouldApplyDesc')}
                  </p>
                </div>

                {/* Right Side: List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                  {(t.raw('whoShouldApplyRoles') as string[]).map((role, i) => (
                    <div key={i} className="flex items-center gap-[10px] bg-zinc-50 border border-zinc-100 rounded-[7px] p-[14px] hover:border-primary/30 transition-colors">
                      <span className="w-[7px] h-[7px] rounded-full bg-primary/20 flex-shrink-0 relative">
                        <span className="absolute inset-[1px] rounded-full bg-primary"></span>
                      </span>
                      <span className="text-[12px] text-zinc-700 font-medium">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Apply Button */}
              <div className="flex justify-center mt-[10px]">
                <a
                  href="https://survey.wacren.net/index.php/291743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[340px] text-center py-[14px] bg-accent text-white rounded-[5px] font-bold text-[12px] uppercase tracking-[0.06em] hover:bg-accent/90 transition-all shadow-lg no-underline"
                >
                  {t('applyBtn')}
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
