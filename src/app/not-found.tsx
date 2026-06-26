'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-primary flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[120px] lg:text-[180px] font-serif leading-none text-white/5 tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none italic">
            404
          </div>
          
          <div className="mb-8">
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent text-[11px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-accent/20">
              Connection Lost
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6 font-normal tracking-tight">
              Page <em className="italic text-accent not-italic">Not</em> Found
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-12 font-normal">
              The path you&apos;re looking for doesn&apos;t exist or has been relocated. Let&apos;s get you back to the WACREN ATI ecosystem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="px-10 py-4 bg-accent text-white text-[13px] font-bold uppercase tracking-[0.1em] rounded-[6px] hover:bg-accent/90 transition-all shadow-xl hover:-translate-y-0.5 no-underline"
            >
              Back to Home
            </Link>
            <Link 
              href="/netsec" 
              className="px-10 py-4 bg-white/5 border border-white/20 text-white text-[13px] font-semibold uppercase tracking-[0.1em] rounded-[6px] hover:bg-white/10 transition-all no-underline"
            >
              Explore Forum
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
