import React from 'react';
import { Card, CardText, CardTitle, Container, Image, Col, Row } from 'react-bootstrap';
import nurseService from '../../assets/images/nursing/nurseService.png';

const services = [
  { title: 'Screening Process', text: 'Screening and checking the eligibility that matches the requirements.' },
  { title: 'Career Guidance', text: 'Providing professional career counseling for international placements.' },
  { title: 'Visa Assistance', text: 'Helping with visa applications and necessary documentation.' },
  { title: 'Language Preparation', text: 'Offering language courses to meet job requirements.' },
  { title: 'Relocation Support', text: 'Assisting with accommodation, cultural adaptation, and settling in.' }
];

const OurServices = () => {
  return (
    <Container className="py-5 my-5">
      <Row>
        <Col md={6}>
          <Image src={nurseService} alt="nurse" className="w-100 h-50" />
          <div>
            <div className="heading-big-medium">Our Services</div>
            <div className="paragraph-big-medium">
              We offer tailored support for your study and work abroad journey, including career guidance, 
              visa assistance, documentation help, language prep, job placement, and relocation aid. 
              Our expert mentorship helps turn your international dreams into reality.
            </div>
          </div>
        </Col>
        <Col md={6}>
          {services.map((service, index) => (
            <Card key={index} className="mb-3 p-3 shadow-sm">
              <CardTitle>{service.title}</CardTitle>
              <CardText>{service.text}</CardText>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default OurServices;
