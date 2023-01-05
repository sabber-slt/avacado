/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { fetchPublicPosts } from "../../hooks/useFetch";
import { useRouter } from "next/router";
import { PostProps } from "../../types/MainTypes";
import TabBar from "../../components/TabBar";
import PostsAnim from "../../components/animations/PostsAnim";
import Container from "../../components/Container";

const Home = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery<PostProps[]>(
    ["fetchPublicPosts"],
    fetchPublicPosts
  );
  if (isLoading) {
    return <PostsAnim />;
  }

  return (
    <Container>
      <div className="w-full h-full flex flex-col items-center justify-center mt-16 text-zinc-600 mb-16">
        {data?.map((post) => (
          <div
            key={post.id}
            className="w-full py-5 flex flex-col items-center justify-center bg-zinc-200 mt-5"
          >
            <Link
              href={{
                pathname: "/posts/userProfile",
                query: {
                  id: post.id,
                },
              }}
            >
              <a className="w-full flex flex-row items-center justify-end ">
                <p className="pl-2">{post?.name}</p>
                <img
                  src={post?.image}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover ml-2 mb-2"
                />
              </a>
            </Link>
            <img
              src={post?.media1}
              alt=""
              className="w-full lg:w-[40vw] h-64 object-cover"
            />

            <p className="text-right pt-2 px-3">
              {post?.content1?.slice(0, 70)}...{" "}
              <span>
                <button
                  onClick={() =>
                    router.push({
                      pathname: "/posts/post",
                      query: {
                        image: post?.image,
                        name: post?.name,
                        content1: post?.content1,
                        content2: post?.content2,
                        id: post?.id,
                        media1: post?.media1,
                        media2: post?.media2,
                        title1: post?.title1,
                        title2: post?.title2,
                      },
                    })
                  }
                  className="text-green-700 border-b-2 border-green-700"
                >
                  بیشتر
                </button>
              </span>
            </p>
          </div>
        ))}
      </div>

      <TabBar />
    </Container>
  );
};

export default Home;
