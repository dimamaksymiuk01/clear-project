/* instruments */
import { i18n } from '../common/lib/i18n.config';

const dictionaries: Record<string, () => Promise<any>> = {
  uk: () => import('./uk.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<any> => {
  return dictionaries[locale]?.() ?? dictionaries[i18n.defaultLocale]();
};
