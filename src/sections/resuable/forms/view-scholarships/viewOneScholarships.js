import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import "./scholarshipPopus.css";

const ViewOneScholarshipModal = ({
  showModal,
  handleCloseModal,
  selectedScholarship,
  currentStep,
  setCurrentStep,
}) => {
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      dialogClassName="modal-60w"
      size="lg"
      aria-labelledby="scholarship-modal"
    >
      {selectedScholarship && (
        <>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="p-4 d-flex justify-items-center align-items-center">
            <Row className="modal-row d-flex justify-items-center align-items-center gap-3">
              <div className="d-flex flex-column justify-items-center align-items-center mt-2">
                <img
                  src={selectedScholarship.image}
                  alt={selectedScholarship.name}
                  style={{ width: "80px", height: "auto" }}
                />
                <div className="subheading-big-medium">
                  {selectedScholarship.name}
                </div>
              </div>
              <div>
                <h4>Benefits</h4>
                <p>{selectedScholarship.benefits}</p>
              </div>
              <div>
                <h4>Eligibility Criteria</h4>
                <ul>
                  {selectedScholarship.eligibility.map((criteria, index) => (
                    <li key={index}>{criteria}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>When to Apply/Deadline</h4>
                <p>{selectedScholarship.deadline}</p>
              </div>
              <div className="text-center">
                <button
                  href={selectedScholarship.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Apply for Scholarship
                </button>
              </div>
            </Row>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default ViewOneScholarshipModal;
