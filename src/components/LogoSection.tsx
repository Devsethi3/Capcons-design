"use client";

import { motion } from "motion/react";

const partners = [
  {
    name: "MongoDB",
    logo: "/mongodb.png",
    width: 150,
    height: 150,
  },
  {
    name: "Google",
    logo: "/google.png",

    width: 110,
    height: 36,
  },
  {
    name: "ASM",
    logo: "/asm.png",

    width: 100,
    height: 100,
  },
  {
    name: "Woodland",
    logo: "/woodland.png",

    width: 130,
    height: 80,
  },
  {
    name: "Woodsport",
    logo: "/woodsport.png",

    width: 120,
    height: 70,
  },
];

const LogoSection = () => {
  return (
    <section className="pt-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-4 md:gap-12 opacity-60"
      >
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex items-center justify-center"
          >
            <div className="h-8 flex items-center">
              {/* Using div with background instead of Image to bypass placeholder image issues */}
              <div
                className="opacity-90 hover:opacity-100 transition-opacity"
                style={{
                  width: partner.width / 1.5,
                  height: partner.height / 1.5,
                  backgroundImage: `url(${partner.logo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  marginInline: "10px",
                }}
              >
                <span className="sr-only">{partner.name}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LogoSection;

