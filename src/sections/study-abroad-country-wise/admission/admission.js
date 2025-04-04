import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdmiRequirementComp from "./admiReq";
import AdmiEntranceComp from "./admiEntrance";
import UniContactComp from "../../resuable/uni-contact/UniContact";
import countryWiseData from "../../../data/countryWiseData";

const AdmissionAbroadCountry = ({ country = "uk" }) => {
  const data = countryWiseData[country];
  return (
    <section className="d-flex flex-column align-items-center justify-content-center ">
      <Container className="">
        <Row>
          <div className="heading-big-medium mb-5">
            Admissions in {data.fullForm}
          </div>
        </Row>
        <div className="country-subsection-spacing ">
          <AdmiRequirementComp />
        </div>
        <div className="country-subsection-spacing ">
          <AdmiEntranceComp />
        </div>
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
