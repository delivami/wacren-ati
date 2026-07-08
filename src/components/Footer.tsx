'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaLinkedin, FaXTwitter, FaMastodon } from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('Footer');

  const atiLinks = t.raw('atiLinks') as { label: string; href: string }[];
  const programmesLinks = t.raw('programmesLinks') as { label: string; href: string }[];
  const wacrenLinks = t.raw('wacrenLinks') as { label: string; href: string }[];

  const socials = [
    { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/company/west-and-central-african-research-and-education-network/' },
    { icon: <SiBluesky size={18} />, href: 'https://bsky.app/profile/wacren.bsky.social' },
    { icon: <FaMastodon size={18} />, href: 'https://mastodon.social/@wacren' },
    { icon: <FaXTwitter size={18} />, href: 'https://twitter.com/wacren' },
  ];

  return (
    <footer className="bg-primary text-white pt-[41px] pb-[20px] border-t border-white/10">
      <div className="container-wf">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-[27px] lg:gap-[34px] mb-[31px]">
          <div>
            <div className="flex items-center mb-[14px]">
              <Image 
                src="/images/wacren-ati-logo.png" 
                alt="WACREN ATI" 
                width={200}
                height={44}
                className="h-[37px] w-auto brightness-0 invert"
              />
            </div>
            <p className="text-[11px] leading-[1.7] text-white/50 max-w-[289px] mb-[14px]">
              {t('tagline')}
            </p>
            <div className="flex gap-[10px]">
              {socials.map((s, i) => (
                <Link 
                  key={i} 
                  href={s.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[34px] h-[34px] bg-white/5 border border-white/10 rounded-[7px] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all no-underline"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[9px] font-semibold uppercase tracking-[0.12em] text-accent mb-[12px] font-mono">{t('atiTitle')}</h4>
            <ul className="space-y-[7px] m-0 p-0 list-none">
              {atiLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-[12px] text-white/70 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-semibold uppercase tracking-[0.12em] text-accent mb-[12px] font-mono">{t('programmesTitle')}</h4>
            <ul className="space-y-[7px] m-0 p-0 list-none">
              {programmesLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-[12px] text-white/70 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-semibold uppercase tracking-[0.12em] text-accent mb-[12px] font-mono">{t('wacrenTitle')}</h4>
            <ul className="space-y-[7px] m-0 p-0 list-none">
              {wacrenLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-[12px] text-white/70 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-[17px] border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-[14px] mb-[14px]">
            <div className="text-[9px] font-mono text-white/40 uppercase tracking-[0.05em]">
              {t('copyright', { year: new Date().getFullYear() })}
            </div>
            <div className="text-right">
              <p className="max-w-[425px] text-[9px] md:text-[9px] font-mono text-white/30 leading-[1.6] md:text-right uppercase tracking-[0.02em] mb-[9px]">
                {t('funded')}
              </p>
              {/* Partner Logos */}
              <div className="flex flex-wrap items-center justify-end gap-[20px] md:gap-[27px]">
                <Image
                  src="/images/partners/GG_logo-WHITE-2.png"
                  alt="GC Partner"
                  width={80}
                  height={32}
                  className="h-[24px] w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
                />
                <Image
                  src="/images/partners/eu.png"
                  alt="European Union"
                  width={64}
                  height={32}
                  className="h-[24px] w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
                />
                <Image
                  src="/images/partners/africaconnect4.png"
                  alt="AfricaConnect"
                  width={110}
                  height={32}
                  className="h-[24px] w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
                />
                <Image
                  src="/images/partners/WACREN-LOGO@300x-8.png"
                  alt="WACREN"
                  width={90}
                  height={32}
                  className="h-[24px] w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
