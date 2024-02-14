// code for image with over flow

import React from "react";

const PorjectItem = ({ projectTitle,projectDesc,imgClassName,id}) => {
  return(
    <>
                  <div className={`card card${id} h-[300px] md:h-[400px] lg:h-[570px] } `}>
                <div className="content">
                  <h2 className="title text-lg font-bold md:text-xl">{projectTitle}</h2>
                  <p className="copy text-sm md:text-lg italic">
                   {projectDesc}
                  </p>
                  <button className="btn">View More</button>
                </div>
              </div>
    </>
  )
};

// css code for project item

:root {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
  --font-sans: 'Rubik', sans-serif;
  --font-serif: 'Cardo', serif;
}
  
/* products */
/* .page-content {
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  max-width: 1024px;
  margin: 0 auto;
  font-family: var(--font-sans);
}
@media (min-width: 600px) {
  .page-content {
    grid-template-columns: repeat(2, 1fr);
 }
}
@media (min-width: 800px) {
  .page-content {
    grid-template-columns: repeat(4, 1fr);
 }
} */
.card {
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  /* height: 300px; */
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
}
/* @media (min-width: 600px) {
  .card {
    height: 570px;
 } */
/* } */
.card:before {
  content: '';
  position: absolute;
   display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  scale: 1;
  background-size: cover;
  background-position: center;
  object-fit: contain;
  transition: transform calc(var(--d) * 1.5) var(--e);
  pointer-events: none;
}
.card:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  pointer-events: none;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.320) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.540) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.790) 100%);
  transform: translateY(-50%);
  transition: transform calc(var(--d) * 2) var(--e);
}
/* .card1::before { 
   background-image: url('./assets/images/jinterior_project1.jpg');
} */
.card2::before { 
  background-image: url('./assets/images/jinterior_project2.jpg');
}
.card3::before { 
  background-image: url('./assets/images/jinterior_project3.jpg');
}
.card4::before { 
  background-image: url('./assets/images/jinterior_project4.jpg');
}
/* .card:nth-child(2):before {
  background-image: url(https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
}
.card:nth-child(3):before {
  background-image: url(https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
}
.card:nth-child(4):before {
  background-image: url(https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
} */
/* .content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1rem;
  transition: transform var(--d) var(--e);
  z-index: 1;
}
.content > * + * {
  margin-top: 1rem;
} */
/* .title {
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
} */
.copy {
  font-family: var(--font-serif);
  /* font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35; */
}
.btn {
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
}
.btn:hover {
  background-color: #0d0d0d;
}
.btn:focus {
  outline: 1px dashed yellow;
  outline-offset: 3px;
}
@media (hover: hover) and (min-width: 600px) {
  .card:hover:before{
    scale: 1.2;
  }
  /* .card:after {
    transform: translateY(0);
 }
  .content {
    transform: translateY(calc(100% - 4.5rem));
 }
  .content > *:not(.title) {
    opacity: 0;
    transform: translateY(1rem);
    transition: transform var(--d) var(--e), opacity var(--d) var(--e);
 }
  .card:hover, .card:focus-within {
    align-items: center;
 }
  .card:hover:before, .card:focus-within:before {
    transform: translateY(-4%);
 }
  .card:hover:after, .card:focus-within:after {
    transform: translateY(-50%);
 }
  .card:hover .content, .card:focus-within .content {
    transform: translateY(0);
 }
 
  .card:hover .content > *:not(.title), .card:focus-within .content > *:not(.title) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(var(--d) / 8);
 }
  .card:focus-within:before, .card:focus-within:after, .card:focus-within .content, .card:focus-within .content > *:not(.title) {
    transition-duration: 0s;
 } */
}

// burger menu code 

    <div className={` w-[27px] pointer h-[27px] m-14px overflow-visible relative z-50 `}>
            <span className={`${navBackground?'bg-black after:bg-black before:bg-black':'bg-white before:bg-white after:bg-white'}  ${nav.show?'duration-300 ease-in-out block h-[4px] opacity-100 absolute before:block before:h-[4px] before:opacity-100 before:absolute before:duration-300 before:ease-in-out  after:block after:h-[4px]  after:absolute after:duration-300 after:ease-in-out  left-0 top-3 w-7 before:right-0 before:-top-[10px] before:w-4 after:right-0 after:top-[10px] after:w-5 ':null} before:content-[''] after:content-['']  ${openNav?'-rotate-45 top-[13px]w-[27px] before:top-0 before:rotate-90 before:w-[27px] after:top-0 after:left-0 after:rotate-90 after:opacity-0 after:w-0  ':null} `}></span>
               </div>

