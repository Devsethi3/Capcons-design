import React from "react";
import { motion } from "framer-motion";

const CreatorConnect = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen container px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
      
        <motion.div
          className="text-center mb-12 lg:mb-16"
          variants={itemVariants}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-4">
            Power Up Your Community with Creator Connect
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            All in One Place for Your Community
          </p>
        </motion.div>

        {/* Fe */}
        <div className="flex flex-col xl:flex-row items-center gap-5">
          {/* First Column */}
          <div className="flex flex-col items-start gap-5 w-full xl:w-auto">
            <div className="shadow-lg text-start rounded-2xl p-4 bg-white w-full">
              <h3 className="text-xl mb-3 font-extrabold">Circles</h3>
              <p className="">
                Private, focused spaces for discussions, niche interests, and
                VIP groups—designed for deeper connections.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start shadow-lg rounded-2xl bg-white w-full">
              <div className="relative w-full h-full">
                <img
                  src="/courses.png"
                  alt="courses"
                  className="rounded-t-xl w-full h-auto"
                />
              </div>
              <h3 className="px-4 text-xl font-extrabold">Courses</h3>
              <p className="px-4 pb-4 text-start">
                Create and sell self-paced or live courses, providing value
                while fostering learning-driven engagement.
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-start gap-5 w-full xl:w-auto">
            <div className="flex flex-col gap-4 items-start shadow-lg rounded-2xl bg-white w-full">
              <div className="relative w-full h-full">
                <img
                  src="/livestream.png"
                  alt="courses"
                  className="rounded-t-xl w-full h-auto"
                />
              </div>
              <h3 className="pt-4 px-4 text-xl font-extrabold">LiveStream</h3>
              <p className="px-4 pb-4 text-start">
                Go live with your audience, host interactive sessions, Q&As, and
                exclusive broadcasts—all within your community.
              </p>
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-5 w-full xl:w-auto">
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <div className="flex flex-col gap-5 w-full lg:w-auto">
                <div className="shadow-lg text-start rounded-2xl p-4 bg-white">
                  <h3 className="text-xl mb-3 font-extrabold">Events</h3>
                  <p className="">
                    Host and manage virtual or in-person events to engage your
                    community in real-time, from workshops to exclusive meetups.
                  </p>
                </div>
                <div className="shadow-lg text-start rounded-2xl p-4 bg-white">
                  <h3 className="text-xl mb-3 font-extrabold">Feed</h3>
                  <p className="">
                    Algorithm-free space where content reaches your audience
                    directly—ensuring meaningful engagement.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start shadow-lg rounded-2xl bg-white w-full lg:w-auto">
                <div className="relative w-full h-full">
                  <img
                    src="/monetization.png"
                    alt="monetization"
                    className="rounded-t-xl w-full h-auto"
                  />
                </div>
                <h3 className="px-4 text-xl font-extrabold">Monetization</h3>
                <p className="px-4 pb-4 text-start">
                  Earn through subscriptions, product sales, paid content, and
                  brand collaborations—your revenue, your rules.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start shadow-lg rounded-2xl bg-white">
              <div className="relative w-full sm:w-auto h-full">
                <img
                  src="/analytics.png"
                  alt="analytics"
                  className="rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none w-full h-[200px] object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-4 p-4 sm:p-0 sm:py-4 sm:pr-4">
                <h3 className="text-xl font-extrabold">Analytics</h3>
                <p className="text-start">
                  Get real-time insights into engagement, growth, and
                  monetization to optimize your strategy and scale effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreatorConnect;
