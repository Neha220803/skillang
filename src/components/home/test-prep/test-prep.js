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
    <div>
    <Container className="test-lag-bg d-flex flex-column align-items-center justify-content-center">
      <Row className="w-100">
        <Col className="test-lang-left-bg text-start" lg={6} sm={12} xs={12}>
          <div className="heading-big-medium mb-4">Test and Language Preparation</div>
          <div className="paragraph-big-medium text-content-secondary mb-4">
            Boost your skills and confidence with our comprehensive test and language preparation courses.
          </div>
          <button className="btn-secondary">Schedule Demo</button>
          <button className="btn-primary ms-2">Learn More</button>
        </Col>

        {/* Right Section */}
        <Col className=" d-flex flex-column mt-3" lg={6}  sm={12} xs={12}>
          {testPrepCourses.map(([course1, course2, isBestSeller], index) => (
            <Row key={index} className=" d-flex">
              <Col className=" " lg={6} sm={6} xs={6}>
                <div className="test-lang-card paragraph-big-medium">{course1}</div>
              </Col>
              <Col className="  " lg={6} sm={6} xs={6}>
                <div className="test-lang-card paragraph-big-medium">
                  {course2} {isBestSeller && <span className="best-seller d-none d-md-block">Best Seller</span>}
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
     </div>
  );
};

export default TestPrep;
