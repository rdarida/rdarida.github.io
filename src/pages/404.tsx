import React from 'react';
import { NextPage } from 'next';

import { Layout, Seo } from '@/components';

const NotFoundPage: NextPage = (): JSX.Element => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
