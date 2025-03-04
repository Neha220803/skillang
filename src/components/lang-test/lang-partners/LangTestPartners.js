import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import britishCounsil from '../../../assets/images/lang-test/britishCounsil.png';
import duo from '../../../assets/images/lang-test/duo.png';
import pear from '../../../assets/images/lang-test/pearosn.png';

const LangTestPartners = () => {
  return (
    <div className='text-center '>
      <Container className=''>
      
      <Row>
        <div className='heading-big-medium'>
        Our Language & Test Prep Programs
      </div>

      </Row>
      <Row>
        <div className='d-flex gap-5 justify-content-center'>
          <img src={britishCounsil} alt=' ' />
          <img src={duo} alt=' ' />
          <img src={pear} alt=' ' />
        
      </div>

      </Row>
      </Container>
    </div>
  )
}

export default LangTestPartners