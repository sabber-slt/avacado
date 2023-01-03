import { useRouter } from "next/router";
import React from "react";
import useSearch from "../../store/useSearch";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TabBar from "../../components/TabBar";
import ImageCo from "../../components/main/ImageCo";

const SearchParams = () => {
  const router = useRouter();
  const { id, fibr, pro, carbo, fat, cal, name, type } = router.query;
  const [gr, setGr] = React.useState<any>(100);
  const [calC, setCalC] = React.useState<any>(parseFloat(cal as string));
  const [proC, setProC] = React.useState<any>(parseFloat(pro as string));
  const [carbC, setCarbC] = React.useState<any>(parseFloat(pro as string));
  const [fibrC, setFibrC] = React.useState<any>(parseFloat(fibr as string));
  const [fatC, setFatC] = React.useState<any>(parseFloat(fat as string));
  const [date, setDate] = React.useState<any>();
  const { setFoods, food } = useSearch();

  React.useEffect(() => {
    const date = new DateObject({ calendar: persian, locale: persian_fa });
    setDate(date.format());
  }, []);
  const calculate = () => {
    const newCal = ((calC * gr) / 100).toFixed(2);
    const newPro = ((proC * gr) / 100).toFixed(2);
    const newFibr = ((fibrC * gr) / 100).toFixed(2);
    const newFat = ((fatC * gr) / 100).toFixed(2);
    const newCarb = ((carbC * gr) / 100).toFixed(2);
    setCalC(newCal);
    setProC(newPro);
    setFibrC(newFibr);
    setFatC(newFat);
    setCarbC(newCarb);
  };

  const addFood = () => {
    const newFood = {
      name: name,
      cal: cal,
      pro: pro,
      fibr: fibr,
      fat: fat,
      amount: gr,
      date: date,
    };

    setFoods(newFood);
    router.push("/search/list");
  };

  return (
    <div className="w-full h-full">
      <ImageCo
        src="https://res.cloudinary.com/dh6sxfevk/image/upload/v1664889203/04c1708aa101f0360d11268955401675_edkjqx.jpg"
        w="w-full"
        h="h-72"
        quality={5}
      />
      <div className="w-full h-full absolute top-36 rounded-t-[30px] bg-white flex flex-col items-center pt-16">
        <div className="w-full flex flex-col justify-center items-center pb-5">
          <p className="text-green-700 text-xl">{name}</p>
          <p>{gr} گرم</p>
        </div>
        <div className="w-72 py-5 flex flex-col items-start bg-zinc-200">
          <div className="flex flex-row text-xl pr-3 items-center">
            <p className="text-xl">کالری:</p>
            <p className="pr-2 text-zinc-500">{calC} کالری</p>
          </div>
          <div className="flex flex-row pr-3 items-center">
            <p className="text-xl">پروتیین:</p>
            <p className="pr-2 text-zinc-500">{proC} گرم</p>
          </div>
          <div className="flex flex-row pr-3 items-center">
            <p className="text-xl">فیبر:</p>
            <p className="pr-2 text-zinc-500">{fibrC} گرم</p>
          </div>
          <div className="flex flex-row pr-3 items-center">
            <p className="text-xl">کربوهیدرات:</p>
            <p className="pr-2 text-zinc-500">{carbC} گرم</p>
          </div>
          <div className="flex flex-row pr-3 items-center">
            <p className="text-xl">چربی:</p>
            <p className="pr-2 text-zinc-500">{fatC} گرم</p>
          </div>
          <div className="flex flex-row items-center w-64 justify-around">
            <p className="">مقدار دلخواه را به گرم وارد نمایید:</p>
            <input
              type="number"
              value={gr}
              onChange={(e) => setGr(e.target.value)}
              className="w-16 h-6 text-xl bg-white text-zinc-500 rounded-md pr-2"
            />
          </div>
          <div className="w-72 flex justify-center">
            <button
              onClick={calculate}
              className="mt-4 px-3 py-2 bg-green-700 rounded-md text-slate-100"
            >
              محاسبه
            </button>
          </div>
        </div>
        <div className="w-72 flex justify-center">
          <button
            onClick={addFood}
            className="mt-4 w-72 py-2 bg-green-700 rounded-md text-slate-100"
          >
            افزودن به لیست غذاها
          </button>
        </div>
      </div>
      <TabBar />
    </div>
  );
};

export default SearchParams;
