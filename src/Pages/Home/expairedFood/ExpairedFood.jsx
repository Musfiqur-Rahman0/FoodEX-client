import Spinner from "@/components/ui/Spinner";
import { GlobalContext } from "@/Context/GlobalContext";
import FoodCardSlider from "@/Pages/Shared/FoodCardSlider";
import React, { use } from "react";

const ExpairedFood = () => {
  const { loading, expairedFoods } = use(GlobalContext);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold ">Expaired Foods</h2>

      {loading ? <Spinner /> : <FoodCardSlider items={expairedFoods} />}
    </div>
  );
};

export default ExpairedFood;
