import Image from "next/image";
import React from "react";

const MainProducts = ({ data }: any) => {
  return (
    <div className="mt-10 grid gap-5">
      {data.map(
        (
          item: { picture: string; foodName: string; rate: number },
          idx: React.Key
        ) => (
          <div
            key={idx}
            className="flex items-center justify-center w-full border-[2px] border-brown rounded-[8px] overflow-hidden bg-[#F6ECE0] min-h-[200px]"
          >
            <div className="w-[30%] shrink-0 h-full overflow-hidden">
              <Image
                src={item.picture}
                alt={`${item.foodName} picture`}
                width={100}
                height={100}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full text-[#301D13] text-lg flex flex-col justify-between h-full py-6 px-10">
              <p>{item.foodName}</p>
              <p className="text-brown">₹ {item.rate}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MainProducts;
