"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CommunitySection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-0 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl lg:mt-8 mt-3 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute top-[-10%] left-[10%] w-32 h-32 rounded-full bg-emerald-400 opacity-20 blur-2xl z-0" />

        {/* Flot */}
        <motion.div
          variants={avatarVariants}
          className="absolute bottom-[-10%] right-5 w-24 h-24 rounded-full z-10 hover:scale-110 transition-transform duration-300"
        >
          <Image
            src="/avatar-1.png"
            alt="avatar"
            width={96}
            height={96}
            className="rounded-full"
          />
        </motion.div>

        <motion.div
          variants={avatarVariants}
          className="absolute left-0 lg:bottom-[-12%] bottom-0 w-20 h-20 rounded-full z-10 hover:scale-110 transition-transform duration-300"
        >
          <Image
            src="/avatar-2.png"
            alt="avatar"
            width={80}
            height={80}
            className="rounded-full"
          />
        </motion.div>

        <motion.div
          variants={avatarVariants}
          className="absolute left-[-5%] lg:top-[20%] top-0 w-16 h-16 rounded-full z-10 hover:scale-110 transition-transform duration-300"
        >
          <Image
            src="/avatar-3.png"
            alt="avatar"
            width={64}
            height={64}
            className="rounded-full"
          />
        </motion.div>

        <motion.div
          variants={avatarVariants}
          className="absolute right-[-5%] lg:top-[20%] top-[-5%] w-20 h-20 rounded-full z-10 hover:scale-110 transition-transform duration-300"
        >
          <Image
            src="/avatar-4.png"
            alt="avatar"
            width={80}
            height={80}
            className="rounded-full"
          />
        </motion.div>

        {/* Center Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto py-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[1.4rem] text-center sm:text-3xl md:text-4xl font-extrabold text-[#2E134D] leading-tight px-4"
          >
            Connect with like-minded individuals, share insights, exchange
            advice, and build meaningful relationships within a supportive
            community.
          </motion.h2>
        </div>
      </div>
    </motion.section>
  );
};

export default CommunitySection;
