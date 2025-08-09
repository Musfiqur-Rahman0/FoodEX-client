import Spinner from "@/components/ui/Spinner";
import { GlobalContext } from "@/Context/GlobalContext";
import FoodCardSkeleton from "@/Pages/Shared/FoodCardSkeleton";
import FoodCardSlider from "@/Pages/Shared/FoodCardSlider";

import React, { use } from "react";

const NearlyExparySection = () => {
  const { loading, nearlyexFood } = use(GlobalContext);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold ">Nearly Expaired Foods </h2>

      {loading ? (
        <div className="grid grid-cols-3 gap-5 mt-5">
          <FoodCardSkeleton />
          <FoodCardSkeleton />
          <FoodCardSkeleton />
        </div>
      ) : nearlyexFood.length > 0 ? (
        <FoodCardSlider items={nearlyexFood} />
      ) : (
        <p>NO Nearly Expaired Food.</p>
      )}
    </div>
  );
};

export default NearlyExparySection;
