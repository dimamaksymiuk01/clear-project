'use client';

/* core */
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
/* instruments */
import { i18n } from '../../lib/i18n.config';
import { LANGUAGE } from '@/common/enums';

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<string>(i18n.defaultLocale);

  useEffect(() => {
    const pathnameLocale = i18n.locales.find(
      (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
    );

    if (pathnameLocale) {
      setCurrentLang(pathnameLocale);
    } else {
      const cookieLang = document.cookie
        .split('; ')
        .find((row) => row.startsWith('NEXT_LOCALE='))
        ?.split('=')[1];

      setCurrentLang(cookieLang || i18n.defaultLocale);
    }
  }, [pathname]);

  const handleLanguageChange = (newLang: string) => {
    if (newLang === currentLang) return;

    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`;

    let newPathname = pathname;
    const currentLocalePrefix = i18n.locales.find(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

    if (currentLocalePrefix) {
      newPathname = pathname.replace(new RegExp(`^/${currentLocalePrefix}`), '') || '/';
    }

    if (newLang === i18n.defaultLocale) {
      router.push(newPathname);
    } else {
      router.push(`/${newLang}${newPathname === '/' ? '' : newPathname}`);
    }
  };

  return (
    <div className='language-switcher'>
      <button
        onClick={() => handleLanguageChange('uk')}
        className={currentLang === LANGUAGE.UK ? 'active' : ''}
      >
        🇺🇦 UA
      </button>
      <button
        onClick={() => handleLanguageChange(LANGUAGE.EN)}
        className={currentLang === LANGUAGE.EN ? 'active' : ''}
      >
        🇬🇧 EN
      </button>
    </div>
  );
};
