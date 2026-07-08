'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function NetSecRelationship() {
  const t = useTranslations('NetSecRelationship');
  
  const colors = ['bg-primary/60', 'bg-primary', 'bg-accent', 'bg-accent/80'];
  const roadmap = (t.raw('roadmap') as { stage: string; name: string }[]).map((item, i) => ({
    ...item,
    color: colors[i]
  }));

  return (
    <section className="py-[85px] bg-white">
      <div className="container-wf">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[68px] items-center">
          <AnimateOnScroll animation="slideInLeft">
            <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.2] tracking-tighter text-zinc-900 font-normal mb-[20px] text-center lg:text-left">
              {t('titlePrefix')} <em className="not-italic text-primary">{t('titleHighlight')}</em>
            </h2>
            <div className="space-y-[17px] text-[14px] md:text-[15px] leading-[1.8] text-gray-500">
              <p>{t('p1')}</p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slideInRight" className="relative">
            <div className="space-y-[10px]">
              {roadmap.map((item, i) => (
                <div key={i} className="flex items-center gap-[10px] group">
                   <div className="flex-1 p-[14px] bg-gray-50 border border-gray-100 rounded-[7px] flex items-center justify-between group-hover:bg-white group-hover:shadow-md transition-all">
                      <div>
                        <span className="text-[9px] font-mono font-medium text-gray-400 uppercase tracking-[0.05em] block mb-[1px]">{item.stage}</span>
                        <span className="text-[12px] font-semibold text-text-main">{item.name}</span>
                      </div>
                      <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center`}>
                        <ArrowRight size={14} className="text-white" />
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
