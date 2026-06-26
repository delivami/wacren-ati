import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { FaArrowLeft, FaClock, FaUser } from 'react-icons/fa6';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Blog Post | WACREN Africa Training Initiative',
};

const blogPost = {
  title: 'Building the Next Generation of African NREN Engineers',
  category: 'Community',
  date: 'June 2026',
  readTime: '5 min read',
  author: 'Padmore Aning',
  content: `
    <p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">
      How the Africa Training Initiative is empowering networking professionals across the continent through hands-on capacity building and regional collaboration.
    </p>
    <h3 class="mt-8 mb-4 font-serif text-[22px] text-zinc-900 font-semibold">
      A Vision for Capacity Building
    </h3>
    <p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">
      The Africa Training Initiative (ATI) was founded on the principle that sustainable network engineering talent is abundant across the continent, but often lacks access to specialized training and hands-on experience. Through partnerships with regional NRENs, we've been able to bring world-class training programs to engineers who are on the ground building the research networks that power African academia.
    </p>
    <p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">
      Our training programs cover a wide range of topics, from basic network administration to advanced security, and from identity management. Each workshop is designed with practical, hands-on activities that allow participants to immediately apply what they learn.
    </p>
    <h3 class="mt-8 mb-4 font-serif text-[22px] text-zinc-900 font-semibold">
      Regional Collaboration in Action
    </h3>
    <p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">
      One of the most exciting aspects of ATI is the strong regional collaboration it fosters. Participants from different countries come together to learn, share experiences, and build relationships that last long after the workshops end.
    </p>
    <p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">
      This collaborative approach has led to the development of regional communities of practice, where engineers continue to support each other long after the formal training has concluded.
    </p>
    <h3 class="mt-8 mb-4 font-serif text-[22px] text-zinc-900 font-semibold">
      Looking to the Future
    </h3>
    <p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">
      As we look to the future, we're excited to expand our programs to reach even more engineers across the continent. With the continued support from our partners and the dedication of our trainers and participants, we're confident that ATI will continue to make a lasting impact on African research networking.
    </p>
  `
};

export default function BlogPostPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Back to Blog */}
        <section className="bg-white pt-8 border-b border-gray-100">
          <div className="container-wf">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] text-zinc-500 hover:text-primary transition-colors no-underline">
              <FaArrowLeft className="text-[12px]" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-bg-soft py-12 md:py-16">
          <div className="container-wf max-w-[800px]">
            <AnimateOnScroll animation="fadeInUp">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {blogPost.category}
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.1 }}>
              <h1 className="font-serif text-[36px] md:text-[48px] leading-[1.1] tracking-tighter text-zinc-900 font-normal mb-6">
              {blogPost.title}
            </h1>
            <div className="flex items-center gap-6 text-[13px] text-zinc-500 font-medium">
              <span className="flex items-center gap-2"><FaUser className="text-primary/50" /> {blogPost.author}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-2"><FaClock className="text-primary/50" /> {blogPost.readTime}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{blogPost.date}</span>
            </div>
          </AnimateOnScroll>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container-wf max-w-[800px]">
            <AnimateOnScroll animation="fadeInUp">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA strip */}
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
