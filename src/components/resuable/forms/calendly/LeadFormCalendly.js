import React, { useState, useEffect } from "react";
import {
  Modal,
  Container,
  Row,
  Col,
  Form,
  Button,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import "./LeadFormCalendly.css";
import consultationImage from "../../../../assets/images/reusable/consult-popup.jpg";
import successSound from "../../../../assets/sounds/success.mp3";
import errorSound from "../../../../assets/sounds/rejected.mp3";
import useFormHandler from "../../../../hooks/useFormHandler";

const ToastMessage = ({ showToast, onClose, toastVariant, status }) => {
  useEffect(() => {
    if (showToast) {
      const sound = new Audio(
        toastVariant === "success" ? successSound : errorSound
      );
      sound.play();
    }
  }, [showToast, toastVariant]);

  return (
    <Toast
      show={showToast}
      onClose={onClose}
      autohide
      delay={3000}
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 9999,
        minWidth: "300px",
      }}
    >
      <Toast.Header closeButton className={`bg-${toastVariant} text-white`}>
        <strong className="me-auto">🔔 Skillang</strong>
      </Toast.Header>
      <Toast.Body>{status}</Toast.Body>
    </Toast>
  );
};

const ConsultationModal = ({ show, handleClose }) => {
  const {
    formData,
    otp,
    otpVisible,
    showToast,
    toastVariant,
    status,
    resendDisabled,
    countdown,
    isOtpVerified,
    setFormData,
    isOtpSent,
    validated,
    handleInputChange,
    handleOptionSelect,
    handleSubmit,
    handleOtpChange,
    handleVerifyOtp,
    handleResendOtp,
    setOtp,
    setShowToast,
  } = useFormHandler();

  // State to track current step (1: form, 2: OTP verification)
  const [currentStep, setCurrentStep] = useState(1);
  const [formIsValid, setFormIsValid] = useState(false);

  // Add this useEffect to change steps after form validation
  useEffect(() => {
    if (formIsValid && isOtpSent) {
      setCurrentStep(2);
    }
  }, [formIsValid, isOtpSent]);

  // Modify your form submission handling
  const handleModalFormSubmit = (e) => {
    // Call the original handleSubmit from the hook
    handleSubmit(e);

    // Check if form is valid
    if (
      formData.name &&
      formData.phone &&
      formData.email &&
      formData.lookingFor
    ) {
      setFormIsValid(true);
    }
  };

  // State for OTP inputs

  // Remove the handleChange function and use handleInputChange from the hook

  // const handleLookingForSelect = (option) => {
  //   setFormData({
  //     ...formData,
  //     lookingFor: option,
  //   });
  // };

  return (
    <Modal
      show={show}
      onHide={handleClose}
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
            <i className="bi bi-arrow-left" style={{ fontSize: "1.2rem" }}></i>
          </Button>
        )}
        <Modal.Title className="subheading- -medium">
          {currentStep === 1
            ? "Book a Free Consultation"
            : "Verify Mobile Number"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Row>
          <Col md={6} className="p-0 d-none d-md-block">
            <img
              src={consultationImage}
              alt="Consultation"
              className="img-fluid h-100 w-100 object-fit-contain"
              style={{ maxHeight: "500px" }}
            />
          </Col>
          <Col md={6} className="p-5" style={{ minHeight: "500px" }}>
            {currentStep === 1 ? (
              /* Step 1: Initial Form */
              <>
                <div className="text-center subheading-big-medium mb-1">
                  Connect with Us!
                </div>
                <div className="paragraph-big-medium text-content-secondary text-center text-muted mb-4">
                  Tell us more about yourself
                </div>

                <Form onSubmit={handleModalFormSubmit}>
                  <Form.Group className="" controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="border-0"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      minLength={3}
                      maxLength={40}
                    />
                  </Form.Group>
                  {/* onChange={handleInputChange} */}
                  <Form.Group className="border-0">
                    <Form.Control
                      type="tel"
                      placeholder="Mobile"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      className=""
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="text-start paragraph-small-regular text-content-secondary">
                      Highest Qualification
                    </Form.Label>
                    <div className="d-flex gap-2 flex-wrap">
                      {["In Graduation", "Graduate", "Post Graduate"].map(
                        (option, index) => (
                          <div
                            key={index}
                            className={`experience-option ${
                              formData.lookingFor === option ? "selected" : ""
                            }`}
                            onClick={() =>
                              handleOptionSelect("lookingFor", option)
                            }
                          >
                            <label className="w-100 m-0 caption-regular text-content-secondary">
                              {option}
                            </label>
                            <input
                              type="radio"
                              id={`looking-for-${index}`}
                              name="lookingFor"
                              value={option}
                              checked={formData.lookingFor === option}
                              onChange={() => {}} // Handled by the onClick on parent div
                              hidden
                            />
                          </div>
                        )
                      )}
                    </div>
                  </Form.Group>
                  <div className="d-grid">
                    <Button type="submit" className="btn-primary py-2">
                      Get Started
                    </Button>
                  </div>
                  <div className="text-center text-muted mt-3 small">
                    By submitting this form, you agree to the{" "}
                    <a href="/terms-of-use" className="text-decoration-none">
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy" className="text-decoration-none">
                      Privacy Policy
                    </a>
                  </div>
                </Form>
              </>
            ) : (
              /* Step 2: OTP Verification */
              <>
                <div className="text-center subheading-big-medium mb-1">
                  We've sent you an OTP on
                </div>
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <div className="text-center paragraph-small-medium">
                    {formData.email}
                  </div>
                  <Button
                    variant="link"
                    className="text-decoration-none p-0 ms-2"
                    onClick={() => setCurrentStep(1)}
                  >
                    <div className="text-content-primary-accent">Edit</div>
                  </Button>
                </div>

                <Form>
                  <Form.Control
                    type="text"
                    placeholder="Enter your OTP "
                    value={otp}
                    onChange={handleOtpChange}
                    required
                  />
                  <div
                    className={`text-start bg-primar ${
                      resendDisabled ? "resend-disabled" : "resend-enabled"
                    }`}
                    onClick={!resendDisabled ? handleResendOtp : undefined}
                  >
                    🔔 Resend OTP {resendDisabled ? `(${countdown}s)` : ""}
                  </div>

                  <div className="text-center mb-4">
                    <div className="mb-2 text-content-secondary">
                      Didn't receive an OTP?
                    </div>
                    <Button
                      variant="link"
                      className="text-decoration-none p-0 text-content-primary-accent"
                      onClick={handleVerifyOtp}
                    >
                      Resend in 9 sec
                    </Button>
                  </div>

                  <div className="d-grid">
                    <Button type="submit" className="btn-primary py-2">
                      Continue
                    </Button>
                  </div>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Modal.Body>
      <ToastContainer position="top-end" className="p-3">
        <ToastMessage
          showToast={showToast}
          onClose={() => setShowToast(false)}
          toastVariant={toastVariant}
          status={status}
        />
      </ToastContainer>
    </Modal>
  );
};

export default ConsultationModal;
