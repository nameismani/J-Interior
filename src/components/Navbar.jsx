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
            <div className="cursor-pointer lg:hidden" onClick={handleNavbar}>
              {/* {openNav ? (
                <CgClose
                  className={`text-4xl ${
                    navBackground ? "text-orange-400" : "text-white"
                  } `}
                />
              ) : (
                <FaBars
                  className={`text-4xl ${
                    navBackground ? "text-orange-400" : "text-white"
                  } `}
                />
              )} */}


  
              <div className={` w-[27px] pointer h-[27px] m-14px overflow-visible relative z-50 `}>
            <span className={`${navBackground?'bg-black after:bg-black before:bg-black':'bg-white before:bg-white after:bg-white'} block h-[4px] opacity-100 absolute ${nav.show?'duration-300 ease-in-out ':'duration 0 before:duration-0 after:duration-0'} before:block before:h-[4px] before:opacity-100 before:absolute before:duration-300 before:ease-in-out  after:block after:h-[4px]  after:absolute after:duration-300 after:ease-in-out before:content-[''] after:content-[''] left-0 top-3 w-7 before:right-0 before:-top-[10px] before:w-4 after:right-0 after:top-[10px] after:w-5 ${openNav?'-rotate-45 top-[13px]w-[27px] before:top-0 before:rotate-90 before:w-[27px] after:top-0 after:left-0 after:rotate-90 after:opacity-0 after:w-0  ':null} `}></span>
               </div>
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
