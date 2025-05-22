"use client";
import Image from "next/image";

const CirclesPromo = () => {
  return (
    <section className="relative bg-[#8911AD] text-white py-20 px-4 overflow-hidden rounded-2xl">
      {/* Headings */}
      <div className="text-center max-w-2xl mx-auto z-10 relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Create and be a part of Circles
        </h2>
        <p className="text-lg md:text-xl mb-6">
          All in One Place for Your Community
        </p>
        <button className="bg-lime-400 text-black text-lg px-8 py-3 rounded-full font-semibold hover:bg-lime-300 transition">
          Join Now
        </button>
      </div>

      {/* Floating avatars and dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-20 h-20 rounded-full bg-lime-400 left-10 top-24 z-0" />
        <div className="absolute w-4 h-4 rounded-full bg-purple-300 left-4 top-4" />
        <div className="absolute w-4 h-4 rounded-full bg-cyan-400 left-56 top-52" />
        <div className="absolute w-4 h-4 rounded-full bg-lime-300 right-24 top-60" />
        <div className="absolute w-6 h-6 rounded-full bg-orange-400 right-40 top-32" />

        {/* Circular avatars */}
        <Image
          src="/avatar-1.png"
          alt="user"
          width={60}
          height={60}
          className="absolute rounded-full left-24 top-12 border-4 border-white"
        />
        <Image
          src="/avatar-2.png"
          alt="user"
          width={60}
          height={60}
          className="absolute rounded-full right-20 top-20 border-4 border-white"
        />
        <Image
          src="/avatar-3.png"
          alt="user"
          width={60}
          height={60}
          className="absolute rounded-full right-8 bottom-20 border-4 border-white"
        />
        <Image
          src="/avatar-4.png"
          alt="user"
          width={60}
          height={60}
          className="absolute rounded-full left-1/2 bottom-12 transform -translate-x-1/2 border-4 border-white"
        />
      </div>

      <div className="relative flex justify-center mt-24 space-x-6 z-10">
        <Image
          src="/cta-1.png"
          alt="screen1"
          width={300}
          height={200}
          className="rounded-xl shadow-lg transform -rotate-3"
        />
        <Image
          src="/cta-2.png"
          alt="screen2"
          width={400}
          height={250}
          className="rounded-xl shadow-xl"
        />
        <Image
          src="/cta-3.png"
          alt="screen3"
          width={300}
          height={200}
          className="rounded-xl shadow-lg transform rotate-3"
        />
      </div>
    </section>
  );
};

export default CirclesPromo;
