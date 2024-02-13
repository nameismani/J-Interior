import React from "react";
import aboutImage from "../assets/images/about_image.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <section
      name="about"
      className=" py-10 md:py-24 h-full text-black  text-3xl"
      ref={ref}
    >
      <div className="md:max-w-7xl w-full h-full md:min-h-[370px] md:max-h-[420px] md:h-[420px] lg:min-h[420px] lg:max-h-[700px] lg:h-[604px]   flex-wrap flex items-center justify-center mx-auto">
        <div className="about-content mx-5 md:mx-3 xl:mx-0 h-full md:flex-1 w-full md:w-[48%]">
          <h5 className=" text-xl md:text-2xl text-black font-semibold capitalize text-start">
            About Us
          </h5>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="my-5  text-sm md:text-md lg:text-xl font-normal first-letter:text-[#CD9C4E] first-letter:lg:text-black  first-letter:text-3xl first-letter:lg:text-xl text-justify tracking-tighter indent-10 lg:indent-0 lg:tracking-widest"
             
            >
              Welcome to J Interior & Wood works, where innovative design meets
              functionality. With a passion for creating spaces that inspire and
              elevate, our experienced team brings a unique blend of creativity
              and expertise to every project. From cutting-edge modular kitchens
              to personalized bedroom designs, stylish TV units, and efficient
              office layouts, we specialize in crafting spaces that cater to
              your unique needs.
            </p>
            <p className="my-5 text-sm md:text-md lg:text-xl font-normal  text-justify tracking-tighter lg:tracking-widest">
              {" "}
              With a commitment to excellence and a focus on customer
              satisfaction, J Interior & Wood works is your trusted partner for
              transforming spaces and enhancing lifestyles. Explore our
              portfolio and let us turn your vision into reality.
            </p>
          </motion.div>
          <div className="flex justify-start gap-x-20 items-center">
            <div className="total-projects">
              {/* <h2>100+</h2> */}
              <motion.h2
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="text-sm leading-[0] font-bold  md:text-xl"
              >
                {" "}
                {inView ? (
                  <CountUp start={0} end={100} duration={3} />
                ) : null} +{" "}
              </motion.h2>
              <small className="text-[10px] md:text-sm font-medium">
                Total Projects Completed
              </small>
            </div>
            <div className="ongoing-projects">
              <motion.h2
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="text-sm font-bold leading-[0] md:text-xl"
              >
                {" "}
                {inView ? (
                  <CountUp start={0} end={10} duration={3} />
                ) : null} +{" "}
              </motion.h2>
              <small className="text-[10px] md:text-sm font-medium">
                On going projects
              </small>
            </div>
          </div>
        </div>
        <div className="about-image w-full h-full md:w-[48%] md:flex-1  md:h-full mt-4 sm:mt-0">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            // ms-0 lg:ms-8
            className="h-full  flex-1 shadow-2xl   mx-5 md:mx-3 xl:mx-0 md:ms-4 xl:ms-8 "
          >
            {/* hover:scale-90 transition-all duration-100 */}
            <img
              src={aboutImage}
              alt="about image"
              className="w-full h-full rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
