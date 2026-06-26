import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import EventsList from '@/components/EventsList';


export const metadata: Metadata = {
  title: 'Events | WACREN Africa Training Initiative',
  description: 'Stay up to date with WACREN ATI events, workshops, webinars, and training bootcamps happening across Africa.',
};

export default async function EventsPage() {
  const t = await getTranslations('EventsPage');

  return (
    <>
      <Navigation />
      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-primary text-white py-[60px] lg:py-[80px] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 opacity-40" style={{
              background: 'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(230,126,34,0.15) 0%, transparent 65%), radial-gradient(ellipse 30% 40% at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 60%)'
            }} />
            <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          <div className="container-wf relative z-10 text-center">
            <AnimateOnScroll animation="fadeInUp">
              <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-serif leading-[1.1] mb-4 tracking-tighter">
                {t('heroTitlePrefix')} <span className="text-accent">{t('heroTitleHighlight')}</span>
                {t('heroTitleSuffix') ? ` ${t('heroTitleSuffix')}` : ''}
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.2 }}>
              <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.6] max-w-[850px] mx-auto">
                {t('heroDesc')}
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Featured Event ───────────────────────────────── */}
        <section className="bg-white pt-10 pb-16 md:pb-20">
          <div className="container-wf">
            <AnimateOnScroll animation="fadeInUp">
              <div className="relative rounded-[20px] overflow-hidden border border-gray-100 shadow-lg bg-white">

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_280px]">
                  {/* Left — main content */}
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="flex items-center gap-1.5 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                        Live Upcoming
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-[0.1em]">July 2026</span>
                    </div>

                    <h2 className="font-serif text-[28px] md:text-[42px] leading-[1.1] mb-4 tracking-tighter text-zinc-900 font-normal">
                      Network Monitoring<br />
                      <span className="text-primary">&amp; Management</span>
                    </h2>

                    <p className="text-[14px] md:text-[15px] text-zinc-500 leading-[1.8] max-w-[520px] mb-8">
                      Hands-on training on monitoring architectures, telemetry systems, and troubleshooting — delivered at the WACREN 2026 Conference in Banjul, The Gambia.
                    </p>

                    {/* Metadata chips */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {[
                        { label: 'July 2026' },
                        { label: 'Banjul, The Gambia' },
                        { label: 'Bootcamp · In-Person' },
                        { label: 'Network Operations' },
                      ].map(({ label }) => (
                        <span key={label} className="flex items-center gap-1.5 bg-primary/5 border border-primary/15 rounded-full px-3.5 py-1.5 text-[12px] text-zinc-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {label}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="https://survey.wacren.net/index.php/291743"
                        target="_blank" rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold text-[13px] hover:bg-primary-dark transition-all no-underline"
                      >
                        Register Now
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </a>
                      <a
                        href="/facilitators"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-bg-soft border border-primary/20 text-primary rounded-full font-semibold text-[13px] hover:bg-primary/10 transition-all no-underline"
                      >
                        Apply to Facilitate
                      </a>
                    </div>
                  </div>

                  {/* Right — stat panel */}
                  <div className="border-t lg:border-t-0 lg:border-l border-gray-100 bg-bg-soft p-8 flex flex-col gap-5 justify-center">
                    {[
                      { label: 'Programme', value: 'WACREN 2026 Conference' },
                      { label: 'Module',    value: 'NMM'                    },
                      { label: 'Duration',  value: '2 – 3 Days'             },
                      { label: 'Audience',  value: 'NREN Engineers'         },
                      { label: 'Language',  value: 'English'                },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <div className="text-[9px] font-mono uppercase tracking-[0.16em] text-zinc-400 mb-0.5">{label}</div>
                        <div className="text-[14px] font-semibold text-zinc-800">{value}</div>
                      </div>
                    ))}
                    <div className="mt-2 pt-4 border-t border-gray-100">
                      <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-primary mb-1 font-semibold">Facilitators Welcome</div>
                      <p className="text-[12px] text-zinc-500 leading-[1.6] mb-2">Interested in co-facilitating? Applications are open.</p>
                      <a href="/facilitators" className="text-[12px] font-bold text-primary hover:underline no-underline">Apply to facilitate →</a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <EventsList />

        {/* ── CTA strip ────────────────────────────────────── */}
        <section className="bg-primary py-16 relative overflow-hidden">


          <div className="container-wf relative z-10">
            <AnimateOnScroll animation="fadeInUp">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-white/50 mb-2">Stay in the loop</div>
                  <h2 className="font-serif text-[26px] md:text-[34px] leading-[1.15] tracking-tighter text-white font-normal">
                    Never miss an <em className="not-italic text-white/70">ATI Event</em>
                  </h2>
                  <p className="text-[14px] text-white/50 leading-[1.7] mt-2 max-w-[420px]">
                    Get notified when new trainings, webinars and community forums are announced across Africa.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-bold text-[13px] hover:bg-bg-soft transition-all no-underline shadow-lg whitespace-nowrap"
                  >
                    Get in touch
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    href="/facilitators"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 rounded-full font-semibold text-[13px] hover:border-white/50 hover:text-white transition-all no-underline whitespace-nowrap"
                  >
                    Become a Facilitator
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
