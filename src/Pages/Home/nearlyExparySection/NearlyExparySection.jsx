import Spinner from "@/components/ui/Spinner";
import FoodCardSlider from "@/Pages/Shared/FoodCardSlider";

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const NearlyExparySection = () => {
  // console.log(data);
  // const data = useLoaderData();
  // console.log(data);

  const [dataLoading, setDataLoading] = useState(false);
  const [nearlyexFood, setNearlyExFood] = useState([]);
  const fetchNearlyExpairyFoodData = async () => {
    try {
      setDataLoading(true);
      const res = await fetch("http://localhost:3000/foods/recent-expaired");
      const data = await res.json();
      setNearlyExFood(data);
      setDataLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNearlyExpairyFoodData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold ">Nearly Expaired Foods </h2>

      {dataLoading ? <Spinner /> : <FoodCardSlider items={nearlyexFood} />}
    </div>
  );
};

export default NearlyExparySection;
