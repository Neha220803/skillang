import React, { useState, useEffect } from "react";
import { Modal, Row, Col, Image, Accordion } from "react-bootstrap";
import { ChevronRight, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import "./scholarshipPopus.css";

const ViewAllScholarshipPopUp = ({
  showAllModal,
  handleCloseAllModal,
  scholarships,
  country,
}) => {
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [activeKey, setActiveKey] = useState("0");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Check if screen is mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize with the first scholarship when modal opens
  useEffect(() => {
    if (showAllModal && scholarships.length > 0 && !selectedScholarship) {
      setSelectedScholarship(scholarships[0]);
    }
  }, [showAllModal, scholarships, selectedScholarship]);

  const handleScholarshipSelect = (scholarship) => {
    setSelectedScholarship(scholarship);
  };

  const handleAccordionToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  // Scholarship details content component
  const ScholarshipDetails = ({ scholarship }) => (
    <div className="p-3 p-md-4">
      {scholarship.logo && (
        <div className="text-center mb-3">
          <Image
            src={scholarship.image || "https://via.placeholder.com/100x50"}
            alt={`${scholarship.name} logo`}
            style={{ maxHeight: "80px" }}
          />
        </div>
      )}

      <div className="mb-4 subheading-big-medium">{scholarship.name}</div>

      <h5>Benefits</h5>
      <p>{scholarship.benefits}</p>

      <h5>Eligibility Criteria</h5>
      <ul>
        {scholarship.eligibility.map((criteria, idx) => (
          <li key={idx}>{criteria}</li>
        ))}
      </ul>

      <h5>When to Apply/Deadline</h5>
      <p>{scholarship.deadline}</p>

      <div className={isMobile ? "text-center mt-4" : "text-end mt-5 pt-5"}>
        <button
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Apply for Scholarship
        </button>
      </div>
    </div>
  );

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
        {/* Desktop view - Split panel layout */}
        {!isMobile ? (
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
                <ScholarshipDetails scholarship={selectedScholarship} />
              )}
            </Col>
          </Row>
        ) : (
          /* Mobile view - Accordion layout */
          <div className="scholarship-accordion">
            <Accordion activeKey={activeKey}>
              {scholarships.map((scholarship, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={scholarship.id}
                >
                  <Accordion.Header
                    onClick={() => handleAccordionToggle(index.toString())}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="paragraph-big-medium">
                      {scholarship.name}
                    </div>
                    {/* <span className="accordion-icon">
                      {activeKey === index.toString() ? (
                        <ChevronUp
                          style={{
                            color: "#595959",
                            height: "16px",
                            width: "auto",
                          }}
                        />
                      ) : (
                        <ChevronDown
                          style={{
                            color: "#595959",
                            height: "16px",
                            width: "auto",
                          }}
                        />
                      )}
                    </span> */}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ScholarshipDetails scholarship={scholarship} />
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ViewAllScholarshipPopUp;
