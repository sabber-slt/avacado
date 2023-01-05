import React from "react";
import useSearch from "../../store/useSearch";
import { DateObject, Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const Calories = () => {
  const [cal, setCal] = React.useState(0);
  const [pro, setPro] = React.useState(0);
  const [fibr, setFibr] = React.useState(0);
  const { food, removeFood } = useSearch();
  const [value, setValue] = React.useState<any>(
    new DateObject({
      calendar: persian,
      locale: persian_fa,
    })
  );

  React.useEffect(() => {
    const dt = value.format();
    let cal = 0;
    let prot = 0;
    let fibr = 0;
    food
      .filter((item: any) => item.date === dt)
      .forEach((item: any) => {
        cal += parseInt(item.cal);
      });
    setCal(cal);
    food
      .filter((item: any) => item.date === dt)
      .forEach((item: any) => {
        prot += parseInt(item.pro);
      });
    setPro(prot);
    food
      .filter((item: any) => item.date === dt)
      .forEach((item: any) => {
        fibr += parseInt(item.fibr);
      });
    setFibr(fibr);
  }, [food, value]);
  return (
    <div className="w-full flex flex-row items-center justify-around">
      <div className="w-20 h-20 bg-zinc-100 bg-opacity-80 flex flex-col items-center justify-around py-3 rounded-lg">
        <p className="text-zinc-500">کالری امروز</p>
        <p className="text-zinc-500 text-lg">{cal} </p>
      </div>
      <div className="w-20 h-20 bg-zinc-100 bg-opacity-80 flex flex-col items-center justify-around py-3 rounded-lg">
        <p className="text-zinc-500">پروتیین امروز</p>
        <p className="text-zinc-500 text-lg">{pro} </p>
      </div>
      <div className="w-20 h-20 bg-zinc-100 bg-opacity-80 flex flex-col items-center justify-around py-3 rounded-lg">
        <p className="text-zinc-500">فیبر امروز</p>
        <p className="text-zinc-500 text-lg">{fibr} </p>
      </div>
    </div>
  );
};

export default Calories;
