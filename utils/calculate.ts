import { UserProps } from "../store/useAuth";

export const normalWeightForMen = (height: number) => {
  const idealWeight =
    Math.round(56.2 * 1 + (height * 0.39 - 152.4 * 0.39) * 1.41) * 1;
  return idealWeight;
};
export const normalWeightForWoman = (height: number) => {
  const idealWeight =
    Math.round(53.1 * 1 + (height * 0.39 - 152.4 * 0.39) * 1.36) * 1;
  return idealWeight;
};

export const bmi = (user: UserProps) => {
  return (
    parseInt(user?.weight || "0") /
    ((parseInt(user?.height || "0") * parseInt(user?.height || "0")) / 10000)
  ).toFixed(2);
};

export const mensIdealCalories = (user: UserProps) => {
  return (
    66.47 +
    13.75 * parseInt(user?.weight) +
    5 * parseInt(user?.height) -
    6.75 * parseInt(user?.age)
  );
};
export const womansIdealCalories = (user: UserProps) => {
  return (
    655.09 +
    9.56 * parseInt(user?.weight) +
    1.84 * parseInt(user?.height) -
    4.67 * parseInt(user?.age)
  );
};
