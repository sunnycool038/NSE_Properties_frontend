import React from 'react'

import { HomeNavbar } from '../../components/navigation'
import { Slider } from '../../container/home'
import About from '../../container/home/About/About'
import { Properties } from '../../container/home'
import { Location } from '../../container/home'
import { FAQ } from '../../container/home'
import { Footer } from '../../container/home'
//import { useSelector } from "react-redux";

const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <Slider />
      <About />
      <Properties />
      <Location />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
