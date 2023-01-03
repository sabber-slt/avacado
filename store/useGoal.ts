import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SetCal {
  wa: number;
  we: number;

  setWat: (wa: number) => void;
  setWe: (we: number) => void;
}

const useGoal = create<SetCal>()(
  devtools(
    persist(
      (set) => ({
        wa: 0,
        we: 0,
        setWat: (wa: number) => set({ wa }),
        setWe: (we: number) => set({ we }),
      }),
      {
        name: "info",
      }
    )
  )
);

export default useGoal;
