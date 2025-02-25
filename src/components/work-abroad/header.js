import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import "../../../src/App.css";


import "../../../src/App.css";


import workAbroadImage from "../../../src/assets/images/work-abroad/workAbroadMainBg.png";

const WorkAbroadHeader = () => {
  return (
    <header className="d-flex align-items-center justify-content-center my-lg-5 px-2" id="work-abroad">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image and Text */}
          <Col lg={6} className="d-flex flex-column align-items-start justify-content-center p-lg-5">
            <h1 className="fw-bold">Launch Your Global Career Adventure with <span className="brand-text">Skillang</span></h1>
            <p className="text-muted">Empowering Skills for Worldwide Success</p>
            <Image src={workAbroadImage} fluid className="work-abroad-img" />
          </Col>

          {/* Right Side - Form */}
          <Col lg={6} className="d-flex align-items-center justify-content-center">
            <div className="form-container shadow p-4 rounded">
              <h3 className="text-center">Start Your Work Abroad Journey</h3>
              <p className="text-center text-muted">Tell Us About Yourself!</p>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="text" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" placeholder="Email" required />
                </Form.Group>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formNumber">
                      <Form.Control type="tel" placeholder="Mobile" required />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formPincode">
                      <Form.Control type="tel" placeholder="PIN Code" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formExperience">
                  <Form.Label>Select Experience</Form.Label>
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant="outline-secondary">Nursing</Button>
                    <Button variant="outline-secondary">Information Technology</Button>
                    <Button variant="outline-secondary">Hospitality</Button>
                    <Button variant="outline-secondary">Blue-collared jobs</Button>
                  </div>
                </Form.Group>
                <Button className="w-100 btn-primary mt-3">Book a Free Consultation</Button>
                <p className="text-center text-muted mt-2 small">
                  By submitting this form, you agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default WorkAbroadHeader;