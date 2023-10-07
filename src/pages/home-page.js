import React from 'react'
import Slider from '../Components/home-page/slider'
import Welcome from '../Components/about-page/welcome'
import Spacer from '../Components/common/spacer'


const HomePage = () => {
  return (
    <>
        <Slider/>
        <Spacer/>
        <Welcome/> 
        <Spacer/>
    </>
  )
}

export default HomePage