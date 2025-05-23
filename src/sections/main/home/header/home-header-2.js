import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Image,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import "../../../../index.css";
import "../../../../App.css";
import successSound from "../../../../assets/sounds/success.mp3";
import errorSound from "../../../../assets/sounds/rejected.mp3";
import useFormHandler from "../../../../hooks/useFormHandler";
import FormRadioButton from "../../../../components/buttons/from-radio-buttons/FormRadioButton";

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

const HomeHeader2 = () => {
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

  // State to track if specific containers should be rendered
  const [displayExperience, setDisplayExperience] = useState(false);
  const [displayStudyLevel, setDisplayStudyLevel] = useState(false);
  const [displayCountry, setDisplayCountry] = useState(false);

  useEffect(() => {
    // Set default values but don't show the conditional fields initially
    handleOptionSelect("experience", "-");
    handleOptionSelect("county", "-");
    handleOptionSelect("studyLevel", "-");
    handleOptionSelect("origin", "Home Page Form");

    // Initialize lookingFor to empty to avoid showing any conditional fields
    handleOptionSelect("lookingFor", "");
  }, []);

  // Update the display states when lookingFor changes
  useEffect(() => {
    setDisplayExperience(
      formData.lookingFor === "Nursing" || formData.lookingFor === "Work Abroad"
    );

    const isStudyAbroad = formData.lookingFor === "Study Abroad";
    setDisplayStudyLevel(isStudyAbroad);
    setDisplayCountry(isStudyAbroad);
  }, [formData.lookingFor]);

  // Handler for the looking-for selection with direct label click
  const handleLookingForSelect = (option) => {
    handleOptionSelect("lookingFor", option);
  };

  // Handler for experience level selection
  const handleExperienceSelect = (option) => {
    handleOptionSelect("experience", option);
  };

  // Handler for study level selection
  const handleStudyLevelSelect = (option) => {
    handleOptionSelect("studyLevel", option);
  };

  // Handler for country selection
  const handleCountrySelect = (option) => {
    handleOptionSelect("country", option);
  };

  return (
    <header className="d-flex align-items-start justify-content-center">
      <Container>
        <Row>
          {/* Left column with fixed image - Always aligned at the top */}
          <Col lg={7} md={5} sm={12} xs={12} className="align-self-start">
            <div className="">
              <Image
                src="https://cms.skillang.com/uploads/header_bg1_1b4c8fe074.jpg"
                fluid
                className="w-100"
              />
            </div>
          </Col>
          <Col lg={1} className="d-none d-md-block"></Col>
          <Col
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className="d-flex align-items-start justify-content-center"
          >
            <Container className="d-flex align-items-center justify-content-center flex-column">
              <div className="form-container m-0">
                <div
                  className="subheading-small-medium text-center"
                  style={{ marginBottom: "8px" }}
                >
                  Let's Connect to Explore More!
                </div>
                <div className="text-center paragraph-small-regular text-content-tertiary mb-3">
                  Looking for Work Abroad, Study Abroad, Language & Test
                  preparation?
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      minLength={3}
                      maxLength={40}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      minLength={6}
                      maxLength={50}
                    />
                  </Form.Group>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formNumber">
                        <Form.Control
                          type="tel"
                          placeholder="Mobile"
                          name="phone"
                          value={formData.phone}
                          maxLength={10}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{10}"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formpincode">
                        <Form.Control
                          type="tel"
                          placeholder="Pin Code"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          maxLength={6}
                          pattern="[0-9]{6}"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Using our reusable FormRadioButton component */}
                  <div className="mb-3">
                    <FormRadioButton
                      label="Looking For ?"
                      options={[
                        "Nursing",
                        "Study Abroad",
                        "Work Abroad",
                        "Test & Language Prep",
                      ]}
                      name="lookingFor"
                      value={formData.lookingFor}
                      onChange={handleLookingForSelect}
                      controlId="formLookingFor"
                    />
                  </div>

                  {/* Fixed height container for conditional fields to prevent layout shifts */}
                  <div style={{ minHeight: "0px" }}>
                    {/* Conditional Experience Options for Nursing and Work Abroad */}
                    {displayExperience && (
                      <div className="mb-3">
                        <FormRadioButton
                          label="Experience"
                          options={["0-2 yrs", "2-5 Yrs", "5+ Yrs"]}
                          name="experience"
                          value={formData.experience}
                          onChange={handleExperienceSelect}
                          controlId="formExperience"
                        />
                      </div>
                    )}

                    {/* Conditional Study Level Options for Study Abroad */}
                    {displayStudyLevel && (
                      <div className="mb-3">
                        <FormRadioButton
                          label="Looking for ?"
                          options={["Bachelors", "Masters"]}
                          name="studyLevel"
                          value={formData.studyLevel}
                          onChange={handleStudyLevelSelect}
                          controlId="formStudyLevel"
                        />
                      </div>
                    )}

                    {/* Conditional Country Options for Study Abroad */}
                    {displayCountry && (
                      <div className="mb-3">
                        <FormRadioButton
                          label="Country"
                          options={[
                            "USA",
                            "UK",
                            "Germany",
                            "Australia",
                            "Europe",
                          ]}
                          name="country"
                          value={formData.country}
                          onChange={handleCountrySelect}
                          controlId="formCountry"
                        />
                      </div>
                    )}
                  </div>

                  <div style={{ marginTop: "12px" }}>
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
                              resendDisabled ? "text-muted" : "text-primary"
                            }`}
                            style={{
                              cursor: resendDisabled
                                ? "not-allowed"
                                : "pointer",
                              fontSize: "0.875rem",
                              marginTop: "0.25rem",
                            }}
                            onClick={
                              !resendDisabled ? handleResendOtp : undefined
                            }
                          >
                            🔔 Resend OTP{" "}
                            {resendDisabled ? `(${countdown}s)` : ""}
                          </div>
                        </Col>
                        <Col lg={4}>
                          <button
                            className="btn-secondary w-100"
                            onClick={handleVerifyOtp}
                          >
                            Verify OTP
                          </button>
                        </Col>
                      </Row>
                    )}

                    <button className="btn-primary w-100" type="submit">
                      Book your free consultation
                    </button>
                    <div
                      className="text-center caption-regular text-content-secondary"
                      style={{ marginTop: "8px" }}
                    >
                      By submitting this form, you agree to the Terms of Use and
                      Privacy Policy
                    </div>
                  </div>
                </Form>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-end" className="p-3">
        <ToastMessage
          showToast={showToast}
          onClose={() => setShowToast(false)}
          toastVariant={toastVariant}
          status={status}
        />
      </ToastContainer>
    </header>
  );
};

export default HomeHeader2;
