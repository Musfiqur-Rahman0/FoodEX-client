import Spinner from "@/components/ui/Spinner";
import FoodCardSlider from "@/Pages/Shared/FoodCardSlider";
import React, { useEffect, useState } from "react";
import { data, useLoaderData } from "react-router";

const ExpairedFood = () => {
  // const data = useLoaderData();
  const [expairedFoods, setExpairedFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/expaired-food");
      const data = await res.json();
      setExpairedFoods(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(expairedFoods, loading);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold ">Expaired Foods</h2>

      {loading ? (
        <Spinner />
      ) : (
        <FoodCardSlider items={expairedFoods} expaired={true} />
      )}
    </div>
  );
};

export default ExpairedFood;
