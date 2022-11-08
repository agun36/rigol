import React from 'react'
import { Col, Row } from 'react-bootstrap'
import past from '../assests/pastproject.png'
const Project = () => {
  return (
    <div className='project   ' id='projects'>
      <Row className='pojets '>
        <h1 className='project__title mb-5'>Some Past Projects</h1>
        <Col className='project__card--List mb-5'>
          <Col className='project__card '>
            <img src={past} alt='' />
            <p className='text1'>
              Provision of online exam proctor solution for a private sector and
              public sector clients.
            </p>
          </Col>
          <Col className='project__card'>
            <img src={past} alt='' />
            <p className='text2'>
              Provision of enterprise document management solution for a private
              and public sector clients.
            </p>
          </Col>
          <Col className='project__card'>
            <img src={past} alt='' />
            <p className='text3'>
              Design Sprint: assisted corporate and government client in their
              product and service innovation.
            </p>
          </Col>
        </Col>
        <Col className='project__card--List2'>
          <Col className='project__card'>
            <img src={past} alt='' />
            <p className='text4'>
              Development and operation of e-Business Retail Portal for some
              private sector clients.
            </p>
          </Col>

          <Col className='project__card'>
            <img src={past} alt='' />
            <p className='text5'>
              Consultancy service on the development of ICT Strategy Plan.
            </p>
          </Col>
          <Col className='project__card'>
            <img src={past} alt='' />
            <p className='text6'>
              Consultancy service for Project Management on the implementation
              of Core Banking Application.
            </p>
          </Col>
        </Col>
        <Row className='dbtn'>
          <button
            className='project__btn m-auto mt-5'
            style={{ width: '200px' }}
          >
            More Projects
          </button>
        </Row>
      </Row>
    </div>
  )
}

export default Project
