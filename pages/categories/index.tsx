import { useQuery } from "@tanstack/react-query";
import React from "react";
import ImageCo from "../../components/main/ImageCo";
import TabContainer from "../../components/main/TabContainer";
import { fetchCategories } from "../../hooks/useFetch";
import { CategoryProps } from "../../types/nutritionTypes";
import { AiFillCaretLeft } from "react-icons/ai";
import CategoryList from "../../components/category/CategoryList";
import CategoryAnim from "../../components/animations/CategoryAnim";
import Container from "../../components/Container";

const Home = () => {
  const [show, setShow] = React.useState(false);
  const [sl, setSl] = React.useState("");
  const { data, isLoading } = useQuery<CategoryProps[]>(
    ["fetchCategories"],
    fetchCategories
  );
  if (isLoading) {
    return <CategoryAnim />;
  }

  const onClick = (slug: string) => {
    setSl(slug);
    setShow(!show);
  };
  return (
    <Container>
      <TabContainer img="https://i.pinimg.com/736x/23/04/36/2304365132b400f64a46787a1eecc6ee.jpg">
        <div className="w-full h-full flex flex-col items-center pt-10 mb-96">
          {data?.map((item) => (
            <button
              onClick={() => onClick(item.slug as string)}
              key={item.id}
              className="w-72 bg-zinc-200 mt-4 flex flex-col items-center justify-center"
            >
              <div className="w-72 h-16 bg-zinc-200 flex flex-row items-center justify-between rounded-lg">
                <div className="flex flex-row items-center justify-center">
                  <div className="w-10 flex justify-center pr-4">
                    <ImageCo
                      src={item.img}
                      w="w-7"
                      h="h-7"
                      rounded="rounded-none"
                      quality={2}
                    />
                  </div>
                  <p className="w-16 text-center mr-2">{item.title}</p>
                </div>
                <div className="ml-4">
                  <AiFillCaretLeft
                    className={`w-6 h-6 text-green-800 ${
                      show && item.slug === sl ? "-rotate-90" : "rotate-0"
                    } `}
                  />
                </div>
              </div>
              <div className="bg-zinc-100">
                {show && item.slug === sl && (
                  <CategoryList slug={item.slug as string} />
                )}
              </div>
            </button>
          ))}
        </div>
      </TabContainer>
    </Container>
  );
};

export default Home;
