'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import AnimateOnScroll from './AnimateOnScroll';

export default function Modules() {
  const t = useTranslations('Modules');
  const modules = (t.raw('items') as { name: string; focus: string; tag: string }[]).map((m, index) => ({
    id: index + 1,
    ...m
  }));
  return (
    <section id="modules" className="py-[72px] bg-white">
      <div className="container-wf">
        <span className="font-mono text-[10px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[8px] block">
          {t('titlePrefix')}
        </span>
        <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] mb-[20px] tracking-tighter text-text-main font-normal">
          {t('headingMain')} <em className="italic text-primary not-italic font-normal">{t('headingHighlight')}</em>
        </h2>
        <p className="text-[15px] md:text-base text-gray-500 max-w-[600px] mb-[40px] font-normal leading-relaxed">
          {t('desc')}
        </p>

        {/* Mobile: Card Layout */}
        <AnimateOnScroll animation="staggerChildren" childSelector=".module-item" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {modules.map((m) => (
            <div key={m.id} className="module-item bg-bg-soft p-6 rounded-[12px] border border-gray-100 flex flex-col gap-3">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-15px font-semibold text-text-main leading-tight">{m.name}</h3>
                <span className="text-[10px] font-mono text-primary font-medium px-2 py-0.5 bg-primary/5 rounded border border-primary/10 whitespace-nowrap">
                  {m.tag}
                </span>
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                {m.focus}
              </p>
            </div>
          ))}
        </AnimateOnScroll>

        {/* Desktop: Table Layout */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-left min-w-[600px]">
            <thead>
              <tr className="bg-bg-soft border-b-2 border-accent">
                <th className="px-[20px] py-[14px] text-[13px] font-semibold text-text-main font-mono uppercase tracking-[0.04em]">{t('columns.module')}</th>
                <th className="px-[20px] py-[14px] text-[13px] font-semibold text-text-main font-mono uppercase tracking-[0.04em]">{t('columns.focus')}</th>
                <th className="px-[20px] py-[14px] text-[13px] font-semibold text-text-main font-mono uppercase tracking-[0.04em]">{t('columns.supports')}</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((m) => (
                <tr key={m.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-[20px] py-[16px] text-[14px] font-semibold text-text-main">{m.name}</td>
                  <td className="px-[20px] py-[16px] text-[14px] text-gray-500 font-normal">{m.focus}</td>
                  <td className="px-[20px] py-[16px]">
                    <span className="text-[12px] font-mono text-primary font-medium">{m.tag}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[14px] md:text-[15px] leading-[1.8] text-gray-400 max-w-[640px] mt-[32px] italic font-normal">
          Together these modules provide a structured pathway for engineers and infrastructure operators to develop the expertise required to support modern research and education environments.
        </p>
      </div>
    </section>
  );
}
