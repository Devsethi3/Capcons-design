"use client";

import Image from "next/image";
import BrandAccordion from "./BrandAccordion";

const BrandSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/brand.png"
            alt="Brand Illustration"
            width={500}
            height={500}
            className="w-full max-w-md lg:max-w-full h-auto"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2">
          <BrandAccordion />
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
