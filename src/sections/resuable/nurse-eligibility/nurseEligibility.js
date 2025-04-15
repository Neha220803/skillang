import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody } from "react-bootstrap";
import eli1 from "../../../assets/images/landing/nurse-eli1.svg";
import eli2 from "../../../assets/images/landing/nurse-eli2.svg";
import eli3 from "../../../assets/images/landing/nurse-eli3.svg";
import eli4 from "../../../assets/images/landing/nurse-eli4.svg";
import "../../../index.css";
import "./nurseEligibility.css";

const eligibilityData = [
  {
    img: eli1,
    text: "A recognized 3 years nursing diploma or Bachelor degree in nursing",
  },
  {
    img: eli2,
    text: "Language proficiency proof in German (usually B2 level) via any authorized institutes (GOETHE / TELC / ECL/ OSD).",
  },
  { img: eli3, text: "A valid nursing license from your home country. " },
  {
    img: eli4,
    text: "A certificate of professional qualification recognition, which we help you to facilitate.",
  },
];

const NurseEligibility = () => {
  return (
    <div className="px-lg-5 px-2">
      <Container>
        <Row className="mt-lg-0 mb-5 text-lg-center">
          <div className="heading-big-medium text-content-primary text-lg-center mb-2">
            Eligibility
          </div>
          <div className="paragraph-big-medium text-content-secondary">
            To work as a nurse in Germany, you need
          </div>
          {/* <div className='paragraph-big-medium text-content-secondary text-center'>
          To work as a nurse in Germany, you need
        </div> */}
        </Row>
        <Row>
          {eligibilityData.map((item, index) => (
            <Col key={index} lg={3} md={3} sm={12} xs={12} className="mb-4">
              <Card className="nurse-eligible-cards">
                <CardImg
                  src={item.img}
                  alt={`Eligibility ${index + 1}`}
                  className="nurse-eligibility-img"
                />
                <CardBody className="p-0 mt-3">
                  <div className="nurse-eligible-cards-text paragraph-small-medium text-content-secondary">
                    {item.text}
                  </div>
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
