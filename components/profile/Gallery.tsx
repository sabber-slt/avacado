/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import usePosts from "../../store/usePosts";

const Gallery = () => {
  const { posts } = usePosts();

  return (
    <div className="bg-white">
      {posts.length === 0 ? (
        <div className="w-full h-80 flex flex-col items-center justify-center">
          <p className="text-xl text-zinc-500">هنوز مطلبی را ضخیره نکرده اید</p>
        </div>
      ) : (
        <div className="bg-zinc-100 h-80 w-full flex flex-col items-center justify-center">
          {posts.map((post: any) => (
            <Link
              href={{
                pathname: "/posts/post",
                query: {
                  profileImg: post?.profileImg,
                  name: post?.name,
                  body: post?.body,
                  img: post?.img,
                  id: post?.id,
                },
              }}
              key={post.id}
            >
              <a className="w-64 h-20 bg-white text-zinc-500 rounded-md flex flex-row items-center justify-between px-3 my-5">
                <p>{post?.body.slice(0, 20)}... </p>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={post?.profileImg}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />

                  <p>{post.name}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
