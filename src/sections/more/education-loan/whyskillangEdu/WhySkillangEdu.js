import React from "react";
import {
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
  Card,
} from "react-bootstrap";
import LwhySkill2 from "../../../../assets/images/lang-test/LwhySkill2.jpg";
import LwhySkill3 from "../../../../assets/images/lang-test/LwhySkill3.jpg";
import LwhySkill4 from "../../../../assets/images/lang-test/LwhySkill4.jpg";
import "./WhySkillangEdu.css";
import "../../../../index.css";

const cardData = [
  {
    title: "Expert Guidance",
    text: "Benefit from experienced financial advisors who simplify the education loan process.",
    img: LwhySkill2,
  },
  {
    title: "Customized Solutions",
    text: "Tailored assistance to align with your specific academic and financial circumstances.",
    img: LwhySkill2,
  },
  {
    title: "High Success Rate",
    text: "Our proactive approach has consistently secured student loans for our clients.",
    img: LwhySkill3,
  },
  {
    title: "Ongoing Support",
    text: "Continued advice on financial management and loan repayment strategies throughout your study period.",
    img: LwhySkill4,
  },
];

const WhySkillangEdu = () => {
  return (
    <div className="lang-why-skill-bg">
      <Container className="">
        <Row className="mb-5">
          <div className="heading-big-medium text-content-primaryInverse">
            Why Choose Skillang?
          </div>
          <div className="paragraph-big-medium text-content-secondaryInverse">
            Discover What Makes Skillang Your Best Path to Success
          </div>
        </Row>
        <Row>
          {cardData.map((card, index) => (
            <Col key={index} lg={3} sm={12} xs={12} className="mb-3">
              <Card className="lang-why-skill-card">
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ borderRadius: "12px" }}
                />
                <CardTitle className="subheading-small-medium text-content-primaryInverse">
                  {card.title}
                </CardTitle>
                <CardText className="paragraph-small-medium text-content-tertiaryInverse">
                  {card.text}
                </CardText>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhySkillangEdu;
