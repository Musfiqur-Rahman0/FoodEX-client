import React from "react";
import FoodForm from "../Shared/FoodForm";

const AddFood = () => {
  const handleAddFood = (e) => {
    e.preventDefault();
    console.log("submited");
    const form = e.target;
    const formdata = new FormData(form);
    const formObj = Object.fromEntries(formdata.entries());
    console.log(formObj);
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
