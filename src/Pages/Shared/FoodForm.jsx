import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/DatePicker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AuthContext } from "@/Context/AuthContext";

import React, { use, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";

const FoodForm = ({
  handlerFunc,
  btnText,
  primaryText,
  foodData,
  closeBtn,
  handleClose,
}) => {
  const [date, setDate] = useState();
  const { user } = use(AuthContext);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      userName: user?.displayName,
      userEmail: user?.email,
      foodName: foodData?.foodName || "",
      expairyDate: foodData?.expairyDate || null,
      description: foodData?.description || "",
      moreDetails: foodData?.moreDetails || "",
      quantity: foodData?.quantity || 0,
      price: foodData?.price || 0,
      category: foodData?.category || "",
      foodImage: foodData?.foodImage || "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(handlerFunc)}
      className="relative py-5 px-3 md:px-20 md:py-12 rounded-lg shadow-md  w-full my-10 space-y-10 border border-gray-100 bg-white"
    >
      {closeBtn && (
        <Button
          onClick={handleClose}
          type="button"
          className="absolute !right-4 !top-4"
        >
          <IoMdClose />
        </Button>
      )}
      <div className="text-center">
        <h2 className="text-4xl font-bold">{primaryText}</h2>
      </div>

      <div className="w-full space-y-8">
        <h4 className="text-xl font-bold pl-2 border-l-4 border-red-500">
          Add Food details
        </h4>
        {/* title field */}
        <div className="space-y-1 flex flex-col">
          <label htmlFor="title" className="font-bold">
            Food Name
          </label>
          <Controller
            name="foodName"
            control={control}
            rules={{ required: "Food name is required" }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input
                  {...field}
                  className={
                    error ? `border border-red-500` : "border border-gray-400"
                  }
                />
                {error && (
                  <p className="text-red-500 font-semibold">{error.message}</p>
                )}
              </>
            )}
          />
        </div>
        {/* category field  with budget*/}
        <div className="grid grid-cols-2 gap-5 items-center">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="category" className="font-bold">
              Category
            </label>
            <Controller
              name="category"
              control={control}
              rules={{ required: "category should not be empty" }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    {...field}
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
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="price" className="font-bold">
              Price
            </label>
            <Controller
              name="price"
              control={control}
              rules={{ required: "Price can't be negetive or empty" }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    type="number"
                    {...field}
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
          </div>
        </div>

        {/* tags filed with expairy date */}
        <div className="grid grid-cols-2 gap-5 items-center">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="deadline" className="font-bold">
              Expairy Date
            </label>
            <Controller
              name="expairyDate"
              control={control}
              rules={{ required: "expairy date is required" }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <DatePicker value={field.value} onChange={field.onChange} />
                  {error && (
                    <p className="text-red-500 font-semibold text-sm">
                      {error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>

          <div className="space-y-1 flex flex-col">
            <label htmlFor="skills" className="font-bold">
              Quantity
            </label>
            <Controller
              name="quantity"
              control={control}
              rules={{ required: "Quantity can't be negative or empty" }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    type={"number"}
                    {...field}
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
          </div>
        </div>

        <div className="space-y-1 flex flex-col">
          <label htmlFor="foodImage" className="font-bold">
            Food Image
          </label>
          <Controller
            name="foodImage"
            control={control}
            rules={{ required: "Food image is required" }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input
                  type="url"
                  {...field}
                  className={
                    error ? `border border-red-500` : "border border-gray-400"
                  }
                />
                {error && (
                  <p className="text-red-500 font-semibold">{error.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="space-y-1 flex flex-col">
          <label htmlFor="description" className="font-bold">
            Description
          </label>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Please provide some description" }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Textarea
                  {...field}
                  className={
                    error ? `border border-red-500` : "border border-gray-400"
                  }
                />
                {error && (
                  <p className="text-red-500 font-semibold">{error.message}</p>
                )}
              </>
            )}
          />
        </div>
        <div className="space-y-1 flex flex-col">
          <label htmlFor="moreDetails" className="font-bold">
            More Details
          </label>
          <Controller
            name="moreDetails"
            control={control}
            rules={{ required: "Please provide more details " }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Textarea
                  {...field}
                  placeholder="Provide some more info eg: ingredient, Calories, Preparation time etc and separate with dot ( . )"
                  className={
                    error ? `border border-red-500` : "border border-gray-400"
                  }
                />
                {error && (
                  <p className="text-red-500 font-semibold">{error.message}</p>
                )}
              </>
            )}
          />
        </div>

        {/* email */}
        <div className="space-y-1 flex flex-col">
          <label htmlFor="email" className="font-bold">
            Your Email
          </label>
          <Controller
            name="userEmail"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} disabled />}
          />
        </div>

        {/* name */}
        <div className="space-y-1 flex flex-col">
          <label htmlFor="user_name" className="font-bold">
            Your Name
          </label>
          <Controller
            name="userName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} disabled />}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-black dark:border dark:border-white rounded-full w-full text-white py-3 cursor-pointer"
        >
          {btnText}
        </button>
      </div>
    </form>
  );
};

export default FoodForm;
