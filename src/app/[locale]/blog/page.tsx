import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa6';
import BlogList from '@/components/BlogList';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | WACREN Africa Training Initiative',
  description: 'Insights, news and updates from the WACREN ATI community — stories from trainers, alumni and NREN professionals across Africa.',
};

const featuredPost = {
  category: 'Community',
  title: 'Building the Next Generation of African NREN Engineers',
  slug: 'building-the-next-generation-of-african-nren-engineers',
  excerpt: 'How the Africa Training Initiative is empowering networking professionals across the continent through hands-on capacity building and regional collaboration.',
  date: 'June 2026',
  readTime: '5 min read',
  author: 'WACREN Team'
};

export default async function BlogPage() {
  const t = await getTranslations('BlogPage');

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
                {t('heroTitlePrefix')} <span className="text-accent">{t('heroTitleHighlight')}</span> {t('heroTitleSuffix')}
              </h1>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.2 }}>
              <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.6] max-w-[850px] mx-auto">
                {t('heroDesc')}
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Featured Post ───────────────────────────────── */}
        <section className="bg-white pt-10 pb-16 md:pb-20">
          <div className="container-wf">
            <AnimateOnScroll animation="fadeInUp">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-primary mb-3">Latest Story</div>
              <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.2] mb-10 tracking-tighter text-zinc-900 font-normal">
                Featured <em className="not-italic text-primary">Article</em>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.1 }}>
              <Link href={`/blog/${featuredPost.slug}`} className="no-underline">
                <div className="relative rounded-[20px] overflow-hidden border border-gray-100 shadow-lg bg-white group cursor-pointer transition-all hover:shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
                    {/* Image Placeholder */}
                    <div className="bg-bg-soft relative overflow-hidden min-h-[300px] lg:min-h-full">
                       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(222,91,39,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(222,91,39,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-primary/20 font-serif text-[64px] font-bold opacity-30 group-hover:scale-110 transition-transform duration-700">ATI</span>
                       </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {featuredPost.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-[28px] md:text-[40px] leading-[1.15] mb-4 tracking-tighter text-zinc-900 font-normal group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h3>

                      <p className="text-[15px] text-zinc-500 leading-[1.8] mb-8">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-[12px] text-zinc-500 font-medium">
                          <span className="flex items-center gap-1.5"><FaUser className="text-primary/50" /> {featuredPost.author}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span className="flex items-center gap-1.5"><FaClock className="text-primary/50" /> {featuredPost.readTime}</span>
                        </div>
                        <span className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all">
                           <FaArrowRight className="text-zinc-400 group-hover:text-white text-[14px] transition-colors" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        <BlogList />

        {/* ── CTA strip ────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-24 relative overflow-hidden border-t border-gray-100">
          <div className="container-wf relative z-10">
            <AnimateOnScroll animation="fadeInUp">
              <div className="max-w-[640px] mx-auto text-center">
                <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-primary mb-3">Newsletter</div>
                <h2 className="font-serif text-[26px] md:text-[36px] leading-[1.15] mb-4 tracking-tighter text-zinc-900 font-normal">
                  Subscribe to <em className="not-italic text-primary">ATI Updates</em>
                </h2>
                <p className="text-[15px] text-zinc-500 leading-[1.7] mb-8 max-w-[500px] mx-auto">
                  Get the latest stories, training announcements, and insights delivered straight to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto">
                   <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="flex-1 bg-bg-soft border border-gray-200 rounded-full px-6 py-3.5 text-[14px] outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                   />
                   <button
                     type="button"
                     className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full font-bold text-[13px] uppercase tracking-[0.06em] hover:bg-primary-dark transition-all shadow-lg whitespace-nowrap"
                   >
                     Subscribe
                     <span className="transition-transform group-hover:translate-x-1">→</span>
                   </button>
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