// css code for burger menu

/* #burger-menu {
  cursor: pointer;
  height: 27px;
  width: 27px;
  margin: 14px;
  overflow: visible;
  position: relative;
  z-index:2;
} */
/* #burger-menu span,
#burger-menu span:before,
#burger-menu span:after {
  background: #fff;
  display: block;
  height: 4px;
  opacity: 1;
  position: absolute;
  transition: 0.3s ease-in-out;
} */
/* #burger-menu span:before,
#burger-menu span:after {
  content: "";
} */
/* #burger-menu span {
  left: 0px;
  top: 13px;
  width: 27px;
}
#burger-menu span:before {
  right: 0px;
  top: -10px;
  width: 16px;
}
#burger-menu span:after {
  right: 0px;
  top: 10px;
  width: 20px;
} */

/* #burger-menu.close span {
  transform: rotate(-45deg);
  top: 13px;
  width: 27px;
} */
/* #burger-menu.close span:before {
  top: 0px;
  transform: rotate(90deg);
  width: 27px;
} */
/* #burger-menu.close span:after {
  top: 0px;
  left:0;
  transform: rotate(90deg);
  opacity:0;
  width:0;
} */

// css code for current project section
.hover07 figure img {
	-webkit-filter: blur(3px);
	filter: blur(3px);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.hover07 figure:hover img {
	-webkit-filter: blur(0);
	filter: blur(0);
}
  
// css code for whatsap chat with me animation while hover

/* 
button.wh-ap-btn::before {
	content: "Chat with me";
	display: block;
	position: absolute;
	margin-left: -130px;
	margin-top: 16px;
	height: 25px;
	background: #49654e;
	color: #fff;
	font-weight: 400;
	font-size: 15px;
	border-radius: 3px;
	width: 0;
	opacity: 0;
	padding: 0;
	transition: opacity 0.4s, width 0.4s, padding 0.5s;
	padding-top: 7px;
	border-radius: 30px;
	box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
} */

/* .wh-fixed > a:hover button.wh-ap-btn::before {
	opacity: 1;
	width: auto;
	padding-top: 7px;
	padding-left: 10px;
	padding-right: 10px;
	width: 100px;
} */

// text shadow css code for our service page 

/* .text-shadow {
  text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
} */

// 

.hero-description-bk {
  /* background-image: linear-gradient(-20deg , #bb7413, #e7d25c) */
  transform: skew(19deg, -9deg);
}

.header{
    background-image: url(./assets/images/jinterior_header_image.jpg);   
}
.ourService{
  background-image: url(./assets/images/bgGradient.png);
}

<!-- js codes -->

   <Testimonial/>
    <Feedback/>

<!-- app.jsx  -->
import { useState } from "react";

<!-- service card .jsx -->

          <button
            disabled={true}
            className=" block text-center bg-yellow-400 p-1 mx-auto rounded-xl text-sm md:text-xl"
          >
            {" "}
            <a href="javscript:void(0)">Know more...</a>
          </button>

import React, { useEffect } from "react";

import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const ServicesCard = ({
  cardTitleFront,
  cardTitleBack,
  cardText,
  cardUrl,
  cardAnimationDirection,
  transitionDelay,
  backgroundImageUrl,
  transitionDuration,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in"
        className={`relative cursor-pointer  flex justify-center items-center w-full md:w-[48%] ${
          cardAnimationDirection == "vertical" ? " flip flip-vertical" : "flip"
        }`}
      >
        <div
          className="front bg-blend-lighten bg-cover bg-position"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <h1
            className="text-shadow text-sm rounded-t-xl p-3 md:text-xl uppercase  text-white "
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0))",
            }}
          >
            {cardTitleFront}
          </h1>
        </div>
        <div className="back flex flex-col justify-between items-center">
          <div>
            <h2 className="text-sm md:text-xl  uppercase mb-[2px] lg:mb-2">
              {cardTitleBack}
            </h2>
            <p className="text-sm md:md text-justify p-1 lg:p-3">{cardText}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;

