import React from 'react'
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap'
import whySkill1 from '../../../assets/images/whySkillang1.png';
import whySkill2 from '../../../assets/images/whySkillang2.png';
import whySkill3 from '../../../assets/images/whySkillang3.png';

const WhySkillangSection = () => {
  return (
    <div className='bg-dark text-white py-5'>
      <Container>
        <Row>
          <div>
            Empowering Global Careers
          </div>
        </Row>
        <Row>
          <div className='heading-big-medium'>Why Choose Skillang?</div>
          <div className='paragraph-big-regular'>Discover What Makes Skillang Your Best Path to Success</div>
        </Row>
      </Container>
      <Container className='py-4'>
        <Row>
          <Col lg={4}>
            <Card>
              <img src={whySkill1} alt='why skillang 1'/>
              <CardBody>
                <CardTitle>Expert Guidance</CardTitle>
                <CardText>Our expert team specializes in international healthcare recruitment, guiding in every step</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <img src={whySkill2} alt='why skillang 2'/>
              <CardBody>
                <CardTitle>Ethical Recruitment</CardTitle>
                <CardText>We uphold ethical recruitment standards, ensuring transparency and integrity in all operations.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <img src={whySkill3} alt='why skillang 3'/>
              <CardBody>
                <CardTitle>High Success Rate</CardTitle>
                <CardText>We have a proven track record of placing healthcare professionals in top global institutions</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}
    
export default WhySkillangSection