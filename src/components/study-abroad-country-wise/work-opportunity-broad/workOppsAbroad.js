import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import WorkVisaRoute from "./workVisaRoute";
import WorkTopCompanies from "./workTopCompanies";
import UniContactComp from "../../resuable/uni-contact/UniContact";

const WorkOppsAbroadComp = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center ">
      <Container>
        <Row>
          <div className="heading-big-medium">Work Abroad Opps</div>
        </Row>
        <div className="country-subsection-spacing ">
          <WorkVisaRoute />
        </div>

        <div className="country-subsection-spacing">
          <UniContactComp
            heading="Get a Two-Year Post Work Visa"
            description="Explore your opportunities to work abroad after graduation."
            buttonText="Connect with Us"
            onButtonClick={() => console.log("Connect button clicked")}
          />
        </div>
        <div className="country-subsection-spacin">
          <WorkTopCompanies />
        </div>
      </Container>
    </section>
  );
};

export default WorkOppsAbroadComp;
