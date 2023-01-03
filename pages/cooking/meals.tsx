/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import TabBar from "../../components/TabBar";

const Meals = () => {
  const router = useRouter();
  const { id, title, media, content1, content2 } = router.query;
  return (
    <div className="w-full flex flex-col items-center justify-center text-zinc-600">
      <img src={media as string} alt="" className="w-full h-48 object-cover" />
      <h2 className="pt-3">{title}</h2>
      <p className="px-3 whitespace-pre-line text-right w-full pt-3 text-lg">
        {content1}
      </p>
      <p className="px-3 whitespace-pre-line text-right w-full pt-3 text-lg mb-24">
        {content2}
      </p>
      <TabBar />
    </div>
  );
};

export default Meals;
