import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../App.css";
import "./test-prep.css";
import { useNavigate } from "react-router-dom";

const testPrepCourses = [
  ["IELTS", "German Language", true], // true means "Best Seller"
  ["TOEFL", "GMAT"],
  ["GRE", "SAT"],
  ["OET", "PET"],
  ["French Language", "Duolingo Test"],
];

const TestPrep = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container className="test-lag-bg d-flex flex-column align-items-center justify-content-center">
        <Row className="w-100 d-flex align-items-center justify-content-center">
          <Col className="test-lang-left-bg text-start" lg={6} sm={12} xs={12}>
            <div className="heading-big-medium mb-4">
              Test and Language Preparation
            </div>
            <div className="paragraph-big-medium text-content-secondary mb-4">
              Boost your skills and confidence with our comprehensive test and
              language preparation courses.
            </div>
            <button
              className="btn-secondary"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Schedule Demo
            </button>
            <button
              className="btn-primary ms-2"
              onClick={() => {
                navigate("/lang-test-prep");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Learn More
            </button>
          </Col>

          {/* Right Section */}
          <Col
            className="px-3 flex-column align-items-center justify-content-center bg-primar p-0 mt-3"
            lg={6}
            sm={12}
            xs={12}
          >
            {testPrepCourses.map(([course1, course2, isBestSeller], index) => (
              <Row
                key={index}
                className="p-0 d-flex align-items-center justify-content-center"
              >
                <Col
                  className=" bg-succes p-0 d-flex align-items-start justify-content-center"
                  lg={6}
                  sm={6}
                  xs={6}
                >
                  <div className="test-lang-card paragraph-big-medium text-start">
                    {course1}
                  </div>
                </Col>
                <Col
                  className=" p-0 d-flex align-items-center justify-content-center text-start"
                  lg={6}
                  sm={6}
                  xs={6}
                >
                  <div className="test-lang-card paragraph-big-medium ">
                    {course2}{" "}
                    {isBestSeller && (
                      <span className="best-seller d-none d-md-block">
                        Best Seller
                      </span>
                    )}
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
