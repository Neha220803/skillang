import React from "react";
import loanImg from "../../../images/home/loan-img.png";
import {
  CardBody,
  CardTitle,
  Container,
  Col,
  Row,
  Card,
  Image,
} from "react-bootstrap";
import "../home-page.css";
import "../../../App.css";
import './loan-section.css';
import '../../../index.css';
import '../../../App.css';

const LoanSection = () => {
  return (
    <div className="loan-section d-flex flex-column align-items-center justify-content-evenly h-md-100vh py-5 h-lg-100vh">
      <Container>
        <Row className="mb-3 d-block d-md-none">
          <h1>Loan and Scholarships Assistance</h1>
        </Row>

        <Row className="align-items-center">
           <Col xs={12} sm={12} md={6} className="mb-4">
              <Image fluid src={loanImg} className="loan-image rounded-4" />
            </Col>
          <Col xs={12} sm={12} md={6}>
            {/* This heading will only show on md and larger screens */}
            <h1 className="loan-heading d-none d-md-block">Loan and Scholarships Assistance</h1>
            <p className="loan-description px-2">
              At SKILLANG, we understand that funding education abroad can be
              challenging. That's why we offer dedicated education loan services
              to help cover tuition, living expenses, and other study-related costs.
            </p>
            <button
              className="btn-primary"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              Apply Now
            </button>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default LoanSection;
