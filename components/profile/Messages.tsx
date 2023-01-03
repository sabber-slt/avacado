import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchMessages } from "../../hooks/useMutation";
import useAuth from "../../store/useAuth";

export interface MessageProps {
  text: string;
  sender: number;
  id: number;
}

const Messages = () => {
  const { user } = useAuth();
  const { data, isLoading, error } = useQuery<MessageProps[]>(
    ["messasdasdages", user?.id],
    () => fetchMessages(user?.id!)
  );
  if (isLoading) {
    return null;
  }
  console.log(data);
  return (
    <div>
      {data?.length === 0 ? (
        <div className="w-full h-80 bg-white flex flex-col items-center justify-center">
          <p className="text-xl text-zinc-500">پیامی دریافت نکرده اید</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Messages;
