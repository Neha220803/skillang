import React, { useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Image,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import "../../../index.css";
import "./home-header.css";
import "../../../App.css";
import headerbg from "../../../assets/images/home/header-bg1.jpg";
import successSound from "../../../assets/sounds/success.mp3";
import errorSound from "../../../assets/sounds/rejected.mp3";
import useFormHandler from "../../../hooks/useFormHandler";

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

  useEffect(() => {
    // Only set these values once on component mount
    handleOptionSelect("experience", "-");
    handleOptionSelect("county", "-");
    handleOptionSelect("studyLevel", "-");
    handleOptionSelect("origin", "Home Page Form");
  }, []);

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

  // Conditional rendering helper functions
  const showExperienceOptions = () => {
    return (
      formData.lookingFor === "Nursing" || formData.lookingFor === "Work Abroad"
    );
  };

  const showStudyLevelOptions = () => {
    return formData.lookingFor === "Study Abroad";
  };

  const showCountryOptions = () => {
    return formData.lookingFor === "Study Abroad";
  };

  return (
    <header className="d-flex align-items-center justify-content-center mt-lg-5 m-0 px-2 bg-primar">
      <Container className="bg-dar">
        <Row className="mt-lg-0 pt-lg-0 mt-5 pt-5">
          <Col
            lg={7}
            md={5}
            sm={12}
            xs={12}
            className="d-flex flex-column align-items-start justify-content-center "
          >
            <Image src={headerbg} fluid className="w-100" />
          </Col>
          <Col lg={1} className="d-none d-md-block"></Col>
          <Col
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className="d-flex align-items-start justify-content-center mt-3 p-0 mt-lg-0"
          >
            <div className="d-flex align-items-center justify-content-center flex-column">
              <div className="form-container">
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
                  <Form.Group className="" controlId="formName">
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
                  <Form.Group className="" controlId="formEmail">
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
                  <Row>
                    <Col md={6} className="">
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
                    <Col md={6} className="">
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
                  <Form.Group className="" controlId="formLookingFor">
                    <Form.Label className="text-start paragraph-small-regular text-content-secondary">
                      Looking For ?
                    </Form.Label>
                    <div className="d-flex gap-2 flex-wrap">
                      {[
                        "Nursing",
                        "Study Abroad",
                        "Work Abroad",
                        "Test & Language Prep",
                      ].map((option, index) => (
                        <div
                          key={index}
                          className={`experience-option ${
                            formData.lookingFor === option ? "selected" : ""
                          }`}
                          onClick={() => handleLookingForSelect(option)}
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
                      ))}
                    </div>
                  </Form.Group>

                  {/* Conditional Experience Options for Nursing and Work Abroad */}
                  {showExperienceOptions() && (
                    <Form.Group className="" controlId="formExperience">
                      <Form.Label className="text-start paragraph-small-regular text-content-secondary">
                        Experience
                      </Form.Label>
                      <div className="d-flex gap-2 flex-wrap">
                        {["0-2 yrs", "2-5 Yrs", "5+ Yrs"].map(
                          (option, index) => (
                            <div
                              key={index}
                              className={`experience-option ${
                                formData.experience === option ? "selected" : ""
                              }`}
                              onClick={() => handleExperienceSelect(option)}
                            >
                              <label className="w-100 caption-regular text-content-secondary">
                                {option}
                              </label>
                              <input
                                type="radio"
                                id={`experience-${index}`}
                                name="experience"
                                value={option}
                                checked={formData.experience === option}
                                onChange={() => {}} // Handled by the onClick on parent div
                                hidden
                              />
                            </div>
                          )
                        )}
                      </div>
                    </Form.Group>
                  )}

                  {/* Conditional Study Level Options for Study Abroad */}
                  {showStudyLevelOptions() && (
                    <Form.Group className="" controlId="formStudyLevel">
                      <Form.Label className="text-start paragraph-small-regular text-content-secondary">
                        Looking for
                      </Form.Label>
                      <div className="d-flex gap-2 flex-wrap">
                        {["Bachelors", "Masters"].map((option, index) => (
                          <div
                            key={index}
                            className={`experience-option ${
                              formData.studyLevel === option ? "selected" : ""
                            }`}
                            onClick={() => handleStudyLevelSelect(option)}
                          >
                            <label className="w-100 caption-regular text-content-secondary">
                              {option}
                            </label>
                            <input
                              type="radio"
                              id={`study-level-${index}`}
                              name="studyLevel"
                              value={option}
                              checked={formData.studyLevel === option}
                              onChange={() => {}} // Handled by the onClick on parent div
                              hidden
                            />
                          </div>
                        ))}
                      </div>
                    </Form.Group>
                  )}

                  {/* Conditional Country Options for Study Abroad */}
                  {showCountryOptions() && (
                    <Form.Group className="" controlId="formCountry">
                      <Form.Label className="text-start paragraph-small-regular text-content-secondary">
                        Country
                      </Form.Label>
                      <div className="d-flex gap-2 flex-wrap">
                        {["USA", "UK", "Germany", "Australia", "Europe"].map(
                          (option, index) => (
                            <div
                              key={index}
                              className={`experience-option ${
                                formData.country === option ? "selected" : ""
                              }`}
                              onClick={() => handleCountrySelect(option)}
                            >
                              <label className="w-100 caption-regular text-content-secondary">
                                {option}
                              </label>
                              <input
                                type="radio"
                                id={`country-${index}`}
                                name="country"
                                value={option}
                                checked={formData.country === option}
                                onChange={() => {}} // Handled by the onClick on parent div
                                hidden
                              />
                            </div>
                          )
                        )}
                      </div>
                    </Form.Group>
                  )}
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
                            className={`text-start bg-primar ${
                              resendDisabled
                                ? "resend-disabled"
                                : "resend-enabled"
                            }`}
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

                    <button className="btn-primary " type="submit">
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
            </div>
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
