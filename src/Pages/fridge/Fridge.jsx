import React, { useEffect, useState } from "react";
import FoodCard from "../Shared/FoodCard";
import { useLoaderData, useNavigation } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CategoryDropdown } from "../Shared/CategoryDropdown";
import { Controller, useForm } from "react-hook-form";
import Spinner from "@/components/ui/Spinner";
import Lottie from "lottie-react";
import emptyBox from "../../assets/animation/emptyBox.json";

const Fridge = () => {
  const foods = useLoaderData();
  const [isFoodLoding, setIsFoodLoading] = useState(false);
  const [allFoods, setAllFoods] = useState(foods);
  const [category, setCategory] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const fetchCategory = async () => {
    try {
      setIsCategoryLoading(true);
      const res = await fetch(
        "http://food-server-orpin-six.vercel.app/categories"
      );
      const data = await res.json();

      setCategory(data);
      setIsCategoryLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectedCategory = async (value) => {
    try {
      const res = await fetch(
        `http://food-server-orpin-six.vercel.app/filter/${value}`
      );
      const data = await res.json();
      setAllFoods(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (data) => {
    // e.preventDefault();
    const { query } = data;
    try {
      setIsFoodLoading(true);
      const res = await fetch(
        `http://food-server-orpin-six.vercel.app/search?query=${query}`
      );
      const searchedFood = await res.json();
      setAllFoods(searchedFood);
      setIsFoodLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const { control, handleSubmit } = useForm();

  // (selectedCategory);

  useEffect(() => {
    fetchCategory();
  }, []);
  // (foods);
  // (searchQuery);
  return (
    <div className="py-8 px-5 space-y-10 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-semibold text-slate-800    border-l-6 border-orange-500  pl-2">
          Smart Fridge
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          A smarter way to manage your food inventory and avoid spoilage.
        </p>

        <div className="mt-3 flex flex-col md:grid md:grid-cols-2 gap-3 md:items-center md:justify-between">
          <form
            onSubmit={handleSubmit(handleSearch)}
            className="flex items-center gap-2 "
          >
            <Controller
              name="query"
              control={control}
              // rules={"Search queary required"}
              rules={{ required: "Search query should not be empty" }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    {...field}
                    placeholder="Search food"
                    className={
                      error ? `border border-red-500` : "border border-gray-400"
                    }
                  />
                </>
              )}
            />
            <Button type="submit" className="">
              Search
            </Button>
          </form>
          <form className="flex items-center justify-center md:justify-end">
            {!isCategoryLoading ? (
              <CategoryDropdown
                categories={category}
                handleSelectedCategory={handleSelectedCategory}
              />
            ) : (
              <p>loading...</p>
            )}
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allFoods.length === 0 ? (
          <div className="flex items-center justify-center w-full h-full md:col-span-2 lg:col-span-3">
            <Lottie
              animationData={emptyBox}
              style={{
                height: 500,
              }}
            />
          </div>
        ) : (
          allFoods?.map((food) => <FoodCard food={food} key={food._id} />)
        )}
      </div>
    </div>
  );
};

export default Fridge;
