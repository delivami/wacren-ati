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
        <section className="py-[100px] bg-white">
          <div className="container-wf">
            <AnimateOnScroll animation="fadeInUp" className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-[64px] items-start">

              {/* Left — Roles */}
              <div>
                <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] mb-[20px] tracking-tighter text-zinc-900 font-normal">
                  {t('communityTitlePrefix')} <em className="not-italic text-primary">{t('communityTitleHighlight')}</em>
                </h2>
                <p className="text-[16px] leading-[1.8] text-zinc-500 mb-[36px]">
                  {t('communityDesc')}
                </p>

                <ul className="list-none p-0 m-0 flex flex-col gap-[16px]">
                  {(t.raw('communityRoles') as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-[14px] text-[15px] text-zinc-600 leading-[1.7]">
                      <span className="mt-[4px] shrink-0 w-[24px] h-[24px] rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[12px]">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — CTA Card */}
              <div className="lg:pt-[56px]">
                <div className="bg-primary text-white p-[40px] rounded-[12px] shadow-2xl">

                  <h3 className="font-serif text-[26px] leading-[1.3] mb-[16px] font-normal">
                    {t('ctaTitle')} <em className="not-italic text-accent">{t('ctaHighlight')}</em>
                  </h3>

                  <p className="text-[14px] leading-[1.8] text-white/75 mb-[32px]">
                    {t('ctaDesc')}
                  </p>

                  <a
                    href="https://survey.wacren.net/index.php/291743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-[16px] bg-accent text-white rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] hover:bg-accent/90 transition-all shadow-lg no-underline"
                  >
                    {t('ctaBtn')}
                  </a>
                </div>
              </div>

            </AnimateOnScroll>
          </div>
        </section>
        {/* Areas of Expertise */}
        <section className="py-[100px] bg-zinc-50 border-t border-zinc-100">
          <div className="container-wf">
            <AnimateOnScroll animation="fadeInUp" className="text-center mb-[56px]">
              <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] tracking-tighter text-zinc-900 font-normal mb-[16px]">
                {t('expertiseTitlePrefix')} <em className="not-italic text-primary">{t('expertiseTitleHighlight')}</em>
              </h2>
              <p className="text-[16px] text-zinc-500 max-w-[560px] mx-auto leading-[1.8]">
                {t('expertiseDesc')}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="staggerChildren" childSelector=".expertise-card" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {(t.raw('expertiseAreas') as {title: string, items: string[]}[]).map((area, i) => (
                <div
                  key={i}
                  className="expertise-card bg-white border-t-[3px] border-t-primary border border-zinc-100 rounded-b-[8px] p-[28px] flex flex-col gap-[14px]"
                >
                  <h3 className="text-[15px] font-bold text-zinc-900 leading-[1.3] pb-[14px] border-b border-zinc-100">
                    {area.title}
                  </h3>
                  <ul className="list-none p-0 m-0 flex flex-col gap-[10px]">
                    {area.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-[10px] text-[14px] text-zinc-500 leading-[1.6]">
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
        <section className="py-[100px] bg-white">
          <div className="container-wf">
            <AnimateOnScroll animation="fadeInUp" className="max-w-[1000px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-[64px] items-start mb-[40px]">
                {/* Left Side: Heading */}
                <div>
                  <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] tracking-tighter text-zinc-900 font-normal mb-[16px]">
                    {t('whoShouldApplyTitlePrefix')} <em className="not-italic text-primary">{t('whoShouldApplyTitleHighlight')}</em>
                  </h2>
                  <p className="text-[16px] text-zinc-500 leading-[1.8]">
                    {t('whoShouldApplyDesc')}
                  </p>
                </div>

                {/* Right Side: List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  {(t.raw('whoShouldApplyRoles') as string[]).map((role, i) => (
                    <div key={i} className="flex items-center gap-[12px] bg-zinc-50 border border-zinc-100 rounded-[8px] p-[16px] hover:border-primary/30 transition-colors">
                      <span className="w-[8px] h-[8px] rounded-full bg-primary/20 flex-shrink-0 relative">
                        <span className="absolute inset-[2px] rounded-full bg-primary"></span>
                      </span>
                      <span className="text-[14px] text-zinc-700 font-medium">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Paragraph */}
              <div className="bg-primary/5 border border-primary/10 rounded-[12px] p-[32px] text-center">
                <p className="text-[16px] text-zinc-700 leading-[1.8] max-w-[800px] mx-auto font-medium">
                  {t('whoShouldApplyBottom')}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        {/* Role and Application */}
        <section className="py-[100px] bg-zinc-50 border-t border-zinc-100">
          <div className="container-wf">
            <AnimateOnScroll animation="fadeInUp" className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] max-w-[1100px] mx-auto">
              
              {/* Role of ATI Facilitators */}
              <div className="bg-white border border-zinc-200 rounded-[12px] p-[40px] shadow-sm">
                <h2 className="font-serif text-[28px] md:text-[32px] leading-[1.2] tracking-tighter text-zinc-900 font-normal mb-[24px]">
                  {t('roleTitlePrefix')} <em className="not-italic text-primary">{t('roleTitleHighlight')}</em>
                </h2>
                <p className="text-[15px] text-zinc-600 mb-[24px] leading-[1.6]">
                  {t('roleDesc')}
                </p>
                <ul className="list-none p-0 m-0 flex flex-col gap-[12px] mb-[32px]">
                  {(t.raw('roleItems') as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-[10px] text-[15px] text-zinc-700 leading-[1.6]">
                      <span className="text-primary mt-[2px] shrink-0 font-bold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/5 border border-primary/10 rounded-[8px] p-[20px]">
                  <p className="text-[14px] text-zinc-700 leading-[1.6] font-medium">
                    {t('roleBottom')}
                  </p>
                </div>
              </div>

              {/* How to Apply */}
              <div className="bg-primary text-white rounded-[12px] p-[40px] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/20 rounded-full blur-[50px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
                
                <h2 className="font-serif text-[28px] md:text-[32px] leading-[1.2] tracking-tighter text-white font-normal mb-[24px] relative z-10">
                  {t('applyTitlePrefix')} <em className="not-italic text-accent">{t('applyTitleHighlight')}</em>
                </h2>
                
                <p className="text-[15px] text-white/80 mb-[32px] leading-[1.6] relative z-10">
                  {t('applyDesc')}
                </p>
                
                <div className="mb-[40px] relative z-10">
                  <p className="text-[12px] text-white/60 mb-[16px] font-bold tracking-[0.08em] uppercase">{t('applyFormRequest')}</p>
                  <ul className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                    {(t.raw('applyFormItems') as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-[10px] text-[14px] text-white/90 leading-[1.5]">
                        <span className="text-accent mt-[1px] shrink-0 font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://survey.wacren.net/index.php/291743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-[16px] bg-accent text-white rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] hover:bg-accent/90 transition-all shadow-lg no-underline relative z-10"
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
