import React, { useState, useEffect } from "react";
import { Modal, Row, Col, Form, Button, ToastContainer } from "react-bootstrap";
import "./LeadFormCalendly.css";
import consultationImage from "../../../../assets/images/reusable/consult-popup.jpg";
import useFormHandler from "../../../../hooks/useFormHandler";
import ToastMessage from "../../../../utils/toast";

// Updated component that uses Calendly Popup Widget instead of Inline Widget
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

  // Load Calendly script on component mount
  useEffect(() => {
    // Check if Calendly script is already loaded
    if (!document.getElementById("calendly-script")) {
      // Create script element for Calendly
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        console.log("Calendly script loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load Calendly script");
      };
      document.body.appendChild(script);
    }

    // Add Calendly stylesheet for direct integration
    if (!document.getElementById("calendly-stylesheet")) {
      const link = document.createElement("link");
      link.id = "calendly-stylesheet";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    // Clean up function - we don't remove the script to avoid issues if
    // other components use Calendly
    return () => {};
  }, []);

  // Add this useEffect to change steps after form validation
  useEffect(() => {
    if (formIsValid && isOtpSent) {
      setCurrentStep(2);
    }
  }, [formIsValid, isOtpSent]);

  // Add this useEffect to handle OTP verification success
  useEffect(() => {
    if (isOtpVerified) {
      console.log("OTP verified successfully, showing Calendly button");
      setCurrentStep(3);
    }
  }, [isOtpVerified]);

  // Function to open Calendly popup
  const openCalendlyPopup = () => {
    // Make sure Calendly is loaded by checking at interval
    const maxAttempts = 10;
    let attempts = 0;

    const tryOpenCalendly = () => {
      attempts++;
      console.log(`Attempt ${attempts} to open Calendly`);

      if (window.Calendly) {
        // Calendly is loaded, open the popup
        console.log("Opening Calendly popup");

        // Initialize Calendly - IMPORTANT: Don't close modal immediately
        window.Calendly.initPopupWidget({
          url: "https://calendly.com/skillang/20min",
          // Optional settings
          prefill: {
            name: formData.name,
            email: formData.email,
            customAnswers: {
              a1: formData.phone,
              a2: formData.lookingFor,
            },
          },
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "#3f62b0", // Adjust to your primary brand color
        });

        // Only close modal after a brief delay to ensure Calendly popup is properly initialized
        setTimeout(() => {
          console.log("Closing modal after Calendly popup initialization");
          handleClose();
        }, 500);
      } else if (attempts < maxAttempts) {
        // Calendly not loaded yet, try again after a short delay
        console.log("Calendly not loaded yet, trying again...");
        setTimeout(tryOpenCalendly, 500);
      } else {
        // Max attempts reached, show error
        console.error("Failed to load Calendly after multiple attempts");
        setShowToast(true);
        status.current = {
          message: "Unable to load scheduling system. Please try again later.",
          title: "Error",
        };
        toastVariant.current = "danger";
      }
    };

    // Start trying to open Calendly
    tryOpenCalendly();
  };

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
      dialogClassName="modal-90w"
      size="lg"
      aria-labelledby="consultation-modal"
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
        <Modal.Title className="subheading-medium">
          {currentStep === 1 ? "Book a Free Consultation" : "Verify Email"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
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
            ) : currentStep === 2 ? (
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
                        className={`text-start bg-primar ${
                          resendDisabled ? "resend-disabled" : "resend-enabled"
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
            ) : (
              /* Step 3: Calendly Button/Link */
              <>
                <div className="text-center">
                  <div className="subheading-big-medium mb-3">
                    You're Almost There!
                  </div>
                  <p className="paragraph-small-medium text-content-secondary mb-4">
                    Thank you for verifying your email. Click the button below
                    to schedule your consultation with one of our experts.
                  </p>

                  <div className="d-grid gap-3">
                    {/* Alternative: Use Calendly popup if available */}
                    <Button
                      className="btn-outline-primary py-2"
                      onClick={() => {
                        console.log("Attempting to open Calendly popup");
                        if (
                          window.Calendly &&
                          typeof window.Calendly.initPopupWidget === "function"
                        ) {
                          window.Calendly.initPopupWidget({
                            url: "https://calendly.com/skillang/20min",
                            prefill: {
                              name: formData.name,
                              email: formData.email,
                              customAnswers: {
                                a1: formData.phone,
                                a2: formData.lookingFor,
                              },
                            },
                          });
                          setTimeout(() => handleClose(), 500);
                        } else {
                          console.error(
                            "Calendly popup function not available"
                          );
                          // Fallback to opening in new tab
                          window.open(
                            `https://calendly.com/skillang/20min?name=${encodeURIComponent(
                              formData.name
                            )}&email=${encodeURIComponent(
                              formData.email
                            )}&a1=${encodeURIComponent(
                              formData.phone
                            )}&a2=${encodeURIComponent(
                              formData.lookingFor || ""
                            )}`,
                            "_blank"
                          );
                          setTimeout(() => handleClose(), 500);
                        }
                      }}
                    >
                      Schedule Your Consultation
                    </Button>
                  </div>
                </div>
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
