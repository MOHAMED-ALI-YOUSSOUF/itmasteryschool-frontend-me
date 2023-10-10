import React from 'react'
import PageHeader from '../Components/common/page-header'
import Spacer from '../Components/common/spacer'
import Welcome from '../Components/about-page/welcome'
import Instructors from '../Components/about-page/instructors'

const AboutPage = () => {
  return (
    <div>
      <PageHeader  title="About"/>
      <Spacer/>
      <Welcome/>
      <Spacer/>
      <Instructors/>
      <Spacer/>

    </div>
  )
}

export default AboutPage
