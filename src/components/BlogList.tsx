'use client';

import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from '@/i18n/routing';

const recentPosts = [
  {
    category: 'Cybersecurity',
    title: 'Securing Research Infrastructure: Lessons from TrustBroker Africa',
    slug: 'securing-research-infrastructure-lessons-from-trustbroker-africa',
    excerpt: 'A deep dive into how NREN security teams across the continent are building resilient defences for academic networks.',
    date: 'May 2026',
    readTime: '4 min',
  },
  {
    category: 'Identity',
    title: 'Expanding eduroam Reach in West and Central Africa',
    slug: 'expanding-eduroam-reach-in-west-and-central-africa',
    excerpt: 'The long road to federated identity — how eduID.africa is changing access management for thousands of researchers.',
    date: 'April 2026',
    readTime: '6 min',
  },
  {
    category: 'Network Ops',
    title: 'Best Practices for BGP Routing in Campus Networks',
    slug: 'best-practices-for-bgp-routing-in-campus-networks',
    excerpt: 'Practical guidance distilled from two years of bootcamp workshops across African university campuses.',
    date: 'March 2026',
    readTime: '8 min',
  },
  {
    category: 'Events',
    title: 'Highlights from the 2026 ATI Community Forum',
    slug: 'highlights-from-the-2026-ati-community-forum',
    excerpt: 'Key takeaways, community debates and announced partnerships from the most-attended ATI forum yet.',
    date: 'February 2026',
    readTime: '3 min',
  },
  {
    category: 'Community',
    title: 'Spotlight: The Role of Women in Network Engineering',
    slug: 'spotlight-the-role-of-women-in-network-engineering',
    excerpt: 'Conversations with six female engineers shaping the future of African research networking.',
    date: 'January 2026',
    readTime: '5 min',
  },
  {
    category: 'Research Data',
    title: 'Building Resilient Open Science Repositories with LIBSENSE',
    slug: 'building-resilient-open-science-repositories-with-libsense',
    excerpt: 'How the LIBSENSE programme is equipping African institutions to manage, share and preserve research outputs.',
    date: 'December 2025',
    readTime: '7 min',
  },
];

const filters = ['All', 'Community', 'Cybersecurity', 'Network Ops', 'Identity', 'Events', 'Research Data'];

const categoryColors: Record<string, string> = {
  Cybersecurity:  'bg-primary/5 text-primary border-primary/20',
  Identity:       'bg-primary/5 text-primary border-primary/20',
  'Network Ops':  'bg-primary/5 text-primary border-primary/20',
  Events:         'bg-primary/5 text-primary border-primary/20',
  Community:      'bg-primary/5 text-primary border-primary/20',
  'Research Data':'bg-primary/5 text-primary border-primary/20',
};

export default function BlogList() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? recentPosts : recentPosts.filter(p => p.category === active);

  return (
    <section className="bg-bg-soft py-16 md:py-20">
      <div className="container-wf">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b-2 border-primary/15">
          <div>
            <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-primary mb-2">More Updates</div>
            <h2 className="font-serif text-[30px] md:text-[36px] leading-tight tracking-tighter text-zinc-900 font-normal">
              Recent <em className="not-italic text-primary">Articles</em>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-semibold border transition-all cursor-pointer ${
                  active === f
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-white border-primary/20 text-primary/60 hover:border-primary hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="py-16 text-center text-zinc-400 text-[14px]">No articles in this category yet.</p>
        )}

        {/* Editorial row list */}
        <div className="flex flex-col divide-y divide-zinc-100">
          {filtered.map((post, i) => (
            <Link key={post.title} href={`/blog/${post.slug}`} className="no-underline">
              <article
                className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-12 py-8 cursor-pointer"
              >
                {/* Left — text */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-[9px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded border ${categoryColors[post.category] ?? 'bg-primary/5 text-primary border-primary/20'}`}>
                      {post.category}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">{post.date} · {post.readTime} read</span>
                  </div>

                  <h3 className="font-serif text-[20px] md:text-[24px] leading-[1.25] text-zinc-900 tracking-tight font-normal group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-[14px] text-zinc-500 leading-[1.75] max-w-[640px]">
                    {post.excerpt}
                  </p>
                </div>

                {/* Right — read arrow */}
                <div className="flex items-center md:justify-end">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 text-primary text-[12px] font-semibold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200 whitespace-nowrap">
                    Read article <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
