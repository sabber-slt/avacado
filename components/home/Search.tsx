import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { ImSearch } from "react-icons/im";

type FormData = {
  name: string;
};

const Search = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    router.push({ pathname: "/search", query: { name: data.name } });
  };
  return (
    <div className="mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="z-40 overflow-hidden rounded-b-lg flex flex-row items-center justify-center "
      >
        <input
          placeholder=" نام  خوراکی را وارد کنید"
          className="w-64 rounded-r-lg h-10 pr-3 text-zinc-600 bg-zinc-100"
          {...register("name")}
        />
        <button type="submit" className="bg-zinc-100 px-3 h-10 rounded-l-lg">
          <ImSearch className="text-2xl text-lime-600" />
        </button>
      </form>
    </div>
  );
};

export default Search;
