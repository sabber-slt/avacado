import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = (props: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-zinc-100">
      <div className="w-full lg:w-[60vw] bg-white">{props.children}</div>
    </div>
  );
};

export default Container;
