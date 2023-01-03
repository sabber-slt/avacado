import React from "react";
import Gallery from "./Gallery";
import Messages from "./Messages";
import Posts from "./Posts";

const Section = () => {
  const [menu, setMenu] = React.useState("posts");
  return (
    <div>
      <div className="w-full pt-8 h-16 text-zinc-500 bg-zinc-200 flex flex-row items-center justify-center">
        <button
          onClick={() => setMenu("posts")}
          className={`w-1/3 ${
            menu === "posts" ? "bg-white" : "bg-zinc-200"
          } h-12 ${
            menu === "posts" ? "text-green-600" : "text-zinc-500"
          } flex flex-col items-center justify-center`}
        >
          پست ها
        </button>
        <button
          onClick={() => setMenu("message")}
          className={`w-1/3 ${
            menu === "message" ? "bg-white" : "bg-zinc-200"
          } h-12 ${
            menu === "message" ? "text-green-600" : "text-zinc-500"
          } border-r-2 border-zinc-400 flex flex-col items-center justify-center`}
        >
          پیام ها
        </button>
        <button
          onClick={() => setMenu("gallery")}
          className={`w-1/3 ${
            menu === "gallery" ? "bg-white" : "bg-zinc-200"
          } h-12 ${
            menu === "gallery" ? "text-green-600" : "text-zinc-500"
          } border-r-2 border-zinc-400 flex flex-col items-center justify-center`}
        >
          گالری
        </button>
      </div>
      <div className="w-full  h-full bg-zinc-100 text-zinc-600 mb-16">
        {menu === "posts" && <Posts />}
        {menu === "message" && <Messages />}
        {menu === "gallery" && <Gallery />}
      </div>
    </div>
  );
};

export default Section;
