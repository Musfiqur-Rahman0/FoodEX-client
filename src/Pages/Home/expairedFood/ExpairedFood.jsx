import Spinner from "@/components/ui/Spinner";
import { GlobalContext } from "@/Context/GlobalContext";
import FoodCardSkeleton from "@/Pages/Shared/FoodCardSkeleton";
import FoodCardSlider from "@/Pages/Shared/FoodCardSlider";
import React, { use, useEffect } from "react";

const ExpairedFood = () => {
  const { loading, expairedFoods, setLoading } = use(GlobalContext);

  console.log(loading);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold ">Expaired Foods</h2>

      {loading ? (
        <div className="grid grid-cols-3 gap-5 mt-5">
          <FoodCardSkeleton />
          <FoodCardSkeleton />
          <FoodCardSkeleton />
        </div>
      ) : (
        <FoodCardSlider items={expairedFoods} />
      )}
    </div>
  );
};

export default ExpairedFood;
