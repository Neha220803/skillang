import React, { useState, useEffect } from "react";
import { Modal, Row, Col, Image } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import "./scholarshipPopus.css";

const ViewAllScholarshipPopUp = ({
  showAllModal,
  handleCloseAllModal,
  scholarships,
  country,
}) => {
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  // Initialize with the first scholarship when modal opens
  useEffect(() => {
    if (showAllModal && scholarships.length > 0 && !selectedScholarship) {
      setSelectedScholarship(scholarships[0]);
    }
  }, [showAllModal, scholarships, selectedScholarship]);

  const handleScholarshipSelect = (scholarship) => {
    setSelectedScholarship(scholarship);
  };

  return (
    <Modal
      show={showAllModal}
      onHide={handleCloseAllModal}
      size="lg"
      aria-labelledby="scholarship-list-modal"
      centered
      dialogClassName="modal-80w"
    >
      <Modal.Header closeButton>
        <Modal.Title id="scholarship-list-modal">
          Scholarship details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Row className="g-0">
          {/* Left panel with scholarship list */}
          <Col md={5} className="border-end p-3">
            <div className="scholarship-list-all">
              {scholarships.map((scholarship) => (
                <div
                  key={scholarship.id}
                  className={
                    selectedScholarship?.id === scholarship.id
                      ? "modal-scholarship-item-active"
                      : "modal-scholarship-item"
                  }
                  onClick={() => handleScholarshipSelect(scholarship)}
                >
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <div>
                      <div className="mb-0 paragraph-big-medium">
                        {scholarship.name}
                      </div>
                    </div>
                    <span>
                      <ChevronRight
                        style={{
                          color: "#595959",
                          height: "16px",
                          width: "auto",
                        }}
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Right panel with scholarship details */}
          <Col md={7}>
            {selectedScholarship && (
              <div className="p-4">
                {selectedScholarship.logo && (
                  <div className="text-center mb-3">
                    <Image
                      src={
                        selectedScholarship.image ||
                        "https://via.placeholder.com/100x50"
                      }
                      alt={`${selectedScholarship.name} logo`}
                      style={{ maxHeight: "80px" }}
                    />
                  </div>
                )}

                <div className="mb-4 subheading-big-medium">
                  {selectedScholarship.name}
                </div>

                <h5>Benefits</h5>
                <p>{selectedScholarship.benefits}</p>

                <h5>Eligibility Criteria</h5>
                <ul>
                  {selectedScholarship.eligibility.map((criteria, index) => (
                    <li key={index}>{criteria}</li>
                  ))}
                </ul>

                <h5>When to Apply/Deadline</h5>
                <p>{selectedScholarship.deadline}</p>

                <div className="text-end mt-5 pt-5">
                  <button
                    // href={selectedScholarship.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Apply for Scholarship
                  </button>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ViewAllScholarshipPopUp;
