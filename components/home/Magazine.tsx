import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import { fetchMagazine } from '../../hooks/useFetch';
import { MagazineProps } from '../../types/MainTypes';
import MagazineHomeAnim from '../animations/MagazineHomeAnim';
import HoScroll from '../main/HoScroll';
import ImageCard1 from '../main/ImageCard1';

const Magazine = () => {
  const { data, isLoading } = useQuery<MagazineProps[]>(
    ['fetchMagazine'],
    fetchMagazine
  );
  if (isLoading) {
    return <MagazineHomeAnim />;
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <div className="w-full flex flex-row items-center justify-between px-5 pb-2">
        <p className="text-lg text-zinc-500"> مقالات سلامت</p>
        <Link href="/">
          <a className="text-lg text-zinc-500">مشاهده همه</a>
        </Link>
      </div>
      <div className="w-full pb-20">
        <HoScroll pl="pl-3 ">
          <ImageCard1 data={data!} />
        </HoScroll>
      </div>
    </div>
  );
};

export default Magazine;
