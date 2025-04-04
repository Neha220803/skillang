import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./UniContact.css";

const UniContactComp = ({
  heading,
  description,
  buttonText,
  onButtonClick = () => {},
}) => {
  return (
    <div className="university-choice-section">
      <Row className="align-items-center">
        <Col md={8}>
          <div className="heading-small-medium mb-3">{heading}</div>
          <div className="paragraph-big-medium">{description}</div>
        </Col>
        <Col md={4} className="text-md-end">
          <button className="btn-primary" onClick={onButtonClick}>
            {buttonText}
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default UniContactComp;
