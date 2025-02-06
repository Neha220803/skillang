import React from "react";
import "../home-page.css";
import "../../../index.css";
import './partner.css';
import { Container, Row, Col } from "react-bootstrap";

const PartnerSection = () => {
  return (
    <div className="partner-bg justify-content-center align-items-center py-5">
      <Container className="text-center justify-content-center align-items-center py-5">
        <Row className="justify-content-center align-items-center ">
          <Col className="justify-content-center align-items-center">
            <div className="p-2 partner-heading">Partner with Us</div>
            <h4 className="pb-2">For Institutions, Companies, and Recruiters</h4>
            <button className=" py-2 btn-primary  " onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }}>Contact Now</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PartnerSection;
