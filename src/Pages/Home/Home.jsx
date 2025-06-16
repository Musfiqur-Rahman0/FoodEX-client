import React from "react";
import HeroSection from "./Herosection/HeroSection";
import NearlyExparySection from "./nearlyExparySection/NearlyExparySection";
import ExpairedFood from "./expairedFood/ExpairedFood";
import AboutFoodEX from "./aboutFoodEX/AboutFoodEX";
import OurAim from "./ourAim/OurAim";
import { useLoaderData } from "react-router";
import FoodOverview from "./foodOverview/FoodOverview";

const Home = () => {
  return (
    <section id="home" className="space-y-20">
      <HeroSection />
      <NearlyExparySection />
      <AboutFoodEX />
      <ExpairedFood />
      <OurAim />
      <FoodOverview />
    </section>
  );
};

export default Home;
