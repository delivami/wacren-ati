import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface AnimationOptions {
  delay?: number;
  scrollTrigger?: boolean | ScrollTrigger.Vars;
}

const getScrollTriggerConfig = (element: HTMLElement, config?: boolean | ScrollTrigger.Vars) => {
  if (!config) return undefined;
  
  const defaultConfig: ScrollTrigger.Vars = {
    trigger: element,
    start: "top 85%", // Animation starts when top of element hits 85% of viewport
    once: true,       // Play once by default
  };

  return typeof config === 'boolean' ? defaultConfig : { ...defaultConfig, ...config };
};

export const useGSAPAnimation = (animation: (element: HTMLElement) => gsap.core.Timeline | gsap.core.Tween | void, dependencies: any[] = []) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (elementRef.current) {
        animation(elementRef.current);
      }
    }, elementRef); // Scope to the element
    
    return () => ctx.revert(); // Cleanup on unmount
  }, dependencies);

  return elementRef;
};

export const fadeInUp = (element: HTMLElement, options?: AnimationOptions) => {
  return gsap.fromTo(element,
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      delay: options?.delay || 0, 
      ease: "power2.out",
      scrollTrigger: getScrollTriggerConfig(element, options?.scrollTrigger)
    }
  );
};

export const slideInLeft = (element: HTMLElement, options?: AnimationOptions) => {
  return gsap.fromTo(element,
    { opacity: 0, x: -50 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.8, 
      delay: options?.delay || 0, 
      ease: "power2.out",
      scrollTrigger: getScrollTriggerConfig(element, options?.scrollTrigger)
    }
  );
};

export const slideInRight = (element: HTMLElement, options?: AnimationOptions) => {
  return gsap.fromTo(element,
    { opacity: 0, x: 50 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.8, 
      delay: options?.delay || 0, 
      ease: "power2.out",
      scrollTrigger: getScrollTriggerConfig(element, options?.scrollTrigger)
    }
  );
};

export const scaleIn = (element: HTMLElement, options?: AnimationOptions) => {
  return gsap.fromTo(element,
    { opacity: 0, scale: 0.8 },
    { 
      opacity: 1, 
      scale: 1, 
      duration: 0.6, 
      delay: options?.delay || 0, 
      ease: "back.out(1.7)",
      scrollTrigger: getScrollTriggerConfig(element, options?.scrollTrigger)
    }
  );
};

export const staggerChildren = (element: HTMLElement, childSelector: string = '*', options?: AnimationOptions) => {
  return gsap.fromTo(element.querySelectorAll(childSelector),
    { opacity: 0, y: 20 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.6, 
      stagger: 0.1, 
      delay: options?.delay || 0, 
      ease: "power2.out",
      scrollTrigger: getScrollTriggerConfig(element, options?.scrollTrigger)
    }
  );
};