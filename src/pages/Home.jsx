import React from 'react'
import { Banner } from '../components/Banner'
import Services from '../components/Services'
import Restarurant from '../components/Restarurant'
import Delivery from '../components/Delivery'
import Specialities from '../components/Specialities'
import Totalcount from '../components/Totalcount'
import Map from '../components/Map'
import Instagram from '../components/Instagram'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
     <Banner/>
     <Services/>
     <Restarurant/>
     <Delivery/>
     <Specialities/>
     <Totalcount/>
     <Map/>
     <Instagram/>
     <Footer/>
    
    </>
  )
}

export default Home