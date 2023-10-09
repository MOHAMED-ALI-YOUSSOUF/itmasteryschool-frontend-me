import React from 'react'
import Slider from '../Components/home-page/slider'
import Welcome from '../Components/about-page/welcome'
import Spacer from '../Components/common/spacer'
import CourseCard from '../Components/courses-page/course-card'


const HomePage = () => {
  return (
    <>
        <Slider/>
        <Spacer/>
        <Welcome/> 
        <Spacer/>
        <CourseCard courses={...courses}/>
    </>
  )
}

export default HomePage