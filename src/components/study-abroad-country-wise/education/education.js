import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import EduRankingComp from "./eduRanking";
import EduOurPartnerUni from "./eduOurPartnerUni";
import UniContactComp from "../../resuable/uni-contact/UniContact";
import EduTopProgramsComponent from "./eduTopPrograms";

const EducationAbroadCountry = () => {
  // Sample university ranking data

  // State to control how many universities to show

  return (
    <section className="d-flex flex-column align-items-center justify-content-center">
      <Container>
        <Row className="mb-4">
          <Col>
            <div className="heading-big-medium">Education</div>
          </Col>
        </Row>
        <EduRankingComp />
        <EduOurPartnerUni />
        <UniContactComp
          heading="Find a University of Your Choice"
          description="Get in touch with our Program Advisors & get your queries clarified."
          buttonText="Connect with Us"
          onButtonClick={() => console.log("Connect button clicked")}
        />

        <EduTopProgramsComponent />
      </Container>
    </section>
  );
};

export default EducationAbroadCountry;
