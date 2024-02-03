import React from "react";

import { testimonialData } from "../../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaCaretLeft,FaCaretRight } from "react-icons/fa";

import TestimonialItem from "./TestimonialItem";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      ><FaCaretRight style={{ ...style, color: "#05435c", fontSize: "30px" }} /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
          className={className}
          onClick={onClick}
        ><FaCaretLeft style={{ ...style, color: "#05435c", fontSize: "30px" }} /></div>
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
      <section className=" py-24 bg-gray-50">
         <div className=" max-w-[100%] sm:max-w-[90%] mx-auto">
        <div className=" text-center mb-14">
        <h2 className="text-4xl text-white font-bold capitalize">Hear what our client says</h2>
        </div>
        <div>
     <Slider {...settings}>
     {
    testimonialData.map(item=> (
       <TestimonialItem key={item.id} {...item}/>
    ))
   }
     </Slider>
     </div>
           
         </div>
      </section>
    </>
  )
};

export default Testimonial;