<!-- project.jsx -->

import React from "react";
// import aboutImage from "../assets/images/about_image.jpg";
import { testimonialData } from "../../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PorjectItem from "./PorjectItem";
import { projects } from "../../utils/data";
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

<!-- projects item.jsx  -->

import React from "react";

const PorjectItem = ({ projectTitle,projectDesc,imgUrl,id}) => {
  return(
    <>
<div className={`h-[300px] md:h-[400px] lg:h-[570px]  `}>
<figure className="w-full h-full overflow-hidden  blur-[3px] duration-300  hover:blur-0 cursor-pointer "><img src={imgUrl}   className="w-full h-full scale-100  duration-1000 ease-in-out hover:scale-110 brightness-50 hover:brightness-100" /></figure>
<span>Hover</span>
</div>
</>

  )
};


export default PorjectItem;

<!-- navbar.jsx -->


import React, { useEffect, useState } from "react";
import logo from "../assets/images/jinterior_logo.png";
import { Button } from "flowbite-react";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [nav, setNav] = useState({
    show: true,
    scrollPos: 0,
  });
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nav.show, nav.scrollPos]);

  const handleScroll = () => {
    //  console.log(document.body.getBoundingClientRect())

    if (window.scrollY >= 30) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
    const scrollThreshold = 80;
    setOpenNav(false);

    setNav((prev) => {
      const newScrollPos = document.body.getBoundingClientRect().top;
      const shouldShow =
        newScrollPos > nav.scrollPos || newScrollPos > -scrollThreshold;
      return {
        ...prev,

        show: shouldShow,
        scrollPos: newScrollPos,
      };
    });
  };
  const handleNavbar = () => {
    setOpenNav(!openNav);
  };
  return (
    <>
      {/* ${nav.show?'bg-white':' bg-[hsla(0,0%,100%,.45) backdrop-blur-[29.5px]  box-shadow:0_8px_32px_0_rgba(31,38,135,.37)'} */}
      <header
        className={`fixed top-0 w-full px-2 lg:px-0 h-[61px] shadow-xl ease-in-out z-50  ${
          navBackground
            ? " bg-[hsla(0,0%,100%,.45) backdrop-blur-[29.5px]  box-shadow:0_8px_32px_0_rgba(31,38,135,.37)"
            : "bg-gradient-to-b from-[rgba(0,0,0,0.08)] to-[rgba(255,255,255,0)"
        } bg-no-repeat font-michroma transition-all duration-300 ${
          nav.show ? "visible" : "invisible"
        }`}
      >
        <div className={` ${navBackground?'md:max-w-7xl':'container lg:px-4' } transition-all duration-150 w-full mx-auto flex justify-between h-full items-center`}>
          <div className="flex justify-center items-center cursor-pointer">
            <img src={logo} className="w-[56px] h-[51px] rounded-md me-3" />{" "}
            <span
              className={`text-md font-Roxborough flex justify-center items-center  ${
                navBackground
                  ? "text-black"
                  : "[text-shadow:2px_2px_5px_var(--tw-shadow-color)] text-white shadow-black "
              } lg:text-2xl relative`}
            >
              {" "}
              <small className="text-[#CD9C4E] font-bold font-Roxborough text-2xl lg:text-4xl me-2">
                J
              </small>{" "}
              Interior & Wood works
              <sub className="absolute bottom-0 left-10 lg:left-14 text-[8px] lg:text-[14px]  font-Parisienne">
                Make your living space modern
              </sub>{" "}
            </span>
          </div>
          <nav>
            <div className={`cursor-pointer p-2 border-2  rounded-lg lg:hidden ${navBackground?'border-black':'border-white'}`} onClick={handleNavbar}>
              {openNav ? (
                <CgClose
                  className={`text-4xl ${
                    navBackground ? "text-black" : "text-white"
                  } `}
                />
              ) : (
                <FaBars
                  className={`text-4xl ${
                    navBackground ? "text-black" : "text-white"
                  } `}
                />
              )}


  
          
            </div>
            <ul
              className={`fixed w-full nav  ${
                openNav ? "h-[250px] p-6" : "h-0 p-0"
              } ${
                navBackground ? "bg-white lg:bg-inherit" : null
              } capitalize overflow-hidden border-t top-[61px]
items-center left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full text-white transition-[height] transiton-[background] duration-300`}
            >
              {/* <li> About</li>
               */}
              <li>
                {" "}
                <Link
                  to="about"
                  activeClass="active"
                  spy={true}
                  className={`${
                    navBackground
                      ? "text-black"
                      : "[text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-black "
                  } hover:text-[#CD9C4E] hover:font-bold cursor-pointer`}
                  smooth={true}
                  //   offset={50}
                  duration={500}
                  // style={{ textShadow: "2px 2px #f" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="our service"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`${
                    navBackground
                      ? "text-black"
                      : "[text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-black "
                  } cursor-pointer hover:text-[#CD9C4E]`}
                >
                  {" "}
                  Services
                </Link>
              </li>
              {/* <li
                className={`${
                  navBackground
                    ? "text-black"
                    : "[text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-black "
                }`}
              >
                Clients
              </li> */}
              <li>
                <Link
                  to="project"
                  spy={true}
                  activeClass="active"
                  smooth={true}
                  duration={500}
                  className={`${
                    navBackground
                      ? "text-black"
                      : "[text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-black "
                  } cursor-pointer hover:text-[#CD9C4E]`}
                >
                  {" "}
                  Projects
                </Link>
              </li>
              {/* [text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-black */}
              <li className="p-2  rounded-xl bg-[#FFB800] text-black">
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`${
                    navBackground
                      ? "text-black"
                      : "text-black "
                  } cursor-pointer`}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;


