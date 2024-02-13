import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";
import ServicesCard from "./ServicesCard";
import { services } from "../../utils/data";

const OurServicesComp = () => {
  return (
    <section
      name="our service"
      className="  pt-10 md:pt-24 pb-10  md:pb-24 text-black  text-3xl ourService bg-cover bg-no-repeat bg-center object-cover"
    >
      <div className=" max-w-7xl    mx-5 md:mx-3 xl:mx-auto flex-wrap flex justify-center items-center lg:items-start">
        <div className="service-content w-full lg:w-[30%] flex justify-start items-start flex-col mt-7">
          <h5 className="text-xl md:text-2xl text-black font-semibold  capitalize text-center  ">
            Our Service
          </h5>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-xl my-3"
          >
            We Offer a Range of Services to Meet All Types of Needs...
          </motion.p>
          <button className="p-2 text-xl  rounded-xl bg-[#FFB800] text-black capitalize">
            ALL SERVICES
          </button>
        </div>
        <div className="service-image flex flex-wrap items-center justify-center gap-1 md:gap-3 mt-3  w-full lg:w-[66%]">
          {services.map((list) => (
            <ServicesCard {...list} key={list.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesComp;
