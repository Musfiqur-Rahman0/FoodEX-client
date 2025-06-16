import React from "react";
import useAxiosSecuire from "./useAxiosSecuire";

const useFoodsApi = () => {
  const axiosSecuire = useAxiosSecuire();

  const myFoodPromises = (email) => {
    return axiosSecuire.get(`/myfoods/${email}`).then((res) => res.data);
  };

  const addFoodPromises = (newFood) => {
    return axiosSecuire.post(`/add-food`, newFood).then((res) => res.data);
  };

  const updateFoodPromisesWithPut = (id, updatedFood) => {
    return axiosSecuire
      .put(`/update-food/${id}`, updatedFood)
      .then((res) => res.data);
  };

  const updateFoodPromisesWithPatch = (id, updatedFood) => {
    return axiosSecuire
      .patch(`/update-food/${id}`, updatedFood)
      .then((res) => res.data);
  };
  return {
    myFoodPromises,
    addFoodPromises,
    updateFoodPromisesWithPut,
    updateFoodPromisesWithPatch,
  };
};

export default useFoodsApi;
