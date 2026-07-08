import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'ATI Training Modules | WACREN ATI',
  description: 'Building Africa’s Research & Education Cybersecurity Community through technical exchange, operational training, and trusted collaboration.',
};

export default function TrainingPage() {
  const t = useTranslations('TrainingPage');
  const tableRows = t.raw('tableRows') as { name: string; focus: string; tag: string }[];
  
  return (
    <main className="min-h-screen bg-white font-outfit">
      <Navigation />
      
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
            <AnimateOnScroll animation="fadeInUp">
              <h1 className="text-[27px] sm:text-[34px] md:text-[44px] lg:text-[54px] font-serif leading-[1.1] mb-4 tracking-tighter">
                {t('heroTitle')} <span className="text-accent">{t('heroHighlight')}</span>
              </h1>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.1 }}>
              <p className="text-[14px] md:text-[15px] text-white/80 leading-[1.6] max-w-[723px]">
                {t('heroDesc')}
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Training Curriculum Table Section */}
      <section className="py-[85px] bg-white">
        <div className="container-wf">
          <AnimateOnScroll animation="fadeInUp" className="text-center mb-[48px]">
            <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.2] tracking-tighter text-zinc-900 font-normal mb-[14px]">
              {t('curriculumTitle')} <em className="not-italic text-primary">{t('curriculumHighlight')}</em>
            </h2>
            <p className="text-[14px] md:text-[15px] text-zinc-500 mx-auto leading-[1.8] whitespace-pre-wrap text-left">
              {t('curriculumDesc')}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.1 }} className="w-full">

            {/* Mobile: Card Layout */}
            <div className="md:hidden flex flex-col gap-[14px] mb-[34px]">
              {tableRows.map((m, i) => (
                <div key={i} className="bg-bg-soft p-[17px] rounded-[10px] border border-gray-100 flex flex-col gap-[7px]">
                  <div className="flex items-start justify-between gap-[10px]">
                    <h3 className="text-[13px] font-semibold text-text-main leading-tight">{m.name}</h3>
                    <span className="text-[9px] font-mono text-primary font-medium px-[7px] py-[2px] bg-primary/5 rounded border border-primary/10 whitespace-nowrap shrink-0">{m.tag}</span>
                  </div>
                  <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed">{m.focus}</p>
                </div>
              ))}
            </div>

            {/* Desktop: Table Layout */}
            <div className="hidden md:block overflow-x-auto border border-gray-200 rounded-[10px] shadow-sm mb-[34px]">
              <table className="w-full border-collapse text-left bg-white">
                <thead>
                  <tr className="bg-bg-soft border-b-2 border-accent">
                    <th className="px-[20px] py-[14px] text-[11px] font-bold text-text-main font-mono uppercase tracking-[0.05em] w-[35%]">{t('tableHeaders.module')}</th>
                    <th className="px-[20px] py-[14px] text-[11px] font-bold text-text-main font-mono uppercase tracking-[0.05em] w-[40%]">{t('tableHeaders.focus')}</th>
                    <th className="px-[20px] py-[14px] text-[11px] font-bold text-text-main font-mono uppercase tracking-[0.05em] w-[25%]">{t('tableHeaders.supports')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tableRows.map((m, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-[20px] py-[17px] text-[13px] font-semibold text-text-main">{m.name}</td>
                      <td className="px-[20px] py-[17px] text-[13px] text-gray-600">{m.focus}</td>
                      <td className="px-[20px] py-[17px] text-[12px] font-medium text-primary">{m.tag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
