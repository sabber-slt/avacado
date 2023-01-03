import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Img from "./Img";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "به صورت رایگان رژیم غذایی خودت رو بساز",
    image:
      "https://images.pexels.com/photos/10112460/pexels-photo-10112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "کمتر از یک روز رژیم غذایی شما طراحی و در پنل قرار می گیره !",
    image:
      "https://images.pexels.com/photos/6740535/pexels-photo-6740535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "با آواکادو رویاهات رو طراحی کن",
    image:
      "https://images.pexels.com/photos/10980021/pexels-photo-10980021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

type Props = {};

const Carousel = (props: Props) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: false, draggable: false, speed: 10 },
    [Autoplay()]
  );
  return (
    <div
      style={{ direction: "ltr" }}
      className="relative w-full h-64 lg:h-96 flex items-center justify-center mt-10 lg:my-16 bg-gradient-to-b from-green-600 to-zinc-800"
    >
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item) => (
            <div key={item.id} className="embla__slide">
              <div className="relative w-full h-64 lg:h-96 flex flex-col items-center justify-center">
                <Img
                  src={item.image}
                  cls="w-[100vw] lg:w-[70vw] h-64 lg:h-96 opacity-60"
                />
                <div className="absolute top-0 w-full h-64 lg:h-96 flex flex-col items-center justify-center">
                  <h1 className="text-white px-5 text-center">{item.title}</h1>
                  <Link href="/home">
                    <a className="w-36 h-10 mt-4 text-white bg-lime-600 rounded-md flex items-center justify-center">
                      شروع کن
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
