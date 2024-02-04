import { Button, Footer } from 'flowbite-react';
import { useEffect, useState } from 'react';

import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const FooterCom= ()=> {
    const [backToTop,setBackToTop] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
},[])
const handleScroll = ()=>{
    if(window.scrollY >600){
        setBackToTop(true)
    }else{
        setBackToTop(false)
    }
}

const scrollUp = ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
  return (
   
 <>
   {backToTop && <Button type='button' className='fixed bottom-8 right-8' color='green' onClick={scrollUp}>Top</Button>}
   <footer className="footer bg-[#24262b] py-16">
  	 <div className="max-w-7xl mx-auto">
  	 	<div className="flex flex-wrap">
  	 		<div className="flex-1 mb-3 lg:mb-0  px-4">
  	 			<h4 className="text-xl text-white capitalize mb-5 lg:mb-9 font-medium relative before:content-[''] before:absolute before:left-0 before:-bottom-3 before:bg-[#e91e63] before:h-1 before:w-20">J Interior & wood works</h4>
            <address className='text-[#666] font-normal lg:font-medium lg:text-xl'>
          Phase-3, Spencer Plaza, Door No: G171, 769,<br/>
             Anna Salai, Chennai, 600002 <br/>
            letstalk@ysquaretechnology.com
            </address>
  	 		</div>
  	 		<div className="w-full lg:w-1/6 px-4 mb-3 lg:mb-0">
  	 			<h4  className="text-xl text-white capitalize mb-5 lg:mb-9 font-medium relative before:content-[''] before:absolute before:left-0 before:-bottom-3 before:bg-[#e91e63] before:h-1 before:w-12">get help</h4>
  	 			<ul>
  	 				<li className='mb-3'><a href="#" className='capitalize text-[#bbbbbb] font-light transition-all duration-75 hover:text-white hover:ps-2'>FAQ</a></li>
  	 				<li className='mb-3'><a href="#" className='capitalize text-[#bbbbbb] font-light transition-all duration-75 hover:text-white hover:ps-2'>shipping</a></li>
  	 				<li className='mb-3'><a href="#" className='capitalize text-[#bbbbbb] font-light transition-all duration-75 hover:text-white hover:ps-2'>returns</a></li>
  	 				<li className='mb-3'><a href="#" className='capitalize text-[#bbbbbb] font-light transition-all duration-75 hover:text-white hover:ps-2'>order status</a></li>
  	 				<li ><a href="#" className='capitalize text-[#bbbbbb] font-light transition-all duration-75 hover:text-white hover:ps-2'>payment options</a></li>
  	 			</ul>
  	 		</div>

  	 		<div className="w-full lg:w-1/4 px-4 mb-3 lg:mb-0">
  	 			<h4  className="text-xl text-white capitalize mb-5 lg:mb-9 font-medium relative before:content-[''] before:absolute before:left-0 before:-bottom-3 before:bg-[#e91e63] before:h-1 before:w-12">follow us</h4>
  	 			<div className="social-links flex justify-center items-center">
  	 				<a href="#" className='w-10 h-10 flex justify-center items-center bg-[rgba(255,255,255,0.2)] me-3 mb-3  rounded-full text-white transition-all duration-75  leading-10 hover:text-[#24262b] hover:bg-white'><BsFacebook/></a>
  	 				<a href="#" className='w-10 h-10 flex justify-center items-center bg-[rgba(255,255,255,0.2)] me-3 mb-3  rounded-full text-white transition-all duration-75  leading-10 hover:text-[#24262b] hover:bg-white'><BsFacebook/></a>
             <a href="#" className='w-10 h-10 flex justify-center items-center bg-[rgba(255,255,255,0.2)] me-3 mb-3  rounded-full text-white transition-all duration-75  leading-10 hover:text-[#24262b] hover:bg-white'><BsFacebook/></a>
             <a href="#" className='w-10 h-10 flex justify-center items-center bg-[rgba(255,255,255,0.2)] me-3 mb-3  rounded-full text-white transition-all duration-75  leading-10 hover:text-[#24262b] hover:bg-white'><BsFacebook/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
     <hr className='font-bold my-5 w-11/12 mx-auto border border-b border-b-[#ccc]' />
     <p className='text-center text-white text-sm lg:text-[16px]'> J Interior & Wood Works &copy;  {new Date().getFullYear()} | All Rights Reserved.</p>
     <p className='text-center text-white text-sm lg:text-[16px] mt-3'>Designed by kumerasan  and developed by Manikandan.</p>

  </footer>
 </>
  );
}

export default FooterCom