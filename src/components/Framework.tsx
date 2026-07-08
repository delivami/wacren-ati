'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import AnimateOnScroll from './AnimateOnScroll';

export default function Framework() {
  const t = useTranslations('Framework');
  return (
    <section id="framework" className="py-16 md:py-24 bg-bg-soft border-y border-gray-100">
      <div className="container-wf">
        <AnimateOnScroll animation="fadeInUp" className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
            {/* Professional PDF Icon Representation */}
            <div className="relative group shrink-0">
              <div className="w-[51px] h-[68px] bg-white border border-gray-200 rounded-[3px] shadow-sm flex flex-col items-center justify-end pb-3 relative overflow-hidden transition-transform hover:scale-105">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[14px] border-l-[14px] border-t-bg-soft border-l-white/20 shadow-[-1px_1px_2px_rgba(0,0,0,0.05)]"></div>
                <div className="absolute top-4 w-8 h-1 bg-primary/10 rounded-full"></div>
                <div className="absolute top-7 w-6 h-1 bg-primary/5 rounded-full"></div>
                <div className="absolute top-10 w-8 h-1 bg-primary/10 rounded-full"></div>
                <div className="bg-accent text-white text-[8px] font-bold px-2 py-0.5 rounded-[1px] tracking-tight">PDF</div>
              </div>
            </div>

            <div>
              <h2 className="text-[27px] md:text-[36px] font-serif leading-[1.2] mb-4 tracking-tighter text-text-main font-normal italic">
                {t('title')} <em className="not-italic text-primary">{t('titleHighlight')}</em>
              </h2>
              <p className="text-[15px] md:text-[16px] text-gray-500 max-w-[510px] leading-[1.8] font-normal">
                {t('desc')}
              </p>
            </div>
          </div>

          <Link 
            href="/documents/ATI-Programme-Framework.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-primary text-white rounded-[5px] font-bold text-[12px] hover:bg-primary/90 transition-all no-underline shadow-xl flex items-center gap-3 uppercase tracking-wider"
          >
            {t('downloadBtn')}
            <span className="transition-transform group-hover:translate-y-1">↓</span>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
