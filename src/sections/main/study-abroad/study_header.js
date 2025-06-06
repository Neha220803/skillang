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
import "../../../App.css";
import successSound from "../../../assets/sounds/success.mp3";
import errorSound from "../../../assets/sounds/rejected.mp3";
import useFormHandler from "../../../hooks/useFormHandler";
import "./study_header.css";
import FormRadioButton from "../../../components/buttons/from-radio-buttons/FormRadioButton";

const headerbg =
  "https://cms.skillang.com/uploads/headerimagebg_f6e0827d66.png";

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

const StudyAbroadHeader = () => {
  const {
    formData,
    setFormData,
    otp,
    otpVisible,
    showToast,
    toastVariant,
    status,
    resendDisabled,
    countdown,
    isOtpVerified,
    isOtpSent,
    validated,
    handleInputChange,
    handleExperienceSelect,
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
    handleOptionSelect("studyLevel", "-");
    handleOptionSelect("origin", "Study Abroad Header Page Form");
  }, []);

  const handleStudyLevelSelect = (option) => {
    handleOptionSelect("lookingFor", option);
  };

  // Handler for country selection
  const handleCountrySelect = (option) => {
    handleOptionSelect("country", option);
  };

  return (
    <header className="d-flex align-items-start justify-content-center">
      <Container className="bg-dar">
        <Row className="">
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
            className="d-flex align-items-start justify-content-center"
          >
            <Container className="d-flex align-items-center justify-content-center flex-column">
              <div className="form-container">
                <div
                  className="subheading-small-medium text-center"
                  style={{ marginBottom: "8px" }}
                >
                  Let's Connect to Explore More!
                </div>
                <div className="text-center paragraph-small-regular text-content-tertiary mb-2">
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
                    <Col md={6} className="pe-md-0">
                      <Form.Group controlId="formNumber">
                        <Form.Control
                          type="tel"
                          placeholder="Mobile"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          maxLength={10}
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

                  {/* Using our reusable FormRadioButton component for Study Level */}
                  <FormRadioButton
                    label="Looking for ?"
                    options={["Bachelors", "Masters"]}
                    name="studyLevel"
                    value={formData.lookingFor}
                    onChange={handleStudyLevelSelect}
                    controlId="formStudyLevel"
                    labelClassName="text-start paragraph-small-regular text-content-secondary"
                    optionClassName="caption-regular text-content-secondary"
                  />

                  {/* Using our reusable FormRadioButton component for Country */}
                  <FormRadioButton
                    label="Country"
                    options={["USA", "UK", "Germany", "Australia", "Europe"]}
                    name="country"
                    value={formData.country}
                    onChange={handleCountrySelect}
                    controlId="formCountry"
                    labelClassName="text-start paragraph-small-regular text-content-secondary"
                    optionClassName="caption-regular text-content-secondary"
                  />

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

export default StudyAbroadHeader;
