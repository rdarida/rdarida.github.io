import { FC } from 'react';

export const Footer: FC = (): JSX.Element => (
  <footer className="container mt-3 border-top">
    <div className="row">
      <div className="col-12 py-3 text-end">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://nextjs.org">NextJS</a>
      </div>
    </div>
  </footer>
);
