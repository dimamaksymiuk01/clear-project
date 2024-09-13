/* instruments */
import { BASE_LANGUAGE, LANGUAGE } from '@/common/enums';

export const i18n = {
  defaultLocale: BASE_LANGUAGE,
  locales: [LANGUAGE.UK, LANGUAGE.EN],
} as const;

export type Locale = (typeof i18n)['locales'][number];
