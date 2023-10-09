import React from 'react'
import Slider from '../Components/home-page/slider'
import Welcome from '../Components/about-page/welcome'
import Spacer from '../Components/common/spacer'
import FeaturedCourses from '../Components/home-page/featured-courses'
import UpcomingEvents from '../Components/events-page/upcoming-events'
import MobileApp from '../Components/home-page/mobile-app'


const HomePage = () => {
  return (
    <>
        <Slider/>
        <Spacer/>
        <Welcome/> 
        <Spacer/>
        <FeaturedCourses />
        <Spacer/>
        <UpcomingEvents/>
        <Spacer/>
        <MobileApp/>
    </>
  )
}

export default HomePage