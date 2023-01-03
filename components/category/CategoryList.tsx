import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NutritionProps } from "../../types/nutritionTypes";
import { fetchCategoriesByType } from "../../hooks/useFetch";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

const CategoryList: React.FC<{ slug: string }> = ({ slug }) => {
  const router = useRouter();
  const { data, isLoading } = useQuery<NutritionProps[]>(
    ["fetchCategoriesByType", slug],
    () => fetchCategoriesByType(slug as string)
  );
  if (isLoading) return <div></div>;
  return (
    <div className="bg-zinc-100">
      {data?.map((item) => (
        <Link
          href={{
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
          }}
          key={item.id}
          className="bg-zinc-200 text-zinc-600"
        >
          <div className="w-72 flex flex-row items-center justify-between mt-4 px-3">
            <p className="text-center">{item.name}</p>
            <AiFillStar className="w-6 h-6 text-green-400" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
