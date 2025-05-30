import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle,
  CardText,
} from "react-bootstrap";
import "./LangTestPrepProgs.css";
import ConsultationModal from "../../../resuable/forms/calendly/LeadFormCalendly";

const programs = [
  {
    title: "German Language Training",
    text: "Special focus for nursing & work opportunities in Germany",
    buttonText: "Book a free demo",
    buttonClass: "btn-primary",
    cardIdName: "lang-program-card-1",
  },
  {
    title: "English Proficiency Tests",
    text: "IELTS, TOEFL, PTE with mock tests & personalized coaching",
    buttonText: "Know more",
    buttonClass: "btn-primary-outline",
    cardIdName: "lang-program-card-2",
  },
  {
    title: "Other Languages",
    text: "Special focus for nursing & work opportunities in Germany",
    buttonText: "Know more",
    buttonClass: "btn-primary-outline",
    cardIdName: "lang-program-card-3",
  },
];

const LangTestPrepProgs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div>
      <Container>
        <Row>
          <h1 className="heading-big-medium text-content-primary text-center mb-3">
            Our Language & Test Prep Programs
          </h1>
        </Row>
        <Row>
          {programs.map((program, index) => (
            <Col key={index} lg={4} sm={12} xs={12}>
              <Card className="lang-program-card mb-3" id={program.cardIdName}>
                <CardTitle>{program.title}</CardTitle>
                <CardText>{program.text}</CardText>
                <div>
                  <button
                    className={program.buttonClass}
                    onClick={() => {
                      // window.scrollTo({ top: 0, behavior: "smooth" });
                      handleShow();
                    }}
                  >
                    {program.buttonText}
                  </button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <ConsultationModal show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default LangTestPrepProgs;
