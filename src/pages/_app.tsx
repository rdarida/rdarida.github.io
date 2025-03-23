import '@popperjs/core';
import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';

import '@fontsource-variable/roboto-condensed';
import '@fontsource-variable/oswald';
import '@fontsource/kanit/700.css';
import '@/styles/index.scss';

const App: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  useEffect(() => {
    require('bootstrap');
  });

  return <Component {...pageProps} />;
};

export default App;
