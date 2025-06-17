import Spinner from "@/components/ui/Spinner";
import { Edit, EyeIcon } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import FoodForm from "../Shared/FoodForm";
import { useNavigate } from "react-router";
import useFoodsApi from "@/Hooks/useFoodsApi";
import { AuthContext } from "@/Context/AuthContext";
import emptyState from "../../assets/animation/emptyBox.json";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";

const MyFoodList = ({ foodData }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [myAddedFood, setMyAddedFood] = useState(foodData);

  const { updateFoodPromisesWithPut, myFoodPromises, deleteFoodPromises } =
    useFoodsApi();
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes delete it.",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        deleteFoodPromises(id).then((data) => {
          console.log(data);
          if (data?.deletedCount) {
            const remainings = myAddedFood.filter((food) => food._id !== id);
            setMyAddedFood(remainings);
            Swal.fire({
              title: "Deleted!",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleFoodUpdate = async (updatedFood) => {
    try {
      const result = await updateFoodPromisesWithPut(
        selectedFood._id,
        updatedFood
      );

      if (result.modifiedCount) {
        Swal.fire({
          title: "Food Updated successfully",
          icon: "success",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res = await myFoodPromises(user.email);
            setMyAddedFood(res);
          }
        });
      } else {
        Swal.fire({
          title: "Try again",
          icon: "error",
        });
      }
    } catch (error) {
      error;
      Swal.fire({
        title: "Internal server error",
        icon: "error",
      });
    }
    setIsUpdating(!isUpdating);
  };

  const handleCloseModal = () => {
    setIsUpdating(false);
    ("closed button clicked");
  };

  useEffect(() => {}, []);

  return (
    <>
      <table className="w-full">
        <thead className="block">
          <tr className="w-full grid grid-cols-9 md:grid-cols-12 pb-2 border-b border-gray-300">
            <td className="col-span-2">Food Image</td>
            <td className="col-span-4 text-center md:text-left">Food Title</td>
            <td className="col-span-2 hidden md:block">Category</td>
            <td className="hidden md:block"> Quantity</td>
            <td className="text-center col-span-3">Action</td>
          </tr>
        </thead>
        <tbody className="w-full">
          <div className="space-y-5">
            {myAddedFood?.length !== 0 ? (
              myAddedFood?.map((food, index) => (
                <tr
                  key={index}
                  className="w-full grid grid-cols-9  md:grid-cols-12 items-center py-3"
                >
                  <td className="col-span-2">
                    <img
                      src={food?.foodImage || image}
                      alt=""
                      className="h-[80px] w-[120px] rounded-lg"
                    />
                  </td>
                  <td className="col-span-4 text-center md:text-left">
                    {food?.foodName}
                  </td>
                  <td className="col-span-2 hidden md:block">
                    {food?.category}
                  </td>
                  <td className="hidden md:block">{food?.quantity}</td>
                  <td className="col-span-3 flex items-center justify-center gap-5">
                    <span
                      onClick={() => navigate(`/food/${food?._id}`)}
                      title="See details"
                      className="cursor-pointer"
                    >
                      <EyeIcon />
                    </span>
                    <span
                      onClick={() => {
                        setSelectedFood(food), setIsUpdating(true);
                      }}
                      title="Update details"
                      className="cursor-pointer"
                    >
                      <Edit />
                    </span>
                    <span
                      onClick={() => handleDelete(food?._id)}
                      title="Delete"
                      className="cursor-pointer"
                    >
                      <FaTrash />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <div className="flex items-center flex-col justify-center">
                <Lottie
                  animationData={emptyState}
                  className="h-[300px] md:h-[500px] md:block"
                />
                <Button variant="outline" onClick={() => navigate("/add-food")}>
                  Add Food
                </Button>
              </div>
            )}
          </div>
        </tbody>
      </table>

      {isUpdating && selectedFood && (
        <div className="absolute inset-0 backdrop:blur-3xl flex justify-center items-center top-40 mt-60   bg-opacity-50 z-50">
          <FoodForm
            handlerFunc={handleFoodUpdate}
            foodData={selectedFood}
            handleClose={handleCloseModal}
            btnText={"Update Food"}
            closeBtn={true}
          />
        </div>
      )}
    </>
  );
};

export default MyFoodList;
