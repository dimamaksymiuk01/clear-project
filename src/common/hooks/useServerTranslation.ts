/* instruments */
import { i18n } from '../lib/i18n.config';
import { IInterpolationValues } from '@/common/types';
import { dictionaries } from '@/common/lib';
import { getLanguage } from '@/app/language';

export async function useServerTranslation() {
  const locale = await getLanguage();

  const dictionary =
    (await dictionaries[locale]?.()) ?? dictionaries[i18n.defaultLocale]();

  const t = (key: string, interpolationValues?: IInterpolationValues): string => {
    const keys = key.split('.');
    let value = keys.reduce((obj, k) => obj?.[k], dictionary as any);

    if (typeof value !== 'string') return key;

    if (interpolationValues) {
      Object.entries(interpolationValues).forEach(([k, v]) => {
        value = value.replace(new RegExp(`{{${k}}}`, 'g'), String(v));
      });
    }

    return value;
  };

  return {
    t,
    dictionary,
    locale,
  };
}
