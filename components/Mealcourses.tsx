import React from "react";
import Mealcard from "./Mealcard";

export default function Mealcourses() {
  return (
    <section className="bg-[#FF8411] py-10">
      <h1 className="text-white text-center py-[80px] text-4xl flex items-center justify-center">
        Meal Courses
      </h1>
      <div className="flex items-center justify-center">
        <Mealcard />
        <Mealcard />
        <Mealcard />
        <Mealcard />
      </div>
    </section>
  );
}
