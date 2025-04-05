import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "./scholarship.css";
import EduScholarleftimg from "../../../../assets/images/study-abroad-county-wise/scholarLeft.png";
import countryWiseData from "../../../../data/countryWiseData";
import { ChevronRight } from "react-bootstrap-icons";

const ScholarshipAbroadCountry = ({ country = "uk" }) => {
  // Add state for modal
  const [showModal, setShowModal] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const data = countryWiseData[country];
  // Sample scholarship data
  const scholarships = [
    {
      id: 1,
      name: "Erasmus Mundus Joint Masters Degree Scholarship",
      link: "/scholarships/erasmus-mundus",
      benefits:
        "Full tuition fees, travel costs, monthly stipend (€1,400), and installation costs.",
      eligibility: [
        "Must have a Bachelor's degree or equivalent",
        "Meet specific program requirements",
        "Language proficiency in the program's language",
      ],
      deadline:
        "Applications typically open in October and close in January each year.",
      applyLink:
        "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters-scholarships",
    },
    {
      id: 2,
      name: "Commonwealth Scholarship and Fellowship Plan",
      link: "/scholarships/commonwealth",
      benefits:
        "Full tuition fees, living allowance, travel costs, and other allowances.",
      eligibility: [
        "Citizen of a Commonwealth country",
        "Hold a first degree of at least upper second class honors",
        "Unable to afford to study without this scholarship",
      ],
      deadline: "Varies by country, typically between September and December.",
      applyLink: "https://cscuk.fcdo.gov.uk/scholarships/",
    },
    {
      id: 3,
      name: "Dr. Manmohan Singh Scholarships",
      link: "/scholarships/manmohan-singh",
      benefits: "Full tuition fees, living expenses, and international travel.",
      eligibility: [
        "Indian nationals under the age of 35",
        "Hold a Master's or equivalent degree with 60% or more marks",
        "Have an excellent academic background",
      ],
      deadline:
        "Applications typically open in September and close in December.",
      applyLink: "https://www.sms.cam.ac.uk/collection/1896301",
    },
    {
      id: 4,
      name: "Chevening Scholarships",
      link: "/scholarships/chevening",
      benefits:
        "Full tuition fees, travel costs, monthly stipend (~£1,133 to £1,362 depending on region), and additional allowances.",
      eligibility: [
        "Must be a citizen of a Chevening-eligible country.",
        "Hold an undergraduate degree.",
        "Have at least 2 years of work experience.",
      ],
      deadline: "Applications open in August and close in November each year.",
      applyLink: "https://www.chevening.org/apply/",
    },
  ];

  // Function to handle scholarship click
  const handleScholarshipClick = (scholarship) => {
    setSelectedScholarship(scholarship);
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="d-flex justify-content-end bg-primar edu-scholarship-bg pt-5">
        <Container className="mt-5">
          <Row className="align-items-center mt-5 ">
            <Col lg={6} md={12}>
              <div className="scholarship-content">
                <h1 className="heading-big-medium text-white mb-3">
                  Top Scholarships Available to Study in{" "}
                  {data?.fullForm || country.toUpperCase()}
                </h1>
                <p className="text-white mb-4">
                  Discover diverse financial aid options that make your{" "}
                  {data?.shortForm || country.toUpperCase()} education dream
                  more accessible and affordable.
                </p>

                <div className="scholarship-list">
                  {scholarships.map((scholarship) => (
                    <div
                      key={scholarship.id}
                      className="scholarship-item"
                      style={{ cursor: "pointer" }}
                    >
                      <a
                        href={scholarship.link}
                        className="d-flex justify-content-between align-items-center text-white text-decoration-none"
                        onClick={(e) => {
                          e.preventDefault();
                          handleScholarshipClick(scholarship);
                        }}
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
                  View all Scholarships
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

      {/* Scholarship Details Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        dialogClassName="modal-60w"
        size="lg"
        aria-labelledby="scholarship-modal"
      >
        {selectedScholarship && (
          <>
            <Modal.Header closeButton>
              {currentStep !== 1 && (
                <Button
                  variant="link"
                  className="p-0 me-2 text-dark"
                  onClick={() => setCurrentStep(1)}
                  aria-label="Go back"
                >
                  <i
                    className="bi bi-arrow-left"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                </Button>
              )}
              <Modal.Title className="subheading-medium">
                {selectedScholarship.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
              <Row>
                <Col md={12}>
                  <h4>Benefits</h4>
                  <p>{selectedScholarship.benefits}</p>

                  <h4>Eligibility Criteria</h4>
                  <ul>
                    {selectedScholarship.eligibility.map((criteria, index) => (
                      <li key={index}>{criteria}</li>
                    ))}
                  </ul>

                  <h4>When to Apply/Deadline</h4>
                  <p>{selectedScholarship.deadline}</p>

                  <div className="text-center mt-4">
                    <Button
                      variant="primary"
                      href={selectedScholarship.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply for Scholarship
                    </Button>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
};

export default ScholarshipAbroadCountry;
