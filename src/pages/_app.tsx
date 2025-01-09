import '@popperjs/core';
import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';

import '@/styles/index.scss';

const App: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  useEffect(() => {
    require('bootstrap');
  });

  return <Component {...pageProps} />;
};

export default App;
