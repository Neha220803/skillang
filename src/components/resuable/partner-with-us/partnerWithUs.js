import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import  nursePartnerImg from '../../../assets/images/nursing/nursePartner.png';
import './partnerWithUs.css';

const PartnerWithUsSection = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mb-5'>
        <Container className='nurse-partner-bg text-white text-start'>
            <Row>
                <Col className='d-none d-md-block' md={6} sm={12} xs={12}>
                <Image fluid src={nursePartnerImg} alt="" />
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-start text-start' md={6}>
                <div className='heading-big-medium text-start mb-2'>
                    Partner 🤝 with Us
                </div>
                <div className='paragraph-big-medium text-start mb-3' >
                    Join hands with us to create opportunities for students seeking world-class education and global exposure.
                </div>
                <div className='d-flex gap-3 mb-3'>
                    <div className='partner-subbox'>Institutions</div>
                    <div className='partner-subbox'>Companies</div>
                    <div className='partner-subbox'>Recruiters</div>
                </div>
                <button className='btn-primary mt-3'> Connect Now
                </button>
                </Col>
                <Col className='d-block d-md-none mt-4' md={6} sm={12} xs={12}>
                <Image fluid src={nursePartnerImg} alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PartnerWithUsSection