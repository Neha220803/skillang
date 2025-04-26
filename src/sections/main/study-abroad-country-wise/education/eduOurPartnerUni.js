import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { HiOutlineDownload } from "react-icons/hi";
import { ChevronRight } from "react-bootstrap-icons";
import countryWiseData from "../../../../data/countryWiseData";
import DownloadBrochurePopUp from "../../../resuable/forms/download-brochure/DownloadBrochurePopUp";

const EduOurPartnerUni = ({ country = "uk" }) => {
  const data = countryWiseData[country];
  const universities = data.education.partnerUniversities;
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Define the handleClose function
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Default onClick handler if none provided
  const handleButtonClick = () => {
    handleShow();
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
  };

  // Display only first 3 universities on mobile unless showAll is true
  const displayedUniversities = showAll
    ? universities
    : universities.slice(0, 3);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="mb-0 subheading-big-medium text-content-secondary">
          Our Partner Universities
        </div>
        <a
          href="/universities"
          className="text-decoration-none text-content-primary-accent d-flex justify-content-center gap-2 align-items-center d-none d-md-block"
        >
          View all <ChevronRight />
        </a>
      </div>

      {/* Desktop view (horizontal scrolling) - visible only on medium screens and above */}
      <div className="position-relative d-none d-md-block">
        <div className="d-flex flex-nowrap overflow-auto pb-3 hide-scrollbar">
          {universities.map((university) => (
            <div
              key={university.id}
              className="me-4"
              style={{ minWidth: "380px", maxWidth: "380px" }}
            >
              <Card className="border-0 h-100">
                <Card.Img
                  variant="top"
                  src={university.image}
                  alt={university.name}
                  className="rounded-3"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="m-2 edu-rank-badge">
                  QS Rank {university.qsRank}
                </div>
                <Card.Body className="px-0 pt-3 pb-0">
                  <Card.Title className="subheading-small-medium mb-1">
                    {university.name}
                  </Card.Title>
                  <Card.Text className="caption-medium text-content-tertiary mb-3">
                    {university.location}
                  </Card.Text>
                  <div className="d-flex">
                    <button
                      className="me-2 p-3 d-flex align-items-center btn-secondary-outline"
                      onClick={handleButtonClick}
                    >
                      <HiOutlineDownload
                        className="me-2"
                        style={{ width: "24px", height: "auto" }}
                      />
                      Brochure
                    </button>
                    <button className="d-flex align-items-center btn-secondary">
                      Know More
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view (vertical stacking) - visible only on small screens */}
      <div className="d-block d-md-none">
        <Row>
          {displayedUniversities.map((university) => (
            <Col xs={12} className="mb-4" key={university.id}>
              <Card className="border-0 h-100">
                <Card.Img
                  variant="top"
                  src={university.image}
                  alt={university.name}
                  className="rounded-3"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="m-2 edu-rank-badge">
                  QS Rank {university.qsRank}
                </div>
                <Card.Body className="px-0 pt-3 pb-0">
                  <Card.Title className="subheading-small-medium mb-1">
                    {university.name}
                  </Card.Title>
                  <Card.Text className="caption-medium text-content-tertiary mb-3">
                    {university.location}
                  </Card.Text>
                  <div className="d-flex">
                    <button
                      className="me-2 p-3 d-flex align-items-center btn-secondary-outline"
                      onClick={handleButtonClick}
                    >
                      <HiOutlineDownload
                        className="me-2"
                        style={{ width: "24px", height: "auto" }}
                      />
                      Brochure
                    </button>
                    <button className="d-flex align-items-center btn-secondary">
                      Know More
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <DownloadBrochurePopUp
          showModal={showModal}
          handleCloseModal={handleClose}
        />

        {/* Mobile view all button */}
        {universities.length > 3 && !showAll && (
          <div className="text-center">
            <a
              href="/universities"
              className="text-content-primary-accent text-decoration-none d-inline-flex align-items-center"
            >
              View all Universities <ChevronRight className="ms-2" />
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default EduOurPartnerUni;
