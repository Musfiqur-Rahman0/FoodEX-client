import React from "react";
import HeroSection from "./Herosection/HeroSection";
import NearlyExparySection from "./nearlyExparySection/NearlyExparySection";

const Home = () => {
  return (
    <section id="home" className="space-y-20">
      <HeroSection />
      <NearlyExparySection />
    </section>
  );
};

export default Home;
