import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Spinner from "@/components/ui/Spinner";
import { GlobalContext } from "@/Context/GlobalContext";
import React, { use } from "react";
import CountUp from "react-countup";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion } from "motion/react";
import Lottie, { LottiePlayer } from "lottie-react";

const FoodOverview = () => {
  const { loading, nearlyexFood, expairedFoods } = use(GlobalContext);

  const pieData = [
    { name: "Expired", value: expairedFoods.length, fill: "#ef4444" },
    { name: "Nearly Expired", value: nearlyexFood.length, fill: "#f97316" },
  ];

  const COLORS = ["#e63946", "#f4a261"];

  return loading ? (
    <Spinner />
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto py-8"
    >
      {/* Lottie Animation */}
      <div className="flex justify-center mb-4">
        {/* <LottiePlayer
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_j1adxtyb.json" // replace with your Lottie link
          style={{ height: "100px", width: "100px" }}
        /> */}
      </div>

      {/* Title */}
      <h2 className=" text-2xl font-bold mb-6">Food Expiration Overview</h2>

      {/* Card with Chart */}
      <Card className="">
        <CardContent>
          <div className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={300} className={""}>
              <PieChart className="pb-5">
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend className="mt-5" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FoodOverview;
