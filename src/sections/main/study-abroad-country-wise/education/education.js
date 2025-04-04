import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EduRankingComp from "./eduRanking";
import EduOurPartnerUni from "./eduOurPartnerUni";
import UniContactComp from "../../../resuable/uni-contact/UniContact";
import EduTopProgramsComponent from "./eduTopPrograms";

const EducationAbroadCountry = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center">
      <Container>
        <Row className="mb-4">
          <Col>
            <div className="heading-big-medium">Education</div>
          </Col>
        </Row>
        <div className="country-subsection-spacing ">
          <EduRankingComp />
        </div>
        <div className="country-subsection-spacing ">
          <EduOurPartnerUni />
        </div>
        <div className="country-subsection-spacing ">
          <UniContactComp
            heading="Find a University of Your Choice"
            description="Get in touch with our Program Advisors & get your queries clarified."
            buttonText="Connect with Us"
            onButtonClick={() => console.log("Connect button clicked")}
          />
        </div>
        <div className="country-subsection-spacin">
          <EduTopProgramsComponent />
        </div>
      </Container>
    </section>
  );
};

export default EducationAbroadCountry;
