import Lottie from "lottie-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import signupAnimation from "../../assets/animation/registerAnimation.json";
import useAuth from "@/Hooks/useAuth";

const style = {
  height: "100% ",
};

const Signup = () => {
  const { signUp, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSingup = (e) => {
    e.preventDefault();

    const form = e.target;
    const formdata = new FormData(form);
    const { email, password, first_name, photoURL } = Object.fromEntries(
      formdata.entries()
    );
    signUp(email, password, first_name, photoURL, navigate);
  };

  return (
    <div className="grid md:grid-cols-2 max-w-7xl mx-auto pt-20  ">
      <Lottie
        animationData={signupAnimation}
        style={style}
        className="hidden md:block"
      />

      <form
        onSubmit={handleSingup}
        className="w-full  flex flex-col items-center justify-center   h-full space-y-8"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-5xl font-bold">Create Account</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Welcome back chief please enter your details
          </p>
        </div>
        <div className="space-y-5 w-4/5 ">
          <div className=" grid grid-cols-2 gap-4">
            <div className="w-full space-y-1">
              <label htmlFor="email">First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="Your First Name"
                className="py-2 w-full rounded-md shadow-sm border border-gray-300 px-3"
              />
            </div>
            <div className="w-full space-y-1">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                className="py-2 w-full rounded-md shadow-sm border border-gray-300 px-3"
              />
            </div>
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="photourl">Photo url</label>
            <input
              type="url"
              placeholder="Enter your profile url"
              name="photoURL"
              className="py-2 rounded-md shadow-sm border border-gray-300 px-3"
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="py-2 rounded-md shadow-sm border border-gray-300 px-3"
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="email">Password</label>
            <input
              type="text"
              placeholder="Enter your email"
              pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
              name="password"
              required
              className="py-2 rounded-md shadow-sm border border-gray-300 px-3"
            />
          </div>

          <div className="w-full space-y-4">
            <input
              type="submit"
              className=" text-center bg-blue-600 text-white  w-full py-2 cursor-pointer rounded-md"
              value="Register"
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="cursor-pointer text-red-500 font-semibold"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
