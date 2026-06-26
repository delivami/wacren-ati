'use client';

import React, { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { FaMapPin, FaChalkboardUser, FaVideo, FaWrench, FaPeopleGroup, FaFilter } from 'react-icons/fa6';
import Link from 'next/link';

const events = [
  { tag: 'Bootcamp', title: 'Campus Network Architecture',                        month: 'AUG', day: '12', location: 'Accra, Ghana',    track: 'Africa Digital Campus', slug: 'campus-network-architecture' },
  { tag: 'Bootcamp', title: 'Cybersecurity Operations & Incident Response',       month: 'SEP', day: '08', location: 'Accra, Ghana',    track: 'TrustBroker Africa',    slug: 'cybersecurity-operations-incident-response' },
  { tag: 'Workshop', title: 'Trust & Identity Infrastructure — eduroam & RADIUS', month: 'OCT', day: '21', location: 'Nairobi, Kenya', track: 'eduID.africa',          slug: 'trust-identity-infrastructure-eduroam-radius' },
  { tag: 'Webinar',  title: 'Routing & Interconnection — BGP Operations',         month: 'NOV', day: '05', location: 'Online',          track: 'NREN Connectivity',     slug: 'routing-interconnection-bgp-operations' },
  { tag: 'Forum',    title: 'ATI Annual Community Forum 2026',                    month: 'DEC', day: '10', location: 'TBC',             track: 'Community',             slug: 'ati-annual-community-forum-2026' },
  { tag: 'Bootcamp', title: 'Research Infrastructure Operations',                 month: 'JAN', day: '19', location: 'TBC',             track: 'LIBSENSE · CLIMET',     slug: 'research-infrastructure-operations' },
];

const filters = ['All', 'Bootcamp', 'Workshop', 'Webinar', 'Forum'] as const;
type Filter = typeof filters[number];

const tagIcon: Record<string, React.ReactNode> = {
  Bootcamp: <FaChalkboardUser size={9} />,
  Workshop: <FaWrench size={9} />,
  Webinar:  <FaVideo size={9} />,
  Forum:    <FaPeopleGroup size={9} />,
};

export default function EventsList() {
  const [active, setActive] = useState<Filter>('All');

  const filtered = active === 'All' ? events : events.filter(e => e.tag === active);

  return (
    <section className="bg-bg-soft py-16 md:py-20">
      <div className="container-wf">
        {/* Header + filters */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-primary mb-2">2026 — 2027</div>
            <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.15] tracking-tighter text-zinc-900 font-normal">
              Upcoming <em className="not-italic text-primary">Trainings</em>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <FaFilter size={11} className="text-primary/40 shrink-0" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-semibold border transition-all cursor-pointer ${
                  active === f
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-transparent border-primary/20 text-primary/60 hover:border-primary hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Event rows */}
        <div className="flex flex-col bg-white rounded-[16px] shadow-sm overflow-hidden border border-primary/8 divide-y divide-primary/8">
          {filtered.length === 0 && (
            <div className="py-12 text-center text-zinc-400 text-[14px]">No events in this category yet.</div>
          )}
          {filtered.map((ev, i) => (
            <Link key={`${ev.tag}-${ev.month}-${i}`} href={`/events/${ev.slug}`} className="no-underline">
              <div
                className="group grid grid-cols-[56px_1fr_auto] md:grid-cols-[72px_1fr_180px_auto] items-center gap-4 md:gap-6 py-4 px-5 hover:bg-primary/5 transition-all cursor-pointer outline-none"
              >
                {/* Date block */}
                <div className="flex flex-col items-center justify-center bg-primary/10 group-hover:bg-primary rounded-[10px] w-14 h-14 transition-all shrink-0">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.1em] text-primary group-hover:text-white/70 leading-none transition-colors">{ev.month}</span>
                  <span className="text-[20px] font-bold text-primary group-hover:text-white leading-tight transition-colors">{ev.day}</span>
                </div>

                {/* Title + tag + track */}
                <div className="min-w-0">
                  <div className="mb-1.5">
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded border bg-primary/5 text-primary border-primary/15">
                      <span>{tagIcon[ev.tag]}</span>
                      {ev.tag}
                    </span>
                  </div>
                  <h3 className="text-[15px] md:text-[16px] font-medium text-zinc-800 group-hover:text-primary leading-snug transition-colors">
                    {ev.title}
                  </h3>
                  <p className="text-[11px] text-primary/50 mt-0.5 font-mono uppercase tracking-wider">{ev.track}</p>
                </div>

                {/* Location — tablet+ */}
                <div className="hidden md:flex items-center gap-1.5">
                  <FaMapPin size={10} className="text-primary/40 shrink-0" />
                  <span className="text-[12px] text-zinc-400 font-mono">{ev.location}</span>
                </div>

                {/* Arrow */}
                <div className="w-8 h-8 rounded-full border border-primary/20 group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all shrink-0">
                  <span className="text-primary group-hover:text-white text-[13px] transition-colors">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
