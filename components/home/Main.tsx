/* eslint-disable @next/next/no-img-element */
import React from "react";
import ImageCo from "../main/ImageCo";
import TabBar from "../TabBar";
import Calories from "./Calories";
import Diet from "./Diet";
import Header from "./Header";
import Magazine from "./Magazine";
import Menu from "./Menu";
import Search from "./Search";
import Container from "../Container";
import Carousel from "../main/Carousel";

const Main = () => {
  const [hydrate, setHydrate] = React.useState(false);
  React.useEffect(() => {
    setHydrate(true);
  }, []);

  if (!hydrate) {
    return null;
  }
  return (
    <Container>
      <div className="relative w-full lg:w-[60vw]">
        <div className="w-full h-full rounded-b-[40px] overflow-hidden">
          <img
            src="https://res.cloudinary.com/dh6sxfevk/image/upload/v1665152135/7c981b3af2fe5f6b0bbc67e74f34dfc7_sxdxnd.jpg"
            alt=""
            className="w-full h-72 object-cover"
          />
        </div>
        <div className="z-40 w-full h-52 absolute top-0 flex flex-col justify-center">
          <Header />
          <Calories />
        </div>

        <div className="w-full h-full z-40 bg-white  flex flex-col rounded-[30px]">
          <Search />
          <Menu />
          <Carousel />
          <Magazine />
        </div>

        <TabBar />
      </div>
    </Container>
  );
};

export default Main;
