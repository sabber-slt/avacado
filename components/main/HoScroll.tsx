import React from "react";

type Props = {
  children: React.ReactNode;
  pl?: string;
};

const HoScroll: React.FC<Props> = ({ children, pl }) => {
  return (
    <div className={`w-full`}>
      <div className="relative flex items-center">
        <div
          className={`no-scrollbar w-full flex flex-row items-center overflow-x-scroll scroll scroll-smooth ${pl}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HoScroll;
