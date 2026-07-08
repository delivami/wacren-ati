'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('Hero');
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-animate", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      );
      
      gsap.fromTo(".hero-card-animate",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative bg-primary text-white py-[51px] lg:py-[68px] overflow-hidden">
      {/* Brand Identity Background Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ 
          background: 'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(230,126,34,0.15) 0%, transparent 65%), radial-gradient(ellipse 30% 40% at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 60%)' 
        }}></div>
        <div className="absolute bottom-0 left-0 w-full h-[170px] bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      <div className="container-wf relative z-10 flex justify-center w-full">
        <div ref={contentRef} className="text-center w-full max-w-[1020px] flex flex-col items-center">
          
          <h1 className="hero-animate text-[27px] sm:text-[34px] md:text-[44px] lg:text-[54px] font-serif leading-[1.1] mb-4 tracking-tighter">
            {t('titlePrefix')} <span className="text-accent">{t('titleHighlight')}</span>
          </h1>
          
          <p className="hero-animate text-[15px] md:text-[16px] text-white/80 leading-[1.6] max-w-[723px]">
            {t('description')}
          </p>
          
        </div>
      </div>
    </section>
  );
}
