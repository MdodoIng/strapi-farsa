"use client";
import { useState } from "react";
import HeroSection from "components/HeroSection";
import MainProducts from "components/MainProducts";
import BreadCrumbs from "ui/BreadCrumbs";

import dummi from "public/images/chiken beriyani.webp";

const breadCrumbs = [
  "Rice",
  "Smoothie",
  "Soup",
  "Salad",
  "Noodles",
  "Soup",
  "Salad",
  "Noodles",
];
const data = [
  {
    foodName: "Farsa Special Chicken Biriyani",
    rate: 150,
    picture: dummi,
  },
  {
    foodName: "Farsa Special Chicken Biriyani",
    rate: 350,
    picture: dummi,
  },
  {
    foodName: "Farsa Special Chicken Biriyani",
    rate: 250,
    picture: dummi,
  },
];
export default function Home() {
  const [isSelected, setIsSelected] = useState(breadCrumbs[0]);
  
  return (
    <main className="main_padding min-h-screen w-full mt-52">
      <div className="max-w-2xl mx-auto ">
        <HeroSection data={data} />
        <BreadCrumbs
          data={breadCrumbs}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <MainProducts data={data} />
      </div>
    </main>
  );
}
