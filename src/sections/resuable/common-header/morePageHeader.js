import React from "react";
import "./morePaheHeader.css";
import { Container, Row } from "react-bootstrap";
import "../../../index.css";
import "../../../App.css";

const MorePageHeader = ({
  desktopBgImage,
  mobileBgImage,
  title,
  description,
  buttonText,
  buttonOnClick,
}) => {
  // Default onClick handler if none provided
  const handleButtonClick =
    buttonOnClick ||
    (() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

  return (
    <div
      className="d-flex align-items-start mt-5 pt-5 justify-content-center reusable-header-card"
      style={{
        "--desktop-more-page-bg-image": `url(${desktopBgImage})`,
        "--mobile-more-page-bg-image": mobileBgImage
          ? `url(${mobileBgImage})`
          : `url(${desktopBgImage})`,
      }}
    >
      <Container className="text-center justify-content-center">
        <Row className="justify-content-center">
          <div className="header-wrapper">
            <div className="heading-big-medium">{title || "Default Title"}</div>
            <div className="paragraph-big-medium text-content-secondary">
              {description || "Default description text goes here."}
            </div>
            <button className="btn-primary mt-4" onClick={handleButtonClick}>
              {buttonText || "Call to Action"}
            </button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MorePageHeader;
