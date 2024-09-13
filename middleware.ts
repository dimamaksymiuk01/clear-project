/* core */
import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language-parser';
/* instruments */
import { i18n } from '@/common/lib';

function getLocaleFromRequest(request: NextRequest): string {
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  const acceptLangHeader = request.headers.get('accept-language');
  if (acceptLangHeader) {
    const parsedLangs = acceptLanguage.parse(acceptLangHeader);
    if (parsedLangs.length > 0) {
      const detectedLocale = parsedLangs[0].code;
      if (i18n.locales.includes(detectedLocale as any)) {
        return detectedLocale;
      }
    }
  }

  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/fonts') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = i18n.locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  const locale = pathnameLocale || getLocaleFromRequest(request);

  if (pathname === '/') {
    if (locale === i18n.defaultLocale) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }
  }

  if (locale !== i18n.defaultLocale && !pathnameLocale) {
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  if (locale === i18n.defaultLocale && pathnameLocale) {
    const newPathname = pathname.replace(`/${locale}`, '') || '/';
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  return NextResponse.next();
}
