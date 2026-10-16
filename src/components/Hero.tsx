'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  '/images/hero/slide-1.jpg',
  '/images/hero/slide-2.jpg',
  '/images/hero/slide-3.jpg',
  '/images/hero/slide-4.jpg',
  '/images/hero/slide-5.jpg',
];

export default function Hero() {
  const t = useTranslations('Hero');
  const heroRef = useRef<HTMLElement>(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // GSAP animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.hero-slider-animate',
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.1, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section ref={heroRef} className="relative bg-primary text-white py-[42px] lg:py-[54px] overflow-hidden">
      {/* Brand Identity Background Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(230,126,34,0.15) 0%, transparent 65%), radial-gradient(ellipse 30% 40% at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 60%)'
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-[140px] bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Exact Original Hero Text (Zero overlapping across languages) */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center min-w-0">
            <h1 className="hero-animate text-[26px] sm:text-[32px] md:text-[38px] lg:text-[36px] xl:text-[44px] font-serif leading-[1.16] mb-4 tracking-tighter">
              {t('titlePrefix')} <span className="text-accent">{t('titleHighlight')}</span>
            </h1>
            
            <p className="hero-animate text-[15px] md:text-[16px] text-white/80 leading-[1.65] max-w-[560px]">
              {t('description')}
            </p>
          </div>

          {/* Right Column: 5-Image Slider (Cleanly contained) */}
          <div className="lg:col-span-6 w-full hero-slider-animate min-w-0">
            <div
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] max-h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {SLIDES.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`ATI Workshop ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Prev / Next Navigation Arrows */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-accent text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 border border-white/20 opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-accent text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 border border-white/20 opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <ChevronRight size={22} />
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${
                      i === currentSlide ? 'w-7 bg-accent' : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
