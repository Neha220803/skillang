import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./scholarship.css";
import EduScholarleftimg from "../../../assets/images/study-abroad-county-wise/scholarLeft.png";

const ScholarshipAbroadCountry = () => {
  // Sample scholarship data
  const scholarships = [
    {
      id: 1,
      name: "Erasmus Mundus Joint Masters Degree Scholarship",
      link: "/scholarships/erasmus-mundus",
    },
    {
      id: 2,
      name: "Commonwealth Scholarship and Fellowship Plan",
      link: "/scholarships/commonwealth",
    },
    {
      id: 3,
      name: "Dr. Manmohan Singh Scholarships",
      link: "/scholarships/manmohan-singh",
    },
    {
      id: 4,
      name: "Chevening Scholarships",
      link: "/scholarships/chevening",
    },
  ];

  return (
    <div className="edu-scholarship-bg">
      <section className="d-flex justify-content-center bg-primary">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={12}>
              <div className="scholarship-content">
                <h1 className="heading-big-medium text-white mb-3">
                  Top Scholarships Available to Study in United Kingdom
                </h1>
                <p className="text-white mb-4">
                  Discover diverse financial aid options that make your UK
                  education dream more accessible and affordable.
                </p>

                <div className="scholarship-list">
                  {scholarships.map((scholarship, index) => (
                    <div key={scholarship.id} className="scholarship-item mb-3">
                      <a
                        href={scholarship.link}
                        className="d-flex justify-content-between align-items-center text-white text-decoration-none p-3  bg-light bg-opacity-25"
                      >
                        <span>{scholarship.name}</span>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  ))}
                </div>

                <button className="mt-4 btn-primary" href="/scholarships">
                  View all Scholarship
                </button>
              </div>
            </Col>

            <Col lg={5} className="d-none d-lg-block">
              <div className="scholarship-image">
                <img
                  src={EduScholarleftimg}
                  alt="Graduate student with degree"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ScholarshipAbroadCountry;
