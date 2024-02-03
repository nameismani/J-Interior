import React, { useEffect, useState } from "react";
import logo from '../assets/images/jinterior_logo.png'
import { Button } from "flowbite-react";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Link } from 'react-scroll';

const Navbar = () => {

    const [openNav,setOpenNav] = useState(false)
    const [nav,setNav] = useState({
        show:'true',
        scrollPos:0
    })

    useEffect(()=>{
       window.addEventListener("scroll",handleScroll)
      return ()=>{
        window.removeEventListener('scroll', handleScroll)
      }
    },[nav.show,nav.scrollPos])

    const handleScroll =()=>{
    //  console.log(document.body.getBoundingClientRect())
    const scrollThreshold = 80;
        setOpenNav(false)

     setNav(prev => {
      const newScrollPos = document.body.getBoundingClientRect().top;
      const shouldShow = newScrollPos > nav.scrollPos || newScrollPos > -scrollThreshold;
        return {
            ...prev,

            show: shouldShow,
            scrollPos: newScrollPos,
        
        }
     })
    }
    const handleNavbar=()=>{
         setOpenNav(!openNav)
    }
  return (
    <>
    {/* ${nav.show?'bg-white':' bg-[hsla(0,0%,100%,.45) backdrop-blur-[29.5px]'} */}
       <header className= {`sticky top-0 h-[90px] shadow-xl bg-white z-30  bg-no-repeat  transition-all duration-150 ${nav.show? "visible":"invisible"}`}>
        <div className="container mx-auto flex justify-between h-full items-center">
            <div className="flex justify-center items-center">
             <img src={logo} className="w-[90px]"/> <span className="text-2xl lg:text-5xl"> <small className="text-amber-500 font-bold text-4xl lg:text-7xl">J</small> Interior</span>
            </div>
            <nav >
               <div className="cursor-pointer lg:hidden" onClick={handleNavbar}>
              {openNav ?    <CgClose className="text-4xl" />:<FaBars  className="text-4xl"/>
                }
               </div>
                <ul className = {`fixed w-full ${openNav?'h-[360px] p-6':'h-0 p-0'}  overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-[height] duration-300`}>
                    {/* <li> About</li>
                     */}
                     <li>    <Link 
     
      to="about" 
   
      smooth={true} 
    //   offset={50} 
      duration={500} 
   
    >
      About
    </Link></li>
                    <li><Link to="our service" smooth={true} duration={500}>Our Service</Link></li>
                    <li>Our Clients</li>
                    <li>Our Projects</li>
                
                </ul>
            </nav>
        </div>
        
       </header>
    </>
  )
};

export default Navbar;
