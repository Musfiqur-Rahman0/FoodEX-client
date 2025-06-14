import React from "react";
import burger from "../../assets/download.jpeg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { getReadAbleDate } from "@/lib/utils";

const FoodCard = ({ food }) => {
  const navigate = useNavigate();
  // console.log(food);
  const { quantity, foodName, category, foodImage, expairyDate, _id } = food;

  const formattedDate = getReadAbleDate(expairyDate);
  const now = new Date();
  const isExpaired = new Date(expairyDate) <= now;

  return (
    <div className="grid gap-4 border rounded-xl p-4 shadow-sm bg-white">
      <figure className="w-full h-48 overflow-hidden rounded-lg relative">
        <img
          src={foodImage || burger}
          alt="burger image"
          className="cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {isExpaired && (
          <div className="absolute px-5 py-1 text-sm rounded-full right-2 top-2 bg-red-500 text-white z-10">
            Expaired
          </div>
        )}
      </figure>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">{foodName}</h2>
        <p className="text-sm text-gray-600">
          Category: <span className="font-medium">{category}</span>
        </p>
        <p className="text-sm text-gray-600">
          quantity: <span className="font-medium">{quantity || 5} pcs</span>
        </p>
        <p className="text-sm text-gray-600">
          Expiry Date: <span className="font-medium">{formattedDate}</span>
        </p>
        <Button
          onClick={() => navigate(`/food/${_id}`)}
          className={"w-full rounded-full"}
        >
          See Details
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;
