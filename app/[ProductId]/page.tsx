"use client";
import React from "react";
import dummi from "public/images/chiken beriyani.webp";
import Image from "next/image";

import head_texture from "public/textures/head texture.webp";
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen main_padding w-full sm:mt-20 mt-10 mb-14">
      <Image
        src={head_texture}
        alt="texture"
        width={head_texture.width / 2}
        height={head_texture.height / 2}
        loading="lazy"
        className="fixed top-0 left-0 w-full sm:max-h-[300px] min-[300px]:max-h-[250px] max-h-[200px] object-cover object-[0_25%] -z-10"
      />
      <div className="max-w-2xl mx-auto flex flex-col items-start justify-center">
        <div className="sm:aspect-video aspect-[1/.8] overflow-hidden w-full rounded-[10px]">
          <Image
            src={dummi}
            width={1000}
            height={1000}
            loading="lazy"
            alt="d"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="sm:mt-8 mt-5 text-brown">
          <div className="flex items-center justify-between">
            <h4 className="font-calisga text-xl leading-[180%] ">
              Mango Smoothie
            </h4>
            <p className="font-medium text-2xl shrink-0">₹ 130</p>
          </div>
          <p className="sm:mt-4 mt-3 text-lg leading-[153%]">
            a delicious beverage made from fresh or frozen mangoes blended with
            other ingredients such as milk, yogurt, ice cream, or fruit juices.
            The texture of the smoothie is typically thick and creamy, and the
            flavor is sweet and tropical, with a distinct mango taste.
          </p>
        </div>

        <div className="flex items-center justify-center w-full">
          <Link
            href={"/"}
            className="mt-7 px-4 py-3 pb-4 border border-black rounded-[20px] text-brown text-lg flex items-center justify-center max-sm:w-full cursor-pointer"
          >
            Go back to Smootie
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
