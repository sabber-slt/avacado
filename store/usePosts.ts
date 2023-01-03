import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SetUser {
  posts: any;

  setPosts: (posts: any) => void;
  removePosts: (posts: any) => void;
}

const usePosts = create<SetUser>()(
  devtools(
    persist(
      (set) => ({
        posts: [],
        setPosts: (posts) =>
          set((state) => ({ posts: [...state.posts, posts] })),
        removePosts: (posts) =>
          set((state) => ({
            posts: state.posts.filter((post: any) => post !== posts),
          })),
      }),

      {
        name: "auposts",
      }
    )
  )
);

export default usePosts;
