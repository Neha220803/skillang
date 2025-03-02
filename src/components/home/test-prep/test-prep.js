import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../App.css";
import "./test-prep.css";

const testPrepCourses = [
  ["IELTS", "German Language", true], // true means "Best Seller"
  ["TOEFL", "GMAT"],
  ["GRE", "SAT"],
  ["OET", "PET"],
  ["French Language", "Duolingo Test"],
];

const TestPrep = () => {
  return (
    <Container className="test-lag-bg">
      <Row className="">
        <Col className="test-lang-left-bg text-start" lg={6}>
          <div className="heading-big-medium mb-4">Test and Language Preparation</div>
          <div className="paragraph-big-medium text-content-secondary mb-4">
            Boost your skills and confidence with our comprehensive test and language preparation courses.
          </div>
          <button className="btn-secondary">Schedule Demo</button>
          <button className="btn-primary ms-2">Learn More</button>
        </Col>

        {/* Right Section */}
        <Col className="ps-1 p-0 d-flex flex-column mt-3" lg={6}>
          {testPrepCourses.map(([course1, course2, isBestSeller], index) => (
            <Row key={index} className="w-lg-100 d-flex">
              <Col className="pe-0  " lg={6} sm={6} xs={6}>
                <div className="test-lang-card paragraph-big-medium">{course1}</div>
              </Col>
              <Col className="pe-3 pe-lg-0 " lg={6} sm={6} xs={6}>
                <div className="test-lang-card paragraph-big-medium">
                  {course2} {isBestSeller && <span className="best-seller d-none md-block">Best Seller</span>}
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default TestPrep;
