import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SetFood {
  food: any;

  setFoods: (food: any) => void;
  removeFood: (name: string) => void;
}

const useSearch = create<SetFood>()(
  devtools(
    persist(
      (set) => ({
        food: [],

        setFoods: (food) =>
          set((state) => ({
            food: [...state.food, food],
          })),

        removeFood: (name) =>
          set((state) => ({
            food: state.food.filter((food: any) => food.name !== name),
          })),
      }),
      {
        name: "fudav",
      }
    )
  )
);

export default useSearch;
