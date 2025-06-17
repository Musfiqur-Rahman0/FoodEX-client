import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalProvider = ({ children }) => {
  const [expairedFoods, setExpairedFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nearlyexFood, setNearlyExFood] = useState([]);

  const fetchNearlyExpairyFoodData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/foods/recent-expaired");
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
      const res = await fetch("http://localhost:3000/expaired-food");
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

  console.log(expairedFoods);
  return (
    <GlobalContext.Provider value={{ loading, expairedFoods, nearlyexFood }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
