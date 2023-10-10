import React from 'react'
import events from "../../helpers/data/events.json"

const Events = () => {
  return (
    <Container>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
        {events.map((event) => (
          <Col key={event.id}>
            <CourseCard {...event} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Events
