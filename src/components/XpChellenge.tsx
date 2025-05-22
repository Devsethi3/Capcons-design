"use client";

import { motion } from "framer-motion";

export function XpChallenge() {
  const days = [
    { day: "Day 1", label: "Create Post", completed: true },
    { day: "Day 2", label: "Join a Circle", completed: true },
    { day: "Day 3", label: "Upload Video", completed: true },
    { day: "Day 4", label: "Host Event", completed: false },
    { day: "Day 5", label: "Comment on Post", completed: false },
    { day: "Day 6", label: "Share Content", completed: false },
    { day: "Day 7", label: "Add a Friend", completed: false },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {days.map((day, index) => (
        <motion.div
          key={day.day}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div
            className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xs border-2 ${
              day.completed
                ? "border-green-500 bg-green-100 text-green-700"
                : "border-gray-300 bg-gray-50 text-gray-500"
            }`}
          >
            <div className="text-center">
              <div className="font-bold text-[10px]">{day.day}</div>
              <div className="text-[8px] mt-0.5">{day.label}</div>
            </div>
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="flex flex-col items-center"
      >
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-yellow-100 border-2 border-yellow-400">
          <div className="text-center">
            <div className="font-bold text-[10px] text-yellow-700">Winner</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
