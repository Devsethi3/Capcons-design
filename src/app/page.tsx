"use client";

import BrandSection from "@/components/BrandSection";
import CollabSection from "@/components/CollabSection";
import CommunitySection from "@/components/CommunitySection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
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
        <CollabSection />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default HomePage;
