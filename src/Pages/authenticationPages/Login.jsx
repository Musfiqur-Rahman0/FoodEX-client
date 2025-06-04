import Lottie from "lottie-react";
import React, { use, useState } from "react";
import loginAnimation from "../../assets/loginAnimation.json";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import useAuth from "@/Hooks/useAuth";

const style = {
  height: "100%",
};

const Login = () => {
  const { isloading, user } = use(AuthContext);
  const { loginWithGoogle, login } = useAuth();

  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const formdata = new FormData(form);
    const email = formdata.get("email");
    const password = formdata.get("password");
    login(email, password, navigate);
  };

  return (
    <div className="pt-20  grid md:grid-cols-2 max-w-7xl gap-10 md:gap-0 mx-auto  items-center justify-center">
      <form
        onSubmit={handleLoginForm}
        className="w-full  flex flex-col items-center justify-center   h-full space-y-8"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-5xl font-bold">Welcome Back</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Welcome back chief please enter your details
          </p>
        </div>
        <div className="space-y-5 w-full md:w-4/5 ">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="py-2 w-full rounded-md shadow-sm border border-gray-300 px-3"
            />
          </div>

          <div className="space-y-1 flex flex-col">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
              required
              className="py-2 w-full rounded-md shadow-sm border border-gray-300 px-3"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border rounded-md border-gray-300 focus:rounded-md active:rounded-md bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <p className="font-semibold text-blue-500 text-sm cursor-pointer">
              Forget Password?
            </p>
          </div>

          <div className="w-full space-y-4">
            <input
              type="submit"
              className=" text-center bg-blue-600 text-white  w-full py-2 cursor-pointer rounded-md"
              value="Login"
            />
            <button
              type="button"
              onClick={() => loginWithGoogle(navigate)}
              className="flex items-center justify-center gap-2 text-center  border border-gray-300 w-full py-2 cursor-pointer rounded-md"
            >
              <FcGoogle size={24} />
              <span> Sign in with Google</span>
            </button>
            <p className="text-center">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="cursor-pointer text-red-500 font-semibold"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </form>
      <Lottie
        animationData={loginAnimation}
        style={style}
        className="hidden md:block"
      />
    </div>
  );
};

export default Login;
