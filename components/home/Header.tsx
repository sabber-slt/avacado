import React from "react";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import useAuth from "../../store/useAuth";
import useInfo from "../../store/useInfo";
import { bmi, mensIdealCalories } from "../../utils/calculate";
import ImageCo from "../main/ImageCo";
import BMIReport from "./BMIReport";

const Header = () => {
  const { user } = useAuth();
  const { setPro, setCalorie } = useInfo();
  const [BMI, setBMI] = React.useState("");
  const [idealCalerie, setIdealCalerie] = React.useState(0);
  const [hydrate, setHydrate] = React.useState(false);
  const [dateC, setDateC] = React.useState<any>(
    new DateObject({
      calendar: persian,
      locale: persian_fa,
    })
  );
  React.useEffect(() => {
    const date = new DateObject({ calendar: persian, locale: persian_fa });
    setDateC(date.format());
    setHydrate(true);
    setBMI(bmi(user!));
    setIdealCalerie(mensIdealCalories(user!));
  }, [user]);

  const protein = Math.round(parseInt(user?.weight!) * 0.8);
  React.useEffect(() => {
    setPro(protein);
    setCalorie(Math.round(idealCalerie));
  }, [idealCalerie, protein, setCalorie, setPro]);
  const message =
    parseInt(BMI) < 18.5
      ? "کمبود"
      : parseInt(BMI) > 18.5 && parseInt(BMI) <= 25
      ? "مناسب"
      : parseInt(BMI) > 25 && parseInt(BMI) <= 30
      ? "اضافه"
      : "چاق";
  if (!hydrate) return null;
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-opacity-70">
      <BMIReport report={message} />
    </div>
  );
};

export default Header;
