"use client";

import React from "react";
import { motion } from "motion/react";
import { Trophy, Star } from "lucide-react";
import Image from "next/image";

const MagicReachDashboard: React.FC = () => {
  const challengeDays = [
    { day: 1, title: "Reel It Up!", completed: true },
    { day: 2, title: "Quick Quiz", completed: true },
    { day: 3, title: "Poster Power", completed: true },
    { day: 4, title: "Step It Out", completed: false },
    { day: 5, title: "Spread the Vibe", completed: false },
    { day: 6, title: "Guess the Beat", completed: true },
    { day: 7, title: "Mega XP Hunt!", completed: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      <motion.div
        className=""
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full flex items-center gap-6 md:gap-10 pb-4">

          <motion.div
            className="h-[70vh] min-w-[320px] md:min-w-[450px] bg-white rounded-3xl p-6 md:p-8 relative flex-shrink-0"
            variants={itemVariants}
          >
            <motion.div
              className="absolute -top-3 left-6 bg-lime-400 text-black px-4 py-2 rounded-full font-bold text-lg shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-orange-500">🎯</span>
              200 XP
            </motion.div>

            <div className="mt-8 h-full flex flex-col">
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-800 mb-2">
                  7-Day XP Challenge
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Earn XP daily and climb the leaderboard to unlock exclusive
                  perks!
                </p>
              </div>

              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 content-start">
                {challengeDays.map((challenge) => (
                  <motion.div
                    key={challenge.day}
                    className={`relative p-3 md:p-4 rounded-2xl border-2 transition-all ${
                      challenge.completed
                        ? "border-green-400 bg-green-50"
                        : challenge.day === 4
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                        challenge.completed
                          ? "bg-green-500"
                          : challenge.day === 4
                          ? "bg-red-500"
                          : "bg-gray-400"
                      }`}
                    >
                      {challenge.completed
                        ? "✓"
                        : challenge.day === 4
                        ? "✗"
                        : "○"}
                    </div>

                    <div className="text-center">
                      <div className="text-xs md:text-sm font-medium text-gray-500 mb-1">
                        Day {challenge.day}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-gray-800 leading-tight">
                        {challenge.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="h-[70vh] min-w-[320px] md:min-w-[1024px] rounded-2xl p-6 md:p-8 relative overflow-hidden flex-shrink-0 bg-[#e2d9ed]"
            variants={itemVariants}
          >
            <div className="mt-5">
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-extrabold text-gray-800 mb-4">
                Magic Reach
              </h1>
              <p className="text-gray-600 font-bold text-sm md:text-base leading-relaxed">
                Lorem Ipsum is simply dummy text of <br /> the printing and
                typesetting industry.
              </p>

              <div className="absolute right-0 top-0">
                <Image
                  src="/reach-group.png"
                  alt="reach-group"
                  width={600}
                  height={600}
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-[10%]">
              <Image
                src="/character.png"
                alt="character"
                width={400}
                height={400}
              />
            </div>

            <div className="absolute top-[40%] left-[10%]">
              <Image
                src="/crown.png"
                alt="character"
                width={100}
                height={100}
              />
            </div>
          </motion.div>

          {/* */}
          <motion.div
            className="h-[70vh] min-w-[280px] md:min-w-[320px] flex flex-col gap-6 flex-shrink-0"
            variants={itemVariants}
          >
            {/* Course Card */}
            <motion.div
              className="flex-1 bg-white rounded-3xl p-6 relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-purple-100 rounded-full -translate-y-8 md:-translate-y-10 translate-x-8 md:translate-x-10"></div>

              <h3 className="text-lg md:text-xl xl:text-2xl font-bold text-gray-800 mb-3">
                Course
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              {/* Decorative elements */}
              <div className="absolute bottom-2 right-2 opacity-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Star size={18} />
                </motion.div>
              </div>
            </motion.div>

            {/* Winner Card */}
            <motion.div
              className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 relative border border-blue-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Trophy icon */}
              <motion.div
                className="absolute top-4 right-4 text-purple-500"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Trophy size={20} />
              </motion.div>

              {/* Decorative stars */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute top-2 left-6 text-yellow-400 text-sm"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  ⭐
                </motion.div>
                <motion.div
                  className="absolute bottom-6 right-8 text-purple-400 text-sm"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                >
                  ✨
                </motion.div>
                <motion.div
                  className="absolute top-8 right-12 text-blue-400 text-sm"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: 0.2 }}
                >
                  ⚡
                </motion.div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 mb-4 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src="/api/placeholder/60/60"
                      alt="Winner avatar"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.h4
                    className="text-base md:text-lg font-bold text-purple-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Winner
                  </motion.h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MagicReachDashboard;
