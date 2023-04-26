"use client";
import React from "react";
import Image from "next/image";
import Carousel from "ui/Carousel";

const HeroSection = ({ data, isSelectedCategory }: any) => {
  return (
    <div className="relative w-full flex items-center justify-center">
      {!isSelectedCategory ? (
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
                  className="relative sm:aspect-video aspect-[1/.8] flex-[0_0_100%] flex items-end"
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
                  <div className="w-full flex justify-between items-center sm:px-10 sm:py-7 px-5 py-4">
                    <p className="sm:text-lg text-base text-offWhite sm:leading-[130%] leading-[130%] max-w-[150px]">
                      {item.foodName}
                    </p>
                    <p className="sm:text-xl text-base  text-offWhite">
                      ₹ {item.rate}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </Carousel>
      ) : (
        <div className="flex items-center justify-center w-full sm:aspect-[16/6] aspect-[16/5] rounded-[10px] overflow-hidden relative">
          <Image
            src={data[0].picture}
            alt=""
            width={100}
            height={100}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <p className="absolute font-calisga sm:text-4xl text-xl tracking-[0.07em] text-offWhite">
            {isSelectedCategory}
          </p>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
