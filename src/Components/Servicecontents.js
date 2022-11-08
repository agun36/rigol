import React from 'react'
import code1 from '../assests/code1.png'
import code from '../assests/code.png'
import plane from '../assests/plane.png'
import bulb from '../assests/bulb.png'
const Servicecontents = () => {
  return (
    <div>
      <div className='service-card  ' id='service'>
        <h1 className='text'>Our Service</h1>
        <div className='cardlist'>
          <div className='service__cardlist'>
            <img src={code1} alt='' />
            <h4>Business Solutions</h4>
            <p className='textlist'>
              We are a software shop that has built few business solutions that
              help our clients improve their operational efficiency and
              bottomline.
            </p>
          </div>
          <div className='service__cardlist'>
            <img src={code} alt='' />
            <h4>ICT Consulting</h4>
            <p className='textlist'>
              We consult for corporate on technology strategy, enterprise
              architecture and technology execution to drive strategic business
              goals.
            </p>
          </div>
        </div>
        <div className='cardlist'>
          <div className='service__cardlist'>
            <img src={plane} alt='' />
            <h4>Design Sprint </h4>
            <p className='textlist'>
              We facilitate design sprint to help you innovate on new services
              and products quickly and effectively so you can focus on giving
              your customers what they truly want.
            </p>
          </div>
          <div className='service__cardlist'>
            <img src={bulb} alt='' />
            <h4>GovTech Innovation</h4>
            <p className='textlist'>
              We work with governments to innovate on efficient and value-driven
              services for citizens, businesses, external stakeholders and other
              government institutions.
            </p>
          </div>
        </div>
        <button className='btn-service'>Find out More</button>
      </div>
    </div>
  )
}

export default Servicecontents
