import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosSecuire from "./useAxiosSecuire";

const usePagination = (endpoint, page = 1, limit = 6) => {
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(null);
  const axiosSecure = useAxiosSecuire();
  const {
    data: response,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["foods", page],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `${endpoint}&page=${page}&limit=${limit}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    if (response) {
      setData(response.data);
      setTotal(response.total);
      setTotalPages(response.totalPages);
    }
  }, [response]);

  return {
    data,
    total,
    totalPages,
    isPending,
    isError,
  };
};

export default usePagination;
