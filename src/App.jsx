import { useState } from 'react'
import { Navbar,Testimonial,Feedback,FooterCom, Header, About, OurServicesComp, MapContainer } from './components'





function App() {


  return (
    <>
    <Navbar/>
    <Header/>
     <About/>
   <OurServicesComp/>
   <Testimonial/>
    <Feedback/>
   <MapContainer/>
    <FooterCom/>
    </>
  )
}

export default App
