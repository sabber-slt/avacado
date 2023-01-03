import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { ImSearch, ImHome } from 'react-icons/im';
import { RiPencilRulerLine } from 'react-icons/ri';
import { MdSportsVolleyball } from 'react-icons/md';

const TabBar: React.FC = () => {
  return (
    <div className="z-50 w-full lg:w-[60vw] h-12 md:h-16 bg-[#5AAC46] fixed bottom-0 flex flex-row items-center justify-around rounded-t-lg select-none">
      <Link href={'/profile'} passHref>
        <a
          onClick={() => navigator.vibrate(80)}
          className="cursor-not-allowed md:cursor-pointer z-50"
        >
          <CgProfile className="text-white text-2xl" />
        </a>
      </Link>

      <Link href={'/posts'} passHref>
        <a
          onClick={() => navigator.vibrate(80)}
          className="cursor-not-allowed md:cursor-pointer z-50"
        >
          <ImSearch className="text-white text-xl" />
        </a>
      </Link>
      <div
        onClick={() => navigator.vibrate(80)}
        className="relative text-center flex flex-col items-center z-50"
      >
        <Link href={'/home'} passHref>
          <a className="absolute bottom-0 bg-zinc-200 rounded-full cursor-not-allowed md:cursor-pointer w-14 h-14 flex flex-col items-center justify-center shadow-md shadow-slate-300 hover:scale-95 hover:shadow-none transition duration-200 ease-in">
            <ImHome className="text-green-600 text-2xl" />
          </a>
        </Link>
      </div>
      <Link href={'/categories'} passHref>
        <a
          onClick={() => navigator.vibrate(80)}
          className="cursor-not-allowed md:cursor-pointer z-50"
        >
          <RiPencilRulerLine className="text-white text-2xl " />
        </a>
      </Link>
      <Link href={'/workout'} passHref>
        <a
          onClick={() => navigator.vibrate(80)}
          className="cursor-not-allowed md:cursor-pointer z-50"
        >
          <MdSportsVolleyball className="text-white text-2xl " />
        </a>
      </Link>
    </div>
  );
};

export default TabBar;
