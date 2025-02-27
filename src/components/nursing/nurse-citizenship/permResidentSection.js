import React from 'react';
import { Container, Row, Col, Image, Card, CardTitle, CardText, Accordion } from 'react-bootstrap';
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
    <div className="bg-dark text-white p-md-5 py-3 my-5">
      <Container>
        <Row className="mb-4">
          <Col lg={6} className='d-block d-md-none'>
            <Image fluid src={nurseResi} alt="Permanent Residency" />
          </Col>
          <Col lg={6} sm={12} xs={12}>
            <div className="heading-big-medium">Permanent Residency and Citizenship Pathways</div>
          </Col>
          <Col lg={6} className='d-none d-md-block'>
            <Image fluid src={nurseResi} alt="Permanent Residency" className="w-100 h-auto" />
          </Col>
        </Row>

        {/* Mobile View - Accordion */}
        <div className="d-block d-md-none">
          <Accordion className="custom-accordion">
            {benefits.map((benefit, index) => (
              <Accordion.Item eventKey={index.toString()} key={index} className="dark-accordion-item">
                <Accordion.Header>{benefit.title}</Accordion.Header>
                <Accordion.Body>{benefit.text}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        {/* Desktop View - Cards */}
        <Row className='row-equal-height d-none d-md-flex'>
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
