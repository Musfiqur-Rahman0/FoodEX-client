import React, { Suspense, use, useEffect, useState } from "react";
import image from "../../assets/download.jpeg";
import { Edit, EyeIcon } from "lucide-react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "@/Context/AuthContext";
import Spinner from "@/components/ui/Spinner";
import Lottie from "lottie-react";
import emptyState from "../../assets/emptyState.json";
import FoodForm from "../Shared/FoodForm";
import useFoodsApi from "@/Hooks/useFoodsApi";
import MyFoodList from "./MyFoodList";

const MyItems = () => {
  const navigate = useNavigate();
  const [myAddedFood, setMyAddedFood] = useState([]);
  const [isFoodLoading, setIsFoodLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const { user } = use(AuthContext);
  console.log(user);

  const { myFoodPromises } = useFoodsApi();

  // const fetchMyTask = async (token) => {
  //   try {
  //     setIsFoodLoading(true);
  //     const res = await fetch(`http://localhost:3000/myfoods/${user?.email}`, {
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const data = await res.json();
  //     setMyAddedFood(data);
  //     setIsFoodLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // console.log(myFoodPromises());

  // useEffect(() => {
  //   fetchMyTask(user?.accessToken);
  // }, []);

  return (
    <div className="px-2 lg:px-0 max-w-7xl mx-auto py-8 space-y-10 relative">
      <div>
        <h2 className="text-3xl font-semibold text-slate-800 border-l-6 border-orange-500 pl-2">
          My Food Listings
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          View and manage all the food items you've added in one place.
        </p>
      </div>

      <Suspense fallback="Loading your added food">
        <MyFoodList myFoodPromise={myFoodPromises(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyItems;
