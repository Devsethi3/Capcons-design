"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  bgColor: string;
  imageUrl: string;
}

const FeatureCard = ({
  title,
  description,
  bgColor,
}: FeatureCardProps) => {
  return (
    <div
      className={`rounded-2xl ${bgColor} pt-8 h-full flex flex-col justify-baseline`}
    >
      <h3 className="text-2xl font-bold mb-4 px-8">{title}</h3>
      <p className="text-gray-700 mb-6 px-8">{description}</p>

      <div className="mt-auto rounded-lg overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className="w-full h-48 md:h-72 lg:h-80 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center text-white">
              {title === "S-Commerce" ? (
                <Image
                  src="/s-commerce.png"
                  alt="s-commerce"
                  className="mt-10 absolute bottom-0"
                  width={600}
                  height={600}
                />
              ) : (
                <div className="relative flex items-center overflow-hidden">
                  <Image
                    src="/gamification-1.png"
                    alt="gamication"
                    className=""
                    width={400}
                    height={400}
                  />
                  {/* <Image
                    src="/gamification-2.png"
                    alt="gamication"
                    className="absolute bottom-0 right-0"
                    width={200}
                    height={200}
                  /> */}
                </div>
              )}

              {/* {title === "S-Commerce" ? (
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="bg-gray-800 p-4 rounded-md mb-4">
                      <div className="h-6 w-3/4 bg-gray-700 rounded mb-3"></div>
                      <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-800 p-4 rounded-md">
                        <div className="h-16 w-16 mx-auto bg-yellow-500 rounded-full flex items-center justify-center mb-2">
                          <div className="h-8 w-8 bg-yellow-400 rounded-full"></div>
                        </div>
                        <div className="h-3 bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 w-3/4 mx-auto bg-gray-700 rounded"></div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-md">
                        <div className="h-16 w-16 mx-auto bg-lime-500 rounded-full flex items-center justify-center mb-2">
                          <div className="h-8 w-8 bg-lime-400 rounded-full"></div>
                        </div>
                        <div className="h-3 bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 w-3/4 mx-auto bg-gray-700 rounded"></div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-md">
                        <div className="h-16 w-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-2">
                          <div className="h-8 w-8 bg-blue-400 rounded-full"></div>
                        </div>
                        <div className="h-3 bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 w-3/4 mx-auto bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-6 p-4">
                    <div className="relative">
                      <div className="h-16 w-16 bg-red-500 rounded-full flex items-center justify-center relative">
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                          2
                        </span>
                        <div className="h-10 w-10 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center relative">
                        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                          5
                        </span>
                        <div className="h-10 w-10 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center relative">
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                          3
                        </span>
                        <div className="h-10 w-10 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureCard;
