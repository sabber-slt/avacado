/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { HiSaveAs } from "react-icons/hi";
import { BiCommentDetail } from "react-icons/bi";
import usePosts from "../../store/usePosts";
import { useQuery } from "@tanstack/react-query";
import { fetchLikes } from "../../hooks/useFetch";
import { addLikes, deleteLikes } from "../../hooks/useMutation";
import useAuth from "../../store/useAuth";
import TabBar from "../../components/TabBar";
import Container from "../../components/Container";

const Post = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { setPosts, posts, removePosts } = usePosts();
  const [postColor, setPostColor] = React.useState("text-green-700");
  const [likeColor, setLikeColor] = React.useState("text-green-700");
  const {
    image,
    name,
    content1,
    content2,
    id,
    media1,
    media2,
    title1,
    title2,
  }: any = router.query;
  const { data, isLoading } = useQuery(["liqwqw", id], () => fetchLikes(id));

  React.useEffect(() => {
    const post = posts.find((post: any) => post.image === image);
    if (post) {
      setPostColor("text-rose-700");
    } else {
      setPostColor("text-green-700");
    }
    const like = data?.likes.find((post: any) => post.user_id === user?.id);
    if (like) {
      setLikeColor("text-rose-700");
    } else {
      setLikeColor("text-green-700");
    }
  }, [data?.likes, id, image, posts, user?.id]);
  const savePost = () => {
    const item = posts.find((post: any) => post.img === image);

    if (item) {
      removePosts(item);
      setPostColor("text-green-700");
    } else {
      setPosts({
        image,
        name,
        content1,
        content2,
        id,
        title1,
        title2,
        media1,
        media2,
      });
      setPostColor("text-green-700");
    }
  };
  const likePost = async () => {
    const item = data?.likes.find((post: any) => post.user_id === user?.id);
    if (item) {
      const send = await deleteLikes(user?.id!);
      console.log(send);
      setLikeColor("text-green-700");
    } else {
      const res = await addLikes(user?.id!, id);
      console.log(res);
      setLikeColor("text-rose-700");
    }
  };
  if (isLoading) {
    return null;
  }

  return (
    <Container>
      <div className="flex flex-col text-zinc-600 mb-20">
        <div className="flex flex-col items-center justify-center">
          <img
            src={image as string}
            alt=""
            className="w-24 h-24 rounded-full object-cover m-5"
          />
          <p className="text-lg">{name}</p>
        </div>
        <img
          src={media1 as string}
          alt=""
          className="w-full h-48 lg:h-96 object-cover mt-5"
        />
        <p className="p-5 lg:text-lg">{content1}</p>
        <div className="w-full flex flex-row items-center justify-around lg:pb-8">
          <button onClick={likePost}>
            <AiFillLike className={`text-3xl ${likeColor}`} />
          </button>
          <button onClick={savePost}>
            <HiSaveAs className={`text-3xl ${postColor}`} />
          </button>
          <button>
            <BiCommentDetail className="text-3xl text-green-700" />
          </button>
        </div>

        <TabBar />
      </div>
    </Container>
  );
};

export default Post;
