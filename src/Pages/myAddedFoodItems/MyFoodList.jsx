import Spinner from "@/components/ui/Spinner";
import { Edit, EyeIcon } from "lucide-react";
import React, { use, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import FoodForm from "../Shared/FoodForm";
import { useNavigate } from "react-router";
import useFoodsApi from "@/Hooks/useFoodsApi";
import { AuthContext } from "@/Context/AuthContext";
import { HiComputerDesktop } from "react-icons/hi2";

const MyFoodList = ({ myFoodPromise }) => {
  const initialAdedfood = use(myFoodPromise);

  const [isFoodLoading, setIsFoodLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [myAddedFood, setMyAddedFood] = useState(initialAdedfood);

  const { updateFoodPromisesWithPut, myFoodPromises } = useFoodsApi();
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
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/delete-food/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
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
      console.log(error);
      Swal.fire({
        title: "Internal server error",
        icon: "error",
      });
    }
    setIsUpdating(!isUpdating);
  };

  const handleCloseModal = () => {
    setIsUpdating(false);
    console.log("closed button clicked");
  };

  return (
    <>
      <table className="w-full">
        <thead className="block">
          <tr className="w-full grid grid-cols-[200px_1fr_200px_200px_1fr] pb-2 border-b border-gray-300">
            <td>Food Image</td>
            <td>Food Title</td>
            <td>Category</td>
            <td>Quantity</td>
            <td className="text-center">Action</td>
          </tr>
        </thead>
        <tbody className="w-full">
          <div className="space-y-5">
            {isFoodLoading ? (
              <Spinner />
            ) : myAddedFood.length !== 0 ? (
              myAddedFood.map((food, index) => (
                <tr
                  key={index}
                  className="w-full grid grid-cols-[200px_1fr_200px_200px_1fr] items-center py-3"
                >
                  <td>
                    <img
                      src={food?.foodImage || image}
                      alt=""
                      className="h-[80px] w-[120px] rounded-lg"
                    />
                  </td>
                  <td>{food?.foodName}</td>
                  <td>{food?.category}</td>
                  <td>{food?.quantity}</td>
                  <td className="flex items-center justify-center gap-5">
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
              <Lottie
                animationData={emptyState}
                className="h-[300px] md:h-[500px] md:block"
              />
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
