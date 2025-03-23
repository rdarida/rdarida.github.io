import { FC } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  children: any | Array<any>;
};

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => (
  <>
    <Header siteTitle="rdarida.github.io" />

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`
      }}
    >
      <main>{children}</main>
    </div>

    <Footer />
  </>
);
