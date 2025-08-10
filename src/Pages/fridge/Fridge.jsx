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
import { useQuery } from "@tanstack/react-query";
import useAxiosSecuire from "@/Hooks/useAxiosSecuire";
import FoodCardSkeleton from "../Shared/FoodCardSkeleton";
import usePagination from "@/Hooks/usePagination";
import PaginationComp from "@/components/pagination/PaginationComp";

const Fridge = () => {
  const [isFoodLoding, setIsFoodLoading] = useState(false);
  const [allFoods, setAllFoods] = useState([]);
  const [category, setCategory] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const axiosSecure = useAxiosSecuire();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 9;

  const {
    data: response,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["foods", searchQuery, selectedCategory, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/foods?title=${searchQuery}&category=${selectedCategory}&page=${currentPage}&limit=${limit}`
      );
      return res.data;
    },
  });

  const fetchCategory = async () => {
    try {
      setIsCategoryLoading(true);
      const res = await fetch(
        "https://food-server-orpin-six.vercel.app/categories"
      );
      const data = await res.json();

      setCategory(data);
      setIsCategoryLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectedCategory = async (value) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    if (response) {
      setAllFoods(response.data);
      setTotalPages(response.totalPages);
    }
  }, [response]);

  return (
    <div className="pt-20 py-8 px-5 space-y-10 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-semibold text-slate-800    border-l-6 border-orange-500  pl-2">
          Smart Fridge
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          A smarter way to manage your food inventory and avoid spoilage.
        </p>

        <div className="mt-3 flex flex-col md:grid md:grid-cols-2 gap-3 md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search food"
              className={"border border-gray-400"}
            />

            <Button type="submit" className="">
              Search
            </Button>
          </div>

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
      {isPending ? (
        <div className=" grid  lg:grid-cols-3 gap-5">
          {[...Array(6)].map((_, idx) => (
            <FoodCardSkeleton key={idx} />
          ))}
        </div>
      ) : (
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
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-5">
          <PaginationComp
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default Fridge;
