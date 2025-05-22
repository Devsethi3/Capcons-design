"use client";

import BrandSection from "@/components/BrandSection";
import CirclesPromo from "@/components/CirclePromo";
import CollabSection from "@/components/CollabSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
      </div>

      <div className="bg-white -mt-6 rounded-t-[2rem]">
        <FeaturesSection />
        <BrandSection />
        <CollabSection />w
        <CirclesPromo />
      </div>
    </>
  );
};

export default HomePage;
