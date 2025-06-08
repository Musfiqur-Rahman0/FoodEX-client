import { Button } from "@/components/ui/button";
import React from "react";

const AboutFoodEX = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Section – Image or Illustration */}
      <div className="w-full h-full flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/expiration-date-concept-illustration_114360-9733.jpg"
          alt="Food Expiry Illustration"
          className="w-full max-w-md rounded-xl "
        />
      </div>

      {/* Right Section – Text Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">
          About FoodEX
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          <span className="font-semibold text-[#003049]">FoodEX</span> is a
          modern web application that empowers users to reduce food waste by
          tracking the expiry dates of their groceries. It alerts you before
          items go bad and helps manage your kitchen more efficiently.
        </p>
        <ul className="text-gray-600 space-y-2 list-disc list-inside">
          <li>Add and monitor food items with expiry dates.</li>
          <li>Get timely alerts before items expire.</li>
          <li>Update, delete, and view items easily.</li>
          <li>
            Built with full-stack features: authentication, CRUD, and secure
            data handling.
          </li>
        </ul>
        <div className="mt-6">
          <Button className="px-6 py-2 bg-[#003049] text-white rounded-md shadow hover:bg-[#00223d] transition">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutFoodEX;
