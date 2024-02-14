import React, { useEffect, useState } from "react";
import logo from "../assets/images/jinterior_logo.png";
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
    //  code to change the navbackground when it is scrolllength greater than 30

    if (window.scrollY >= 30) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
    const scrollThreshold = 80;
    setOpenNav(false);

    //  below functionality is to hide the nav when scrolling down and sow when scroll up
    const newScrollPos = document.body.getBoundingClientRect().top;
    const shouldShow =
      newScrollPos > nav.scrollPos || newScrollPos > -scrollThreshold;
    setNav((prev) => {
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
      <header
        className={`fixed top-0 w-full px-2 lg:px-0 h-[61px] shadow-xl ease-in-out z-50  ${
          navBackground
            ? " bg-[hsla(0,0%,100%,.45) backdrop-blur-[29.5px]  box-shadow:0_8px_32px_0_rgba(31,38,135,.37)"
            : "bg-gradient-to-b from-[rgba(0,0,0,0.08)] to-[rgba(255,255,255,0)"
        } bg-no-repeat font-michroma transition-all duration-300 ${
          nav.show ? "visible" : "invisible"
        }`}
      >
        <div
          className={` ${
            navBackground ? "md:max-w-7xl" : "container lg:px-4"
          } transition-all duration-150 w-full mx-auto flex justify-between h-full items-center`}
        >
          <div className="flex justify-center items-center cursor-pointer">
            <img src={logo} alt="Jinterior logo" title="logo" loading="lazy" className="w-[56px] h-[51px] rounded-md me-3" />{" "}
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
          {/* p-2 border-2 ${
                navBackground ? "border-black" : "border-white"
              } */}
            <div
              className={`cursor-pointer  rounded-lg lg:hidden `}
              onClick={handleNavbar}
            >
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
              <li>
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
                  duration={500}
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
              <li className="p-2  rounded-xl bg-[#FFB800] text-black">
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`${
                    navBackground ? "text-black" : "text-black "
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
