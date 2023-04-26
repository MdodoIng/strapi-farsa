import { useStatesContext } from "context/context";
import { motion } from "framer-motion";
import { navbarMenuAnim, navbarOpenAnim } from "lib/motion";
import React from "react";

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

const NavbarOpen = ({ isToggle, setIsToggle }: any): JSX.Element => {
  const { isSelectedCategory, setIsSelectedCategory } = useStatesContext();

  const handleClick = (title: string) => {
    if (isSelectedCategory === title) return;
    else {
      setIsSelectedCategory(title);
      setIsToggle(false);
    }
  };

  return (
    <motion.div
      animate={isToggle ? "true" : "false"}
      initial={false}
      variants={navbarOpenAnim}
      className="bg-headTexture fixed inset-0 -z-10 bg-center bg-cover  main_padding"
    >
      <div className="max-w-2xl mx-auto flex  content-start justify-start flex-wrap w-full gap-6 pt-52">
        {breadCrumbs.map((item, idx) => (
          <motion.div
            animate={isToggle ? "true" : "false"}
            initial={false}
            variants={navbarMenuAnim("up", "spring", 0.2 * idx, 0.5)}
            key={idx}
            onClick={() => handleClick(item)}
            className={`px-5 py-3 pb-4 leading-none   text-xl border rounded-[18px] cursor-pointer select-none  ${
              isSelectedCategory === item
                ? "border-[#F6ECE099] text-[#F6ECE099]"
                : " border-offWhite text-offWhite"
            }`}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NavbarOpen;
