'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Calendar, Flag, Rocket } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function NetSecLaunch() {
  const t = useTranslations('NetSecLaunch');

  const milestoneIcons = [
    <Rocket key="0" />,
    <Flag key="1" />,
    <Calendar key="2" />
  ];

  const milestones = (t.raw('milestones') as { date: string; title: string; desc: string }[]).map((m, i) => ({
    ...m,
    icon: milestoneIcons[i]
  }));

  const strategicPoints = t.raw('strategicPoints') as string[];

  return (
    <section className="py-[102px] bg-bg-soft">
      <div className="container-wf">
        <AnimateOnScroll animation="fadeInUp" className="max-w-[680px] mx-auto text-center mb-[68px]">
          <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.2] tracking-tighter text-zinc-900 font-normal mb-[17px]">
            {t('titlePrefix')} <em className="not-italic text-primary">{t('titleHighlight')}</em>
          </h2>
          <p className="text-[14px] md:text-[15px] text-gray-500">{t('subtitle')}</p>
        </AnimateOnScroll>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-[20px] h-[1px] bg-gray-200 hidden md:block"></div>
          
          <AnimateOnScroll animation="staggerChildren" childSelector=".milestone-card" className="flex flex-col md:flex-row items-center gap-[41px] md:gap-0">
            {milestones.map((m, i) => (
              <div key={i} className="milestone-card flex flex-col items-center gap-[20px] md:flex-col md:w-1/3">
                <div className="relative z-10 w-[41px] h-[41px] bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-[5px] border-white ring-2 ring-primary/20 shrink-0">
                  {m.icon}
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <h4 className="text-[17px] font-serif font-semibold text-text-main mb-[10px]">{m.title}</h4>
                  <p className="text-[14px] md:text-[15px] text-gray-500 leading-[1.6] font-normal">{m.desc}</p>
                </div>
              </div>
            ))}
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.1 }}>
          <div className="mt-[85px] p-[41px] bg-primary rounded-[20px] text-white overflow-hidden relative shadow-2xl">
            <div className="max-w-[544px] relative z-10">
              <h3 className="text-[27px] font-serif font-semibold mb-[17px] tracking-tight">{t('strategicTitle')}</h3>
              <p className="text-white/80 leading-[1.8] mb-[27px] text-[14px] font-normal">{t('strategicDesc')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[17px]">
                {strategicPoints.map((text, i) => (
                  <div key={i} className="flex items-center gap-[10px] text-[12px] font-medium">
                    <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(230,126,34,0.5)]"></div>
                    {text}
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
