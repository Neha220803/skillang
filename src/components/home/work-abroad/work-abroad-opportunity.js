import React from 'react';
import { CardTitle, Container, Card, Row, Col, CardBody, CardText, CardImg } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../../../App.css';
import './work-abroad-opportunity.css';
import '../../../index.css';
import work1 from '../../../assets/images/home/workAbroadCard1.png';
import work2 from '../../../assets/images/home/workAbroadCard2.png';
import work3 from '../../../assets/images/home/workAbroadCard3.png';

import work4 from '../../../assets/icons/home/electrical.svg';
import work5 from '../../../assets/icons/home/plumbing.svg';
import work6 from '../../../assets/icons/home/vpaintin.svg';
import work7 from '../../../assets/icons/home/automobile.svg';
import work8 from '../../../assets/icons/home/mechanical.svg';
import work9 from '../../../assets/icons/home/welding.svg';

const primCardData = [
  { title: "Nursing & Healthcare", img: work1, color: "#FCEBC3", colSize: 6, desc: 'Security testing involves evaluating software to ensure information protection.' },
  { title: "Hospitality Management", img: work2, color: "#FFFFFF", colSize: 3,desc: 'Security testing involves evaluating software to ensure information protection.'  },
  { title: "Information Technology", img: work3, color: "#FFFFFF", colSize: 3,desc: 'Security testing involves evaluating software to ensure information protection.' }
];

const WorkAbroadOpportunity = () => {
  const secCardData = [
    { img: work4, text: "Electrical" },
    { img: work5, text: "Plumbing" },
    { img: work6, text: "Vehicle Painting" },
        { img: work7, text: "Automobile" },
    { img: work8, text: "Mechanical" },
    { img: work9, text: "Heavy Welding" },
  ];

  return (
    <section className='d-flex flex-column align-items-center justify-content-center' id="work-abroad">
        <Container className='p-0 w-100'>
          <div className='work-abroad-bg-card align-items-center justify-content-center mb-5'>
            <Row className='mb-2 m-0'>
          <div className='heading-big-medium text-content-primary text-center'>Work Abroad Opportunities </div>
        </Row>
          <Row>
          {primCardData.map((card, index) => (
            <Col key={index} lg={card.colSize} md={6} sm={12} xs={12} className='g-3'>
              <Card className='prim-card d-flex border-0 mb-2' style={{ backgroundColor: card.color }}>
                <Card.Img variant="top" className='work-card-img' src={card.img} alt="Card image"  />
                <CardBody className='d-flex flex-column justify-content-around px-1 pt-2 py-0'>
                  <CardTitle className='subheading-small-medium'>{card.title}</CardTitle>
                  <CardText className='paragraph-small-regular'>{card.desc}</CardText>
                  <div className='w-sm-100'>
                  <button className='btn-secondary w-sm-100' onClick={() => {
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

          </div>
          <div>

        
        
        <Row className=''>
          <Col md={4} lg={9} className="work-abroad-left-bg flex-column text-white d-flex align-items-end justify-content-start py-4 text-start">
            <div className='w-50'>
              <div className='text-white heading-small-medium'>Diverse Range of Opportunities</div>
              <div className='text-white paragraph-small-medium my-2'>We help you choose from large range of employment opportunities</div>
            <div>
              <button className='btn-primary'>
                Apply Now
              </button>
            </div>
            </div>
            
          </Col>
          <Col md={8} lg={3} className='work-abroad-right-bg d-flex'>
          
            <Row className='bg-primar'>
              {secCardData.map((service, index) => (
                <Col
                  key={index}
                  className="mb-3 mx-auto g-3"
                  lg={6} sm={6} xs={6}
                >
                  <Card className="work-abroad-card flex-column" >
                    <CardImg variant='top' src={service.img} alt={`Reason ${index + 1}`} className='work-abroad-card-img' />
                    <CardBody className='p-0'>
                      <Card.Text className="paragraph-small-medium text-content-secondary">
                        <div className='paragraph-small-medium text-content-secondary work-abroad-card-text '>{service.text}</div>
                      </Card.Text>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
          </div>
      </Container>
    </section>
  );
};

export default WorkAbroadOpportunity;
