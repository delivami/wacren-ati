'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import AnimateOnScroll from './AnimateOnScroll';

export default function Ecosystem() {
  const t = useTranslations('Ecosystem');
  return (
    <section id="ecosystem" className="py-[100px] bg-primary text-white relative">
      <div className="container-wf">
        <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.2 }} className="max-w-[800px]">
          <span className="font-mono text-[10px] tracking-[0.1em] text-accent opacity-90 uppercase mb-[8px] block font-bold">
            {t('titlePrefix')}
          </span>
          <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.1] mb-[24px] tracking-tight text-white max-w-[640px] font-normal">
            {t('headingMain')} <br /><em className="italic text-accent not-italic font-normal">{t('headingHighlight')}</em>
          </h2>
          <p className="text-[16px] leading-[1.8] text-white/70 max-w-[640px] mb-[48px] font-normal">
            {t('desc')}
          </p>

          <div className="bg-white/10 border border-dashed border-white/20 rounded-[16px] h-[340px] flex flex-col items-center justify-center gap-[16px] backdrop-blur-sm w-full">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="opacity-35">
              <rect x="6" y="6" width="36" height="36" rx="8" stroke="white" strokeWidth="1.5" fill="none"/>
              <rect x="14" y="14" width="20" height="20" rx="4" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="24" cy="24" r="4" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="font-mono text-center tracking-[0.06em]">
              <strong className="block text-[14px] text-white/65 mb-[4px]">{t('diagramTitle')}</strong>
              <p className="text-[12px] text-white/45 max-w-[400px]">
                {t('diagramDesc')}
              </p>
            </div>
          </div>

          <p className="text-[15px] leading-[1.8] text-white/60 max-w-[600px] mt-[28px]">
            {t('bottomDesc')}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
