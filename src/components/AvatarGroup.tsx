'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

// Sample avatar data - in a real app, you'd fetch th
const avatars = [
  {
    id: 1,
    position: { top: '10%', left: '5%' },
    bgColor: 'bg-amber-500',
    delay: 0.2,
  },
  {
    id: 2,
    position: { top: '50%', left: '10%' },
    bgColor: 'bg-green-500',
    delay: 0.4,
  },
  {
    id: 3,
    position: { bottom: '10%', left: '15%' },
    bgColor: 'bg-blue-500',
    delay: 0.6,
  },
  {
    id: 4,
    position: { top: '15%', right: '15%' },
    bgColor: 'bg-purple-500',
    delay: 0.3,
  },
  {
    id: 5,
    position: { top: '40%', right: '10%' },
    bgColor: 'bg-pink-500',
    delay: 0.5,
  },
  {
    id: 6,
    position: { bottom: '20%', right: '5%' },
    bgColor: 'bg-orange-500',
    delay: 0.7,
  },
  {
    id: 7,
    position: { top: '60%', left: '50%' },
    bgColor: 'bg-red-500',
    delay: 0.8,
    transform: 'translate(-50%, -50%)',
  },
];

const AvatarGroup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="relative h-[400px] md:h-[500px] w-full">
      {avatars.map((avatar) => (
        <motion.div
          key={avatar.id}
          className={`absolute ${avatar.bgColor} rounded-full overflow-hidden shadow-lg w-16 h-16 md:w-20 md:h-20`}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: avatar.delay,
          }}
          style={avatar.position}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-white rounded-full"></div>
          </div>
          {avatar.id % 3 === 0 && (
            <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white text-white text-xs font-bold">
              {Math.floor(Math.random() * 5) + 1}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default AvatarGroup;
