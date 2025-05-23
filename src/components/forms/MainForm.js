import React, { useEffect } from "react";
import { Form, Row, Col, Toast, ToastContainer } from "react-bootstrap";
import "./MainForm.css";
import useFormHandler from "../../../hooks/useFormHandler";
import FormRadioButton from "../../../components/buttons/from-radio-buttons/FormRadioButton";

// Toast notification component
const ToastMessage = ({
  showToast,
  onClose,
  toastVariant,
  status,
  successSound,
  errorSound,
}) => {
  useEffect(() => {
    if (showToast && (successSound || errorSound)) {
      const sound = new Audio(
        toastVariant === "success" ? successSound : errorSound
      );
      sound.play();
    }
  }, [showToast, toastVariant, successSound, errorSound]);

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

const MainFormComp = ({
  formTitle = "Let's Connect to Explore More!",
  formSubtitle = "Looking for Work Abroad, Study Abroad, Language & Test preparation?",
  initialValues = {},
  formOptions = {
    showExperience: false,
    showStudyLevel: false,
    showCountry: false,
    showPincode: true,
  },
  experienceOptions = [
    "Student",
    "0-1 Years",
    "1-3 Years",
    "3-5 Years",
    "5+ Years",
  ],
  studyLevelOptions = ["Bachelors", "Masters"],
  countryOptions = ["USA", "UK", "Germany", "Australia", "Europe"],
  successSound,
  errorSound,
  buttonText = "Book your free consultation",
  className = "",
}) => {
  const {
    formData,
    otp,
    otpVisible,
    showToast,
    toastVariant,
    status,
    resendDisabled,
    countdown,
    validated,
    handleInputChange,
    handleOptionSelect,
    handleSubmit,
    handleOtpChange,
    handleVerifyOtp,
    handleResendOtp,
    setShowToast,
  } = useFormHandler();

  useEffect(() => {
    // Set initial values when component mounts
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
        handleOptionSelect(key, initialValues[key]);
      });
    }
  }, []);

  // Handlers for different selection types
  const handleExperienceSelect = (option) => {
    handleOptionSelect("experience", option);
  };

  const handleStudyLevelSelect = (option) => {
    handleOptionSelect("lookingFor", option);
  };

  const handleCountrySelect = (option) => {
    handleOptionSelect("country", option);
  };

  return (
    <>
      <div className={`form-container ${className}`}>
        {formTitle && (
          <div
            className="subheading-small-medium text-center"
            style={{ marginBottom: "8px" }}
          >
            {formTitle}
          </div>
        )}

        {formSubtitle && (
          <div className="text-center paragraph-small-regular text-content-tertiary mb-3">
            {formSubtitle}
          </div>
        )}

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="" controlId="formName">
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
              required
              minLength={3}
              maxLength={40}
            />
          </Form.Group>

          <Form.Group className="" controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Row>
            <Col md={formOptions.showPincode ? 6 : 12} className="">
              <Form.Group controlId="formNumber">
                <Form.Control
                  type="tel"
                  placeholder="Mobile"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                />
              </Form.Group>
            </Col>
            {formOptions.showPincode && (
              <Col md={6} className="">
                <Form.Group controlId="formpincode">
                  <Form.Control
                    type="tel"
                    placeholder="Pin Code"
                    name="pincode"
                    value={formData.pincode || ""}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{6}"
                  />
                </Form.Group>
              </Col>
            )}
          </Row>

          {formOptions.showExperience && (
            <FormRadioButton
              label="Select Experience"
              options={experienceOptions}
              name="experience"
              value={formData.experience}
              onChange={handleExperienceSelect}
              controlId="formExperience"
              labelClassName="text-start paragraph-small-regular text-content-secondary"
              optionClassName="caption-regular text-content-secondary"
            />
          )}

          {formOptions.showStudyLevel && (
            <FormRadioButton
              label="Looking for ?"
              options={studyLevelOptions}
              name="studyLevel"
              value={formData.lookingFor}
              onChange={handleStudyLevelSelect}
              controlId="formStudyLevel"
              labelClassName="text-start paragraph-small-regular text-content-secondary"
              optionClassName="caption-regular text-content-secondary"
            />
          )}

          {formOptions.showCountry && (
            <FormRadioButton
              label="Country"
              options={countryOptions}
              name="country"
              value={formData.country}
              onChange={handleCountrySelect}
              controlId="formCountry"
              labelClassName="text-start paragraph-small-regular text-content-secondary"
              optionClassName="caption-regular text-content-secondary"
            />
          )}

          <div style={{ marginTop: "12px" }}></div>
          {otpVisible && (
            <Row className="mb-2">
              <Col lg={8}>
                <Form.Control
                  type="text"
                  placeholder="Enter OTP - Sent in mail"
                  value={otp}
                  onChange={handleOtpChange}
                  required
                />
                <div
                  className={`text-start ${
                    resendDisabled ? "resend-disabled" : "resend-enabled"
                  }`}
                  onClick={!resendDisabled ? handleResendOtp : undefined}
                >
                  🔔 Resend OTP {resendDisabled ? `(${countdown}s)` : ""}
                </div>
              </Col>
              <Col lg={4}>
                <button
                  className="btn-secondary w-100"
                  type="button"
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </button>
              </Col>
            </Row>
          )}

          <button className="btn-primary" type="submit">
            {buttonText}
          </button>
          <div
            className="text-center caption-regular text-content-secondary"
            style={{ marginTop: "8px" }}
          >
            By submitting this form, you agree to the Terms of Use and Privacy
            Policy
          </div>
        </Form>
      </div>

      <ToastContainer position="top-end" className="p-3">
        <ToastMessage
          showToast={showToast}
          onClose={() => setShowToast(false)}
          toastVariant={toastVariant}
          status={status}
          successSound={successSound}
          errorSound={errorSound}
        />
      </ToastContainer>
    </>
  );
};

export default MainFormComp;
