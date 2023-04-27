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
        width={1000}
        height={300}
        loading="lazy"
        className={`absolute top-0 w-full left-0  object-cover object-[0_25%] -z-10 ${
          isSelectedCategory ? "max-h-[180px] min-[450px]:max-h-[250px]" : "max-h-[300px]"
        }`}
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
