import FoodCardSlider from "@/Pages/Shared/FoodCardSlider";
import React from "react";
import { useLoaderData } from "react-router";

const NearlyExparySection = () => {
  // console.log(data);
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold ">Nearly Expaired Foods </h2>

      <FoodCardSlider items={data} />
    </div>
  );
};

export default NearlyExparySection;
