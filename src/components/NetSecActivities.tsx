'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { BookOpen, Share2, Target, Lightbulb } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function NetSecActivities() {
  const t = useTranslations('NetSecActivities');
  
  // Recreate icons array
  const activityIcons = [
    <BookOpen key="0" className="text-white" />,
    <Share2 key="1" className="text-white" />,
    <Target key="2" className="text-white" />,
    <Lightbulb key="3" className="text-white" />
  ];

  const activities = (t.raw('activities') as { title: string; desc: string }[]).map((a, i) => ({
    ...a,
    icon: activityIcons[i]
  }));

  return (
    <section className="py-[68px] bg-bg-soft">
      <div className="container-wf">
        <AnimateOnScroll animation="fadeInUp" className="text-center mb-[51px]">
          <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.2] tracking-tighter text-zinc-900 font-normal">
            {t('titlePrefix')} <em className="not-italic text-primary">{t('titleHighlight')}</em>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="staggerChildren" childSelector=".activity-card" className="grid grid-cols-1 md:grid-cols-2 gap-[27px]">
          {activities.map((a, i) => (
            <div key={i} className="activity-card flex gap-[20px] p-[27px] bg-white rounded-[14px] border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="shrink-0 w-[37px] h-[37px] bg-primary rounded-[9px] flex items-center justify-center">
                {a.icon}
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-text-main mb-[7px]">{a.title}</h4>
                <p className="text-[14px] md:text-[15px] leading-[1.7] text-gray-500 font-normal">{a.desc}</p>
              </div>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
