import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody } from 'react-bootstrap';
import eli1 from '../../../assets/images/landing/nurse-eli1.svg';
import eli2 from '../../../assets/images/landing/nurse-eli2.svg';
import eli3 from '../../../assets/images/landing/nurse-eli3.svg';
import eli4 from '../../../assets/images/landing/nurse-eli4.svg';
import '../../../index.css';
import './nurseEligibility.css';

const eligibilityData = [
  { img: eli1, text: 'A recognized 3 years nursing diploma or Bachelor degree in nursing' },
  { img: eli2, text: 'Language proficiency proof in German (usually B2 level) via any authorized institutes (GOETHE / TELC / ECL/ OSD).' },
  { img: eli3, text: 'A valid nursing license from your home country. ' },
  { img: eli4, text: 'A certificate of professional qualification recognition, which we help you to facilitate.' },
];

const NurseEligibility = () => {
  return (
    <div className='px-lg-5 px-2'>
    <Container fluid>
      <Row>
        <div className='heading-small-medium text-content-primary text-center py-4 mb-5'>
          Eligibility
        </div>
      </Row>
      <Row>
        {eligibilityData.map((item, index) => (
          <Col key={index} lg={3} md={3} sm={12} xs={12} className='mb-4'>
            <Card className='nurse-eligible-cards'>
              <CardImg src={item.img} alt={`Eligibility ${index + 1}`}  />
              <CardBody className='p-0 mt-3'>
                <div className='nurse-eligible-cards-text paragraph-small-medium text-content-secondary'>{item.text}</div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
     </div>
  );
};

export default NurseEligibility;