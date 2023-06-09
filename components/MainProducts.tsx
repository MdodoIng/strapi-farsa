import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainProducts = ({ data }: any) => {
  return (
    <div className="mt-10 grid gap-5">
      {data.map(
        (
          item: { picture: any; foodName: string; rate: number },
          idx: React.Key
        ) => (
          <Link
            href={`/${item.foodName}`}
            key={idx}
            className="flex items-center justify-center w-full border-[2px] border-brown rounded-[8px] overflow-hidden bg-[#F6ECE0] sm:min-h-[200px] h-full shrink-0"
          >
            <div className="sm:w-[30%] w-[40%] shrink-0 h-full overflow-hidden">
              <Image
                src={item.picture.src}
                alt={`${item.foodName} picture`}
                width={100}
                height={100}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full text-[#301D13] sm:text-lg text-base leading-[130%] flex flex-col justify-between h-full sm:py-6 sm:px-10 py-[22px] px-[14px] gap-5">
              <p>{item.foodName}</p>
              <p className="text-brown">₹ {item.rate}</p>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default MainProducts;
