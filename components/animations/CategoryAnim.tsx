import React from "react";
import TabBar from "../TabBar";

type Props = {};

const CategoryAnim = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-12">
      <div className="w-72 h-16 bg-zinc-200 rounded-md animate-pulse" />
      <div className="w-72 h-16 bg-zinc-200 rounded-md animate-pulse mt-4" />
      <div className="w-72 h-16 bg-zinc-200 rounded-md animate-pulse mt-4" />
      <div className="w-72 h-16 bg-zinc-200 rounded-md animate-pulse mt-4" />
      <div className="w-72 h-16 bg-zinc-200 rounded-md animate-pulse mt-4" />
      <div className="w-72 h-16 bg-zinc-200 rounded-md animate-pulse mt-4" />
      <div className="w-72 h-16 bg-zinc-200 rounded-md animate-pulse mt-4" />
      <TabBar />
    </div>
  );
};

export default CategoryAnim;
