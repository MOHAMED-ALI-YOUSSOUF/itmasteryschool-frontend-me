import React from 'react'
import PageHeader from '../Components/common/page-header'
import Courses from '../Components/courses-page/courses'
import Spacer from '../Components/common/spacer'

const CoursesPage = () => {
  return (
    <>
      <PageHeader title="Courses"/>
      <Spacer/>
      <Courses />
      <Spacer/>
    </>
  )
}

export default CoursesPage
