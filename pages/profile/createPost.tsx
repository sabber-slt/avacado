import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import PostImage from "../../components/profile/PostImage";
import TabBar from "../../components/TabBar";
import useAuth from "../../store/useAuth";
import usePublic from "../../store/usePublic";

type FormData = {
  title: string;
  body: string;
};

const CreatePost = () => {
  const router = useRouter();
  const { media } = usePublic();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    const request = await fetch("https://avacado.hasura.app/v1/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "public",
      },
      body: JSON.stringify({
        query: `
        mutation MyMutation($body: String, $img: String , , $title: String , $user_id: Int ) {
          insert_posts(objects: {body: $body, img: $img,  title: $title, user_id: $user_id}) {
            affected_rows
            returning {
              id
            }
          }
        }                
        `,
        variables: {
          body: data.body,
          img: media,
          title: data.title,
          user_id: user?.id,
        },
      }),
    });
    const response = await request.json();
    if (response.errors) {
      console.log(response.errors);
    } else {
      router.push("/profile");
    }
  };
  return (
    <div>
      <PostImage />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center"
      >
        <label className="text-zinc-600 mt-10">عنوان مطلب</label>
        <div className="w-full flex items-center justify-center">
          <input
            {...register("title", { required: true })}
            className="w-80 h-9 rounded-md bg-zinc-200"
          />
        </div>
        <label className="text-zinc-600 mt-5">متن</label>
        <textarea
          className="w-80 h-44 rounded-md bg-zinc-200"
          {...register("body", { required: true })}
        />
        <button
          type="submit"
          className="w-80 h-9 bg-[#5AAC46] text-zinc-50 text-lg rounded-md mt-5"
        >
          ارسال
        </button>
      </form>
      <TabBar />
    </div>
  );
};

export default CreatePost;
