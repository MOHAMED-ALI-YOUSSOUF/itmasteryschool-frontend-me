import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Map from './map'
import ContactForm from './contact-form'

const Contact = () => {
  return (
    <div className='contact'>
        <Container>
            <Card>
                <Card.body>
                    <Row>
                        <Col md={8}>
                            <ContactForm/>
                        </Col>
                        <Col md={4}></Col>

                    </Row>
                </Card.body>
            </Card>

        </Container>

        <Map/>
      
    </div>
  )
}

export default Contact;
