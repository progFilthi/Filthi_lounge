import React from "react";
import MealCard2 from "./MealCard2";
export default function Drinkspage() {
  return (
    <section className="bg-white py-10">
      <h1 className="text-center py-[80px] text-4xl flex items-center justify-center">
        Drinks
      </h1>
      <div className="flex items-center justify-center">
        <MealCard2 />
        <MealCard2 />
        <MealCard2 />
        <MealCard2 />
      </div>
    </section>
  );
}
