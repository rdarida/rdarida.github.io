import { FC } from 'react';
import { Helmet } from 'react-helmet';

type SeoProps = {
  title: string;
  description?: string;
  lang?: string;
  meta?: any[];
};

export const Seo: FC<SeoProps> = ({
  description = '',
  lang = 'en',
  meta = [],
  title
}) => {
  const defaultTitle = 'rdarida.github.io';

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: 'Róbert Darida'
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: description
        }
      ].concat(meta)}
    />
  );
};
