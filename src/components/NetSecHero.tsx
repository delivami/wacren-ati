'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function NetSecHero() {
  const t = useTranslations('NetSecHero');

  return (
    <section className="relative bg-primary text-white py-[51px] lg:py-[68px] overflow-hidden">
      {/* Brand Identity Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ 
          background: 'radial-gradient(circle at 70% 30%, rgba(230,126,34,0.15) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)' 
        }}></div>
        <div className="absolute bottom-0 left-0 w-full h-[170px] bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>
      
      {/* Subtle Digital Grid (Very low opacity) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container-wf relative z-10 flex justify-center w-full">
        <div className="text-center w-full max-w-[1020px] flex flex-col items-center">
          
          <AnimateOnScroll animation="fadeInUp">
            <h1 className="text-[27px] sm:text-[34px] md:text-[44px] lg:text-[54px] font-serif leading-[1.1] mb-4 tracking-tighter">
              {t('titlePrefix')} <span className="text-accent">{t('titleHighlight')}</span> {t('titleSuffix')}
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.2 }}>
            <p className="text-[14px] md:text-[15px] text-white/80 leading-[1.6] max-w-[723px]">
              {t('desc')}
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
