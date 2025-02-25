import React from 'react'
import { CardText, CardTitle, Container, Image, Col, Card, Row } from 'react-bootstrap'
import nurseService from '../../assets/images/nursing/nurseService.png';

const OurServices = () => {
  return (
    <div>
        <Container className='py-5 my-5'>
            <Row>
                <Col>
                    <Image src={nurseService} alt="nurse" className='w-100 h-50'/>
                    <div>
                        <div className='heading-big-medium'>Our Services</div>
                        <div className='paragraph-big-medium'>We offer tailored support for your study and work abroad journey, including career guidance, 
                            visa assistance, documentation help, language prep, job placement, and relocation aid. Our 
                            expert mentorship helps turn your international dreams into reality.</div>
                    </div>
                
                </Col>
                <Col>
                    <Card>
                        <CardTitle>Screening Process</CardTitle>
                        <CardText>Screening and checking the eligibility that matches the requirements</CardText>
                    </Card>
                    <Card>
                        <CardTitle>Screening Process</CardTitle>
                        <CardText>Screening and checking the eligibility that matches the requirements</CardText>
                    </Card>
                    <Card>
                        <CardTitle>Screening Process</CardTitle>
                        <CardText>Screening and checking the eligibility that matches the requirements</CardText>
                    </Card>
                    <Card>
                        <CardTitle>Screening Process</CardTitle>
                        <CardText>Screening and checking the eligibility that matches the requirements</CardText>
                    </Card>
                    <Card>
                        <CardTitle>Screening Process</CardTitle>
                        <CardText>Screening and checking the eligibility that matches the requirements</CardText>
                    </Card>
                    
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OurServices