import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LifeCostOflLiving from "./LifeCostOflLiving";
import LifeKeyDestination from "./LifeKeyDestination";

const LifeInAbroadCountry = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center ">
      <Container>
        <Row>
          <div className="heading-big-medium">Life</div>
        </Row>
        <LifeCostOflLiving />
        <LifeKeyDestination />
      </Container>
    </section>
  );
};

export default LifeInAbroadCountry;
