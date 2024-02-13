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
