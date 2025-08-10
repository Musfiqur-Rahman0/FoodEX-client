import { GlobalContext } from "@/Context/GlobalContext";
import FoodCardSkeleton from "@/Pages/Shared/FoodCardSkeleton";
import FoodCardSlider from "@/Pages/Shared/FoodCardSlider";

import React, { use, useEffect, useState } from "react";
import NearlyExpiredEmptyState from "./NearlyExpiredEmptyState";
import useFoodsApi from "@/Hooks/useFoodsApi";
import { AuthContext } from "@/Context/AuthContext";

const NearlyExparySection = () => {
  const { loading, setLoading, nearlyexFood } = use(GlobalContext);
  const [myAddedFood, setMyAddedFood] = useState([]);
  const { user } = use(AuthContext);

  const { myFoodPromises } = useFoodsApi();

  useEffect(() => {
    if (!user?.email || !user?.accessToken) return;

    setLoading(true);
    myFoodPromises(user.email)
      .then((data) => {
        setMyAddedFood(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading food data:", error);
        setLoading(false);
      });
  }, [user?.email, user?.accessToken]);

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
        <NearlyExpiredEmptyState caseType={"expired"} />
      )}
    </div>
  );
};

export default NearlyExparySection;
