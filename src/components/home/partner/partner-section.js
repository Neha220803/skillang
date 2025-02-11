import React from "react";
import "../home-page.css";
import "../../../index.css";
import './partner.css';
import { Container, Row, Col, Image } from "react-bootstrap";
import partnerImg from '../../../images/home/partner-img.png';

const PartnerSection = () => {
  return (
    <div className=" justify-content-center align-items-center my-5 partner-div">
      <Container className="text-center justify-content-center align-items-center rounded-4">
        <Row className="justify-content-center align-items-center px-4 partner-bg">
          <Col>
          <Image fluid src={partnerImg} alt="Partner Image" />
          </Col>
          <Col className="justify-content-start align-items-start text-start">
            <h1 className="p-2 partner-heading ">Boost your professional journey with Skillang </h1>
            <p className="pb-2">Tailored Support for International Education, Employment Opportunities, and Language Preparation.</p>
            <button className=" py-2 btn-secondary" onClick={() => {
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
