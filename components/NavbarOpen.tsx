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

const NavbarOpen = ({ isToggle }: boolean | any): JSX.Element => {
  return (
    <motion.div
      animate={isToggle ? "true" : "false"}
      initial={false}
      variants={navbarOpenAnim}
      className="bg-headTexture fixed inset-0 -z-10 bg-center bg-cover  main_padding"
    >
      <div className="max-w-2xl mx-auto flex  content-start justify-start flex-wrap w-full gap-5 pt-52">
        {breadCrumbs.map((item, idx) => (
          <motion.div
            animate={isToggle ? "true" : "false"}
            initial={false}
            variants={navbarMenuAnim("up", "spring", .2 * idx, 0.5)}
            key={idx}
          >
            <button className="px-5 py-3 pb-4 leading-none border-offWhite text-offWhite text-xl border rounded-[18px] cursor-pointer select-none">
              {item}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NavbarOpen;
