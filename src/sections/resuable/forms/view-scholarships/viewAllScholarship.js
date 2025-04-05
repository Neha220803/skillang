import React, { useState, useEffect } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";

const ViewAllScholarship = () => {
  return (
    <div>
      <Modal
        show={show}
        onHide={onModalClose}
        centered
        dialogClassName="modal-90w"
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          {currentStep !== 1 && (
            <Button
              variant="link"
              className="p-0 me-2 text-dark"
              onClick={() => setCurrentStep(1)}
              aria-label="Go back"
            >
              <i
                className="bi bi-arrow-left"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </Button>
          )}
          <Modal.Title className="subheading- -medium">hiii</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <Row></Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ViewAllScholarship;
