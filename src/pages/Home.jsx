import React from 'react'
import { Banner } from '../components/Banner'
import Services from '../components/Services'
import Restarurant from '../components/Restarurant'
import Delivery from '../components/Delivery'
import Specialities from '../components/Specialities'

const Home = () => {
  return (
    <>
     <Banner/>
     <Services/>
     <Restarurant/>
     <Delivery/>
     <Specialities/>
    </>
  )
}

export default Home