import React from "react";

import ImageCo from "../components/main/ImageCo";
import { useRouter } from "next/router";
import { FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import useAuth from "../store/useAuth";
import { fetchChat, API } from "../hooks/useFetch";

type FormData = {
  text: string;
};

const Chat = () => {
  const { user } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  // fetch api create custom hook
  const [information, setInformation] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [chat, setChat] = React.useState<any>([]);
  const [chatId, setChatId] = React.useState<any>(null);
  const [chatName, setChatName] = React.useState<any>(null);
  const [chatImage, setChatImage] = React.useState<any>(null);
  const [chatType, setChatType] = React.useState<any>(null);
  const [chatDate, setChatDate] = React.useState<any>(null);
  const [chatTime, setChatTime] = React.useState<any>(null);
  React.useEffect(() => {
    const fe = async () => {
      setLoading(true);
      try {
        const data = await fetchChat(user?.id!);
        console.log(data);
        setInformation(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fe();
  }, [user?.id]);

  // const { data, isLoading, refetch } = useQuery<any>(
  //   ["fetchChat", user?.id],
  //   () => fetchChat(user?.id!)
  // );
  // if (isLoading) return <Loading />;
  // console.log(data);

  const onClick = async (data: FormData) => {
    reset();
    setInformation([...information, { text: data.text, id: user?.id }]);
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "public",
      },
      body: JSON.stringify({
        query: `
        mutation MyMutation($userId: Int, $text: String) {
          insert_chats_one(object: {userId: $userId, text: $text}) {
            text
            userId
            id
          }
        }
        
        `,
        variables: {
          userId: user?.id,
          text: data.text,
        },
      }),
    });
    const json = await response.json();
    console.log(json);
  };
  console.log(information);
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="fixed top-0 w-screen h-screen z-0 bg-green-100">
        <ImageCo
          src="/chat.png"
          w="w-full"
          h="h-screen"
          rounded="rounded-none"
          opacity="opacity-40"
          quality={2}
        />
      </div>
      <div className="w-full h-24 flex flex-row items-center  justify-between z-40 bg-green-800 bg-opacity-80">
        <div>
          <div className="pr-4 flex flex-row items-center">
            <ImageCo
              src="https://res.cloudinary.com/dh6sxfevk/image/upload/v1665174690/drVahidi_jf1blp.jpg"
              w="w-16"
              h="h-16"
              rounded="rounded-full"
              quality={2}
            />
            <p className="text-white pr-2">مریم رضایی کارشناس آواکادو</p>
          </div>
        </div>
        <button onClick={() => router.push("/home")} className="pl-3">
          <IoChevronBackCircleSharp className="text-white text-4xl" />
        </button>
      </div>
      <div className="z-40 w-full flex flex-col items-start justify-start">
        <div className="z-40 overflow-y-scroll">
          {information?.map((item: any, index: any) => (
            <div key={index} className="bg-white p-5 z-40 rounded-l-lg mt-4">
              <p className="text-zinc-700 whitespace-pre-line">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onClick)}
        className="w-full fixed bottom-0 h-24  flex flex-row items-center justify-between"
      >
        <button
          type="submit"
          className="w-20 h-full flex flex-col items-center justify-center text-white bg-lime-600"
        >
          <FiSend className="text-3xl text-white" />
        </button>
        <textarea
          {...register("text", { required: true })}
          className="w-full h-full focus:outline-none p-2 text-lg text-gray-700 bg-white"
          placeholder="پیام خود را بنویسید..."
        />
      </form>
    </div>
  );
};

export default Chat;
