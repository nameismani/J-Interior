import { useState } from 'react'
import { Navbar,Testimonial,Feedback,FooterCom } from './components'
import { IoCallOutline } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";




function App() {


  return (
    <>
    <Navbar/>
   <header name="header" className='bg-teal-600 h-[90vh] flex justify-center items-center text-3xl text-white header bg-cover bg-center object-cover'><div>Header</div></header>
   <div name='about' className='bg-orange-600 h-[90vh] flex justify-center items-center text-3xl text-white'><div>About</div></div>
   <div name="our service" className='bg-cyan-600 h-[90vh] flex justify-center items-center text-3xl text-white'><div>Our Service</div></div>
   <Testimonial/>
    <Feedback/>
    <section className='my-20 bg-white'>
             <h2 className=' text-2xl md:text-4xl text-black font-bold capitalize text-center'>We’d Love to hear from you</h2>
             <p className='text-center text-black mt-3'>Call us anytime between 9am – 7pm</p>

             <div className="w-full md:max-w-5xl mx-auto">
              <div className="flex flex-wrap  lg:max-h[370px] lg:h-[370px] justify-center items-center mt-8 md:mt-14">
                <div className="contact min-w-[350px] flex-1 flex-col h-full flex justify-around items-start px-3 lg:px-0">
                <div>
                  <a href="tel:+9566195492" className='flex'>
                    <span className='flex items-center justify-center p-3 border border-gray-500 rounded-full  me-3'><IoCallOutline className='text-3xl font-bold' /></span>
                    <span>
                      Phone no. <br/>
                      <strong>1800 270 30698</strong>
                    </span>
                  </a>
                </div>
                <div className='mt-5'>
                  <a href='mailto:' className='flex'>
                    <span className='flex items-center justify-center p-3 border border-gray-500 rounded-full  me-3'><SlEnvolope className='text-3xl font-bold' /></span>
                    <span>
                      Email <br/>
                      <strong>contact@gmail.com</strong>
                    </span>
                  </a>
                </div>
                <div className='mt-5'>
                  <a href="tel:+9566195492" className='flex'>
                    <span className='flex items-center justify-center p-3 h-14 border border-gray-500 rounded-full  me-3'><IoLocationOutline className='text-3xl font-bold' /></span>
                    <span className='lg:w-1/2 text-wrap'>
                    <strong>MagickHome Experience Center,</strong><br />
                    4th Avenue shanthi, Colony, Main Rd, 
                    Anna Nagar, Chennai, Tamil Nadu 600040
                    </span>
                  </a>
                </div>
                </div>
                <div className='w-full mt-8 md:mt-0 min-w-[350px] h-full flex-1 p-3'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15542.490520920524!2d79.90165284059763!3d13.123076292752323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52901710ff7ebb%3A0x38136c2ffb1168b4!2sThiruvallur%2C%20Tamil%20Nadu%20602003!5e0!3m2!1sen!2sin!4v1706973991428!5m2!1sen!2sin"  className='w-full h-[350px] lg:h-full shadow-2xl'  style={{border:0}} loading="lazy" ></iframe>
                </div>
              </div>

             </div>
    </section>
    <FooterCom/>
    </>
  )
}

export default App
