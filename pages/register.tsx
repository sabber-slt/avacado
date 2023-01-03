import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../store/useAuth";
import { registerMutation } from "../hooks/useMutation";
import Container from "../components/main/Container";

export type FormData = {
  phone: string;
  weight: string;
  height: string;
  activity: string;
  age: string;
  gender: string;
  name: string;
  special: string;
};
const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onClick = async (data: FormData) => {
    setLoading(true);
    const res = await registerMutation(data);

    console.log(res);
    if (!res) {
      setMessage("کاربری با این شماره تماس یافت نشد");
    } else {
      router.push("/home");
    }
    setLoading(false);
  };
  return (
    <div className="w-full h-full">
      <Container>
        <div className="w-full h-full flex flex-col items-center justify-center pb-32">
          <p className="text-rose-400 text-xl z-40">{message}</p>
          <form
            onSubmit={handleSubmit(onClick)}
            className="w-72 z-40 py-5 bg-white flex flex-col items-center rounded-lg"
          >
            <div className="flex flex-col justify-center">
              <label className="text-zinc-500 text-lg pb-3">
                {" "}
                نام و نام خانوادگی:{" "}
              </label>
              <input
                style={{ direction: "ltr" }}
                type="text"
                {...register("name", { required: true })}
                className="w-64 h-10 text-xl pl-3 outline-none border-none bg-zinc-100 rounded-md text-zinc-600"
              />
            </div>
            <div className="flex flex-col justify-center mt-3">
              <label className="text-zinc-500 text-lg pb-3">شماره تماس: </label>
              <input
                style={{ direction: "ltr" }}
                type="number"
                {...register("phone", { required: true })}
                className="w-64 h-10 text-xl pl-3 outline-none border-none bg-zinc-100 rounded-md text-zinc-600"
              />
            </div>
            <div className="flex w-full flex-row items-center justify-evenly">
              <div className="flex flex-col justify-center mt-3">
                <label className="text-zinc-500 text-lg pb-3"> سن: </label>
                <input
                  style={{ direction: "ltr" }}
                  type="number"
                  {...register("age", { required: true })}
                  className="w-16 h-10 text-xl pl-3 outline-none border-none bg-zinc-100 rounded-md text-zinc-600"
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <label className="text-zinc-500 text-lg pb-3"> وزن: </label>
                <input
                  style={{ direction: "ltr" }}
                  type="number"
                  {...register("weight", { required: true })}
                  className="w-16 h-10 text-xl pl-3 outline-none border-none bg-zinc-100 rounded-md text-zinc-600"
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <label className="text-zinc-500 text-lg pb-3"> قد: </label>
                <input
                  style={{ direction: "ltr" }}
                  type="number"
                  {...register("height", { required: true })}
                  className="w-16 h-10 text-xl pl-3 outline-none border-none bg-zinc-100 rounded-md text-zinc-600"
                />
              </div>
            </div>
            <div className="w-80 flex items-center justify-center mt-4">
              <select
                className="px-4 rounded-lg text-zinc-500 text-xl bg-zinc-100"
                {...register("gender", { required: true })}
              >
                جنسیت
                <option value="" className="text-sm">
                  {" "}
                  جنسیت
                </option>
                <option value="man" className="text-zinc-600 text-sm">
                  {" "}
                  مرد
                </option>
                <option value="woman" className="text-zinc-600 text-sm">
                  زن
                </option>
              </select>
            </div>
            <div className="w-80 flex items-center justify-center mt-4">
              <select
                className="px-4 rounded-lg text-zinc-500 text-xl bg-zinc-100"
                {...register("activity", { required: true })}
              >
                میزان فعالیت روزانه
                <option value="" className="text-sm">
                  {" "}
                  میزان فعالیت روزانه
                </option>
                <option value="kam" className="text-sm">
                  کم
                </option>
                <option value="motevaset" className="text-sm">
                  متوسط
                </option>
                <option value="ziad" className="text-sm">
                  زیاد
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="w-40 bg-[#5AAC46] text-zinc-100 h-12 text-lg mt-5 rounded-md hover:scale-105 "
            >
              {loading ? "..." : "ثبت نام"}
            </button>
          </form>

          <div className="w-full flex justify-center">
            <button
              onClick={() => router.push("/home")}
              className="text-zinc-500 underline"
            >
              عضو هستید؟ وارد شوید
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
