import React from "react";
import FoodCard from "../Shared/FoodCard";
import { useLoaderData, useNavigation } from "react-router";

const Fridge = () => {
  const foods = useLoaderData();

  // console.log(foods);
  return (
    <div className="py-8 px-5 space-y-10 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-semibold text-slate-800    border-l-6 border-orange-500  pl-2">
          Smart Fridge
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          A smarter way to manage your food inventory and avoid spoilage.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {foods.map((food) => (
          <FoodCard food={food} key={food._id} />
        ))}
      </div>
    </div>
  );
};

export default Fridge;
