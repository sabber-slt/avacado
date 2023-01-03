import Link from 'next/link';
import React from 'react';

type Props = {
  slug: string;
  w: string;
  h: string;
  bg: string;
  m?: string;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ slug, w, h, bg, children, m }) => {
  return (
    <div>
      <Link href={slug}>
        <a
          className={`${w} ${h} ${bg} ${m} flex flex-row items-center justify-around rounded-lg hover:scale-90 transition duration-300 `}
        >
          {children}
        </a>
      </Link>
    </div>
  );
};

export default Button;
