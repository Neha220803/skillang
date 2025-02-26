import React from 'react';
import { Card, CardText, CardTitle, Container, Row, Col } from 'react-bootstrap';
import './nursePosi.css';

const nursingPositions = [
  { title: 'General Nurses', text: 'Providing essential patient care in hospitals and clinics.' },
  { title: 'ICU Nurses', text: 'SExpert care in specific medical fields like ICU, pediatrics, or oncology' },
  { title: 'Pediatric Nurses', text: 'Advanced practice nurses with diagnostic and treatment responsibilities' },
   { title: 'Care Manager', text: 'Overseeing patient care plans and ensuring quality healthcare services' },
  { title: 'Nurse Educators', text: 'Training and mentoring future nursing professionals' },
  { title: 'Home Care Nurses', text: 'Delivering personalized medical care to patients at home' }
];

const NursingPosition = () => {
  return (
    <Container className="py-5">
      <Row className='text-center'>
        <div className="heading-big-medium text-content-primary mb-1" >Available Nursing Positions in Germany</div>
        <div className="paragraph-big-medium text-content-secondary mb-4">Position availability depends on regional healthcare needs</div>
      </Row>
      <Row className="mt-4">
        {nursingPositions.map((position, index) => (
          <Col key={index} md={4}>
            <Card className="nurse-posi-card mb-4">
              <CardTitle>{position.title}</CardTitle>
              <CardText>{position.text}</CardText>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NursingPosition;
