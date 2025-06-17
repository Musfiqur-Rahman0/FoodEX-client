import { use, useContext, useEffect } from "react"; // fix: use useContext
import { AuthContext } from "@/Context/AuthContext";
import axios from "axios";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecuire = () => {
  const { user } = use(AuthContext); // fix: useContext not use()
  const { logout } = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (user?.accessToken) {
          config.headers.authorization = `Bearer ${user?.accessToken}`;
        }
        return config;
      }
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          logout();
          Swal.fire({
            title: "Unauthorized access! You have been logged out.",
            icon: "error",
          });
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptors on unmount or user change
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user?.accessToken, logout]);

  return axiosInstance;
};

export default useAxiosSecuire;
