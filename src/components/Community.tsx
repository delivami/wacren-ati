'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import AnimateOnScroll from './AnimateOnScroll';

export default function Community() {
  const t = useTranslations('Community');
  const audiences = t.raw('audiences') as string[];
  const partners = t.raw('partners') as { name: string; subtitle: string }[];

  return (
    <section id="community" className="py-[61px] bg-bg-soft">
      <div className="container-wf">
        <AnimateOnScroll animation="fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-[54px] items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[7px] block font-bold">
                {t('titlePrefix')}
              </span>
              <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.2] mb-[17px] tracking-tighter text-text-main">
                {t('headingMain')} <em className="italic text-primary not-italic">{t('headingHighlight')}</em>
              </h2>
              <p className="text-[14px] md:text-[15px] leading-[1.8] text-gray-500 mb-[27px]">
                {t('desc')}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] list-none p-0 m-0">
                {audiences.map((item, i) => (
                  <li key={i} className="text-[11px] text-gray-500 flex items-center gap-[7px]">
                    <span className="text-primary font-bold">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pt-[37px]">
              <h3 className="text-[15px] font-bold text-text-main mb-[14px]">{t('partnershipsTitle')}</h3>
              <p className="text-[12px] leading-[1.7] text-gray-500 mb-[20px]">
                {t('partnershipsDesc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                {partners.map((p, i) => (
                  <div key={i} className="bg-white border-t-2 border-primary rounded-[5px] p-[17px] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-[12px] font-bold text-text-main mb-[3px]">{p.name}</span>
                    <span className="text-[9px] text-gray-400 font-medium">{p.subtitle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
