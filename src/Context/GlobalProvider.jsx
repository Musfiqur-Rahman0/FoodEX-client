import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalProvider = ({ children }) => {
  const [expairedFoods, setExpairedFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nearlyexFood, setNearlyExFood] = useState([]);

  const fetchNearlyExpairyFoodData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "http://food-server-orpin-six.vercel.app/foods/recent-expaired"
      );
      const data = await res.json();
      setNearlyExFood(data);
      setLoading(false);
    } catch (err) {
      err;
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "http://food-server-orpin-six.vercel.app/expaired-food"
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

  expairedFoods;
  return (
    <GlobalContext.Provider value={{ loading, expairedFoods, nearlyexFood }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
