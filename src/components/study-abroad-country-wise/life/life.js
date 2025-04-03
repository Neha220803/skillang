import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LifeCostOflLiving from "./LifeCostOflLiving";
import LifeKeyDestination from "./LifeKeyDestination";
import countryWiseData from "../../../data/countryWiseData";

const LifeInAbroadCountry = ({ country = "uk" }) => {
  const data = countryWiseData[country];
  return (
    <section className="d-flex flex-column align-items-center justify-content-center ">
      <Container>
        <Row className="mb-5">
          <div className="heading-big-medium">Life in {data.fullForm}</div>
        </Row>
        <div className="country-subsection-spacing ">
          <LifeCostOflLiving />
        </div>
        <LifeKeyDestination />
      </Container>
    </section>
  );
};

export default LifeInAbroadCountry;
