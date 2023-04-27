"use client";
import { useState } from "react";
import HeroSection from "components/HeroSection";
import MainProducts from "components/MainProducts";
import BreadCrumbs from "ui/BreadCrumbs";

import dummi from "public/images/chiken beriyani.webp";
import { useStatesContext } from "context/context";
import Image from "next/image";

import head_texture from "public/textures/head texture.webp";
import { fetcher } from "../lib/api";

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
const datas = [
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
export default async function Home() {
  const [isSelected, setIsSelected] = useState(breadCrumbs[0]);
  const [pageIndex, setPageIndex] = useState(1);
  const { isSelectedCategory } = useStatesContext();

  const productResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}produts?pagination[page]=1&pagination[pageSize]=5`
  );

  console.log(productResponse);

  return (
    <main className="main_padding min-h-screen w-full sm:mt-20 mt-10 mb-14">
      <Image
        src={head_texture}
        alt="texture"
        width={1000}
        height={300}
        loading="lazy"
        className={`absolute top-0 w-full left-0  object-cover object-[0_25%] -z-10 ${
          isSelectedCategory
            ? "max-h-[180px] min-[450px]:max-h-[250px]"
            : "max-h-[300px]"
        }`}
      />
      <div className="max-w-2xl mx-auto ">
        <HeroSection data={datas} isSelectedCategory={isSelectedCategory} />
        <BreadCrumbs
          data={breadCrumbs}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          isSelectedCategory={isSelectedCategory}
        />
        <MainProducts data={datas} />
      </div>
    </main>
  );
}
