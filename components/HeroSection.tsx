"use client";
import React from "react";

import Image from "next/image";

import Carousel from "ui/Carousel";

const HeroSection = ({ data }: any) => {
  console.log(data)
  return (
    <div className="relative w-full flex items-center justify-center">
      <Carousel loop>
        {data.map(
          (
            item: {
              foodName: string;
              rate: number;
              picture: any;
            },
            i: React.Key
          ) => {
            return (
              <div
                className="relative h-[400px] flex-[0_0_100%] flex items-end"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(217, 217, 217, 0) 44.74%, #000000 111.28%)",
                }}
                key={i}
              >
                <Image
                  src={item.picture.src}
                  fill
                  alt={`${item.foodName} image`}
                  loading="lazy"
                  className="w-full h-full object-cover absolute inset-0 -z-10 "
                />
                <div className="w-full flex justify-between items-center px-10 py-7">
                  <p className="text-lg text-offWhite leading-[130%] max-w-[150px]">
                    {item.foodName}
                  </p>
                  <p className="text-xl text-offWhite">₹ {item.rate}</p>
                </div>
              </div>
            );
          }
        )}
      </Carousel>
    </div>
  );
};

export default HeroSection;
