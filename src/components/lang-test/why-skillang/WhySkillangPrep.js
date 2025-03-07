import React from 'react';
import { Container, Row, Col, CardTitle, CardText, Card } from 'react-bootstrap';
import LwhySkill1 from '../../../assets/images/lang-test/LwhySkill1.png';
import LwhySkill2 from '../../../assets/images/lang-test/LwhySkill2.png';
import LwhySkill3 from '../../../assets/images/lang-test/LwhySkill3.png';
import LwhySkill4 from '../../../assets/images/lang-test/LwhySkill4.png';
import './WhySkillangPrep.css';
import '../../../index.css';

const cardData = [
  {
    title: 'Free German Language Training',
    text: 'Specially designed for nursing aspirants to help you succeed in Germany',
    img: LwhySkill1,
  },
  {
    title: 'Personalized Coaching',
    text: 'Learn from certified trainers with tailored guidance to match your learning pace',
    img: LwhySkill2,
  },
  {
    title: 'Flexible Learning Options',
    text: 'Choose from online or in-person classes that fit your schedule',
    img: LwhySkill3,
  },
  {
    title: 'Mock Tests & Performance Analysis',
    text: 'Practice with full-length tests and get detailed feedback to improve',
    img: LwhySkill4,
  },
];

const WhySkillangPrep = () => {
  return (
    <div className="lang-why-skill-bg">
      <Container className=''>
        <Row className='mb-5'>
          <div className="heading-big-medium text-content-primaryInverse">
            Why Choose Skillang for Language & Test Prep?
          </div>
          <div className="paragraph-big-medium text-content-secondaryInverse">
            Discover What Makes Skillang Your Best Path to Success
          </div>
        </Row>
        <Row>
          {cardData.map((card, index) => (
            <Col key={index}  lg={3}>
              <Card className='lang-why-skill-card '>
                <img src={card.img} alt={card.title} />
                <CardTitle className="subheading-small-medium text-content-primaryInverse">{card.title}</CardTitle>
                <CardText className="paragraph-small-medium text-content-secondaryInverse">{card.text}</CardText>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhySkillangPrep;
