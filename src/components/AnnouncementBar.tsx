'use client';

import React from 'react';
import { Globe } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-primary text-white py-3 border-b border-white/10 hidden md:block">
      <div className="container-wf flex items-center justify-between text-[10px] tracking-wide">
        <div className="flex items-center gap-2 font-medium text-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          <span>
            <span className="font-semibold text-white">ATI Launches at WACREN 2026</span>
            <span className="mx-2 opacity-30">|</span>
            <span className="font-mono text-[9px] opacity-80 uppercase">Network Monitoring & Management module · Banjul, The Gambia</span>
          </span>
        </div>
        <a 
          href="https://indico.wacren.net/event/263/" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white hover:text-accent transition-colors no-underline border-b border-white/30 hover:border-accent pb-0.5"
        >
          Register now &rarr;
        </a>
      </div>
    </div>
  );
}
