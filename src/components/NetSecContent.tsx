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
    <section className="py-[80px] bg-white">
      <div className="container-wf">
        <AnimateOnScroll animation="fadeInUp" className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] mb-[100px]">
          <div>
            <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] tracking-tighter text-zinc-900 font-normal mb-[16px]">
              {t('whyTitlePrefix')} <em className="not-italic text-primary">{t('whyTitleHighlight')}</em>
            </h2>
            <div className="space-y-[20px] text-[15px] leading-[1.8] text-gray-500">
              <p>{t('whyP1')}</p>
              <p>{t('whyP2')}</p>
              <p>{t('whyP3')}</p>
            </div>
          </div>
          <div className="bg-bg-soft p-[40px] rounded-[16px] border border-gray-100 self-start">
            <h3 className="font-serif text-[24px] mb-[20px] text-text-main">{t('bridgeTitle')}</h3>
            <p className="text-[14px] text-gray-500 mb-[24px]">{t('bridgeDesc')}</p>
            <ul className="list-none p-0 m-0 space-y-[12px]">
              {bridgeList.map((item, i) => (
                <li key={i} className="flex items-center gap-[12px] text-[14px] font-medium text-primary">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeInUp">
          <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] tracking-tighter text-zinc-900 font-normal text-center mb-[40px]">
            {t('scopeTitlePrefix')} <em className="not-italic text-primary">{t('scopeTitleHighlight')}</em>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="staggerChildren" childSelector=".scope-item" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {scopeItems.map((item, i) => (
              <div key={i} className="scope-item p-[32px] bg-white border border-gray-100 rounded-[12px] hover:border-primary/20 hover:shadow-md transition-all">
                <div className="mb-[20px] w-[40px] h-[40px] bg-gray-50 rounded-[8px] flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-[16px] font-semibold text-text-main mb-[12px]">{item.title}</h4>
                <p className="text-[13px] leading-[1.6] text-gray-500 font-normal">{item.desc}</p>
              </div>
            ))}
          </AnimateOnScroll>
      </div>
    </section>
  );
}
