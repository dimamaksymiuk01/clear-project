/* core */
import { cookies, headers } from 'next/headers';
import acceptLanguage from 'accept-language-parser';
/* instruments */
import { i18n } from '../common/lib/i18n.config';

export async function getLanguage(): Promise<string> {
  try {
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

    if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
      return cookieLocale;
    }
  } catch (error) {
    console.warn('Failed to read cookies:', error);
  }

  try {
    const headersList = await headers();
    const acceptLangHeader = headersList.get('accept-language');

    if (acceptLangHeader) {
      const parsedLangs = acceptLanguage.parse(acceptLangHeader);

      if (parsedLangs.length > 0) {
        const detectedLocale = parsedLangs[0].code;

        if (i18n.locales.includes(detectedLocale as any)) {
          return detectedLocale;
        }
      }
    }
  } catch (error) {
    console.warn('Failed to read headers:', error);
  }

  return i18n.defaultLocale;
}
