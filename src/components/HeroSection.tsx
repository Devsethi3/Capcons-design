"use client";

import { motion } from "motion/react";
import Link from "next/link";
import LogoSection from "./LogoSection";

const HeroSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#39089D] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl text-white sm:text-5xl md:text-6xl font-bold leading-tight">
          Features to build, connect, and grow your community
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto">
          Strengthen connections, drive engagement, and grow a thriving
          community. Reach your audience, foster loyalty, and monetize—free from
          ads and algorithms.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10"
        >
          <Link
            href="/start"
            className="inline-block bg-lime-400 hover:bg-lime-500 text-black font-medium rounded-full px-8 py-3 text-lg transition-colors"
          >
            Start Now
          </Link>
        </motion.div>
      </motion.div>
      <LogoSection />
    </section>
  );
};

export default HeroSection;
