// AdmiRequirementComp.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlueIconCard from "../../../utils/cards/blueIconCards";
import icon1 from "../../../assets/icons/study-abroad-country-wise/document-text.svg";
import icon2 from "../../../assets/icons/study-abroad-country-wise/translate.svg";
import icon3 from "../../../assets/icons/study-abroad-country-wise/paperclip-2.svg";
import icon4 from "../../../assets/icons/study-abroad-country-wise/document-like.svg";
import icon5 from "../../../assets/icons/study-abroad-country-wise/document.svg";
import icon6 from "../../../assets/icons/study-abroad-country-wise/wallet-search.svg";

const AdmiRequirementComp = () => {
  // Sample admission requirements data
  const requirementsData = [
    {
      id: 1,
      icon: icon1,
      title: "Academic Qualifications",
      description:
        "Hold a recognized secondary school certificate (for undergraduates) or a relevant bachelor's degree (for postgraduates) with satisfactory grades, along with any subject-specific prerequisites.",
    },
    {
      id: 2,
      icon: icon2,
      title: "English Language Proficiency",
      description:
        "Achieve the required scores in tests like IELTS or TOEFL (typically an overall IELTS band of 6.0-7.0) to demonstrate adequate English skills.",
    },
    {
      id: 3,
      icon: icon3,
      title: "SOP",
      description:
        "Submit a compelling essay outlining your academic goals, motivations, and reasons for choosing the UK.",
    },
    {
      id: 4,
      icon: icon4,
      title: "Letters of Recommendation",
      description:
        "Provide one or more academic references from teachers or previous academic supervisors to support your application.",
    },
    {
      id: 5,
      icon: icon5,
      title: "Additional Requirements",
      description:
        "Hold a recognized secondary school certificate (for undergraduates) or a relevant bachelor's degree (for postgraduates) with satisfactory grades, along with any subject-specific prerequisites.",
    },
    {
      id: 6,
      icon: icon6,
      title: "Financial Proof",
      description:
        "Show evidence of sufficient funds to cover tuition fees and living expenses, as required by UK visa regulations.",
    },
  ];

  return (
    <div className="my-5">
      <Container>
        <div className="subheading-big-medium text-content-secondary mb-4">
          Admission Requirements
        </div>

        <Row>
          {requirementsData.map((requirement) => (
            <Col lg={4} md={6} className="mb-4" key={requirement.id}>
              <BlueIconCard
                img={requirement.icon}
                title={requirement.title}
                text={requirement.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AdmiRequirementComp;
