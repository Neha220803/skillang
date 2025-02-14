import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../home-page.css";
import "../../../App.css";
import "./test-prep.css";

const testPrepItems = [
  "IELTS", "TOEFL", "GMAT", "GRE", "SAT",
  "OET", "PET", "German Language", "French Language", "Duolingo Test"
];

const TestPrep = () => {
  return (
    <div className="test-prep-section d-flex flex-column align-items-center justify-content-center my-lg-5" id='lang-test'>
      <Container className="d-flex flex-column align-items-center justify-content-center my-4 gap-4">
        <Row>
          <h1 className="text-center mb-lg-5 mb-md-5 mb-2">Test and Language Preparation</h1>
        </Row>
        <Row className="g-3 d-flex align-items-center justify-content-center">
          {testPrepItems.map((item, index) => (
              <Col key={index} xs={6} sm={6} md={4} lg={2} className="d-flex align-items-center justify-content-center">
                <div className="test-prep-card text-center">
                    <h3 className="fw-bold">{item}</h3>
                </div>
              </Col>
          ))}
        </Row>
        <Row className="g-3 mt-lg-4 d-flex align-items-center justify-content-center">
          <div className="d-flex gap-3">
            <button className="btn-primary-outline" onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}>Mock Test</button>
            <button className="btn-primary-outline" onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}>Schedule Demo</button>
          </div>
        </Row>

        
      </Container>
      
    </div>
  );
};

export default TestPrep;