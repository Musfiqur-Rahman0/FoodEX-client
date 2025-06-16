import Spinner from "@/components/ui/Spinner";
import { GlobalContext } from "@/Context/GlobalContext";
import FoodCardSlider from "@/Pages/Shared/FoodCardSlider";
import React, { use, useEffect, useState } from "react";
import { data, useLoaderData } from "react-router";

const ExpairedFood = () => {
  // const data = useLoaderData();
  // const [expairedFoods, setExpairedFoods] = useState([]);
  // const [loading, setLoading] = useState(false);
  const { loading, expairedFoods } = use(GlobalContext);

  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await fetch("http://localhost:3000/expaired-food");
  //     const data = await res.json();
  //     setExpairedFoods(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(expairedFoods, loading);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold ">Expaired Foods</h2>

      {loading ? <Spinner /> : <FoodCardSlider items={expairedFoods} />}
    </div>
  );
};

export default ExpairedFood;
