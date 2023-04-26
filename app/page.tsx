"use client";
import { useState } from "react";
import HeroSection from "components/HeroSection";
import MainProducts from "components/MainProducts";
import BreadCrumbs from "ui/BreadCrumbs";

import dummi from "public/images/chiken beriyani.webp";
import { useStatesContext } from "context/context";
import Image from "next/image";

import head_texture from "public/textures/head texture.webp";

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
  const { isSelectedCategory } = useStatesContext();

  return (
    <main className="main_padding min-h-screen w-full sm:mt-20 mt-10 mb-14">
      <Image
        src={head_texture}
        alt="texture"
        fill
        loading="eager"
        className="fixed top-0 w-full max-h-[300px] object-cover object-[0_25%] -z-10"
      />
      <div className="max-w-2xl mx-auto ">
        <HeroSection data={data} isSelectedCategory={isSelectedCategory} />
        <BreadCrumbs
          data={breadCrumbs}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          isSelectedCategory={isSelectedCategory}
        />
        <MainProducts data={data} />
      </div>
    </main>
  );
}
