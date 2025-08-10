import React, { useState } from "react";
import HeroSection from "./Herosection/HeroSection";
import NearlyExparySection from "./nearlyExparySection/NearlyExparySection";
import ExpairedFood from "./expairedFood/ExpairedFood";
import AboutFoodEX from "./aboutFoodEX/AboutFoodEX";
import OurAim from "./ourAim/OurAim";
import { useLoaderData } from "react-router";
import FoodOverview from "./foodOverview/FoodOverview";
import useAuth from "@/Hooks/useAuth";

const Home = () => {
  return (
    <section id="home" className="space-y-20">
      <HeroSection />
      <ExpairedFood />
      <AboutFoodEX />
      <NearlyExparySection />
      <OurAim />
      <FoodOverview />
    </section>
  );
};

export default Home;
