'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaLinkedin, FaXTwitter, FaMastodon } from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';

export default function ContactUI() {
  const t = useTranslations('ContactPage');

  return (
    <div className="bg-white">
      {/* Let's Connect Section */}
      <section className="px-4 md:px-8 pb-24 md:pb-32" style={{ paddingTop: '120px' }}>
        <div className="container-wf max-w-[1020px] mx-auto text-center" style={{ marginBottom: '64px' }}>
          <h2 className="font-serif text-[27px] md:text-[36px] leading-[1.2] tracking-tighter text-text-main font-normal">
            {t('connectTitle')}
          </h2>
        </div>

        <div className="container-wf max-w-[1020px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Card 1: Email Us */}
            <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center flex flex-col items-center hover:shadow-[0_20px_40px_-10px_rgba(230,126,34,0.1)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-text-main mb-6">{t('card1Title')}</h3>
              <a href={`mailto:${t('card1Link')}`} className="text-primary font-bold text-[13px] hover:text-primary-dark transition-colors mt-auto">
                {t('card1Link')}
              </a>
            </div>

            {/* Card 2: Visit WACREN */}
            <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center flex flex-col items-center hover:shadow-[0_20px_40px_-10px_rgba(230,126,34,0.1)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-text-main mb-6">{t('card2Title')}</h3>
              <a href={`https://${t('card2Link')}`} target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-[13px] hover:text-primary-dark transition-colors mt-auto">
                {t('card2Link')}
              </a>
            </div>

            {/* Card 3: Follow Us */}
            <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center flex flex-col items-center hover:shadow-[0_20px_40px_-10px_rgba(230,126,34,0.1)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-text-main mb-6">{t('card3Title')}</h3>
              <div className="flex items-center justify-center gap-3 mt-auto">
                <Link
                  href="https://www.linkedin.com/company/west-and-central-african-research-and-education-network/"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <FaLinkedin size={16} />
                </Link>
                <Link
                  href="https://bsky.app/profile/wacren.bsky.social"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <SiBluesky size={16} />
                </Link>
                <Link
                  href="https://mastodon.social/@wacren"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <FaMastodon size={16} />
                </Link>
                <Link
                  href="https://twitter.com/wacren"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <FaXTwitter size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form Section - Deactivated */}
      {false && (
        <section style={{ paddingTop: '100px', paddingBottom: '100px' }} className="bg-bg-soft px-4 md:px-8">
          <div className="container-wf max-w-[680px] mx-auto bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-14 lg:p-16">
            <div className="text-center mb-10" style={{ paddingTop: '24px' }}>
              <h2 className="text-[24px] font-bold text-text-main mb-3">{t('formTitle')}</h2>
              <p className="text-gray-500 text-[15px] md:text-[16px]">{t('formDesc')}</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-[11px] font-medium text-gray-700">{t('formFirstName')}</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-gray-50/50 px-5 py-4 text-text-main text-[13px] rounded-xl border border-gray-200 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-[11px] font-medium text-gray-700">{t('formLastName')}</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-gray-50/50 px-5 py-4 text-text-main text-[13px] rounded-xl border border-gray-200 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[11px] font-medium text-gray-700">{t('formEmail')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-50/50 px-5 py-4 text-text-main text-[13px] rounded-xl border border-gray-200 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-[11px] font-medium text-gray-700">{t('formPhone')}</label>
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="+1 (000) 000-0000"
                    className="w-full bg-gray-50/50 px-5 py-4 text-text-main text-[13px] rounded-xl border border-gray-200 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="org2" className="block text-[11px] font-medium text-gray-700">{t('formOrg')}</label>
                  <input 
                    type="text" 
                    id="org2"
                    className="w-full bg-gray-50/50 px-5 py-4 text-text-main text-[13px] rounded-xl border border-gray-200 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-[11px] font-medium text-gray-700">{t('formSubject')}</label>
                  <div className="relative">
                    <select 
                      id="subject" 
                      className="w-full bg-gray-50/50 px-5 py-4 text-text-main text-[13px] rounded-xl border border-gray-200 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none appearance-none"
                    >
                      <option value="general">{t('formSubjectOpt1')}</option>
                      <option value="training">{t('formSubjectOpt2')}</option>
                      <option value="partnership">{t('formSubjectOpt3')}</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="block text-[11px] font-medium text-gray-700">{t('formMessage')}</label>
                <textarea 
                  id="message" 
                  rows={6}
                  className="w-full bg-gray-50/50 px-5 py-4 text-text-main text-[13px] rounded-xl border border-gray-200 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none resize-none"
                ></textarea>
              </div>

              <div style={{ paddingTop: '16px', paddingBottom: '32px' }}>
                <button 
                  type="button"
                  className="bg-primary hover:bg-primary-dark text-white py-4 px-10 text-[13px] font-bold tracking-wide rounded-full shadow-[0_10px_20px_-10px_rgba(230,126,34,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(230,126,34,0.6)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  {t('formButton')}
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}
