import Image from "next/image";
import React from "react";

type Props = {
  w: string;
  h: string;
  src: string;
  rounded?: string;
  opacity?: string;
  quality?: number;
  cls?: string;
};

const ImageCo: React.FC<Props> = ({
  w,
  h,
  rounded,
  src,
  opacity,
  quality,
  cls,
}) => {
  return (
    <div
      className={`relative ${w} ${h} ${rounded} overflow-hidden ${opacity} ${cls}`}
    >
      <Image
        src={src}
        blurDataURL={src}
        placeholder="blur"
        alt=""
        layout="fill"
        objectFit="cover"
        quality={quality || 50}
      />
    </div>
  );
};

export default ImageCo;
