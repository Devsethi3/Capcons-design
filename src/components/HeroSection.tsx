"use client";

import { motion } from "motion/react";
import Link from "next/link";
import LogoSection from "./LogoSection";

const HeroSection = () => {
  return (
    <section className="lg:py-32 py-28 bg-[#39089D] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto container"
      >
        <h1 className="lg:text-6xl md:text-4xl text-3xl text-white font-bold leading-">
           <br />
        </h1>
        <p className="mt-6 lg:text-lg text-sm sm:text-xl text-purple-100 max-w">
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10"
        >
          <Link
            href="/start"
            className="inline-block bg-lime-400 hover:bg-lime-500 text-black font-bold rounded-full lg:px-8 px-6 lg:py-3 py-2 lg:text-lg text-base transition"
          >
            Start
          </Link>
        </motion.div>
      </motion.div>
      <LogoSection />
    </section>
  );
};

export default HeroSection;

// Add some scroll animation and revealing effect to the text using smooth framer motion animations with clean and optimized code
