import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-[#FF8411] text-white h-10 flex items-center justify-between px-10">
      <div className="flex items-center gap-2">
        <Image src={"/restaurant.png"} alt="logo" width={24} height={24} />
        <h1 className="font-semibold">Filthi Lounge</h1>
      </div>
      <nav className="flex gap-8 text-sm">
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
        </ul>
        <ul className="flex items-center gap-2">
          <li>Cart</li>
          <ShoppingCartIcon className="h-4" />
        </ul>
      </nav>
    </header>
  );
}
