import React from "react";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Link from "next/link";
import { fetchWorkout } from "../../hooks/useFetch";
import TabContainer from "../../components/main/TabContainer";
import ImageCo from "../../components/main/ImageCo";
import TabBar from "../../components/TabBar";
import WorkoutAnim from "../../components/animations/WorkoutAnim";

export interface WorkoutProps {
  id: number;
  title: string;
  img: string;
  url: string;
}

const Home = () => {
  const { data, isLoading } = useQuery<WorkoutProps[]>(
    ["fetchWorkout"],
    fetchWorkout
  );
  if (isLoading) return <WorkoutAnim />;

  return (
    <div>
      <TabContainer img="https://res.cloudinary.com/dh6sxfevk/image/upload/v1665220231/960d12a50b9186523a147ba4fa05e208_tsmb5e.jpg">
        <div className="w-full flex flex-col items-center">
          <div className="w-fit grid grid-cols-2 gap-3 items-center justify-center pb-16 pt-16">
            {data?.map((item) => (
              <div
                key={item.id}
                className="w-40 h-56 rounded-lg overflow-hidden shadow-md shadow-zinc-300 bg-zinc-200"
              >
                <Link
                  href={{
                    pathname: "/workout/player",
                    query: { url: item.url, img: item.img },
                  }}
                  passHref
                >
                  <a className="cursor-not-allowed md:cursor-default w-40 h-56 flex flex-col items-center justify-center text-slate-50">
                    <ImageCo src={item.img} w="w-40" h="h-4/5" quality={5} />
                    <div className="h-1/5 flex flex-col justify-center">
                      <p className="z-40 text-lg">{item.title}</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </TabContainer>
      <TabBar />
    </div>
  );
};

export default Home;
