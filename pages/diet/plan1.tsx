import Link from "next/link";
import React from "react";
import ImageCo from "../../components/main/ImageCo";
import TabContainer from "../../components/main/TabContainer";
import TabBar from "../../components/TabBar";
import useAuth from "../../store/useAuth";
import { womansIdealCalories, mensIdealCalories } from "../../utils/calculate";

const Plan1 = () => {
  const { user } = useAuth();
  const [idealCalerie, setIdealCalerie] = React.useState(0);

  React.useEffect(() => {
    setIdealCalerie(
      user?.gender === "man"
        ? mensIdealCalories(user!)
        : womansIdealCalories(user!)
    );
  }, [user]);
  return (
    <div className="w-full h-full">
      <ImageCo
        src="https://res.cloudinary.com/dh6sxfevk/image/upload/v1665298862/000ad786383bed3f75f4b036777fbe2b_v9jh0c.jpg"
        w="w-full"
        h="h-56"
      />
      <div className="w-full flex flex-col items-center">
        <p className="pt-5">کالری پیشنهادی امروز آواکادو به شما:</p>
        <p className="pt-1">
          {idealCalerie.toFixed(0)} <span>کالری</span>
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <Link href="/home">
          <a className="w-80 mt-5 h-12 bg-zinc-200 text-zinc-500 rounded-md flex items-center justify-center">
            صبحانه
          </a>
        </Link>
        <Link href="/home">
          <a className="w-80 mt-3 h-12 bg-zinc-200 text-zinc-500 rounded-md flex items-center justify-center">
            میان وعده اول
          </a>
        </Link>
        <Link href="/home">
          <a className="w-80 mt-3 h-12 bg-zinc-200 text-zinc-500 rounded-md flex items-center justify-center">
            ناهار
          </a>
        </Link>
        <Link href="/home">
          <a className="w-80 mt-3 h-12 bg-zinc-200 text-zinc-500 rounded-md flex items-center justify-center">
            میان وعده دوم
          </a>
        </Link>
        <Link href="/home">
          <a className="w-80 mt-3 h-12 bg-zinc-200 text-zinc-500 rounded-md flex items-center justify-center">
            شام
          </a>
        </Link>
      </div>
      <TabBar />
    </div>
  );
};

export default Plan1;
