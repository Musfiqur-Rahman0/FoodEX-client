import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import React from "react";
import greenAni from "../../../assets/animation/green.json";

const OurAim = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Section – Text Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">
          Our Aim
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          At <span className="font-semibold text-[#003049]">FoodEX</span>, our
          goal is simple yet powerful:
          <span className="italic">
            {" "}
            reduce food waste and promote smarter food consumption habits
          </span>
          . Every year, millions of tons of food are thrown away due to poor
          planning and expired goods.
        </p>
        <ul className="text-gray-600 space-y-2 list-disc list-inside">
          <li>Promote awareness around food expiry and storage.</li>
          <li>Empower individuals with easy-to-use tracking tools.</li>
          <li>Build a sustainable habit of responsible consumption.</li>
          <li>
            Leverage technology to reduce household and retail food waste.
          </li>
        </ul>
        <div className="mt-6">
          <Button className="px-6 py-2 bg-[#003049] text-white rounded-md shadow hover:bg-[#00223d] transition">
            Join the Movement
          </Button>
        </div>
      </div>

      {/* Right Section – Image */}
      <div className="w-full h-full flex justify-center">
        <Lottie animationData={greenAni} />
      </div>
    </div>
  );
};

export default OurAim;
