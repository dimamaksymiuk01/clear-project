/* core */
import '../common/styles/globals.css';
import '../common/styles/normalize.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';
/* instruments */
import { getLanguage } from '@/app/language';
import HorizontalLayout from '@/common/layout/horizontal /HorizontalLayout';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getLanguage();

  return (
    <html lang={lang}>
      <body>
        <AntdRegistry>
          <HorizontalLayout>{children}</HorizontalLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
