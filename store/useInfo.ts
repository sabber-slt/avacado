import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SetCal {
  calorie: number;
  protein: number;
  media: string;
  setMedia: (media: string) => void;

  setCalorie: (calorie: number) => void;
  setPro: (protein: number) => void;
}

const useInfo = create<SetCal>()(
  devtools(
    persist(
      (set) => ({
        calorie: 0,
        protein: 0,
        media: "",
        setMedia: (media) => set({ media }),
        setCalorie: (calorie: number) => set({ calorie }),
        setPro: (protein: number) => set({ protein }),
      }),
      {
        name: "info",
      }
    )
  )
);

export default useInfo;
