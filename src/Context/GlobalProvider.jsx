import React, { use, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import useFoodsApi from "@/Hooks/useFoodsApi";
import { AuthContext } from "./AuthContext";
import useAuth from "@/Hooks/useAuth";

const GlobalProvider = ({ children }) => {
  const [expairedFoods, setExpairedFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nearlyexFood, setNearlyExFood] = useState([]);

  const fetchNearlyExpairyFoodData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://food-server-orpin-six.vercel.app/foods/recent-expaired"
      );
      const data = await res.json();
      setNearlyExFood(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://food-server-orpin-six.vercel.app/expaired-food"
      );
      const data = await res.json();
      setExpairedFoods(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNearlyExpairyFoodData();
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ loading, expairedFoods, nearlyexFood, setLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
