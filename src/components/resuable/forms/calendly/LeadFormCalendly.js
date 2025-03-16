import React, { useState, useEffect } from "react";
import { Modal, Row, Col, Form, Button, ToastContainer } from "react-bootstrap";
import "./LeadFormCalendly.css";
import consultationImage from "../../../../assets/images/reusable/consult-popup.jpg";
import useFormHandler from "../../../../hooks/useFormHandler";
import ToastMessage from "../../../../utils/toast";

// Add the Calendly Inline Widget component
const CalendlyInlineWidget = () => {
  useEffect(() => {
    // Create script element for Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Add custom CSS to hide "Powered by Calendly" and fix layout
    const style = document.createElement('style');
    style.textContent = `
      /* Hide powered by Calendly */
      .calendly-powered-by { 
        display: none !important; 
        visibility: hidden !important; 
      }
      
      /* Hide any branding elements */
      .calendly-powered-by-container,
      .calendly-branding { 
        display: none !important; 
        visibility: hidden !important; 
      }
      
      /* Remove unnecessary padding/margins */
      .calendly-inline-widget {
        height: 100% !important;
        min-height: 650px !important;
      }
      
      /* Fix positioning of elements */
      .calendly-spinner { 
        left: 0 !important; 
      }
    `;
    document.head.appendChild(style);

    // Clean up function
    return () => {
      document.body.removeChild(script);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/skillang/20min"
    />
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

  // State to track current step (1: form, 2: OTP verification, 3: Calendly)
  const [currentStep, setCurrentStep] = useState(1);
  const [formIsValid, setFormIsValid] = useState(false);

  // Add this useEffect to change steps after form validation
  useEffect(() => {
    if (formIsValid && isOtpSent) {
      setCurrentStep(2);
    }
  }, [formIsValid, isOtpSent]);

  // Add this useEffect to handle OTP verification success
  useEffect(() => {
    if (isOtpVerified) {
      setCurrentStep(3); // Move to Calendly step
    }
  }, [isOtpVerified]);

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

  // Handle OTP verification submission
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    handleVerifyOtp();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName={currentStep === 3 ? "modal-90w modal-calendly" : "modal-90w"}
      size={currentStep === 3 ? "xl" : "lg"}
      aria-labelledby="consultation-modal"
    >
      <Modal.Header closeButton>
        {currentStep !== 1 && currentStep !== 3 && (
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
            : currentStep === 2
              ? "Verify Email"
              : "Schedule Your Consultation"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        {currentStep !== 3 ? (
          // Original layout for steps 1 and 2
          <Row className="modal-row">
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

                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleModalFormSubmit}
                  >
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
                    <Form.Group className="border-0">
                      <Form.Control
                        type="tel"
                        placeholder="Mobile"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        minLength={10}
                        maxLength={10}
                        pattern="[0-9]{10}"
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
                        minLength={10}
                        maxLength={50}
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
                              className={`experience-option ${formData.lookingFor === option ? "selected" : ""
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
                                onChange={() => { }} // Handled by the onClick on parent div
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

                  <Form onSubmit={handleOtpSubmit}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your OTP "
                      value={otp}
                      onChange={handleOtpChange}
                      required
                      minLength={4}
                      maxLength={4}
                    />

                    <div className="text-center mb-4">
                      <div className="mb-2 text-content-secondary">
                        🔔 Didn't receive an OTP?
                      </div>
                      <Button
                        variant="link"
                        className="text-decoration-none p-0 text-content-primary-accent"
                      >
                        <div
                          className={`text-start bg-primar ${resendDisabled ? "resend-disabled" : "resend-enabled"
                            }`}
                          onClick={!resendDisabled ? handleResendOtp : undefined}
                        >
                          Resend OTP {resendDisabled ? `(${countdown}s)` : ""}
                        </div>
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
        ) : (
          // Calendly step with direct widget (no container)
          <div className="calendly-wrapper">
            <CalendlyInlineWidget />
          </div>
        )}
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