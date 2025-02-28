import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import reqImg from '../../../assets/images/nursing/reqProcess.svg';
import './ourReqProcess.css';

const OurReqProcess = () => {
  return (
    <div className='text-md-center'>
        <Container>
            <Row>
                <div className='heading-big-medium mb-2'>Our Recruitment Process and Timeline</div>
                <div className='paragraph-big-medium text-content-secondary mb-4'>Explore our streamlined recruitment process and timeline, ensuring a smooth journey from application to job placement</div>
            </Row>
        </Container>
        <Container>
            <Row>
                <div className="req-process-container">
                    <Image src={reqImg} alt="Recruitment Process" className='req-process-img' />
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default OurReqProcess;
