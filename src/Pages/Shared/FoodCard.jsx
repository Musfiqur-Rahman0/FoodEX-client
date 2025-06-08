import React from "react";
import burger from "../../assets/download.jpeg";
import { Button } from "@/components/ui/button";

const FoodCard = ({ food }) => {
  return (
    <div className="grid gap-4 border rounded-xl p-4 shadow-sm bg-white">
      <figure className="w-full h-48 overflow-hidden rounded-lg">
        <img
          src={burger}
          alt="burger image"
          className="cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">Cheesy Burger</h2>
        <p className="text-sm text-gray-600">
          Category: <span className="font-medium">Fast Food</span>
        </p>
        <p className="text-sm text-gray-600">
          Quantity: <span className="font-medium">10 pcs</span>
        </p>
        <p className="text-sm text-gray-600">
          Expiry Date: <span className="font-medium">2025-06-30</span>
        </p>
        <Button className={"w-full rounded-full"}>See Details</Button>
      </div>
    </div>
  );
};

export default FoodCard;
