import create from "zustand";

interface SetCal {
  media: string;
  setMedia: (media: string) => void;
}

const usePublic = create<SetCal>()((set) => ({
  media: "",
  setMedia: (media) => set({ media }),
}));

export default usePublic;
