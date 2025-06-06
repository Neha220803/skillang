import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "../../../../App.css";
import "./loan-section.css";
import "../../../../index.css";
import { useNavigate, useLocation } from "react-router-dom";

const LoanSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-evenly">
      <Container className="d-flex flex-column align-items-start justify-content-center">
        <Col xs={12} sm={12} md={6} lg={5} className="mb-4 d-block d-md-none">
          <Image
            fluid
            src="https://cms.skillang.com/uploads/loan_img_b98ce382ae.jpg"
            className="loan-image rounded-4"
          />
        </Col>
        <Row className="mb-md-3 d-block d-md-none">
          <h1 className="heading-big-medium">
            Loan and Scholarships Assistance
          </h1>
        </Row>
        <Row className="align-items-start">
          <Col xs={12} sm={12} md={7} lg={6}>
            {/* This heading will only show on md and larger screens */}
            <div className="heading-big-medium d-none d-md-block">
              Loan and Scholarships Assistance
            </div>
            <div className="paragraph-big-medium text-content-secondary my-3">
              At SKILLANG, we understand that funding education abroad can be
              challenging. That's why we offer dedicated education loan services
              to help cover tuition, living expenses, and other study-related
              costs.
            </div>
            <button
              className="btn-primary"
              onClick={() => handleNavigation("/more/scholarships")}
            >
              Apply Now
            </button>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} className="mb-4 d-none d-md-block">
            <Image
              fluid
              src="https://cms.skillang.com/uploads/loan_img_b98ce382ae.jpg"
              className="loan-image rounded-4"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoanSection;
