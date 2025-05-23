import React from "react";
import { Modal, Button } from "react-bootstrap";

const ViewOneScholarshipModal = ({
  showModal,
  handleCloseModal,
  selectedScholarship,
  currentStep,
  setCurrentStep,
}) => {
  if (!selectedScholarship) return null;

  // Check if we're on mobile
  const isMobile = window.innerWidth <= 787;

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      centered={!isMobile}
      dialogClassName={isMobile ? "" : "modal-60w"}
      className="scholarship-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedScholarship.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="scholarship-detail-content">
          <h4>Benefits</h4>
          <p>{selectedScholarship.benefits}</p>

          <h4>Eligibility Criteria</h4>
          <ul className="eligibility-list">
            {selectedScholarship.eligibility.map((criterion, index) => (
              <li key={index}>{criterion}</li>
            ))}
          </ul>

          <h4>When to Apply/Deadline</h4>
          <p>{selectedScholarship.deadline}</p>

          <div className="text-center mt-4">
            <a
              href={selectedScholarship.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Apply for Scholarship
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewOneScholarshipModal;