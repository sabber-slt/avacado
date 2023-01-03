import React from "react";
import TabBar from "../TabBar";
import ImageCo from "./ImageCo";

type Props = {
  img: string;
  children: React.ReactNode;
  tw?: string;
};

const TabContainer: React.FC<Props> = ({ img, children, tw }) => {
  return (
    <div className={`w-full h-full relative flex ${tw}`}>
      <ImageCo src={img} w="w-full" h="h-screen" quality={10} />
      <div className="absolute w-full h-full bg-white top-32 rounded-t-[35px] z-40">
        {children}
      </div>
      <TabBar />
    </div>
  );
};

export default TabContainer;
