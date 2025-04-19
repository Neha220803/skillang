import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody } from "react-bootstrap";
import eli1 from "../../../assets/images/landing/nurse-eli1.svg";
import eli2 from "../../../assets/images/landing/nurse-eli2.svg";
import eli3 from "../../../assets/images/landing/nurse-eli3.svg";
import eli4 from "../../../assets/images/landing/nurse-eli4.svg";
// import "../../../index.css";
// import "./nurseEligibility.css";
import EligibilityBarCardsComponent from "../../../components/cards/EligibilityBarCards";

const nurseEligibilityData = [
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
      <EligibilityBarCardsComponent
        title="Eligibility"
        subheading="To work as a nurse in Germany, you need"
        eligibilityData={nurseEligibilityData}
        className="nurse-eligibility-section" // Optional custom class
      />
    </div>
  );
};

export default NurseEligibility;
