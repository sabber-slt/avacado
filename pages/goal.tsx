import React from "react";
import { IoIosWater, IoMdAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { FaWeight } from "react-icons/fa";
import { GiBombingRun } from "react-icons/gi";
import {
  bmi,
  mensIdealCalories,
  womansIdealCalories,
} from "../utils/calculate";
import TabBar from "../components/TabBar";
import useAuth from "../store/useAuth";
import useGoal from "../store/useGoal";
import ImageCo from "../components/main/ImageCo";

const Goal = () => {
  const [water, setWater] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [idealWeight, setIdealWeight] = React.useState(0);
  const [showWa, setShowWa] = React.useState(false);
  const [showWe, setShowWe] = React.useState(false);
  const { user } = useAuth();
  const { setWat, setWe, wa, we } = useGoal();
  console.log(user);

  React.useEffect(() => {
    if (user?.gender === "man") {
      setWeight(
        Math.round(
          56.2 * 1 + (parseInt(user?.height) * 0.39 - 152.4 * 0.39) * 1.41
        ) * 1
      );
      setIdealWeight(
        Math.round(
          56.2 * 1 + (parseInt(user?.height) * 0.39 - 152.4 * 0.39) * 1.41
        ) * 1
      );
    } else {
      setWeight(
        Math.round(
          53.1 * 1 +
            (parseInt(user?.height as string) * 0.39 - 152.4 * 0.39) * 1.36
        ) * 1
      );
      setIdealWeight(
        Math.round(
          53.1 * 1 +
            (parseInt(user?.height as string) * 0.39 - 152.4 * 0.39) * 1.36
        ) * 1
      );
    }
  }, [user]);

  console.log(wa, we);
  const addWater = () => {
    setWater(water + 1);
  };
  const removeWater = () => {
    if (water > 0) {
      setWater(water - 1);
    }
  };
  const adWeight = () => {
    setIdealWeight(idealWeight + 1);
  };
  const rmWeight = () => {
    if (idealWeight > 35) {
      setIdealWeight(idealWeight - 1);
    }
  };
  const subWater = () => {
    setShowWa(true);
    setWat(water);
  };
  const subWeight = () => {
    setShowWe(true);
    setWe(idealWeight + 2);
  };
  const bmic = bmi(user!);

  const BMI = parseInt(bmic);
  const idealCalerie =
    user?.gender === "man"
      ? mensIdealCalories(user!)
      : womansIdealCalories(user!);

  const message =
    BMI < 18.5
      ? "کمبود وزن"
      : BMI > 18.5 && BMI <= 25
      ? "وزن مناسب"
      : BMI > 25 && BMI <= 30
      ? "اضافه وزن"
      : "اضافه وزن زیاد";
  const protein = Math.round(parseInt(user?.weight || "") * 0.8);
  return (
    <div className="w-full bg-white">
      <ImageCo
        src="https://res.cloudinary.com/dh6sxfevk/image/upload/v1665300549/266e92054f116c0a2c4e05a76be04063_bzzxl0.jpg"
        w="w-full"
        h="h-52"
        quality={5}
      />
      <div className="z-40 flex flex-col items-center justify-center mt-6">
        <div className="w-80 h-20 flex flex-col items-start justify-center my-8">
          <div className="flex flex-row items-center">
            <p className="text-lg"> تیپ:</p>
            <p className="text-lg pr-2 text-[#5AAC46]">{message} </p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-lg"> BMI:</p>
            <p className="text-lg pr-2 text-[#5AAC46]">{BMI}</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-lg"> کالری تعادل:</p>
            <p className="text-lg pr-2 text-[#5AAC46]">
              {Math.round(idealCalerie)}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-lg"> وزن طبیعی:</p>
            <p className="text-lg pr-2 text-[#5AAC46]">{idealWeight}</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-lg"> پروتیین روزانه:</p>
            <p className="text-lg pr-2 text-[#5AAC46]">{protein}</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-lg"> فیبر روزانه:</p>
            <p className="text-lg pr-2 text-[#5AAC46]">
              {user?.gender === "man" ? 33 : 23}
            </p>
          </div>
        </div>
        <div className="w-64 bg-zinc-100 text-[#5AAC46] z-40 flex flex-row items-center justify-around mt-8 shadow-md shadow-slate-400  py-3 rounded-lg">
          <div className="flex flex-col items-center justify-center ">
            <IoIosWater className="text-4xl" />
            <p className="text-zinc-700">آب</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaWeight className="text-4xl" />
            <p className="text-zinc-700">وزن</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <GiBombingRun className="text-4xl" />
            <p className="text-zinc-700">ورزش</p>
          </div>
        </div>
        <p className="text-zinc-600 mt-8 pb-2">تعیین هدف آب</p>
        <div className="z-40 flex w-64 bg-zinc-100 flex-col items-center justify-around py-5 rounded-lg shadow-md shadow-slate-400">
          <div className="flex flex-row items-center justify-around w-56 ">
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={addWater}
                className="shadow-md shadow-slate-700 bg-[#5AAC46] rounded-md hover:scale-90 hover:shadow-none transition ease-in duration-200"
              >
                <IoMdAddCircle className="text-white text-4xl" />
              </button>
              <p className=" text-lg my-3 text-zinc-600">{water}</p>
              <button
                onClick={removeWater}
                className="shadow-md shadow-slate-700 bg-[#5AAC46] rounded-md hover:scale-90 hover:shadow-none transition ease-in duration-200"
              >
                <IoIosRemoveCircle className="text-white text-4xl" />
              </button>
            </div>

            <button
              onClick={subWater}
              className="text-white bg-[#5AAC46] px-2 py-1 rounded-md"
            >
              {showWa ? "ثبت شد" : "ثبت"}
            </button>
          </div>
        </div>
        <p className="text-zinc-600 mt-8 pb-2">تعیین هدف وزن</p>
        <div className="z-40 mb-24 flex w-64 md:w-80 flex-col items-center text-zinc-600 justify-around bg-zinc-100 py-5 rounded-lg  shadow-md shadow-slate-400">
          <div className="flex w-56 flex-row items-center justify-between ">
            <p className="">وزن ایده آل شما:</p>
            <p className="">{weight + 2}</p>
          </div>
          <div className="flex w-56 flex-row items-center justify-between">
            <p className=""> محدوده وزن سالم :</p>
            <p className="">{`${weight - 5} تا ${weight + 7}`}</p>
          </div>
          <div className="flex flex-row w-56 items-center justify-around">
            <button
              onClick={adWeight}
              className="shadow-md shadow-slate-700 bg-[#5AAC46] rounded-md hover:scale-90 hover:shadow-none transition ease-in duration-200"
            >
              <IoMdAddCircle className="text-white text-4xl" />
            </button>
            <p className="text-zinc-600 text-lg my-3">{idealWeight + 2}</p>
            <button
              onClick={rmWeight}
              className="shadow-md shadow-slate-700 bg-[#5AAC46] rounded-md hover:scale-90 hover:shadow-none transition ease-in duration-200"
            >
              <IoIosRemoveCircle className="text-white text-4xl" />
            </button>
          </div>
          <button
            onClick={subWeight}
            className="text-white bg-[#5AAC46] px-2 py-1 rounded-md"
          >
            {showWe ? "ثبت شد" : "ثبت"}
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <TabBar />
      </div>
    </div>
  );
};

export default Goal;
