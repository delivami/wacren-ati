'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function LocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  useEffect(() => {
    // Extract locale from pathname (e.g., /en/page → en)
    const segment = pathname.split('/')[1];
    const locale = routing.locales.includes(segment as any) 
      ? segment 
      : routing.defaultLocale;
    document.documentElement.lang = locale;
  }, [pathname]);

  return <>{children}</>;
}
