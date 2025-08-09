import React from "react";
import errorAni from "../../assets/animation/errorAni.json";
import Lottie from "lottie-react";
import { useNavigate, useRouteError } from "react-router";
import { Button } from "@/components/ui/button";
const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <Lottie
        animationData={errorAni}
        style={{
          height: 500,
        }}
      />
      <div className="space-y-2">
        <div>
          <h2 className="text-5xl font-bold">Error {error?.status}</h2>
          <p className="text-sm">{error?.error?.message}</p>
        </div>
        <Button onClick={() => navigate("/")}>Back Home</Button>
      </div>
    </div>
  );
};

export default ErrorPage;
