"use client";

import BrandSection from "@/components/BrandSection";
import CirclesPromo from "@/components/CirclePromo";
import CollabSection from "@/components/CollabSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
      </div>

      <div className="bg-white -mt-6 rounded-t-[2rem] ">
        <FeaturesSection />
        <BrandSection />
        <CollabSection />
      </div>
      <div className="bg-white pb-20 -mb-6 relative rounded-b-[2rem]">
        <CirclesPromo />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
