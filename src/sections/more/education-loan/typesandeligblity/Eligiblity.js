// LoanEligibility.jsx
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../../../index.css";
import "../../../../App.css";
import "./TypesAndEligiblity.css";
import eligible1 from "../../../../assets/images/education-loan/EduLoanEligiblity/eligible1.svg";
import eligible2 from "../../../../assets/images/education-loan/EduLoanEligiblity/eligible2.svg";
import eligible3 from "../../../../assets/images/education-loan/EduLoanEligiblity/eligible3.svg";
import eligible4 from "../../../../assets/images/education-loan/EduLoanEligiblity/eligible4.svg";
import BlueIconCards from "../../../../utils/cards/blueIconCards"; // Import the card component

const eligibilityData = [
  {
    img: eligible1,
    title: "Credit History",
    text: "A strong credit score and clean credit history enhance approval chances.",
  },
  {
    img: eligible2,
    title: "Co-signer Requirements",
    text: "May be necessary for unsecured and international student loans.",
  },
  {
    img: eligible3,
    title: "Academic Records",
    text: "Good academic standing can positively influence your loan terms. ",
  },
  {
    img: eligible4,
    title: "Proof of Admission",
    text: "Essential documentation from an accredited foreign university.",
  },
];

const LoanEligibility = () => {
  return (
    <div className="loan-eligible-bg d-flex justify-content-end align-items-center">
      <Container className="my-5 py-5 d-flex justify-content-end align-items-center flex-column">
        <Row>
          <div className="heading-big-medium text-content-primary text-center my-5">
            Eligibility and Requirements
          </div>
        </Row>
        <Row>
          {eligibilityData.map((item, index) => (
            <Col key={index} lg={3} md={3} sm={12} xs={12} className="mb-4">
              <BlueIconCards
                img={item.img}
                title={item.title}
                text={item.text}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LoanEligibility;
