"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import FeatureCard from "./FeatureCard";
import CommunitySection from "./CommunitySection";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="pt-20 container" ref={ref}>
      <div className="flex flex-col lg:flex-row lg:gap-8 gap-3">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-[100%] lg:w-[60%] mb-8 lg:mb-0"
        >
          <FeatureCard
            title="S-Commerce"
            description="Sell digital and physical products directly to your community with integrated payment solutions."
            bgColor="bg-purple-100"
            imageUrl="/s-commerce.png"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-[100%] lg:w-[40%] mb-8 lg:mb-0"
        >
          <FeatureCard
            title="Gamifications"
            description="Increase engagement with points, badges, and challenges to keep your community active."
            bgColor="bg-blue-100"
            imageUrl="/gamification-dashboard.jpg"
          />
        </motion.div>
      </div>
      <CommunitySection />
    </section>
  );
};

export default FeaturesSection;
