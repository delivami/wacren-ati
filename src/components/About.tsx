import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const t = useTranslations('About');
  
  return (
    <section id="about" className="pt-[100px] pb-[40px] bg-white">
      <div className="container-wf">
        <div className="w-full text-left flex flex-col">
          
          <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] mb-[32px] tracking-tighter text-zinc-900 font-normal text-center">
            {t('title')}
          </h2>
          
          <div className="space-y-[24px] text-[16px] md:text-[18px] leading-[1.8] text-zinc-600 mb-[40px] text-left">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
          </div>
          
          <div className="flex justify-center mt-4">
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 px-[24px] py-[12px] bg-primary text-white rounded-[6px] font-bold text-[14px] hover:bg-primary-dark transition-all shadow-md uppercase tracking-[0.05em]"
            >
              {t('readMore')} <ArrowRight size={16} />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
