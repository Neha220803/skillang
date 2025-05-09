import React from "react";
import ParterWithUsImgHeader from "../../../../assets/images/partner-with-us/HeaderImg.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

const PartnerWithUsHeader = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} xs={12} md={6}>
            <h1 className="heading-big-medium">
              Together, We Create Global Opportunities
            </h1>
            <p className="paragraph-big-medium text-content-secondary">
              At Skillang, we believe in the power of meaningful collaboration.
              Our partnerships are built on trust, impact, and mutual growth.
              Whether you're an institution, corporate, regional promoter, or
              aspiring business owner, we invite you to join us in shaping the
              global future of education and careers.
            </p>
          </Col>
          <Col sm={12} xs={12} md={6}>
            <Image
              src={ParterWithUsImgHeader}
              className="WhyGerOppCardImp"
              alt="Partner With us Header Image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PartnerWithUsHeader;
