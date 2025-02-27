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
                <Col className='d-flex flex-column justify-content-center align-items-start text-start'>
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
                <button className='btn-primary'> Connect Now
                </button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PartnerWithUsSection