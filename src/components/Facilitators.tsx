'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Facilitators() {
  const t = useTranslations('Facilitators');
  const roles = t.raw('roles') as string[];

  return (
    <section id="facilitator" className="py-[61px] bg-white">
      <div className="container-wf">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[54px] items-center">
          <div>
            <span className="font-mono text-[9px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[7px] block">
              {t('titlePrefix')}
            </span>
            <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.2] mb-[17px] tracking-tighter text-text-main font-normal">
              {t('headingMain')} <em className="italic text-primary not-italic font-normal">{t('headingHighlight')}</em>
            </h2>
            <p className="text-[14px] md:text-[15px] leading-[1.8] text-gray-500 mb-[27px]">
              {t('desc')}
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-[14px]">
              {roles.map((role, i) => (
                <li key={i} className="flex items-start gap-[10px] text-[14px] md:text-[15px] text-gray-500 font-normal">
                  <span className="text-accent font-medium">→</span>
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="border-[1px] border-dashed border-accent bg-white rounded-[10px] p-[27px] text-center">
              <div className="w-[51px] h-[51px] bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <h3 className="text-[17px] font-semibold text-text-main mb-[10px]">{t('cardTitle')}</h3>
              <p className="text-[14px] md:text-[15px] leading-[1.6] text-gray-500 mb-[20px]">
                {t('cardDesc')}
              </p>
              <Link 
                href="https://survey.wacren.net/index.php/291743" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-[27px] py-[12px] bg-primary border-[1.5px] border-primary text-white rounded-[5px] font-bold text-[11px] hover:bg-primary/90 transition-all no-underline shadow-lg"
              >
                {t('applyBtn')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
