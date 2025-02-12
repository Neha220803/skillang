import React from 'react';
import { CardTitle, Container, Card, Row, Col, CardBody } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../../../App.css';
import './work-abroad-opportunity.css';
import '../../../index.css';
import work1 from '../../../images/home/work-opp-1.png';
import work2 from '../../../images/home/work-opp-2.png';
import work3 from '../../../images/home/work-opp-3.png';
import work4 from '../../../images/home/work-opp-4.svg';
import work5 from '../../../images/home/work-opp-5.svg';
import work6 from '../../../images/home/work-opp-6.svg';
import work7 from '../../../images/home/work-opp-7.svg';
import work8 from '../../../images/home/work-opp-8.svg'; 
import work9 from '../../../images/home/work-opp-9.svg'; 
import work10 from '../../../images/home/work-opp-10.svg'; 

const primCardData = [
  { title: "Nursing and Health care", img: work1, color: "#E5ECF9" },
  { title: "Information Technology", img: work2, color: "#F3EEFC" },
  { title: "Hospitality Management", img: work3, color: "#FBEAEA" }
];

const secCardData = [
  { title: "Electrical and Electronics", img: work4, color: "#E5ECF9" },
  { title: "Plumbing", img: work5, color: "#F3EEFC" },
  { title: "Vehicle Painting", img: work6, color: "#FBEAEA" },
  { title: "Automobile", img: work7, color: "#E5ECF9" },
  { title: "Mechanical", img: work8, color: "#F3EEFC" },
  { title: "Heavy Welding", img: work9, color: "#FBEAEA" },
  { title: "Heavy Vehicle Driver", img: work10, color: "#E5ECF9" }
];

const WorkAbroadOpportunity = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
                     dots: true,
        arrows: true, 
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
           dots: true,
        arrows: false, 
        }
      }
    ]
  };

  return (
    <section className='d-flex flex-column align-items-center justify-content-center' id="work-abroad">
      <Container className='d-flex flex-column align-items-center justify-content-center gap-4'>
        <Row className='my-4'>
          <h1> Work Abroad Opportunities </h1>
        </Row>

        {/* Primary Cards */}
        <Row className='d-flex align-items-center justify-content-center'>
          {primCardData.map((card, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <Card className='prim-card d-flex flex-row-reverse border-0 mb-3' style={{ backgroundColor: card.color }}>
                <Card.Img variant="top" src={card.img} alt="Card image" style={{ width: '45%', height: 'auto' }} />
                <CardBody className='d-flex flex-column justify-content-around'>
                  <CardTitle>{card.title}</CardTitle>
                  <button className='btn-primary' style={{ width: '120px' }} onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}>Get Started</button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Secondary Cards Slider */}
        <Row className='w-100'>
          <Slider {...sliderSettings}>
            {secCardData.map((card, index) => (
              <div key={index} className='px-2'>
                <Card className='sec-card d-flex flex-row border-0'>
                  <div className="sec-card-icon-wrapper">
                    <img src={card.img} alt="Icon" className="sec-card-icon" />
                  </div>
                  <CardBody className='d-flex flex-column justify-content-around align-items-end'>
                    <CardTitle className='sec-card-text-wrapper'>{card.title}</CardTitle>
                  </CardBody>
                </Card>
              </div>
            ))}
          </Slider>
        </Row>

        <Row>
          <button className='btn-primary-outline mt-5' onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}>Apply Now</button>
        </Row>
      </Container>
    </section>
  );
};

export default WorkAbroadOpportunity;
