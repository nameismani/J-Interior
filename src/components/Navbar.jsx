import React, { useEffect, useState } from "react";
import logo from '../assets/images/jinterior_logo.png'
import { Button } from "flowbite-react";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Link } from 'react-scroll';

const Navbar = () => {

    const [openNav,setOpenNav] = useState(false)
    const [nav,setNav] = useState({
        show:true,
        scrollPos:0,
    })
    const [navBackground,setNavBackground] =useState(false)

    useEffect(()=>{
       window.addEventListener("scroll",handleScroll)
      return ()=>{
        window.removeEventListener('scroll', handleScroll)
      }
    },[nav.show,nav.scrollPos])

    const handleScroll =()=>{
    //  console.log(document.body.getBoundingClientRect())
  
    if(window.scrollY >=30){
      setNavBackground(true)
    }else{
      setNavBackground(false)
    }
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
    {/* ${nav.show?'bg-white':' bg-[hsla(0,0%,100%,.45) backdrop-blur-[29.5px]  box-shadow:0_8px_32px_0_rgba(31,38,135,.37)'} */}
       <header className= {`fixed top-0 w-full px-2 lg:px-5 h-[61px] shadow-xl ease-in-out z-30  ${navBackground? ' bg-[hsla(0,0%,100%,.45) backdrop-blur-[29.5px]  box-shadow:0_8px_32px_0_rgba(31,38,135,.37)':'bg-gradient-to-b from-[rgba(0,0,0,0.08)] to-[rgba(255,255,255,0)'} bg-no-repeat font-michroma transition-all duration-300 ${nav.show? "visible":"invisible"}`}>
        <div className="container mx-auto flex justify-between h-full items-center">
            <div className="flex justify-center items-center">
             <img src={logo} className="w-[56px] h-[51px] rounded-md"/> <span className={`text-sm  flex justify-center items-center  ${navBackground?'text-black':'[text-shadow:2px_2px_5px_var(--tw-shadow-color)] text-white shadow-black '}lg:text-[16px]`} > <small className="text-amber-500 font-bold text-2xl lg:text-[36px]">J</small > Interior & Wood Works</span>
            </div>
            <nav >
               <div className="cursor-pointer lg:hidden" onClick={handleNavbar}>
              {openNav ?    <CgClose className={`text-4xl ${navBackground?'text-black':'text-white'} ` } />:<FaBars   className={`text-4xl ${navBackground?'text-black':'text-white'} ` }/>
                }
               </div>
                <ul className = {`fixed w-full  ${openNav?'h-[250px] p-6':'h-0 p-0'} ${navBackground?"bg-white lg:bg-inherit":null} capitalize overflow-hidden border-t top-[61px]
items-center left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full text-white transition-[height] transiton-[background] duration-300`}>
                    {/* <li> About</li>
                     */}
                     <li>    <Link 
     
      to="about" 
        className={`${navBackground?'text-black':'[text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-black '}`}
      smooth={true} 
    //   offset={50} 
      duration={500} 
      style={{textShadow:"2px 2px #f"}}
    >
      About
    </Link></li>
                    <li><Link to="our service" smooth={true} duration={500} className={`${navBackground?'text-black':'[text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-black '}`} > Services</Link></li>
                    <li className={`${navBackground?'text-black':'[text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-black '}`}>Clients</li>
                    <li className={`${navBackground?'text-black':'[text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-black '}`}>Projects</li>
                    <li className="p-2  rounded-xl bg-yellow-300 text-black">Contact us</li>
                
                </ul>
            </nav>
        </div>
        
       </header>
    </>
  )
};

export default Navbar;
