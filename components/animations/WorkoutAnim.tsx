import React from "react";
import TabBar from "../TabBar";

const WorkoutAnim = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-16">
      <div className="w-full flex flex-row items-center justify-around">
        <div className="w-40 h-56 bg-zinc-200 rounded-md animate-pulse" />
        <div className="w-40 h-56 bg-zinc-200 rounded-md animate-pulse" />
      </div>
      <div className="w-full flex flex-row items-center justify-around mt-5">
        <div className="w-40 h-56 bg-zinc-200 rounded-md animate-pulse" />
        <div className="w-40 h-56 bg-zinc-200 rounded-md animate-pulse" />
      </div>
      <TabBar />
    </div>
  );
};

export default WorkoutAnim;
