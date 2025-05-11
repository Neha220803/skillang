import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import partWithUsIcon1 from "../../../../assets/icons/partner-with-us/instiIcon.svg";
import partWithUsIcon2 from "../../../../assets/icons/partner-with-us/companyIcon.svg";
import partWithUsIcon3 from "../../../../assets/icons/partner-with-us/recuriterIcon.svg";
import PartnerWithUsPopUpModal from "../../../resuable/forms/three-partner/partnerWithUsPopUp";

const PartnerTypeSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState("Institution"); // Default type

  const handleClose = () => setShowModal(false);

  // Updated to accept a type parameter
  const handleShow = (type) => {
    setSelectedType(type);
    setShowModal(true);
  };

  const partnerTypes = [
    {
      icon: partWithUsIcon1,
      title: "Join as an Institutional Partner",
      description:
        "Partner with us to provide your students access to life-changing international education and training programs.",
      type: "Institution",
    },
    {
      icon: partWithUsIcon2,
      title: "Join as a Corporate Partner",
      description:
        "Partner with us to provide your students access to life-changing international education and training programs.",
      type: "Company",
    },
    {
      icon: partWithUsIcon3,
      title: "Join as a Channel Partner",
      description:
        "Promote our services in your region and become a trusted local face of international opportunities.",
      type: "Recruiter",
    },
  ];

  return (
    <div>
      <Container>
        <Row className="text-center">
          <h1 className="heading-big-medium">Join Us from Anywhere!</h1>
          <p className="paragraph-big-medium text-content-secondary">
            Embark on your new journey with one of the leading study abroad
            franchises.
          </p>
        </Row>
        <Row>
          {partnerTypes.map((partner, index) => (
            <Col key={index} md={4} sm={12} xs={12}>
              <Card className="why-nurse-card">
                <Card.Img
                  variant="top"
                  src={partner.icon}
                  className="why-nurse-card-img"
                  alt={`partner wish us icon ${index + 1}`}
                />
                <Card.Body className="px-1">
                  <Card.Title className="subheading-small-medium">
                    {partner.title}
                  </Card.Title>
                  <Card.Text className="paragraph-big-medium text-content-secondary">
                    {partner.description}
                  </Card.Text>
                  <button
                    className="btn-primary"
                    onClick={() => handleShow(partner.type)}
                  >
                    Know More
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <PartnerWithUsPopUpModal
        show={showModal}
        handleClose={handleClose}
        defaultType={selectedType}
      />
    </div>
  );
};

export default PartnerTypeSection;
