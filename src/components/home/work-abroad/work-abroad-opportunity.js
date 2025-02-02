import React from 'react';
import { CardTitle, Container, Card, Row, Col, CardBody } from 'react-bootstrap';
import '../../../App.css';
import './work-abroad-opportunity.css';
import '../../../index.css';
import work1 from '../../../images/home/work-opp-1.png';
import work2 from '../../../images/home/work-opp-2.png';
import work3 from '../../../images/home/work-opp-3.png';

const cardData = [
  { title: "Nursing and Health care", img: work1, color: "#E5ECF9" },
  { title: "Information Technology", img: work2, color: "#F3EEFC" },
  { title: "Hospitality Management", img: work3, color: "#FBEAEA" }
];

const WorkAbroadOpportunity = () => {
  return (
    <section className='d-flex flex-column align-items-center justify-content-center'>
      <Container className='d-flex flex-column align-items-center justify-content-center gap-4 '>
        <Row>
          <h1> Work Abroad Opportunities </h1>
        </Row>
        <Row className='d-flex align-items-center justify-content-center'>
          {cardData.map((card, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <Card className='prim-card d-flex flex-row-reverse border-0' style={{ backgroundColor: card.color }}>
                <Card.Img variant="top" src={card.img} alt="Card image" style={{ width: '45%' }} />
                <CardBody className='d-flex flex-column justify-content-around'>
                  <CardTitle className=''>{card.title}</CardTitle>
                  <button className='btn-primary' style={{width: '120px'}}>Get Started</button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
            
        </Row>
      </Container>
    </section>
  );
};

export default WorkAbroadOpportunity;
