import { useState } from 'react'
import { Navbar,Testimonial,Feedback,FooterCom, Header, About, OurServicesComp, MapContainer, Projects } from './components'





function App() {


  return (
    <>
    <Navbar/>
    <Header/>
     <About/>
   <OurServicesComp/>
   <Projects/>
   {/* <Testimonial/> */}
    {/* <Feedback/> */}
   <MapContainer/>
    <FooterCom/>
    </>
  )
}

export default App
