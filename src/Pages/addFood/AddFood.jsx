import React from "react";
import FoodForm from "../Shared/FoodForm";
import { getReadAbleDate } from "@/lib/utils";
import Swal from "sweetalert2";
import { data, useNavigate, useNavigation } from "react-router";
import useFoodsApi from "@/Hooks/useFoodsApi";
import axios from "axios";

const AddFood = () => {
  const navigate = useNavigate();
  const currentTime = new Date();
  const { addFoodPromises } = useFoodsApi();
  // const formatedCurrentTime = getReadAbleDate(currentTime);

  const handleAddFood = async (data) => {
    const file = data.foodImage;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
      const imageURl = res.data.data.display_url;

      data.foodImage = imageURl;
      const newFood = {
        ...data,
        addedOn: currentTime,
      };
      const result = await addFoodPromises(newFood);
      if (result.insertedId) {
        Swal.fire({
          title: "Food added successfully",
          icon: "success",
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/my-items");
          }
        });
      } else {
        Swal.fire({
          title: "Try again",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error adding food:", error);
      Swal.fire({
        title: "Server Error",
        text: "Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <section>
      <div className="  max-w-7xl mx-auto flex items-center justify-center h-full  px-2 sm:px-0">
        <FoodForm
          btnText={"Add Task"}
          handlerFunc={handleAddFood}
          primaryText={"Add New food"}
        />
      </div>
    </section>
  );
};

export default AddFood;
