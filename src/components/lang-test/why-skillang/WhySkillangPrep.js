import React from 'react';
import { Container, Row, Col, CardTitle, CardText, Card } from 'react-bootstrap';
import LwhySkill1 from '../../../assets/images/lang-test/LwhySkill1.png';
import './WhySkillangPrep.css';

const cardData = [
  {
    title: 'Free German Language Training',
    text: 'Specially designed for nursing aspirants to help you succeed in Germany',
    img: LwhySkill1,
  },
  {
    title: 'Personalized Coaching',
    text: 'Learn from certified trainers with tailored guidance to match your learning pace',
    img: LwhySkill1,
  },
  {
    title: 'Flexible Learning Options',
    text: 'Choose from online or in-person classes that fit your schedule',
    img: LwhySkill1,
  },
  {
    title: 'Mock Tests & Performance Analysis',
    text: 'Practice with full-length tests and get detailed feedback to improve',
    img: LwhySkill1,
  },
];

const WhySkillangPrep = () => {
  return (
    <div className="text-white lang-why-skill-bg">
      <Container className=''>
        <Row className='mb-5'>
          <div className="heading-big-medium ">
            Why Choose Skillang for Language & Test Prep?
          </div>
          <div className="paragraph-big-medium ">
            Discover What Makes Skillang Your Best Path to Success
          </div>
        </Row>
        <Row>
          {cardData.map((card, index) => (
            <Col key={index}  lg={3}>
              <Card className='lang-why-skill-card text-white'>
                <img src={card.img} alt={card.title} />
                <CardTitle className="subheading-small-medium">{card.title}</CardTitle>
                <CardText className="paragraph-small-medium">{card.text}</CardText>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhySkillangPrep;
