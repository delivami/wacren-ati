import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { FaArrowLeft, FaClock, FaUser } from 'react-icons/fa6';
import { Link } from '@/i18n/routing';

const blogPosts = [
  {
    title: 'Building the Next Generation of African NREN Engineers',
    slug: 'building-the-next-generation-of-african-nren-engineers',
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
        The Africa Training Initiative (ATI) was founded on the principle that sustainable network engineering talent is abundant across the continent, but often lacks access to specialized training and hands-on experience. Through partnerships with regional NRENs, we've been able to bring world-class training programmes to engineers who are on the ground building the research networks that power African academia.
      </p>
      <p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">
        Our training programmes cover a wide range of topics, from basic network administration to advanced security, and from identity management. Each workshop is designed with practical, hands-on activities that allow participants to immediately apply what they learn.
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
        As we look to the future, we're excited to expand our programmes to reach even more engineers across the continent. With the continued support from our partners and the dedication of our trainers and participants, we're confident that ATI will continue to make a lasting impact on African research networking.
      </p>
    `
  },
  {
    category: 'Cybersecurity',
    title: 'Securing Research Infrastructure: Lessons from TrustBroker Africa',
    slug: 'securing-research-infrastructure-lessons-from-trustbroker-africa',
    excerpt: 'A deep dive into how NREN security teams across the continent are building resilient defences for academic networks.',
    date: 'May 2026',
    readTime: '4 min read',
    author: 'Padmore Aning',
    content: `<p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">A deep dive into how NREN security teams across the continent are building resilient defences for academic networks.</p>`
  },
  {
    category: 'Identity',
    title: 'Expanding eduroam Reach in West and Central Africa',
    slug: 'expanding-eduroam-reach-in-west-and-central-africa',
    excerpt: 'The long road to federated identity — how eduID.africa is changing access management for thousands of researchers.',
    date: 'April 2026',
    readTime: '6 min read',
    author: 'WACREN Team',
    content: `<p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">The long road to federated identity — how eduID.africa is changing access management for thousands of researchers.</p>`
  },
  {
    category: 'Network Ops',
    title: 'Best Practices for BGP Routing in Campus Networks',
    slug: 'best-practices-for-bgp-routing-in-campus-networks',
    excerpt: 'Practical guidance distilled from two years of bootcamp workshops across African university campuses.',
    date: 'March 2026',
    readTime: '8 min read',
    author: 'WACREN Team',
    content: `<p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">Practical guidance distilled from two years of bootcamp workshops across African university campuses.</p>`
  },
  {
    category: 'Events',
    title: 'Highlights from the 2026 ATI Community Forum',
    slug: 'highlights-from-the-2026-ati-community-forum',
    excerpt: 'Key takeaways, community debates and announced partnerships from the most-attended ATI forum yet.',
    date: 'February 2026',
    readTime: '3 min read',
    author: 'WACREN Team',
    content: `<p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">Key takeaways, community debates and announced partnerships from the most-attended ATI forum yet.</p>`
  },
  {
    category: 'Community',
    title: 'Spotlight: The Role of Women in Network Engineering',
    slug: 'spotlight-the-role-of-women-in-network-engineering',
    excerpt: 'Conversations with six female engineers shaping the future of African research networking.',
    date: 'January 2026',
    readTime: '5 min read',
    author: 'WACREN Team',
    content: `<p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">Conversations with six female engineers shaping the future of African research networking.</p>`
  },
  {
    category: 'Research Data',
    title: 'Building Resilient Open Science Repositories with LIBSENSE',
    slug: 'building-resilient-open-science-repositories-with-libsense',
    excerpt: 'How the LIBSENSE programme is equipping African institutions to manage, share and preserve research outputs.',
    date: 'December 2025',
    readTime: '7 min read',
    author: 'WACREN Team',
    content: `<p class="mb-6 text-[16px] text-zinc-700 leading-[1.8]">How the LIBSENSE programme is equipping African institutions to manage, share and preserve research outputs.</p>`
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  return {
    title: post ? `${post.title} | WACREN ATI` : 'Blog Post | WACREN Africa Training Initiative',
    description: post?.content.replace(/<[^>]*>/g, '').trim().substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

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

        {/* Featured Image */}
        <section className="bg-bg-soft py-8">
          <div className="container-wf max-w-[1100px]">
            <div className="relative bg-bg-soft rounded-[20px] overflow-hidden w-full h-[280px] md:h-[380px]">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(222,91,39,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(222,91,39,0.35) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-primary/30 font-serif text-[64px] md:text-[84px] font-bold opacity-30">ATI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-white py-8 md:py-12">
          <div className="container-wf max-w-[800px]">
            <AnimateOnScroll animation="fadeInUp">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {post.category}
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.1 }}>
              <h1 className="font-serif text-[32px] md:text-[48px] leading-[1.1] tracking-tighter text-zinc-900 font-normal mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-[13px] text-zinc-500 font-medium">
                <span className="flex items-center gap-2"><FaUser className="text-primary/50" /> {post.author}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="flex items-center gap-2"><FaClock className="text-primary/50" /> {post.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{post.date}</span>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white py-8 md:py-12">
          <div className="container-wf max-w-[800px]">
            <AnimateOnScroll animation="fadeInUp">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
