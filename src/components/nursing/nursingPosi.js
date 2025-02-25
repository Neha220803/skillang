import React from 'react';
import { Card, CardText, CardTitle, Container, Row, Col } from 'react-bootstrap';

const nursingPositions = [
  { title: 'General Nurses', text: 'Providing essential patient care in hospitals and clinics.' },
  { title: 'ICU Nurses', text: 'Specialized in critical care for intensive care units.' },
  { title: 'Pediatric Nurses', text: 'Caring for infants, children, and adolescents in medical settings.' }
];

const NursingPosition = () => {
  return (
    <Container className="py-5">
      <Row>
        <div className="heading-big-medium">Available Nursing Positions in Germany</div>
        <div className="paragraph-big-medium">Position availability depends on regional healthcare needs</div>
      </Row>
      <Row className="mt-4">
        {nursingPositions.map((position, index) => (
          <Col key={index} md={4}>
            <Card className="p-3 shadow-sm">
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
