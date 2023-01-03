import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import TabBar from "../../components/TabBar";
import { searchMutation } from "../../hooks/useMutation";
import { NutritionProps } from "../../types/nutritionTypes";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import ImageCo from "../../components/main/ImageCo";
import Container from "../../components/Container";

const Home = () => {
  const router = useRouter();
  const { query } = router;
  const { data, isLoading, error } = useQuery<NutritionProps[]>(
    ["searchMutation", query.name],
    () => searchMutation(query.name as string)
  );
  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <Container>
      <ImageCo
        src="https://res.cloudinary.com/dh6sxfevk/image/upload/v1664889203/04c1708aa101f0360d11268955401675_edkjqx.jpg"
        w="w-full"
        h="h-72"
        quality={10}
      />
      <div className="w-full h-full absolute top-36 rounded-t-[30px] bg-white">
        {data?.length === 0 ? (
          <div className="w-full h-[70vh] flex flex-col items-center justify-center">
            <h3>نتیجه ای یافت نشد!</h3>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center my-20 text-zinc-600">
            {data?.map((item) => (
              <div
                key={item.id}
                className="w-72 h-16 bg-zinc-100 flex flex-row items-center justify-between mt-3 rounded-md"
              >
                <div className="flex flex-col items-right pr-3">
                  <p>{item.name}</p>
                  <p className="text-sm">{`${item.cal} کالری - ${item.pro} گرم پروتئین `}</p>
                </div>
                <button
                  onClick={() =>
                    router.push({
                      pathname: "/search/searchPrams",
                      query: {
                        id: item.id,
                        fibr: item.fibr,
                        cal: item.cal,
                        carbos: item.carb,
                        fat: item.fat,
                        name: item.name,
                        pro: item.pro,
                        type: item.type,
                      },
                    })
                  }
                  className="pl-3"
                >
                  <BsFillArrowLeftSquareFill className="text-2xl text-lime-600" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <TabBar />
    </Container>
  );
};

export default Home;
