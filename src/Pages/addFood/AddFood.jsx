import React from "react";
import FoodForm from "../Shared/FoodForm";
import { getReadAbleDate } from "@/lib/utils";
import Swal from "sweetalert2";
import { useNavigate, useNavigation } from "react-router";

const AddFood = () => {
  const navigate = useNavigate();
  const currentTime = new Date();
  // const formatedCurrentTime = getReadAbleDate(currentTime);
  const handleAddFood = (data) => {
    console.log(data);
    const newFood = {
      ...data,
      addedOn: currentTime,
    };

    console.log(newFood);
    fetch("http://localhost:3000/add-food", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Food added successfully",
            icon: "success",
          }).then((result) => {
            if (result?.isConfirmed) {
              console.log(result);
              navigate("/my-items");
              console.log(result.isConfirmed); // ✅ This logs true
            }
          });
        } else {
          Swal.fire({
            title: "Try again",
            icon: "error",
          });
        }
      });
  };

  return (
    <section>
      <div className="  max-w-7xl mx-auto flex items-center justify-center h-full ">
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
