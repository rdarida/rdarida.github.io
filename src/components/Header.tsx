import Link from 'next/link';
import React from 'react';

type HeaderProps = {
  siteTitle?: string;
};

export const Header = ({ siteTitle = '' }: HeaderProps) => (
  <header className="mb-3" style={{ backgroundColor: `rebeccapurple` }}>
    <div className="container">
      <div className="row">
        <div className="col-12 py-3">
          <h1 className="m-0">
            <Link
              href="/"
              style={{
                color: `white`,
                textDecoration: `none`
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
      </div>
    </div>
  </header>
);
