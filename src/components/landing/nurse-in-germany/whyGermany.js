import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody } from 'react-bootstrap';
import whyGer1 from '../../../assets/images/landing/whyGer1.svg';
import whyGer2 from '../../../assets/images/landing/whyGer2.svg';
import whyGer3 from '../../../assets/images/landing/whyGer3.svg';
import whyGer4 from '../../../assets/images/landing/whyGer4.svg';
import whyGer5 from '../../../assets/images/landing/whyGer5.svg';
import whyGer6 from '../../../assets/images/landing/whyGer6.svg';
import whyGer7 from '../../../assets/images/landing/whyGer7.svg';
import './whyGermany.css';
import '../../../index.css';

const WhyGermany = () => {
  const whyGer = [
    { img: whyGer1, text: "High Demand" },
    { img: whyGer2, text: "Work-Life Balance" },
    { img: whyGer3, text: "Career Growth" },
    { img: whyGer4, text: "Free Child Education" },
    { img: whyGer5, text: "PR Possibilities" },
    { img: whyGer6, text: "Public Healthcare Benefits" },
    { img: whyGer7, text: "Contribution to German Pension System" },
  ];

  return (
    <div className='px-lg-5 px-2'>
    <Container fluid className='py-lg-5 my-5'>
      <Row className=''>
        {/* First Column: "Why Choose Germany?" */}
        <Col md={4} lg={6} className="why-germany-bg text-white d-flex align-items-start justify-content-center py-4 text-center mb-4">
          <div className='text-white heading-small-medium'>Why Choose Germany?</div>
        </Col>

        {/* Second Column: Two Cards per Row */}
        <Col md={8} lg={6}>
          <Row>
            {whyGer.map((service, index) => (
              <Col key={index} md={6} ms={6} xs={6} className="mb-3" >
                <Card className="why-us-ger-card flex-row" style={{width:"100%"}}>
                      <CardImg variant='top' src={service.img} alt={`Reason ${index + 1}`} className="" style={{height:"100%"}} />
                      <CardBody className='why-ger-text'>
                        <Card.Text className="paragraph-small-medium text-content-secondary ">{service.text}</Card.Text>
                      </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default WhyGermany;
