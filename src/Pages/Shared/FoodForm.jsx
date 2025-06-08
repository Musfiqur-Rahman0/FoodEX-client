import { DatePicker } from "@/components/ui/DatePicker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AuthContext } from "@/Context/AuthContext";
import React, { use, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const FoodForm = ({ handlerFunc, btnText, primaryText, taskdata }) => {
  const [date, setDate] = useState();
  const { user } = use(AuthContext);
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      foodName: "",
      expairyDate: "",
      description: "",
      quantity: 0,
      price: 0,
      category: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-5 px-3 md:px-20 md:py-12 rounded-lg shadow-md h-full w-full my-10 space-y-10 border border-gray-100"
    >
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
            render={({ field }) => <Input {...field} />}
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
              render={({ field }) => <Input {...field} />}
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="price" className="font-bold">
              Price
            </label>
            <Controller
              name="price"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </div>
        </div>
        {/* tags filed with deadline */}
        <div className="grid grid-cols-2 gap-5 items-center">
          <div className="space-y-1 flex flex-col ">
            <label htmlFor="tags" className="font-bold">
              Tags
            </label>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="deadline" className="font-bold">
              Expairy Date
            </label>
            <Controller
              name="expairyDate"
              control={control}
              render={({ field }) => <DatePicker {...field} />}
            />
          </div>
        </div>
        <div className="space-y-1 flex flex-col">
          <label htmlFor="skills" className="font-bold">
            Quantity
          </label>
          <Controller
            name="quantity"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </div>

        <div className="space-y-1 flex flex-col">
          <label htmlFor="description" className="font-bold">
            Description
          </label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <Textarea {...field} />}
          />
        </div>

        {/* email */}
        <div className="space-y-1 flex flex-col">
          <label htmlFor="email" className="font-bold">
            Your Email
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </div>

        {/* name */}
        <div className="space-y-1 flex flex-col">
          <label htmlFor="user_name" className="font-bold">
            Your Name
          </label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} />}
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
