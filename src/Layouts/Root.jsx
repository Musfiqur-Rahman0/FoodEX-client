import Footer from "@/Pages/Shared/Footer";
import Navbar from "@/Pages/Shared/Navbar";
import React from "react";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-300px)] mt-14">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
