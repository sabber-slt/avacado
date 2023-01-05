/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { userProfile } from "../../hooks/useFetch";
import ImageCo from "../../components/main/ImageCo";
import Link from "next/link";
import { PostProps } from "../../types/MainTypes";
import TabBar from "../../components/TabBar";

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useQuery<PostProps[]>(
    ["useasdrProasdasfile", id],
    () => userProfile(parseInt(id as string))
  );
  if (isLoading) return null;
  console.log(data);
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      {/* <div className="w-screen relative h-48 bg-green-800 flex flex-row items-center justify-between">
        <ImageCo
          src="https://res.cloudinary.com/dh6sxfevk/image/upload/v1665230280/c9f01cf18f678e804c5ba1cde4aadf79_hcrb5f.jpg"
          w="w-full"
          h="h-48"
        />
        <div className="absolute w-full h-48 flex flex-col justify-center">
          <div className="z-40 flex flex-col items-center mr-5">
            <img
              src={data}
              alt=""
              className="w-24 h-24 rounded-full"
            />
            <p className="text-slate-100 pt-3 text-lg">
              {' '}
              {data?.[0].owner?.name}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-2 items-center justify-center mt-8 px-3">
        {data?.map((post) => (
          <Link
            key={post.id}
            href={{
              pathname: '/posts/post',
              query: {
                profileImg: post?.owner?.img,
                name: post?.owner?.name,
                body: post?.body,
                img: post?.img,
                id: post?.id,
                owner_id: post?.owner?.id,
              },
            }}
          >
            <a className="w-full h-36 bg-zinc-100">
              <img src={post.img} alt="" className="w-full h-48 object-cover" />
            </a>
          </Link>
        ))}
      </div> */}
      <TabBar />
    </div>
  );
};

export default UserProfile;
