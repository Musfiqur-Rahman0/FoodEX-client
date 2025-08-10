import React, { Suspense, use, useEffect, useState } from "react";
import image from "../../assets/download.jpeg";
import { Edit, EyeIcon } from "lucide-react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "@/Context/AuthContext";
import Spinner from "@/components/ui/Spinner";

import useFoodsApi from "@/Hooks/useFoodsApi";
import MyFoodList from "./MyFoodList";

const MyItems = () => {
  const [myAddedFood, setMyAddedFood] = useState([]);
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);

  const { myFoodPromises } = useFoodsApi();

  useEffect(() => {
    if (!user?.email || !user?.accessToken) return;

    setLoading(true);
    myFoodPromises(user.email)
      .then((data) => {
        setMyAddedFood(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading food data:", error);
        setLoading(false);
      });
  }, [user?.email, user?.accessToken]);

  console.log(myAddedFood);

  return loading || !user?.email || !user.accessToken ? (
    <Spinner />
  ) : (
    <div className="pt-20 px-2 lg:px-0 max-w-7xl mx-auto py-8 space-y-10 relative">
      <div>
        <h2 className="text-3xl font-semibold text-slate-800 border-l-6 border-orange-500 pl-2">
          My Food Listings
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          View and manage all the food items you've added in one place.
        </p>
      </div>

      <MyFoodList foodData={myAddedFood} />
    </div>
  );
};

export default MyItems;
