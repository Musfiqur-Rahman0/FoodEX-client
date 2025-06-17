import Spinner from "@/components/ui/Spinner";
import { GlobalContext } from "@/Context/GlobalContext";
import React, { use } from "react";
import CountUp from "react-countup";

const FoodOverview = () => {
  const { loading, nearlyexFood, expairedFoods } = use(GlobalContext);
  return loading ? (
    <Spinner />
  ) : (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-2xl shadow-md">
      {/* Expired Food */}
      <div className="flex flex-col items-center justify-center p-6 border rounded-xl bg-red-50">
        <h2 className="text-lg font-semibold text-red-700">Expired Foods</h2>
        <CountUp
          end={expairedFoods.length}
          duration={5}
          className="text-4xl font-bold text-red-800"
        />
      </div>

      {/* Nearly Expired Food */}
      <div className="flex flex-col items-center justify-center p-6 border rounded-xl bg-yellow-50">
        <h2 className="text-lg font-semibold text-yellow-700">
          Nearly Expired Foods
        </h2>
        <CountUp
          end={nearlyexFood?.length}
          duration={5}
          className="text-4xl font-bold text-yellow-800"
        />
      </div>
    </div>
  );
};

export default FoodOverview;
