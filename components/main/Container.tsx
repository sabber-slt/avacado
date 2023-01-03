/* eslint-disable @next/next/no-img-element */
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <img
        src="https://res.cloudinary.com/dh6sxfevk/image/upload/v1664889203/04c1708aa101f0360d11268955401675_edkjqx.jpg"
        alt=""
        className="w-full lg:w-[60vw] h-screen"
      />
      <div className="absolute w-full lg:w-[70vw] h-full lg:mt-8 lg:pt-6 bg-white top-32 rounded-t-[35px] z-40">
        {children}
      </div>
    </div>
  );
};

export default Container;
