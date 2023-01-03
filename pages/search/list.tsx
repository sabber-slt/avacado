import React from "react";
import { DateObject, Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { BsTrashFill } from "react-icons/bs";
import useSearch from "../../store/useSearch";
import TabBar from "../../components/TabBar";

const List = () => {
  const [hydrate, setHydrate] = React.useState(false);
  const [value, setValue] = React.useState<any>(
    new DateObject({
      calendar: persian,
      locale: persian_fa,
    })
  );

  const [cal, setCal] = React.useState(0);
  const [pro, setPro] = React.useState(0);
  const { food, removeFood } = useSearch();
  React.useEffect(() => {
    const dt = value.format();
    let cal = 0;
    let prot = 0;
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
  }, [food, value]);

  React.useEffect(() => {
    setHydrate(true);
  }, []);

  const rmItem = (name: string) => {
    removeFood(name);
  };
  if (!hydrate) return null;
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center pb-3 mt-10 ">
        <Calendar
          value={value}
          disableYearPicker
          onChange={setValue}
          calendar={persian}
          locale={persian_fa}
        />
      </div>
      <div className="w-72 py-5 text-zinc-500 mt-2 bg-zinc-200 flex flex-row items-center justify-between px-5 rounded-md">
        <p className="text-lg">کالری مصرفی امروز:</p>
        <p className="text-xl text-green-600">{cal}</p>
      </div>
      <div className="w-72 py-5 text-zinc-500 bg-zinc-200 mt-4 flex flex-row items-center justify-between px-5 rounded-md">
        <p className="text-lg">پروتیین مصرفی امروز:</p>
        <p className="text-xl text-green-600">{pro}</p>
      </div>
      <div className="mt-4">
        {food
          .filter((item: any) => item.date === value.format())
          .map((item: any, index: any) => (
            <div
              key={index}
              className="w-72 h-16 bg-green-700 text-white flex flex-row items-center justify-between rounded-lg mt-3"
            >
              <div className="flex flex-col items-start justify-center pr-2">
                <p className="font-thin text-zinc-50">{item.name}</p>
                <div className="flex flex-row items-center justify-around w-52">
                  <p className="text-zinc-50">
                    کالری:
                    {item.cal}{" "}
                  </p>
                  <p className="text-zinc-50">
                    پروتیین:
                    {item.pro}{" "}
                  </p>
                  <p className="text-zinc-50">
                    فیبر:
                    {item.fibr}{" "}
                  </p>
                </div>
              </div>
              <button className="pl-3" onClick={() => rmItem(item.name)}>
                <BsTrashFill className="text-xl" />
              </button>
            </div>
          ))}
      </div>
      <TabBar />
    </div>
  );
};

export default List;
