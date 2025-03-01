import React from 'react';
import { CardTitle, Container, Card, Row, Col, CardBody, CardText } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../../../App.css';
import './work-abroad-opportunity.css';
import '../../../index.css';
import work1 from '../../../assets/images/home/workAbroadCard1.png';
import work2 from '../../../assets/images/home/workAbroadCard2.png';
import work3 from '../../../assets/images/home/workAbroadCard3.png';

const primCardData = [
  { title: "Nursing & Healthcare", img: work1, color: "#FCEBC3", colSize: 6, desc: 'Security testing involves evaluating software to ensure information protection.' },
  { title: "Hospitality Management", img: work2, color: "#FFFFFF", colSize: 3,desc: 'Security testing involves evaluating software to ensure information protection.'  },
  { title: "Information Technology", img: work3, color: "#FFFFFF", colSize: 3,desc: 'Security testing involves evaluating software to ensure information protection.' }
];

const WorkAbroadOpportunity = () => {
  return (
    <section className='d-flex flex-column align-items-center justify-content-center' id="work-abroad">
        {/* Primary Cards */}
        <Container className='work-abroad-bg-card align-items-center justify-content-center w-100'>
          <Row className=' mb-2'>
          <div className='heading-big-medium text-content-primary text-center'> Work Abroad Opportunities </div>
        </Row>
          <Row>
          {primCardData.map((card, index) => (
            <Col key={index} lg={card.colSize} md={6} sm={12} xs={12} className='g-3'>
              <Card className='prim-card d-flex border-0 mb-2' style={{ backgroundColor: card.color }}>
                <Card.Img variant="top" className='work-card-img' src={card.img} alt="Card image"  />
                <CardBody className='d-flex flex-column justify-content-around px-1'>
                  <CardTitle className='subheading-small-medium'>{card.title}</CardTitle>
                  <CardText className='paragraph-small-regular'>{card.desc}</CardText>
                  <div>
                  <button className='btn-secondary' onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}>Get Started</button>
                    </div>
                </CardBody>
              </Card>
            </Col>
          ))}
          </Row>
        </Container>
    </section>
  );
};

export default WorkAbroadOpportunity;
