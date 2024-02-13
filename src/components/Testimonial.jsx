import React from "react";

import { testimonialData } from "../../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaCaretLeft,FaCaretRight } from "react-icons/fa";
import {motion} from "framer-motion";
import { fadeIn } from "../../utils/variant";
import TestimonialItem from "./TestimonialItem";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      ><FaCaretRight style={{ ...style, color: "white", fontSize: "30px" }} /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
          className={className}
          onClick={onClick}
        ><FaCaretLeft style={{ ...style, color: "white", fontSize: "30px" }} /></div>
      );
  }

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
  return (
    <>
      <section className=" py-24 bg-[#05435c] ">
         <div className="md:max-w-7xl mx-auto max-w-[100%] sm:w-[90%] ">
        <div className=" text-center mb-14">
        <h2 className="text-xl md:text-3xl text-white font-normal capitalize">Hear what our client says</h2>
        </div>
        <motion.div
             variants={fadeIn('up',0.3)}
             initial="hidden"
             whileInView={'show'}
             viewport={{once:true,amount:0.7}}
        >
     <Slider {...settings}>
     {
    testimonialData.map(item=> (
       <TestimonialItem key={item.id} {...item}/>
    ))
   }
     </Slider>
     </motion.div>
           
         </div>
      </section>
    </>
  )
};

export default Testimonial;
