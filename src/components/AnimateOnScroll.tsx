'use client';

import React from 'react';
import { useGSAPAnimation, fadeInUp, slideInLeft, slideInRight, scaleIn, staggerChildren, AnimationOptions } from '@/hooks/useGSAP';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'staggerChildren';
  childSelector?: string;
  className?: string;
  options?: AnimationOptions;
}

export default function AnimateOnScroll({ 
  children, 
  animation = 'fadeInUp', 
  childSelector = '*',
  className = '',
  options = { scrollTrigger: true }
}: AnimateOnScrollProps) {
  
  const elementRef = useGSAPAnimation((element) => {
    // Small delay to ensure DOM is ready for ScrollTrigger calculation
    setTimeout(() => {
      switch (animation) {
        case 'fadeInUp':
          fadeInUp(element, options);
          break;
        case 'slideInLeft':
          slideInLeft(element, options);
          break;
        case 'slideInRight':
          slideInRight(element, options);
          break;
        case 'scaleIn':
          scaleIn(element, options);
          break;
        case 'staggerChildren':
          staggerChildren(element, childSelector, options);
          break;
      }
    }, 50);
  }, [animation, childSelector]);

  return (
    <div ref={elementRef as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
}
