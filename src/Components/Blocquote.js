import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
const Blocquote = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <div className='blockg'>
      <Row className=' p-5 justify-center align-items-center'>
        <Col>
          <h1 className='blocq--title'>Ready to give your business a boost?</h1>
          <p className='blocq--text'>
            Need further clarification or ready to start a project? Get in touch
            with us and we will be more than happy to assist.
          </p>
        </Col>
        <Col>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='validationCustom01'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='password' placeholder='Password' required />
                <Form.Control.Feedback type='invalid'>
                  Please choose a name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId='validationCustom02'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter email' required />
                <Form.Control.Feedback type='invalid'>
                  Please choose a Email.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group
              as={Col}
              className='mb-3'
              controlId='validationCustom03'
            >
              <Form.Label>message</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='message'
                required
              />
            </Form.Group>
            <Row>
              <Button
                className='btn-success'
                style={{ background: '#9CC236' }}
                as={Col}
                variant='primary'
                type='submit'
              >
                Submit
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Blocquote
