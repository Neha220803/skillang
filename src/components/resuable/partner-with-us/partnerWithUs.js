import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import  nursePartnerImg from '../../../assets/images/nursing/nursePartner.png';

const PartnerWithUsSection = () => {
  return (
    <div>
        <Container className='bg-primary text-white'>
            <Row>
                <Col>
                <Image fluid src={nursePartnerImg} alt="" />
                </Col>
                <Col>
                <div className='heading-big-medium'>
                    Partner 🤝 with Us
                </div>
                <div className='paragraph-big-medium'>
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