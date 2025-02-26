import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import  nursePartnerImg from '../../../assets/images/nursing/nursePartner.png';
import './partnerWithUs.css';

const PartnerWithUsSection = () => {
  return (
    <div>
        <Container className='nurse-partner-bg text-white my-5 text-start'>
            <Row>
                <Col>
                <Image fluid src={nursePartnerImg} alt="" />
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center text-start'>
                <div className='heading-big-medium text-start'>
                    Partner 🤝 with Us
                </div>
                <div className='paragraph-big-medium text-start' >
                    Join hands with us to create opportunities for students seeking world-class education and global exposure.
                </div>
                <div className='d-flex gap-3'>
                    <div>Institutions</div>
                    <div>Companies</div>
                    <div>Recruiters</div>
                </div>
                <button className='btn-primary'> Connect Now
                </button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PartnerWithUsSection