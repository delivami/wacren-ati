'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import AnimateOnScroll from './AnimateOnScroll';

export default function Launch() {
  const t = useTranslations('Launch');
  const eventDetails = t.raw('eventDetails') as { label: string; value: string; bold?: boolean }[];

  return (
    <section id="launch" className="py-[72px] bg-bg-soft">
      <div className="container-wf">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[64px] items-center">
          <AnimateOnScroll animation="fadeInUp">
            <span className="font-mono text-[10px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[8px] block">
              {t('titlePrefix')}
            </span>
            <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] mb-[20px] tracking-tighter text-text-main font-normal">
              {t('headingMain')} <br /><em className="italic text-primary not-italic font-normal">{t('headingHighlight')}</em>
            </h2>
            
            <div className="space-y-[16px] text-[15px] leading-[1.8] text-gray-500 mb-[32px] font-normal">
              <p dangerouslySetInnerHTML={{ __html: t('p1').replace('<span>', '<span class="font-medium text-text-main">') }} />
              <p>{t('p2')}</p>
              <p dangerouslySetInnerHTML={{ __html: t('p3').replace('<span>', '<span class="font-medium text-text-main">') }} />
            </div>

            <div className="flex flex-wrap gap-[12px]">
              <Link 
                href="https://indico.wacren.net/event/263/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent border-[1.5px] border-accent text-white rounded-[6px] font-medium text-[13px] hover:bg-accent/90 transition-all no-underline"
              >
                {t('registerBtn')}
              </Link>
              <Link 
                href="https://survey.wacren.net/index.php/291743" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-[1.5px] border-gray-200 text-text-main bg-white rounded-[6px] font-medium text-[13px] hover:bg-gray-50 transition-all no-underline"
              >
                {t('facilitatorBtn')}
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.2 }}>
            <div className="bg-accent text-white p-[32px] rounded-[12px] shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-[8px] mb-[24px]">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                <span className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase">{t('eventDetailsLabel')}</span>
              </div>
              
              <div className="space-y-[20px]">
                {eventDetails.map((row, i) => (
                  <div key={i} className="flex flex-col gap-[2px]">
                    <span className="text-[9px] font-mono font-bold tracking-[0.05em] opacity-60 uppercase">{row.label}</span>
                    <span className={`text-[13px] ${row.bold ? 'font-bold' : 'font-medium opacity-90'}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
