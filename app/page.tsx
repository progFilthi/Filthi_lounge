import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center overflow-x-hidden">
      <section className="relative w-[1440px] h-[810px]">
        <Image
          src={"/hero.jpg"}
          alt="Hero image"
          fill
          className="z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-[1]" />

        <div className="flex flex-col items-center justify-between space-y-16 relative z-10 pt-64">
          <h1 className="text-9xl text-white font-extrabold">Happy Meal</h1>
          <button
            type="button"
            className="bg-[#FF8411] text-white px-4 py-2 rounded-lg"
          >
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
}
