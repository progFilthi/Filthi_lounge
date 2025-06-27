import React from "react";
import Image from "next/image";

export default function MealCard2() {
  return (
    <div className=" bg-[#FF8411] w-[313px] h-[483px] mx-4 flex items-center justify-center flex-col rounded-md">
      <div className="flex justify-between gap-32 font-semibold text-[24px] text-white">
        <p>Soft Drink</p>
        <p>$6</p>
      </div>
      <Image
        src={"/soft.png"}
        alt="pizza image"
        width={250}
        height={100}
        className="object-cover"
      />
      <button
        type="button"
        className="text-[#FF8411] px-[32px] py-[12px] bg-white rounded-md cursor-pointer"
      >
        Place Order
      </button>
    </div>
  );
}
