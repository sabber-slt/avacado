import type { NextPage } from "next";
import Container from "../components/Container";
import Button from "../components/buttons/Button";
import Img from "../components/main/Img";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen relative flex items-center justify-center bg-gradient-to-b from-green-600 to-zinc-800">
      <div className="relative w-full h-screen opacity-60">
        <Image
          src="/pics/land.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute top-0 z-40 w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-white lg:text-4xl">تغییر را شروع کن!</h1>
        <h3 className="text-center text-slate-50 px-5 text-xl my-5">
          همراه با شما ، با جدید ترین تکنولوژی های روز دنیا و بهترین متخصصین
          تغذیه زندگی سالم را به شما معرفی میکنیم.
        </h3>
        <Link href="/home">
          <a className="w-52 h-10 text-white flex items-center justify-center bg-gradient-to-tr from-orange-600 to-green-600 rounded-lg hover:scale-90 transition duration-300">
            {" "}
            ورود به پنل
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
