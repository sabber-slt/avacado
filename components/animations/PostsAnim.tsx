import React from "react";
import TabBar from "../TabBar";

const PostsAnim = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-12">
      <div className="w-full bg-zinc-200 animate-pulse flex flex-col items-end py-5">
        <div className="w-16 h-16 rounded-full bg-white m-3" />
        <div className="w-full flex items-center justify-center">
          <div className="w-80 h-40 bg-white" />
        </div>
      </div>
      <div className="w-full bg-zinc-200 animate-pulse flex flex-col items-end py-5 mt-6">
        <div className="w-16 h-16 rounded-full bg-white m-3" />
        <div className="w-full flex items-center justify-center">
          <div className="w-80 h-40 bg-white" />
        </div>
      </div>
      <TabBar />
    </div>
  );
};

export default PostsAnim;
