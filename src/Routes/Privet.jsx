import Spinner from "@/components/ui/Spinner";
import { AuthContext } from "@/Context/AuthContext";
import React, { use } from "react";
import { Navigate, useLocation } from "react-router";

const Privet = ({ children }) => {
  const { isloading, user } = use(AuthContext);
  const { pathName } = useLocation();
  if (isloading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate to={"/login"} state={pathName} />;
  }
  return children;
};

export default Privet;
