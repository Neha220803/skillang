import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import walletIcon from '../../../assets/icons/wallet-money.svg';
import './nurseStats.css';
import '../../../index.css'

const NurseStats = () => {
  return (
    <div className='px-lg-5  d-flex align-items-center justify-content-center w-100'>
      <Container className='w-100 d-flex justify-content-center align-items-center'>
        <Row  className='nurseStatsbg py-4 ' >
          
            <Col lg={4} sm={12} xs={12} className='d-flex flex-column '>
          <div className='compSal d-flex flex-row'>
            <img src={walletIcon} alt='wallet' className='image-fluid' />
            <div className='text-primary-inverse caption-medium'>Competitive Salaries</div>
          </div>
          <div className='subheading-small-medium text-content-secondary'>Before Recognition</div>
          <div className='subheading-big-medium text-content-secondary'>
            €2,200 - €2,400 PM
          </div>
          </Col>
          <Col lg={4} sm={12} xs={12} className='d-flex flex-column align-items-start justify-content-end mt-4'>
          <div className='subheading-small-medium text-content-secondary'>After Recognition</div>
          <div className='subheading-big-medium' style={{color:'#4F8AFB'}}>€3,200 - €3,400 PM</div>
          </Col>
          <Col lg={4}>
            
          </Col>
      
        </Row>
      </Container>
    </div>
  )
}

export default NurseStats