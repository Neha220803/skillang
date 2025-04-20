import React, { useState } from "react";
import { Container, Image, Row } from "react-bootstrap";
import "./ImageMainHeader.css";
import ConsultationModal from "../../sections/resuable/forms/calendly/LeadFormCalendly";

const ImageHeaderComponent = ({
  imageSrc,
  imageAlt = "header-image",
  title,
  subheading,
  buttonText = "Talk to an Expert",
}) => {
  const [showModal, setShowModal] = useState(false);
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
  return (
    <header className="d-flex align-items-center justify-content-center text-center py-5 study-aborad-country-header">
      <div className="circle-blur"></div>
      <Container className="mt-5">
        <Row>
          <Image src={imageSrc} alt={imageAlt} className="country-wise-img" />
        </Row>
        <Row>
          <div className="heading-big-medium mt-3">{title}</div>
        </Row>
        <Row className="d-flex align-items-center justify-content-center my-2">
          <div className="paragraph-big-medium study-aborad-country-text-wrapper">
            {subheading}
          </div>
        </Row>
        <Row>
          <div>
            <button className="btn-primary" onClick={handleButtonClick}>
              {buttonText}
            </button>
          </div>
        </Row>
      </Container>
      <ConsultationModal show={showModal} handleClose={handleClose} />;
    </header>
  );
};

export default ImageHeaderComponent;
