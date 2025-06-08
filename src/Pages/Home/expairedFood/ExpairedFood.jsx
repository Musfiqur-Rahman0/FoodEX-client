import FoodCardSlider from "@/Pages/Shared/FoodCardSlider";
import React from "react";

const ExpairedFood = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold ">Expaired Foods</h2>

      <FoodCardSlider items={[...Array(6)]} />
    </div>
  );
};

export default ExpairedFood;
