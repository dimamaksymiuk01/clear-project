/* core */
import { Button } from 'antd';
/* components */
import { getLanguage } from '@/app/language';
import { LanguageSwitcher } from '@/common/components';
import { Test } from '@/modules/test/Test';
/* instruments */
import { useServerTranslation } from '@/common/hooks';

export default async function Home() {
  const { t } = await useServerTranslation();
  const lang = await getLanguage();

  console.log('current lang', lang);

  return (
    <div>
      <LanguageSwitcher />
      <Button>{t('projectName')}</Button>
      <p>{t('welcome')}</p>
      <Test />
    </div>
  );
}
