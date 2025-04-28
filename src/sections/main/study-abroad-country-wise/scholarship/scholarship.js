import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./scholarship.css";
import EduScholarleftimg from "../../../../assets/images/study-abroad-county-wise/scholarLeft.png";
import countryWiseData from "../../../../data/countryWiseData";
import { ChevronRight } from "react-bootstrap-icons";
import ViewOneScholarshipModal from "../../../resuable/forms/view-scholarships/viewOneScholarships";
import scholar1 from "../../../../assets/images/study-abroad-county-wise/scholarship1.jpg";
import ViewAllScholarshipPopUp from "../../../resuable/forms/view-scholarships/viewAllScholarship";

const ScholarshipAbroadCountry = ({ country = "uk" }) => {
  // Add state for modal
  const [showModal, setShowModal] = useState(false);
  const [showAllModal, setShowAllModal] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const data = countryWiseData[country];
  // Sample scholarship data
  const scholarships = [
    {
      id: 1,
      name: "Erasmus Mundus Joint Masters Degree Scholarship",
      link: "/scholarships/erasmus-mundus",
      image: scholar1,
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
      image: scholar1,
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
      image: scholar1,
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
      image: scholar1,
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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to open "View All" modal
  const handleViewAllClick = () => {
    setShowAllModal(true);
  };

  // Function to close "View All" modal
  const handleCloseAllModal = () => {
    setShowAllModal(false);
  };

  return (
    <>
      <section className="d-flex justify-content-end edu-scholarship-bg">
        <Container>
          <Row className="align-items-center mt-5">
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
                  {scholarships.slice(0, 3).map((scholarship) => (
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

                <button
                  className="mt-md-4 mt-3 btn btn-primary"
                  onClick={handleViewAllClick}
                >
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
      <ViewOneScholarshipModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        selectedScholarship={selectedScholarship}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      {/* View All Scholarships Modal */}
      <ViewAllScholarshipPopUp
        showAllModal={showAllModal}
        handleCloseAllModal={handleCloseAllModal}
        scholarships={scholarships}
        handleScholarshipClick={handleScholarshipClick}
        country={country}
      />
    </>
  );
};

export default ScholarshipAbroadCountry;
