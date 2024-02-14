import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { PiFlowerLotusLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";

const MapContainer = () => {
  return (
    <section name="contact" className="mt-0  lg:mt-0 mb-10 md:mb-24 bg-white">
      <p className="text-center my-10 lg:my-24 flex justify-center gap-[1px] items-center text-[#CD9C4E]">
        <PiFlowerLotusLight className="text-[10px]" />
        <PiFlowerLotusLight className="text-sm" />
        <PiFlowerLotusLight className="text-sm" />
        <PiFlowerLotusLight className="text-xl" />
        <PiFlowerLotusLight className="text-xl" />
        <PiFlowerLotusLight className="text-xl" />
        <PiFlowerLotusLight className="text-sm" />
        <PiFlowerLotusLight className="text-sm" />
        <PiFlowerLotusLight className="text-[10px]" />
      </p>
      <h2 className=" text-xl md:text-3xl text-black font-normal capitalize text-center mt-[25px] lg:mt-0">
        We’d Love to hear from you
      </h2>
      <p className="text-center text-black mt-3">
        Call us anytime between 9am – 7pm
      </p>

      <div className="w-full md:max-w-7xl  mx-auto">
        <div className="flex flex-wrap  lg:max-h[370px] lg:h-[370px] justify-center mx-5 md:mx-3 xl:mx-auto items-center mt-8 md:mt-14">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full mt-8 md:mt-0 min-w-[350px]  h-full flex-1 order-2 lg:order-1"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5742006430605!2d79.91226247454894!3d13.126139111472359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5291de6f48b88b%3A0x693acc7b4e53ba09!2sJ%20Interior%20%26%20Wood%20works!5e0!3m2!1sen!2sin!4v1707652528256!5m2!1sen!2sin"
              className="w-full h-[350px] lg:h-full shadow-2xl border-0 outline-none"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Responseive google map"
            ></iframe>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="contact min-w-[350px] flex-1 flex-col h-full flex order-1 lg:order-2 justify-around item-start lg:items-start ms-0 lg:ms-32 px-3 lg:px-0"
          >
            <div>
              <a href="tel:8122754525" className="flex">
                <span className="flex items-center justify-center p-3 border border-gray-500 rounded-full  me-3">
                  <IoCallOutline className="text-3xl font-bold" />
                </span>
                <span>
                  Phone no. <br />
                  <strong>+91 8122754525</strong>
                </span>
              </a>
            </div>
            <div className="mt-5">
              <a href="mailto:jaganinteriorwork@gmail.com" className="flex">
                <span className="flex items-center justify-center p-3 border border-gray-500 rounded-full  me-3">
                  <SlEnvolope className="text-3xl font-bold" />
                </span>
                <span>
                  Email <br />
                  <strong>jaganinteriorwork@gmail.com</strong>
                </span>
              </a>
            </div>
            <div className="mt-5">
              <a
                href="https://wa.me/9597506784?text=Hi"
                target="blank"
                className="flex"
              >
                <span className="flex items-center justify-center p-3 h-14 border border-gray-500 rounded-full  me-3">
                  <IoLocationOutline className="text-3xl font-bold" />
                </span>
                <span className="lg:w-1/2 text-wrap">
                  <strong>J Interior & wood works,</strong>
                  <br />
                  Opposite SV Mahal, 43, Swathi nagar, Rajaji puram, ii, Tamil
                  Nadu 602001
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default MapContainer;
