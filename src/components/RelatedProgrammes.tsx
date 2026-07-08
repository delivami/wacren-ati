'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import AnimateOnScroll from './AnimateOnScroll';
import { Link } from '@/i18n/routing';
import { School, Shield, Lock, Library, Globe, Database } from 'lucide-react';

const programmes = [
  { 
    id: 'nren',
    icon: <School size={16} className="text-orange-500" />,
    iconBg: 'bg-orange-50',
    href: '#'
  },
  { 
    id: 'trust',
    icon: <Shield size={16} className="text-blue-500" />,
    iconBg: 'bg-blue-50',
    href: 'http://trustbroker.africa/'
  },
  { 
    id: 'eduid',
    icon: <Lock size={16} className="text-amber-500" />,
    iconBg: 'bg-amber-50',
    href: 'http://eduid.africa/'
  },
  { 
    id: 'libsense',
    icon: <Database size={16} className="text-indigo-500" />,
    iconBg: 'bg-indigo-50',
    href: 'https://libsense.ren.africa/home'
  },
  { 
    id: 'adc',
    icon: <Globe size={16} className="text-cyan-500" />,
    iconBg: 'bg-cyan-50',
    href: 'https://digitalcampus.africa/'
  },
];

export default function RelatedProgrammes() {
  const t = useTranslations('Related');
  
  return (
    <section id="related" className="pt-[50px] pb-[100px] bg-white">
      <div className="container-wf">
        <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.1] mb-[40px] md:mb-[48px] tracking-tighter text-text-main w-full mx-auto text-center font-normal xl:whitespace-nowrap">
          {t('titlePrefix')} <em className="italic text-primary not-italic font-normal">{t('titleHighlight')}</em>
        </h2>

        <AnimateOnScroll animation="staggerChildren" childSelector=".programme-item" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {programmes.map((p, i) => (
            <div 
              key={i} 
              className={`programme-item p-[32px] rounded-[16px] transition-all flex flex-col items-start gap-[20px] bg-bg-soft hover:bg-white hover:shadow-lg hover:shadow-black/5 border border-transparent hover:border-gray-100 ${
                i === 4 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className={`w-[40px] h-[40px] rounded-[8px] flex items-center justify-center ${p.iconBg}`}>
                {p.icon}
              </div>
              
              <div>
                <h3 className="text-[16px] font-bold mb-[8px] text-text-main">
                  {t(`${p.id}Name`)}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-[1.6] text-gray-500">
                  {t(`${p.id}Desc`)}
                </p>
              </div>

              {p.href === '#' ? (
                <span className="mt-auto pt-[10px] text-[10px] font-bold text-primary/50 cursor-not-allowed flex items-center gap-[3px]">
                  {t('explore')} <span className="text-[12px]">→</span>
                </span>
              ) : (
                <Link 
                  href={p.href} 
                  target={p.href.startsWith('http') ? "_blank" : undefined}
                  rel={p.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="mt-auto pt-[10px] text-[10px] font-bold text-primary hover:text-accent transition-colors no-underline flex items-center gap-[3px]"
                >
                  {t('explore')} <span className="text-[12px]">→</span>
                </Link>
              )}
            </div>
          ))}
        </AnimateOnScroll>

      </div>
    </section>
  );
}
