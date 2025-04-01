import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdmiRequirementComp from "./admiReq";
import AdmiEntranceComp from "./admiEntrance";
import UniContactComp from "../../resuable/uni-contact/UniContact";

const AdmissionAbroadCountry = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center ">
      <Container>
        <Row>
          <div className="heading-big-medium">Admissions in {}</div>
        </Row>
        <AdmiRequirementComp />
        <AdmiEntranceComp />
        <UniContactComp
          heading="Speak Confidently, Succeed Globally!"
          description="Master German & English | 🎯 Ace IELTS & More | 🚀 Book a Free Demo Today!"
          buttonText="Connect with Us"
          onButtonClick={() => console.log("Connect button clicked")}
        />
      </Container>
    </section>
  );
};

export default AdmissionAbroadCountry;
