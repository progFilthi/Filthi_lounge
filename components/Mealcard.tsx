import React from "react";
import Image from "next/image";

export default function Mealcard() {
  return (
    <div className=" bg-white w-[313px] h-[483px] mx-4 flex items-center justify-center flex-col rounded-md">
      <div className="flex justify-between gap-42 font-semibold text-[24px]">
        <p>Pizza</p>
        <p>$12</p>
      </div>
      <Image src={"/pizza.png"} alt="pizza image" width={225} height={100} />
      <button
        type="button"
        className="bg-[#FF8411] px-[32px] py-[12px] text-white rounded-md cursor-pointer"
      >
        Place Order
      </button>
    </div>
  );
}
