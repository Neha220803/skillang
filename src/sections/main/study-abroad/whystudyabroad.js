import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../study-abroad/whystudyabroad.css";
import whystudyabroad from "../../../assets/images/study-abroad/whystudyabroad/whystudyabroad.png";
import globalIcon from "../../../assets/images/study-abroad/whystudyabroad/icons/globalexpose.svg";
import educationIcon from "../../../assets/images/study-abroad/whystudyabroad/icons/topquality.svg";
import networkingIcon from "../../../assets/images/study-abroad/whystudyabroad/icons/network.svg";
import careerIcon from "../../../assets/images/study-abroad/whystudyabroad/icons/careerboost.svg";

const WhyStudyAbroad = () => {
  return (
    <Container className="">
      <Row className="align-items-center">
        <Col md={7} className="">
          <h1 className="heading-big-medium">Why Study Abroad?</h1>
          <p className="paragraph-big-medium text-content-secondary mt-1">
            Free German Courses, Online & In-Person Training & Flexible Learning
            Schedules all in One Place
          </p>
          <Row className="benefits">
            {[
              {
                icon: globalIcon,
                title: "Global Exposure",
                description:
                  "Experience new cultures, languages, and perspectives",
              },
              {
                icon: educationIcon,
                title: "Top-Quality Education",
                description:
                  "Learn from world-renowned universities with innovative teaching methods",
              },
              {
                icon: networkingIcon,
                title: "Networking & Growth",
                description:
                  "Build connections with industry leaders and peers worldwide",
              },
              {
                icon: careerIcon,
                title: "Career Boost",
                description:
                  "Gain a degree that opens doors to global job markets",
              },
            ].map((benefit, index) => (
              <Col md={6} key={index} className="mb-3 ">
                <Card className="why-study-abroad-cards">
                  <Card.Body className="py-0">
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="icon"
                    />
                    <h3>{benefit.title}</h3>
                    <p className="caption-regular text-content-secondary mt-1">
                      {benefit.description}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={5} className="">
          <img src={whystudyabroad} alt="Why Study Abroad" className="" />
        </Col>
      </Row>
    </Container>
  );
};

export default WhyStudyAbroad;
