"use client";
import React, { useState } from "react";

const BreadCrumbs = ({ data }: any) => {
  const [selected, setSelected] = useState<number | React.Key>(1);

  const handleClick = (name: number | React.Key) => {
    setSelected(name);
  };
  return (
    <div className="flex items-center justify-start mt-20  gap-10 ">
      {data.map((item: string, idx: React.Key) => (
        <p
          key={idx}
          onClick={() => handleClick(idx)}
          className={`font-medium text-[#301D13] text-xl relative flex items-end justify-center after:duration-300 after:ease-in ${
            selected === idx
              && "after:absolute after:w-7 after:h-[5px] after:bg-[#301D13] after:-bottom-2 after:rounded-full"
              
          }`}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default BreadCrumbs;
