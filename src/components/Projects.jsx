import React from "react";
import aboutImage from "../assets/images/about_image.jpg";
import { testimonialData } from "../../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaCaretLeft,FaCaretRight } from "react-icons/fa";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";
import TestimonialItem from "./TestimonialItem";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowRightLong
        className="font-normal"
        style={{
          ...style,
          color: "black",
          width: "50px",
          height: "50px",
          fontWeight: "400",
          fontSize: "20px",
          background: "#f1f6f8",
          left: "-60px",
          position: "relative",
          padding: "5px",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowLeftLong
        style={{
          ...style,
          color: "black",
          width: "50px",
          height: "50px",
          fontWeight: "400",
          fontSize: "20px",
          background: "#f1f6f8",
          left: "30px",
          position: "relative",
          padding: "5px",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    className: "center",
    centerMode: true,
    centerPadding: "330px",
    slidesToShow: 1,
    slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "200px",
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section name="project" className=" pt-10 md:pt-24 pb-0  md:pb-0 bg-white top  project ">
        <div className=" md:max-w-7xl mx-auto max-w-[100%] sm:w-[90%] ">
          <div className=" text-center mb-14">
            <h2 className="text-xl md:text-3xl text-black font-normal capitalize">
              Projects
            </h2>
          </div>
          <div>
            <Slider {...settings}>
              <div className="card h-[300px] md:h-[400px] lg:h-[570px] ">
                <div className="content">
                  <h2 className="title text-lg font-bold md:text-xl">Mountain View</h2>
                  <p className="copy text-sm md:text-lg italic">
                    Check out all of these gorgeous mountain trips with
                    beautiful views of, you guessed it, the mountains
                  </p>
                  <button className="btn">View Trips</button>
                </div>
              </div>
              <div className="card h-[300px] md:h-[400px] lg:h-[570px]">
                <div className="content">
                  <h2 className="title font-bold text-lg md:text-xl">To The Beach</h2>
                  <p className="copy text-sm md:text-lg italic">
                    Plan your next beach trip with these fabulous destinations
                  </p>
                  <button className="btn">View Trips</button>
                </div>
              </div>
              <div className="card h-[300px] md:h-[400px] lg:h-[570px] ">
                <div className="content">
                  <h2 className="title font-bold text-lg md:text-xl">Desert Destinations</h2>
                  <p className="copy text-sm md:text-lg italic">
                    It's the desert you've always dreamed of
                  </p>
                  <button className="btn">Book Now</button>
                </div>
              </div>
              <div className="card h-[300px] md:h-[400px] lg:h-[570px] ">
                <div className="content">
                  <h2 className="title font-bold text-lg md:text-xl">Explore The Galaxy</h2>
                  <p className="copy text-sm md:text-lg italic ">
                    Seriously, straight up, just blast off into outer space
                    today
                  </p>
                  <button className="btn">Book Now</button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
