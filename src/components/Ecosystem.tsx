'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import AnimateOnScroll from './AnimateOnScroll';

export default function Ecosystem() {
  const t = useTranslations('Ecosystem');
  return (
    <section id="ecosystem" className="py-[85px] bg-primary text-white relative">
      <div className="container-wf">
        <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.2 }} className="max-w-[680px]">
          <span className="font-mono text-[9px] tracking-[0.1em] text-accent opacity-90 uppercase mb-[7px] block font-bold">
            {t('titlePrefix')}
          </span>
          <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.1] mb-[20px] tracking-tight text-white max-w-[544px] font-normal">
            {t('headingMain')} <br /><em className="italic text-accent not-italic font-normal">{t('headingHighlight')}</em>
          </h2>
          <p className="text-[15px] leading-[1.8] text-white/70 max-w-[544px] mb-[41px] font-normal">
            {t('desc')}
          </p>

          <div className="bg-white/10 border border-dashed border-white/20 rounded-[14px] h-[289px] flex flex-col items-center justify-center gap-[14px] backdrop-blur-sm w-full">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="opacity-35">
              <rect x="6" y="6" width="36" height="36" rx="8" stroke="white" strokeWidth="1.5" fill="none"/>
              <rect x="14" y="14" width="20" height="20" rx="4" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="24" cy="24" r="4" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="font-mono text-center tracking-[0.06em]">
              <strong className="block text-[12px] text-white/65 mb-[3px]">{t('diagramTitle')}</strong>
              <p className="text-[10px] text-white/45 max-w-[340px]">
                {t('diagramDesc')}
              </p>
            </div>
          </div>

          <p className="text-[13px] leading-[1.8] text-white/60 max-w-[510px] mt-[24px]">
            {t('bottomDesc')}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
