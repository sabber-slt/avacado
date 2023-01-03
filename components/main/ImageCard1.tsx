import Link from 'next/link';
import React from 'react';
import { MagazineProps } from '../../types/MainTypes';
import ImageCo from './ImageCo';

const ImageCard1: React.FC<{ data: MagazineProps[] }> = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <Link
          key={item.id}
          href={{
            pathname: '/magazine',
            query: {
              id: item.id,
              media: item.media1,
              title: item.title,
              content1: item.content1,
              content2: item.content2,
            },
          }}
        >
          <a className="mr-3 lg:mr-9 w-44 lg:w-56 h-48 lg:h-56 bg-zinc-200 flex flex-col items-center rounded-md">
            <ImageCo
              src={item.media1}
              w="w-44 lg:w-56"
              h="h-2/3"
              rounded="rounded-t-md"
            />
            <div className="w-full h-1/3 flex flex-col items-center justify-center">
              <p className="text-center px-2 lg:text-lg">{item.title}</p>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
};

export default ImageCard1;
