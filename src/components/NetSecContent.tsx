'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Network, ShieldCheck, Users, GraduationCap, Search, Building2 } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function NetSecContent() {
  const t = useTranslations('NetSecContent');
  
  // Need to recreate the icon mapping since icons can't be in JSON
  const scopeIcons = [
    <Network key="0" className="text-primary" />,
    <GraduationCap key="1" className="text-primary" />,
    <ShieldCheck key="2" className="text-primary" />,
    <Search key="3" className="text-primary" />,
    <Users key="4" className="text-primary" />,
    <Building2 key="5" className="text-primary" />
  ];

  const scopeItems = (t.raw('scopeItems') as { title: string; desc: string }[]).map((item, i) => ({
    ...item,
    icon: scopeIcons[i]
  }));

  const bridgeList = t.raw('bridgeList') as string[];

  return (
    <section className="py-[68px] bg-white">
      <div className="container-wf">
        <AnimateOnScroll animation="fadeInUp" className="max-w-[800px] mx-auto mb-[85px]">
          <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.2] tracking-tighter text-zinc-900 font-normal mb-[20px] text-center">
            {t('whyTitlePrefix')} <em className="not-italic text-primary">{t('whyTitleHighlight')}</em>
          </h2>
          <div className="text-[13px] md:text-[14px] leading-[1.8] text-gray-500 text-center">
            <p>
              {t('whyP1')} {t('whyP2')} {t('whyP3')}
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeInUp">
          <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.2] tracking-tighter text-zinc-900 font-normal text-center mb-[34px]">
            {t('scopeTitlePrefix')} <em className="not-italic text-primary">{t('scopeTitleHighlight')}</em>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="staggerChildren" childSelector=".scope-item" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {scopeItems.map((item, i) => (
              <div key={i} className="scope-item p-[27px] bg-white border border-gray-100 rounded-[10px] hover:border-primary/20 hover:shadow-md transition-all">
                <div className="mb-[17px] w-[34px] h-[34px] bg-gray-50 rounded-[7px] flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-[14px] font-semibold text-text-main mb-[10px]">{item.title}</h4>
                <p className="text-[11px] leading-[1.6] text-gray-500 font-normal">{item.desc}</p>
              </div>
            ))}
          </AnimateOnScroll>
      </div>
    </section>
  );
}
