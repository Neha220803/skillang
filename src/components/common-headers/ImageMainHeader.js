import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import "./ImageMainHeader.css";

const ImageHeaderComponent = ({
  imageSrc,
  imageAlt = "header-image",
  title,
  subheading,
  buttonText = "Talk to an Expert",
}) => {
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
            <button className="btn-primary">{buttonText}</button>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default ImageHeaderComponent;
