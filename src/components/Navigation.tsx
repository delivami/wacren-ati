'use client';

import React, { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

/* ------------------------------------------------------------------ */
/*  Language switcher data — wire to your i18n router when ready       */
/* ------------------------------------------------------------------ */
const languages = [
  {
    code: 'en',
    label: 'EN',
    flag: (
      // United Kingdom flag (SVG inline so no extra asset needed)
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-[13px] rounded-[2px] shrink-0">
        <clipPath id="t"><path d="M30,15 h30 v15 z"/></clipPath>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </svg>
    ),
  },
  {
    code: 'fr',
    label: 'FR',
    flag: (
      // French flag
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-5 h-[13px] rounded-[2px] shrink-0">
        <rect width="3" height="2" fill="#ED2939"/>
        <rect width="2" height="2" fill="#fff"/>
        <rect width="1" height="2" fill="#002395"/>
      </svg>
    ),
  },
  {
    code: 'pt',
    label: 'PT',
    flag: (
      // Portuguese flag (simplified)
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 4" className="w-5 h-[13px] rounded-[2px] shrink-0">
        <rect width="6" height="4" fill="#FF0000"/>
        <rect width="2.4" height="4" fill="#006600"/>
        <circle cx="2.4" cy="2" r="0.8" fill="#FFFF00"/>
        <circle cx="2.4" cy="2" r="0.56" fill="#FF0000"/>
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Nav links                                                           */
/* ------------------------------------------------------------------ */
const navLinksKeys = [
  { key: 'about',    href: '/about' },
  { key: 'facilitators', href: '/facilitators' },
  { key: 'training',     href: '/training' },
  { key: 'netsec', href: '/netsec' },
  { key: 'events',       href: '/events' },
  { key: 'blog',         href: '/blog' },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const activeLang = useLocale();
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen]     = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  // Close lang dropdown on outside click
  useEffect(() => {
    if (!langOpen) return;
    const handler = () => setLangOpen(false);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [langOpen]);

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/') return pathname === href || pathname.startsWith(href + '/');
    return false;
  };

  const currentLang = languages.find(l => l.code === activeLang)!;

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-zinc-100 w-full h-[64px] flex items-center shadow-sm">
      <div className="container-wf flex items-center justify-between w-full gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center no-underline shrink-0">
          <Image
            src="/images/wacren-ati-logo.png"
            alt="WACREN ATI Logo"
            width={220}
            height={48}
            className="h-[46px] w-auto"
            priority
          />
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden lg:flex items-center gap-[2px] list-none m-0 p-0 flex-1 justify-center">
          {navLinksKeys.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-[11px] py-[6px] text-[13px] font-medium transition-all rounded-[4px] no-underline whitespace-nowrap ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/8 font-semibold'
                    : 'text-zinc-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {t(link.key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right-side actions ── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">

          {/* Language flag switcher */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-[6px] border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all bg-white"
              aria-label="Select language"
            >
              <span className="block rounded-[2px] overflow-hidden shadow-sm">
                {currentLang.flag}
              </span>
              <span className="text-[12px] font-bold text-zinc-700 uppercase tracking-wide">
                {currentLang.label}
              </span>
              <ChevronDown size={14} className={`text-zinc-400 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 top-[calc(100%+8px)] w-40 bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] border border-zinc-100 overflow-hidden py-1.5 z-[150]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { 
                        router.replace(pathname, { locale: lang.code });
                        setLangOpen(false); 
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium transition-colors text-left ${
                        activeLang === lang.code
                          ? 'bg-primary/5 text-primary'
                          : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                      }`}
                    >
                      <span className="rounded-[2px] overflow-hidden shadow-sm">{lang.flag}</span>
                      <span>{lang.label === 'EN' ? 'English' : lang.label === 'FR' ? 'Français' : 'Português'}</span>
                      {activeLang === lang.code && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-zinc-200" />

          {/* Contact Us CTA */}
          <Link
            href="/contact"
            className="px-[16px] py-[8px] bg-primary text-white rounded-[6px] text-[12px] font-bold hover:bg-primary-dark transition-all no-underline uppercase tracking-[0.05em] shadow-sm"
          >
            {t('contact')}
          </Link>
        </div>

        {/* ── Mobile Toggle ── */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-primary"
            aria-label="Open Menu"
          >
            <Menu size={26} />
          </button>
        )}
      </div>

      {/* ================================================================ */}
      {/* Mobile full-screen menu                                          */}
      {/* ================================================================ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-primary lg:hidden flex flex-col"
          >
            {/* Mobile header row */}
            <div className="h-[64px] flex items-center px-6 border-b border-white/10 shrink-0">
              <div className="flex items-center justify-between w-full">
                <Link href="/" onClick={() => setIsOpen(false)} className="no-underline">
                  <Image
                    src="/images/wacren-ati-logo.png"
                    alt="WACREN ATI Logo"
                    width={140}
                    height={32}
                    className="h-[32px] w-auto brightness-0 invert"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col relative">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 opacity-30" />

              {/* Nav links */}
              <ul className="flex flex-col gap-5 list-none m-0 p-0">
                {navLinksKeys.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-[22px] font-medium tracking-tight no-underline transition-colors ${
                        isActive(link.href)
                          ? 'text-white border-l-[3px] border-white/80 pl-4 -ml-4 font-semibold'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Language selector (mobile) */}
              <div className="mt-10">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-mono mb-3">Language</p>
                <div className="flex items-center gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        router.replace(pathname, { locale: lang.code });
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-semibold uppercase tracking-wide transition-all ${
                        activeLang === lang.code
                          ? 'bg-white text-primary'
                          : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      <span className="rounded-[2px] overflow-hidden">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-4 bg-white text-primary font-bold uppercase tracking-wider rounded-[6px] text-[13px] no-underline shadow-lg hover:bg-white/90 transition-colors"
                >
                  {t('contact')} →
                </Link>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-10 pb-6 border-t border-white/10">
                <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-mono text-center">
                  WACREN ATI © {new Date().getFullYear()}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
