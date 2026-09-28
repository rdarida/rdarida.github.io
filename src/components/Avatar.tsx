import Image from 'next/image';
import { FC } from 'react';

export const Avatar: FC = (): JSX.Element => (
  <picture>
    <source srcSet="/assets/avatar.gif" type="image/gif" />

    <Image
      src="/assets/avatar.png"
      alt="Avatar"
      width={320}
      height={320}
      loading="lazy"
    />
  </picture>
);
