import AboutUs from "@/components/AboutUs";
import Drinkspage from "@/components/Drinkspage";
import Footer from "@/components/Footer";
import HeroPage from "@/components/Hero";
import Mealcourses from "@/components/Mealcourses";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroPage />
      <Mealcourses />
      <Drinkspage />
      <AboutUs />
      <Footer />
    </div>
  );
}
