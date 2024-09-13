export const dictionaries: Record<string, () => Promise<any>> = {
  uk: () => import('../../locale/uk.json').then((module) => module.default),
  en: () => import('../../locale/en.json').then((module) => module.default),
};
