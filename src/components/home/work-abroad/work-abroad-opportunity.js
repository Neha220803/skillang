import React from 'react';
import { CardTitle, Container, Card, Row, Col, CardBody } from 'react-bootstrap';
import '../../../App.css';
import './work-abroad-opportunity.css';
// import OppositeContentTimeline from './try';
import '../../../index.css';
import work1 from '../../../images/home/work-opp-1.png';
import work2 from '../../../images/home/work-opp-2.png';
import work3 from '../../../images/home/work-opp-3.png';
import work4 from '../../../images/home/work-opp-4.svg'; // New image
import work5 from '../../../images/home/work-opp-5.svg'; // New image
import work6 from '../../../images/home/work-opp-6.svg'; // New image
import work7 from '../../../images/home/work-opp-7.png'; // New image
import work8 from '../../../images/home/work-opp-8.svg'; 
import work9 from '../../../images/home/work-opp-9.svg'; 
import work10 from '../../../images/home/work-opp-10.svg'; 


const primCardData = [
  { title: "Nursing and Health care", img: work1, color: "#E5ECF9" },
  { title: "Information Technology", img: work2, color: "#F3EEFC" },
  { title: "Hospitality Management", img: work3, color: "#FBEAEA" }
];

const secCardData = [
  { title: "Electrical & Electronics", img: work4, color: "#E5ECF9" },
  { title: "Plumbing", img: work5, color: "#F3EEFC" },
  { title: "Vehicle Painting", img: work6, color: "#FBEAEA" },
  { title: "Automobile", img: work7, color: "#E5ECF9" },
  { title: "Mechanical", img: work8, color: "#F3EEFC" },
  { title: "Heavy Welding", img: work9, color: "#FBEAEA" },
  { title: "Heavy Vehicle Driver", img: work10, color: "#E5ECF9" }
];

const WorkAbroadOpportunity = () => {
  return (
    <section className='d-flex flex-column align-items-center justify-content-center'>
      
      <Container className='d-flex flex-column align-items-center justify-content-center gap-4'>
        <Row>
          <h1> Work Abroad Opportunities </h1>
        </Row>

        {/* Primary Cards */}
        <Row className='d-flex align-items-center justify-content-center'>
          {primCardData.map((card, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <Card className='prim-card d-flex flex-row-reverse border-0' style={{ backgroundColor: card.color }}>
                <Card.Img variant="top" src={card.img} alt="Card image" style={{ width: '45%' }} />
                <CardBody className='d-flex flex-column justify-content-around'>
                  <CardTitle>{card.title}</CardTitle>
                  <button className='btn-primary' style={{ width: '120px' }}>Get Started</button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Secondary Cards */}
        <Row className='d-flex align-items-center justify-content-center'>
          {secCardData.map((card, index) => (
            <Col key={index} lg={3} md={6} sm={12} className='mb-3'>
              <Card className='sec-card d-flex flex-row border-0 '>
                <div className="sec-card-icon-wrapper">
                  <img src={card.img} alt="Icon" className="sec-card-icon" />
                </div>
                <CardBody className='d-flex flex-column justify-content-around'>
                  <CardTitle>{card.title}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
            <button className='btn-primary-outline'>Apply Now</button>
        </Row>
      </Container>
    </section>
  );
};

export default WorkAbroadOpportunity;
