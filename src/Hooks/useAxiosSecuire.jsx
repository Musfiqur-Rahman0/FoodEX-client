import { AuthContext } from "@/Context/AuthContext";
import { GlobalContext } from "@/Context/GlobalContext";
import axios from "axios";
import React, { use } from "react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecuire = () => {
  const { user } = use(AuthContext);
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  return axiosInstance;
};

export default useAxiosSecuire;
