import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import ScholarshipAbroadCountry from "./ScholarshipAbroadCountry";
import "./scholarshipPopus.css";

const ScholarshipWithModal = ({ country = "uk" }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleScholarshipClick = (scholarship) => {
    setSelectedScholarship(scholarship);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Scholarship Country Component */}
      <ScholarshipAbroadCountry
        country={country}
        onScholarshipClick={handleScholarshipClick}
      />

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

export default ScholarshipWithModal;
