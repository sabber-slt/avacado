/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import TabContainer from "../../components/main/TabContainer";
import { fetchCook } from "../../hooks/useFetch";
import { CookProps } from "../../types/nutritionTypes";

const Home = () => {
  const { data, isLoading } = useQuery<CookProps[]>(["fetchCook"], fetchCook);
  if (isLoading) {
    return null;
  }
  return (
    <div>
      <TabContainer img="https://res.cloudinary.com/dh6sxfevk/image/upload/v1665223046/a2cff5a137712d28c2746e1efb4d4e04_qsxaff.jpg">
        <div className="w-full flex flex-col items-center pt-16">
          <div className="w-fit grid grid-cols-2 gap-3 items-center justify-center pb-16 pt-16">
            {data?.map((item) => (
              <Link
                key={item.id}
                href={{
                  pathname: "/cooking/meals",
                  query: {
                    id: item.id,
                    title: item.title,
                    media: item.media,
                    content1: item.content1,
                    content2: item.content2,
                  },
                }}
              >
                <a className="w-40 h-56 flex flex-col items-center justify-center bg-zinc-100 overflow-hidden rounded-lg">
                  <img
                    src={item.media}
                    alt=""
                    className="w-full h-2/3 object-cover"
                  />
                  <div className="w-full h-24 flex items-center justify-center bg-zinc-100">
                    <h3 className="w-full text-center h-1/3 text-zinc-500">
                      {item.title}
                    </h3>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </TabContainer>
    </div>
  );
};

export default Home;
