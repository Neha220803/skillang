import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import britishCounsil from "../../../assets/images/lang-test/britishCounsil.svg";
import duo from "../../../assets/images/lang-test/duo.svg";
import pear from "../../../assets/images/lang-test/pearosn.svg";

const LangTestPartners = () => {
  return (
    <div className="text-center ">
      <Container className="">
        <Row>
          <div className="heading-big-medium mb-5">
            Our Language & Test Prep Programs
          </div>
        </Row>
        <Row>
          <div className="d-flex gap-lg-5 gap-2 flex-wrap justify-content-center">
            <img src={britishCounsil} alt=" " />
            <img src={duo} alt=" " />
            <img src={pear} alt=" " />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LangTestPartners;
