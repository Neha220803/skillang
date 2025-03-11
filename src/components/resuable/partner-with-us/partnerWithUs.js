import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import nursePartnerImg from '../../../assets/images/reusable/partner-image.png';
import institudeIcon from '../../../assets/icons/resuable/instituteIcon.svg';

import companyIcon from '../../../assets/icons/resuable/companyIcon.svg';

import recruiterIcon from '../../../assets/icons/resuable/recruitIcon.svg';
import './partnerWithUs.css';

const PartnerWithUsSection = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center mb-5'>
            <Container className='nurse-partner-bg text-start'>
                <Row>
                    <Col className='d-none d-md-block' md={6} sm={12} xs={12}>
                        <Image fluid src={nursePartnerImg} alt="" />
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-start text-start' md={6}>
                        <div className='heading-big-medium text-start mb-2 text-white '>
                            Partner 🤝 with Us
                        </div>
                        <div className='paragraph-big-medium text-start mb-3 text-white ' >
                            Join hands with us to create opportunities for students seeking world-class education and global exposure.
                        </div>
                        <div className='d-flex flex-wrap gap-3 mb-3'>
                            <div className='partner-subbox d-flex align-items-center '><img src={institudeIcon} alt="" /> <div className='caption-medium'>Institutions</div></div>
                            <div className='partner-subbox  d-flex align-items-center'>  <img src={companyIcon} alt="" /> <div className='caption-medium'> Companies</div></div>
                            <div className='partner-subbox  d-flex align-items-center'>  <img src={recruiterIcon} alt="" /> <div className='caption-medium'> Recruiters</div></div>
                        </div>
                        <button className='btn-primary mt-3'
                            onClick={() => {

                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}> Connect Now
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