import Image from "next/image";
import React from "react";

const MainProducts = ({
  data,
}: {
  data: [{ picture: string; foodName: string; rate: number }];
}) => {
  return (
    <div className="mt-10 grid gap-5">
      {data.map((item, idx: React.Key) => (
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
          <div className="w-full">\</div>
        </div>
      ))}
    </div>
  );
};

export default MainProducts;
