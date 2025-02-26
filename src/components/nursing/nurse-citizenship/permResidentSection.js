import React from 'react';
import { Container, Row, Col, Image, Card, CardTitle, CardText } from 'react-bootstrap';
import nurseResi from '../../../assets/images/nursing/resi.png';
import './permResidentSection.css';

const benefits = [
  { title: 'Path to Permanent Residency', text: 'Nurses in Germany can apply for permanent residency after working for about five years, meeting language and integration requirements.' },
  { title: 'Free Child Education', text: 'Germany offers free public education for children of international workers up to age 18, ensuring quality schooling.' },
  { title: 'Healthcare Benefits', text: 'Nurses are covered by public health insurance, providing free access to medical services.' },
  { title: 'Family Reunification Visa', text: 'Nurses can bring their immediate family, including spouses and children, through a family reunification visa.' },
  { title: 'Citizenship', text: 'After several years in Germany, nurses can apply for citizenship, gaining voting rights and EU-wide benefits. The German passport ranks among the world’s most powerful.' }
];

const PermResidentSection = () => {
  return (
    <div className="bg-dark text-white p-5 my-5">
      <Container>
        <Row className="mb-4">
          <Col lg={6}>
            <div className="heading-big-medium">Permanent Residency and Citizenship Pathways</div>
          </Col>
          <Col lg={6}>
            <Image fluid src={nurseResi} alt="Permanent Residency" className="w-100 h-auto" />
          </Col>
        </Row>
        <Row className='row-equal-height'>
          {benefits.map((benefit, index) => (
            <Col key={index} lg={index < 3 ? 4 : 6} className="mb-4">
              <Card className="nurse-perm-card">
                <CardTitle className='subheading-small-medium'>{benefit.title}</CardTitle>
                <CardText className='paragraph-small-regular'>{benefit.text}</CardText>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PermResidentSection;
