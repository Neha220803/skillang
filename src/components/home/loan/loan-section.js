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
    <section className="loan-section d-flex flex-column align-items-center justify-content-center">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={6}>
            <Image fluid src={loanImg} className="loan-image" />
          </Col>
          <Col xs={12} sm={12} md={6}>

                  <h1 className="loan-heading">Loan and Scholarships Assistance</h1>
                
                <p className="loan-description">
                  At SKILLANG, we understand that funding education abroad can be
                  challenging. That's why we offer dedicated education loan services
                  to help cover tuition, living expenses, and other study-related costs.
                </p>
                <button className="btn-primary">Apply Now</button>
              
          
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoanSection;
