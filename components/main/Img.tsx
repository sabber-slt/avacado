import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  cls?: string;
};

const Img: React.FC< Props > = ( props ) => {
  return (
    <div className={`relative ${props.cls}`}>
      <Image
        src={props.src}
        blurDataURL={props.src}
        placeholder="blur"
        alt=""
        layout="fill"
        objectFit="cover"
        
       
      />
    </div>
  );
};

export default Img;
