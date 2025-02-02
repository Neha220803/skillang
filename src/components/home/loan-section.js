import React from "react";
import loanImg from "../../images/home/loan-img.png";
import {
  CardBody,
  CardTitle,
  Container,
  Col,
  Row,
  Card,
  Image,
} from "react-bootstrap";
import "./home-page.css";
import "../../App.css";

const LoanSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} sm={12}>
            <Image fluid src={loanImg} />
          </Col>
          <Col>
            <h1>Loan and Scholarships Assistance</h1>
            <p>
              At SKILLANG, we know funding education abroad can be challenging.
              That’s why we provide dedicated education loan services to help
              cover tuition, living expenses, and other study costs.
            </p>
            <button>Apply</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoanSection;
