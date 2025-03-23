import { FC } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  children: any | Array<any>;
};

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => (
  <>
    <Header siteTitle="rdarida.github.io" />
    <main>{children}</main>
    <Footer />
  </>
);
