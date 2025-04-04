import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./scholarship.css";
import EduScholarleftimg from "../../../../assets/images/study-abroad-county-wise/scholarLeft.png";
import countryWiseData from "../../../../data/countryWiseData";
import { ChevronRight } from "react-bootstrap-icons";

const ScholarshipAbroadCountry = ({ country = "uk" }) => {
  const data = countryWiseData[country];
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
      name: "Country Experience",
      link: "/scholarships/chevening",
    },
  ];

  return (
    <section className="d-flex justify-content-end bg-primar edu-scholarship-bg pt-5">
      <Container className="mt-5">
        <Row className="align-items-center mt-5 ">
          <Col lg={6} md={12}>
            <div className="scholarship-content">
              <h1 className="heading-big-medium text-white mb-3">
                Top Scholarships Available to Study in {data.fullForm}
              </h1>
              <p className="text-white mb-4">
                Discover diverse financial aid options that make your{" "}
                {data.shortForm} education dream more accessible and affordable.
              </p>

              <div className="scholarship-list">
                {scholarships.map((scholarship, index) => (
                  <div key={scholarship.id} className="scholarship-item ">
                    <a
                      href={scholarship.link}
                      className="d-flex justify-content-between align-items-center text-white text-decoration-none"
                    >
                      <span>{scholarship.name}</span>
                      <span>
                        <ChevronRight />
                      </span>
                    </a>
                  </div>
                ))}
              </div>

              <button className="mt-md-4 mt-1 btn-primary">
                View all Scholarship
              </button>
            </div>
          </Col>

          <Col lg={6} className="d-none d-md-block">
            <div className="scholarship-image h-75 d-flex align-items-center justify-content-center">
              <img
                src={EduScholarleftimg}
                alt="Graduate student with degree"
                className="img-fluid h-75"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ScholarshipAbroadCountry;
