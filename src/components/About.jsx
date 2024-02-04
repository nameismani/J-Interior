import React from "react";
import aboutImage from "../assets/images/about_image.jpg"
import CountUp from 'react-countup';
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import { fadeIn } from "../../utils/variant";

const About = () => {

  const  [ref, inView] = useInView({threshold: 0.5});
  return (
    <section  name='about' className=' py-10 md:py-24  text-black  text-3xl' ref={ref}>

   <div className="md:max-w-7xl w-full flex-wrap flex items-center justify-center mx-auto">
   <div className="about-content  w-full md:w-[48%]">
   <h5 className=' text-xl md:text-2xl text-black font-semibold capitalize text-start'>About Us</h5>


<motion.div
   variants={fadeIn('up',0.4)}
   initial="hidden"
   whileInView={'show'}
   viewport={{once:false,amount:0.3}}
>
<p className="my-5 text-xl font-normal tracking-widest"> We Specialize in creating bespoke interiors and custom wood works, seamlessly blending functionality with aesthetics.</p>
   <p className="my-5 text-xl font-normal tracking-widest">From elegant designs to meticulous renovations, trust us to elevate your home or office with unparalleled craftsmanship and attention to details.</p>
</motion.div>
   <div className="flex justify-start gap-x-20 items-center">
    <div className="total-projects">
        {/* <h2>100+</h2> */}
      <motion.h2
              variants={fadeIn('up',0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false,amount:0.3}}
      > {inView? <CountUp start={0} end={100} duration={3}/>:null} + </motion.h2>
        <small className="text-sm font-medium">Total Projects Completed</small>
    </div>
    <div  className="ongoing-projects">
    <motion.h2
      variants={fadeIn('up',0.5)}
      initial="hidden"
      whileInView={'show'}
      viewport={{once:false,amount:0.3}}
    > {inView? <CountUp start={0} end={10} duration={3}/>:null} + </motion.h2>
        <small  className="text-sm font-medium">On going projects</small>
    </div>
   </div>
        </div>
        <div className="about-image w-full md:w-[48%] mt-4 sm:mt-0">
        <motion.div
         variants={fadeIn('down',0.3)}
         initial="hidden"
         whileInView={'show'}
         viewport={{once:false,amount:0.3}}
        >
          {/* hover:scale-90 transition-all duration-100 */}
        <img 
                     
          src={aboutImage} alt="about image" className="w-full h-full " />
        </motion.div>
        </div>

    
   </div>
    </section>
  )
};

export default About;
