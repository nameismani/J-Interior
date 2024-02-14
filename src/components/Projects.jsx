import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PorjectItem from "./PorjectItem";
import { projects } from "../../utils/data";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

// code to make custome arrow in carousel
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

// projects component
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
      <section
        name="project"
        className=" pt-10 md:pt-24 pb-0  md:pb-0 bg-white top  project "
      >
        <div className=" md:max-w-7xl mx-auto max-w-[100%] sm:w-[90%] ">
          <div className=" text-center mb-14">
            <h2 className="text-xl md:text-3xl text-black font-normal capitalize">
              Projects
            </h2>
          </div>
          <div>
            <Slider {...settings}>
              {projects.map((project) => (
                <PorjectItem key={project.id} {...project} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
