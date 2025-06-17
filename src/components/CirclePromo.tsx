"use client";
import Image from "next/image";

const CirclesPromo = () => {
  return (
    <section className="relative bg-[#8E2784] container text-white pt-16 overflow-hidden rounded-2xl">
      <div className="text-center max-w-2xl mx-auto z-10 relative">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Join Thousands of Successful Circles
        </h2>
        <p className="text-lg text-bold mb-6">
          All in One Place for Your Community
        </p>
        <button className="bg-lime-400 text-black text-lg px-8 py-3 rounded-full font-semibold hover:bg-lime-300 transition cursor-pointer">
          Join Now
        </button>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-20 h-20 rounded-full md:block hidden bg-lime-400 left-10 top-24 z-0" />
        <div className="absolute w-4 h-4 rounded-full bg-purple-300 left-4 top-4" />
        <div className="absolute w-4 h-4 rounded-full bg-cyan-400 left-56 top-52" />
        <div className="absolute w-4 h-4 rounded-full bg-lime-300 right-24 top-60" />
        <div className="absolute w-6 h-6 rounded-full bg-orange-400 right-40 top-32" />

        {/* Circula */}
        <Image
          src="/avatar-1.png"
          alt="user"
          width={70}
          height={70}
          className="absolute rounded-full left-[15%] top-[20%] md:block hidden"
        />
        <Image
          src="/avatar-2.png"
          alt="user"
          width={60}
          height={60}
          className="absolute rounded-full lg:left-[25%] left-[-2%] lg:top-[40%] bottom-[40%]"
        />
        <Image
          src="/avatar-3.png"
          alt="user"
          width={60}
          height={60}
          className="absolute rounded-full right-24 top-12 md:block hidden"
        />
        <Image
          src="/avatar-4.png"
          alt="user"
          width={100}
          height={100}
          className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:right-[10%] right-[-10%] lg:top-[50%] bottom-[15%]"
        />
      </div>

      <div className="relative flex justify-center mt-24 z-10">
        <Image
          src="/cta-1.png"
          alt="cta-1"
          width={500}
          height={500}
          className="object-cover "
        />
        <Image
          src="/cta-2.png"
          alt="cta-1"
          width={500}
          height={500}
          className="object-cover absolute lg:-top-10 bottom-0"
        />
        <Image
          src="/cta-3.png"
          alt="cta-1"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default CirclesPromo;
