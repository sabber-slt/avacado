import { useRouter } from "next/router";
import React from "react";
import { fetchPosts } from "../../hooks/useFetch";
import useAuth from "../../store/useAuth";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export interface PostProps {
  body: string;
  id: number;
  img: string;
  like: number;
  owner: {
    name: string;
    img: string;
    id: number;
  }[];
  title: string;
  user_id: number;
}

const Posts = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { data, isLoading, error } = useQuery<PostProps[]>(
    ["fetchasdasdForU", user?.id],
    () => fetchPosts(user?.id!)
  );
  if (isLoading) {
    return null;
  }

  return (
    <div>
      {data?.length === 0 ? (
        <div className="w-full h-80 bg-white flex flex-col items-center justify-center">
          <p className="text-xl text-zinc-500">هنوز مطلبی ثبت نکرده اید</p>
          <Link href="/profile/createPost">
            <a className="text-slate-100 px-3 py-2 bg-[#5AAC46] rounded-md mt-3">
              ثبت مطلب
            </a>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Posts;
