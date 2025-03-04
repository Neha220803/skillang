import React from 'react';
import { Container, Col, Row, Card, CardImg, CardTitle, CardText } from "react-bootstrap";
import whyLearnImg from '../../../assets/images/lang-test/LWhyLearnImg.png';
import whyLearnIcon1 from '../../../assets/icons/lang-test/collab.svg';
import whyLearnIcon2 from '../../../assets/icons/lang-test/admission.svg';
import whyLearnIcon3 from '../../../assets/icons/lang-test/communicate.svg';
import './WhyLangTraining.css';

const cardData = [
  {
    icon: whyLearnIcon1,
    title: 'Career & Culture Ready',
    text: 'Improve job prospects and integrate seamlessly into a new cultural environment',
    alt: 'Career & Culture Ready',
  },
  {
    icon: whyLearnIcon2,
    title: 'Admission & Visa Success',
    text: 'Meet university language requirements and boost your visa approval chances',
    alt: 'Admission & Visa Success',
  },
  {
    icon: whyLearnIcon3,
    title: 'Fluent Communication',
    text: 'Develop strong language skills for academic success and daily interactions abroad',
    alt: 'Fluent Communication',
  },
];

const WhyLangTraining = () => {
  return (
    <div>
      <Container className='d-flex justify-content-center  align-items-center'>
        <Row className='h-100 d-flex justify-content-center align-items-center'>
          <Col lg={6} md={6} sm={12} xs={12} className='d-flex flex-column justify-content-center mx-auto align-items-center'>
            <Row className=''>
              <div className='heading-big-medium text-content-primary'>
                Why Language Training Matters?
              </div>
            </Row>
            <Row>
              {cardData.slice(0, 2).map((card, index) => (
                <Col lg={6} key={index} className=' mb-3'>
                  <Card className='why-lang-training-cards'>
                    <img src={card.icon} alt={card.alt} width="50" height="50" />
                    <CardTitle className='subheading-small-medium text-content-secondary'>
                      {card.title}
                    </CardTitle>
                    <CardText className='paragraph-big-medium text-content-secondary'>
                      {card.text}
                    </CardText>
                  </Card>
                </Col>
              ))}
            </Row>
            <Col lg={12}>
              {cardData.slice(2, 3).map((card, index) => (
                <Card key={index} className='why-lang-training-cards'>
                  <img src={card.icon} alt={card.alt} width="50" height="50" />
                  <CardTitle className='subheading-small-medium text-content-secondary'>
                    {card.title}
                  </CardTitle>
                  <CardText className='paragraph-big-medium text-content-secondary'>
                    {card.text}
                  </CardText>
                </Card>
              ))}
            </Col>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className='h-100 bg-primary d-flex justify-content-center mx-auto align-items-center'>
            <img src={whyLearnImg} alt="Language Training Image" className='image-fluid' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhyLangTraining;
