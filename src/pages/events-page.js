import React from 'react'
import PageHeader from '../Components/common/page-header'
import Spacer from '../Components/common/spacer'
import Events from '../Components/events-page/events'

const EventsPage = () => {
  return (
    <>
      <PageHeader title="Events"/>
      <Spacer/>
      <Events/>
      <Spacer/>

    </>
  )
}

export default EventsPage
