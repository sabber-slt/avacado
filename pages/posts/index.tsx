/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { fetchPublicPosts } from '../../hooks/useFetch';
import { useRouter } from 'next/router';
import { PostProps } from '../../types/MainTypes';
import TabBar from '../../components/TabBar';
import PostsAnim from '../../components/animations/PostsAnim';
import Container from '../../components/Container';

const Home = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery<PostProps[]>(
    ['fetchPublicPosts'],
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
                pathname: '/posts/userProfile',
                query: {
                  id: post?.owner?.id,
                },
              }}
            >
              <a className="w-full flex flex-row items-center justify-end ">
                <p className="pl-2">{post?.owner?.name}</p>
                <img
                  src={post?.owner?.img}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover ml-2 mb-2"
                />
              </a>
            </Link>
            <img
              src={post?.img}
              alt=""
              className="w-full lg:w-[40vw] h-64 object-cover"
            />

            <p className="text-right pt-2 px-3">
              {post?.body?.slice(0, 70)}...{' '}
              <span>
                <button
                  onClick={() =>
                    router.push({
                      pathname: '/posts/post',
                      query: {
                        profileImg: post?.owner?.img,
                        name: post?.owner?.name,
                        body: post?.body,
                        img: post?.img,
                        id: post?.id,
                        owner_id: post?.owner?.id,
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
