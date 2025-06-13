import Footer from "@/Pages/Shared/Footer";
import Header from "@/Pages/Shared/Header";
import React from "react";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-300px)] mt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
