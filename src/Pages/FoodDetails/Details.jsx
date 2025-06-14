import React, { use, useEffect, useState } from "react";
import foodImg from "../../assets/download.jpeg";
import { useLoaderData, useParams } from "react-router";
import { getReadAbleDate } from "@/lib/utils";
import { AuthContext } from "@/Context/AuthContext";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import Swal from "sweetalert2";
import CountDown from "../Shared/CountDown";

const Details = () => {
  const food = useLoaderData();
  const [foodData, setFoodData] = useState(food);

  // const title = "chessy burger";
  // const expired = true;
  // const inStock = false;
  const { user } = use(AuthContext);

  const {
    userName,
    userEmail,
    tags,
    quantity,
    foodName,
    foodImage,
    expairyDate,
    description,
    category,
    addedOn,
    price,
    moreDetails,
  } = foodData;

  const currentTime = new Date();
  // console.log(expairyDate);

  const isExpaired = new Date(expairyDate) < currentTime;

  const moreInfo = moreDetails?.split(".\n") || moreDetails?.split(".");
  const isAdmin = userEmail === user?.email;

  const expairedTime = getReadAbleDate(expairyDate);
  const addedTime = getReadAbleDate(addedOn);

  // const handleAddNote = (e) => {
  //   e.preventDefault();
  //   const note = e.target.name.value;
  //   console.log("submited");
  //   console.log(note);

  // };

  const { control, handleSubmit, watch, reset } = useForm({});

  const { id } = useParams();
  const onSubmit = (data) => {
    const adminNote = {
      ...data,
      notePostedOn: currentTime,
    };
    // console.log(adminNote);
    fetch(`http://localhost:3000/update-food/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminNote),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            title: "Note added successfully",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:3000/food/${id}`)
                .then((res) => res.json())
                .then((data) => setFoodData(data));
            }
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      {/* <!-- Food Details Card --> */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        {/* <!-- Image Section --> */}
        <div className="relative">
          <img
            id="foodImage"
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Food Image"
            className="w-full h-[350px] object-cover"
          />
          {isExpaired ? (
            <div
              id="expiryBadge"
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium text-white bg-red-500"
            >
              {/* <!-- Expiry badge will be updated by JS --> */}
              Expaired
            </div>
          ) : (
            <div
              id="expiryBadge"
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium text-white bg-green-600"
            >
              {/* <!-- Expiry badge will be updated by JS --> */}
              Fresh
            </div>
          )}
        </div>

        {/* <!-- Content Section --> */}
        <div className="p-6">
          {/* <!-- Title and Price --> */}
          <div className="flex justify-between items-center mb-4">
            <h1 id="foodName" className="text-3xl font-bold text-gray-800">
              {foodName || "Margherita Pizza"}
            </h1>
            <span
              id="foodPrice"
              className="text-2xl font-semibold text-green-600"
            >
              ${price || "12.99"}
            </span>
          </div>

          {/* <!-- Category and Quantity --> */}
          <div className="flex gap-4 mb-4">
            <div className="flex items-center">
              <span className="text-gray-600 font-medium">Category:</span>
              <span id="foodCategory" className="ml-2 text-gray-800">
                {category}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 font-medium">Quantity:</span>
              <span id="foodQuantity" className="ml-2 text-gray-800">
                Available: {quantity}
              </span>
            </div>
          </div>

          {/* <!-- Expiry Date --> */}
          <div className="mb-1">
            <span className="text-gray-600 font-medium">Expiry Date:</span>
            <span id="foodExpiry" className="ml-2 text-gray-800">
              {expairedTime}
            </span>
          </div>
          <div className="mb-4">
            <span className="text-gray-600 font-medium">Added on:</span>
            <span id="foodExpiry" className="ml-2 text-gray-800">
              {addedTime}
            </span>
          </div>

          {/* <!-- Description --> */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Description
            </h2>
            <p id="foodDescription" className="text-gray-600">
              {description}
            </p>
          </div>

          {/* <!-- More Details --> */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              More Details
            </h2>
            <ul
              id="foodDetails"
              className="list-disc list-inside text-gray-600"
            >
              {moreInfo?.map((info, i) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6 flex items-center gap-2 text-xl font-bold">
            <CountDown isoDate={expairyDate} />
          </div>

          <div className="mb-6 ">
            <h2 className="text-xl font-semibold text-slate-800">Note </h2>
            <p className="text-sm text-slate-600">
              {foodData?.adminNote ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor nostrum unde, aliquid nihil alias omnis eos ab voluptas quibusdam"}
            </p>
          </div>

          {/* <!-- User Note Section --> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Add a Note
            </h2>
            <Controller
              name="adminNote"
              control={control}
              rules={{ required: "You can't submited an empty note." }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Textarea
                    {...field}
                    placeholder={!isAdmin && "Only admin can add note on this"}
                    className={
                      error ? `border border-red-500` : "border border-gray-400"
                    }
                  />
                  {error && (
                    <p className="text-red-500 font-semibold">
                      {error.message}
                    </p>
                  )}
                </>
              )}
            />
            <Button
              disabled={!isAdmin}
              type="submit"
              className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Save Note
            </Button>
            <p id="noteStatus" className="mt-2 text-sm text-gray-600"></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
