import React from "react";
import HeroSection from "./Herosection/HeroSection";
import NearlyExparySection from "./nearlyExparySection/NearlyExparySection";
import ExpairedFood from "./expairedFood/ExpairedFood";
import AboutFoodEX from "./aboutFoodEX/AboutFoodEX";
import OurAim from "./ourAim/OurAim";

const Home = () => {
  return (
    <section id="home" className="space-y-20">
      <HeroSection />
      <NearlyExparySection />
      <ExpairedFood />
      <AboutFoodEX />
      <OurAim />
    </section>
  );
};

export default Home;
