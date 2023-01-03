import Link from 'next/link';
import React from 'react';
import ImageCo from '../main/ImageCo';

const Diet = () => {
  return (
    <div className="w-full flex flex-row items-center justify-around mt-8">
      <Link href={'/diet/plan1'}>
        <a className="w-40 lg:w-56 h-52 lg:h-64 relative flex flex-col items-center justify-center rounded-md overflow-hidden shadow-lg shadow-zinc-400">
          <ImageCo
            src="https://res.cloudinary.com/dh6sxfevk/image/upload/v1664907856/58f839d4a2497d88b65b7427d814711f_rdmnib.jpg"
            w="w-40 lg:w-56"
            h="h-52 lg:h-64"
          />
          <div className="absolute text-center w-40 h-52 ">
            <p className="text-center text-slate-100 pt-4 px-3 text-xl">
              رژیمت رو خودت طراحی کن!
            </p>
          </div>
        </a>
      </Link>
      <Link href={'/home'}>
        <a className="w-40 lg:w-56 h-52 lg:h-64 relative flex flex-col items-center justify-center rounded-md overflow-hidden shadow-lg shadow-zinc-400">
          <ImageCo
            src="https://res.cloudinary.com/dh6sxfevk/image/upload/v1664907857/c0a19219cbb5de501adbe9f52ca3a205_halb3c.jpg"
            w="w-40 lg:w-56"
            h="h-52 lg:h-64"
          />
          <div className="absolute text-center w-40 h-52 ">
            <p className="text-center text-slate-100 pt-4 px-3 text-xl">
              طراحی رژیمت رو به ما بسپر
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Diet;
