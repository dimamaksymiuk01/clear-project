/* core */
import { FC, ReactNode } from 'react';
/* instruments */
import s from './HorizontalLayout.module.scss';

interface HorizontalLayoutProps {
  children: ReactNode;
}

const HorizontalLayout: FC<HorizontalLayoutProps> = ({ children }) => (
  <>
    <header>
      <h1>Header</h1>
    </header>
    <main>{children}</main>
    <footer>
      <h1>Footer</h1>
    </footer>
  </>
);

export default HorizontalLayout;
