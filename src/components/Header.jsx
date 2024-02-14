import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";

const Header = () => {
  return (
    <header
      name="header"
      className="bg-gray-50 h-screen flex justify-center items-center text-3xl text-white bg-header bg-cover bg-center object-cover"
    >
      <div className="px-3 py-5 md:p-8 rounded-xl bg-gradient-to-b from-[rgba(0,0,0,0.08)] to-[rgba(255,255,255,0)]">
        <motion.h4
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className=" font-bold tracking-wider font-robotoserif leading-6 md:leading-10 text-[14px] md:text-[28px] [text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-black"
        >
          {" "}
          Welcome to J Interior & Wood Works.
        </motion.h4>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className=" text-center mt-[2px]  md:mt-2 font-robotoserif font-medium text-[10px] leading-6 md:leading-10 md:text-[20px] [text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-black"
        >
          Where craftsmanship meets innovation...
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
