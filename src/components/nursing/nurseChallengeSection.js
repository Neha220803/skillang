import React from 'react';
import { Card, Container, Image, Col, Row } from 'react-bootstrap';
import nurseService from '../../assets/images/nursing/nurseService.png';

const challenges = [
  { title: 'Licensing Challenges', text: 'We assist with the recognition of your qualifications.' },
  { title: 'Language Barriers', text: 'We offer language courses and support for professional language certification.' },
  { title: 'Cultural Adjustment', text: 'Our team provides cultural coaching and ongoing support for life and work in Germany.' }
];

const NurseChallengeSection = () => {
  return (
    <Container className='py-5 my-5'>
      <Row>
        <Col>
          <Image src={nurseService} alt="nurse" className='w-100 h-50' />
          <div>
            <div className='heading-big-medium'>Challenges for International Nurses</div>
            <div className='paragraph-big-medium'>
              Following are the challenges faced by international nurses & how we help them overcome these challenges.
            </div>
          </div>
        </Col>
        <Col>
          {challenges.map((challenge, index) => (
            <Card key={index} className="mb-3 p-3">
              <Card.Title>{challenge.title}</Card.Title>
              <Card.Text>{challenge.text}</Card.Text>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default NurseChallengeSection;
