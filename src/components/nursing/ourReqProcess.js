import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import reqImg from '../../assets/images/nursing/reqProcess.svg';

const OurReqProcess = () => {
  return (
    <div className='my-5 py-5'>
        <Container>
            <Row>
                <div className='heading-big-medium'>Our Recruitment Process and Timeline</div>
                <div className='paragraph-big-medium'>Explore our streamlined recruitment process and timeline, ensuring a smooth journey from application to job placement</div>
            </Row>
        </Container>
        <Container>
            <Row>
                <Image src={reqImg} alt="" className='w-100 h-75' />
            </Row>
        </Container>
    </div>
  )
}

export default OurReqProcess