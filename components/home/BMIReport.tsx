import React from "react";
import { AiOutlineCaretUp } from "react-icons/ai";
type Props = {
  report: string;
};

const BMIReport: React.FC<Props> = ({ report }) => {
  return (
    <div className="w-64 h-20 bg-zinc-100 bg-opacity-75 flex flex-col items-center justify-around rounded-md">
      <p className="text-zinc-500 text-lg">
        تیپ <span className="text-lime-600">سلامت </span> شما:
      </p>
      <div className="w-44 flex flex-row items-center justify-around">
        <div className="flex flex-col items-center justify-center">
          <p className="text-rose-500 border-b-4 border-zinc-500">چاق</p>
          <AiOutlineCaretUp
            className={`${report === "چاق" ? "visible" : "invisible"}`}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-orange-500 border-b-4 border-zinc-500">اضافه</p>
          <AiOutlineCaretUp
            className={`${report === "اضافه" ? "visible" : "invisible"}`}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-green-500 border-b-4 border-zinc-500">مناسب</p>
          <AiOutlineCaretUp
            className={`${report === "مناسب" ? "visible" : "invisible"}`}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-yellow-500 border-b-4 border-zinc-500">کمبود</p>
          <AiOutlineCaretUp
            className={`${report === "کمبود" ? "visible" : "invisible"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default BMIReport;
