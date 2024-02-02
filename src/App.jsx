import { useState } from 'react'
import Navbar from './components/Navbar'
import { Feedback } from './components/Feedback'
import FooterCom from './components/Footer'



function App() {


  return (
    <>
    <Navbar/>
   <header name="header" className='bg-teal-600 h-[90vh] flex justify-center items-center text-3xl text-white'><div>Header</div></header>
   <div name='about' className='bg-orange-600 h-[90vh] flex justify-center items-center text-3xl text-white'><div>About</div></div>
   <div name="our service" className='bg-cyan-600 h-[90vh] flex justify-center items-center text-3xl text-white'><div>Our Service</div></div>
    <Feedback/>
    <FooterCom/>
    </>
  )
}

export default App
