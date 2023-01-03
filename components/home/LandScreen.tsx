import React from "react";
import Button from "../buttons/Button";
import ImageCo from "../main/ImageCo";

const LandScreen = () => {
  return (
    <div className="w-full h-full relative flex ">
      <ImageCo
        src="https://res.cloudinary.com/dh6sxfevk/image/upload/v1663951016/2f58ebd898de2f5ce04b69f61723c4e3_pjt5iy.jpg"
        w="w-full"
        h="h-screen"
        quality={10}
      />
      <div className="z-40 absolute w-full h-screen flex flex-col items-center justify-center">
        <h1 className="pb-4 text-4xl text-slate-50">تغییر را شروع کن!</h1>
        <h3 className="text-right text-slate-50 px-5 text-xl">
          همراه با شما ، با جدید ترین تکنولوژی های روز دنیا و بهترین متخصصین
          تغذیه زندگی سالم را به شما معرفی میکنیم.
        </h3>
        <Button w="w-36" h="h-12" slug="/home" bg="bg-[#5AAC46]" m="m-10">
          <p className="text-slate-50">ورود به برنامه</p>
        </Button>
      </div>
    </div>
  );
};

export default LandScreen;
