import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "react-bootstrap";
import "./whySkillangSection.css";

import whySkill1 from "../../../assets/images/reusable/whySkillang.jpg";
import whySkill2 from "../../../assets/images/reusable/whySkillang2.jpg";
import whySkill3 from "../../../assets/images/reusable/whySkillang3.jpg";

const whySkillangCardData = [
  {
    image: whySkill1,
    title: "Expert Guidance",
    text: "Our expert team specializes in international healthcare recruitment, guiding in every step.",
  },
  {
    image: whySkill2,
    title: "Ethical Recruitment",
    text: "We uphold ethical recruitment standards, ensuring transparency and integrity in all operations.",
  },
  {
    image: whySkill3,
    title: "High Success Rate",
    text: "We have a proven track record of placing healthcare professionals in top global institutions.",
  },
];

const WhySkillangSection = () => {
  return (
    <div className="why-skillang-bg text-white py-5 px-2">
      <Container>
        <Row className="mb-3">
          <div className="emp-cont caption-bold ms-2">
            Empowering Global Careers
          </div>
        </Row>
        <Row>
          <h1 className="heading-big-medium mb-2">
            Why Choose <span style={{ color: "#AC92F5" }}>Skillang?</span>
          </h1>
          <div className="paragraph-big-regular">
            Discover What Makes Skillang Your Best Path to Success
          </div>
        </Row>
      </Container>
      <Container className="py-4">
        <Row className="row-equal-height">
          {whySkillangCardData.map((card, index) => (
            <Col lg={4} key={index}>
              <Card className="why-skillang-card">
                <img
                  src={card.image}
                  alt={`why skillang ${index + 1}`}
                  className="why-skillang-card-img"
                  style={{ borderRadius: "12px" }}
                />
                <CardBody className="px-0">
                  <CardTitle className="subheading-small-medium">
                    {card.title}
                  </CardTitle>
                  <CardText className="paragraph-small-regular">
                    {card.text}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhySkillangSection;
