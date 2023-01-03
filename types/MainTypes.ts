export interface MagazineProps {
  id: number;
  title: string;

  media1: string;
  media2: string;
  content1: string;

  content2: string;
}

export interface PostProps {
  body: string;
  id: number;
  img: string;
  like: number;
  owner: {
    name: string;
    img: string;
    id: number;
  };
  title: string;
  user_id: number;
}
