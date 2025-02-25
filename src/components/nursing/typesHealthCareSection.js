import React from 'react';
import { CardText, CardTitle, Container, Image, Col, Card, Row } from 'react-bootstrap';
import nurseService from '../../assets/images/nursing/nurseService.png';

const challenges = [
  { title: 'Licensing Challenges', text: 'We assist with the recognition of your qualifications.' },
  { title: 'Language Barriers', text: 'We offer language courses and support for professional language certification.' },
  { title: 'Cultural Adjustment', text: 'Our team provides cultural coaching and ongoing support for life and work in Germany.' }
];

const TypesHealthCareSection = () => {
  return (
    <div>
      <Container className="py-5 my-5">
        <Row>
          <Col lg={6}>
            <Image src={nurseService} alt="nurse" className="w-100 h-50" />
            <div>
              <div className="heading-big-medium">Types of Healthcare Facilities Hiring Nurses</div>
            </div>
          </Col>
          <Col lg={6}>
            {challenges.map((challenge, index) => (
              <Card key={index} className="mb-3 p-3 shadow-sm">
                <CardTitle>{challenge.title}</CardTitle>
                <CardText>{challenge.text}</CardText>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TypesHealthCareSection;