<!-- map container.jsx -->

import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { GiDandelionFlower } from "react-icons/gi";
import { PiFlowerLotusLight } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
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
          className="w-full mt-8 md:mt-0 min-w-[350px]  h-full flex-1 order-2 lg:order-1">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15542.490520920524!2d79.90165284059763!3d13.123076292752323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52901710ff7ebb%3A0x38136c2ffb1168b4!2sThiruvallur%2C%20Tamil%20Nadu%20602003!5e0!3m2!1sen!2sin!4v1706973991428!5m2!1sen!2sin"  className='w-full h-[350px] lg:h-full shadow-2xl'  style={{border:0}} loading="lazy" ></iframe> */}
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
          className="contact min-w-[350px] flex-1 flex-col h-full flex order-1 lg:order-2 justify-around item-start lg:items-start ms-0 lg:ms-32 px-3 lg:px-0">
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

<!-- footer.jsx -->

import { Button, Footer } from "flowbite-react";
import { useEffect, useState } from "react";
import { PiCaretUpBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import { Link } from "react-router-dom";
const FooterCom = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 600) {
      setBackToTop(true);
    } else {
      setBackToTop(false);
    }
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="wh-api z-50">
        <div className="wh-fixed whatsapp-pulse lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] before:lg:w-[110px] before:lg:h-[110px] before:w-[90px] before:h-[90px]  bottom-8 right-3 lg:right-8">
          <a href="https://wa.me/9597506784?text=Hi" target="_blank">
            <button className="wh-ap-btn lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] "></button>
          </a>
        </div>
      </div>
      {backToTop && (
        <button
          type="button"
          className="fixed bottom-8 z-50 left-8 p-3 hidden  w-[60px] h-[60px] bg-[#08445c] rounded-full md:flex justify-center items-center "
          color="green"
          onClick={scrollUp}
        >
          <PiCaretUpBold className="text-white text-xl lg:text-3xl" />
        </button>
      )}
      <footer className="footer bg-[#24262b] pt-16 pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap">
            <div className="flex-1 mb-3 lg:mb-0  px-4">
              <h4 className="text-xl text-white capitalize mb-5 lg:mb-9 font-medium relative before:content-[''] before:absolute before:left-0 before:-bottom-3 before:bg-[#FFB800] before:h-1 before:w-20">
                <span className="font-Roxborough text-3xl text-[#CD9C4E]">J</span> Interior & wood works
              </h4>
              {/* <address className="text-[#666] font-normal lg:font-medium lg:text-xl">
                Opposite SV Mahal, 43, Swathi nagar,
                <br />
                Rajaji puram, ii, Tamil Nadu 602001
                <br />
                jaganinteriorwork@gmail.com
              </address> */}
              <h2 className="text-[#bbbbbb] font-normal font-Parisienne mt-9 lg:mt-0 mb-3 lg:mb-0 lg:font-medium lg:text-2xl"> Make your living space modern...</h2>
              <p></p>
            </div>
            <div className="w-full lg:w-1/6 px-4 mb-3 lg:mb-0">
              <h4 className="text-xl text-white capitalize mb-5 lg:mb-9 font-medium relative before:content-[''] before:absolute before:left-0 before:-bottom-3 before:bg-[#FFB800] before:h-1 before:w-12">
                Quick links
              </h4>
              <ul>
                <li className="mb-3">
                  <a
                    href="#"
                    className="capitalize text-[#bbbbbb] font-light transition-all duration-75 hover:text-white hover:ps-2"
                  >
                    About
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="capitalize text-[#bbbbbb] font-light transition-all duration-75 hover:text-white hover:ps-2"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="capitalize text-[#bbbbbb] font-light transition-all duration-75 hover:text-white hover:ps-2"
                  >
                    Projects
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="capitalize text-[#bbbbbb] font-light transition-all duration-75 hover:text-white hover:ps-2"
                  >
                    Contact us
                  </a>
                </li>
                {/* <li ><a href="#" className='capitalize text-[#bbbbbb] font-light transition-all duration-75 hover:text-white hover:ps-2'>payment options</a></li> */}
              </ul>
            </div>

            <div className="w-full lg:w-1/4 px-4 mb-3 lg:mb-0">
              <h4 className="text-xl text-white capitalize mb-5 lg:mb-9 font-medium relative before:content-[''] before:absolute before:left-0 before:-bottom-3 before:bg-[#FFB800] before:h-1 before:w-12">
                follow us
              </h4>
              <div className="social-links flex justify-center items-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100067058919200&mibextid=ZbWKwL"
                  target="_blank"
                  className="w-10 h-10 flex justify-center items-center bg-[rgba(255,255,255,0.2)] me-3 mb-3  rounded-full text-white transition-all duration-75  leading-10 hover:text-[#24262b] hover:bg-white"
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://www.instagram.com/j_interior_wood_works/?utm_source=qr&igsh=bnB3Znp2YnhobmI5"
                  target="_blank"
                  className="w-10 h-10 flex justify-center items-center bg-[rgba(255,255,255,0.2)] me-3 mb-3  rounded-full text-white transition-all duration-75  leading-10 hover:text-[#24262b] hover:bg-white"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://maps.app.goo.gl/eRVbdwqUideHFvRv5"
                  target="_blank"
                  className="w-10 h-10 flex justify-center items-center bg-[rgba(255,255,255,0.2)] me-3 mb-3  rounded-full text-white transition-all duration-75  leading-10 hover:text-[#24262b] hover:bg-white"
                >
                  <SiGooglemaps />
                </a>
                <a
                  href="https://wa.me/9597506784?text=Hi"
                  target="_blank"
                  className="w-10 h-10 flex justify-center items-center bg-[rgba(255,255,255,0.2)] me-3 mb-3  rounded-full text-white transition-all duration-75  leading-10 hover:text-[#24262b] hover:bg-white"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="font-bold my-5 w-11/12 mx-auto border border-b border-b-[#ccc]" />
        <p className="text-center text-white text-[12px] lg:text-[16px]">
          {" "}
          J Interior & Wood works &copy; {new Date().getFullYear()} | All Rights
          Reserved.
        </p>
        <p className="text-center text-[#bbbbbb] text-[8px] lg:text-[12px] mt-1 lg:mt-3 pb-2 lg:pb-0">
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/kumaresan-s-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kumaresan
          </a>{" "}
          and developed by{" "}
          <a
            href="https://www.linkedin.com/in/manikandan-b-517936171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Manikandan.
          </a>
        </p>
      </footer>
    </>
  );
};

export default FooterCom;
