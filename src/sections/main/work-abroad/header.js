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
import headerbg from "../../../assets/images/work-abroad/workAbroadMainBg.jpg";
import successSound from "../../../assets/sounds/success.mp3";
import errorSound from "../../../assets/sounds/rejected.mp3";
import useFormHandler from "../../../hooks/useFormHandler";
import FormRadioButton from "../../../components/buttons/from-radio-buttons/FormRadioButton";

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

const WorkAbroadHeader = () => {
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
    handleSubmit,
    handleOtpChange,
    handleVerifyOtp,
    handleResendOtp,
    setOtp,
    setShowToast,
  } = useFormHandler();
  formData.lookingFor = "Work Abroad";
  formData.county = "-";
  formData.origin = "Work Abroad Page Form";
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
            className="d-flex align-items-start justify-content-center "
          >
            <Container className="d-flex align-items-start justify-content-center flex-column ">
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
                          pattern="[0-9]{6}"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Using our reusable FormRadioButton component */}
                  <FormRadioButton
                    label="Experience"
                    options={[
                      "Student",
                      "0-1 Years",
                      "1-3 Years",
                      "3-5 Years",
                      "5+ Years",
                    ]}
                    name="experience"
                    value={formData.experience}
                    onChange={handleExperienceSelect}
                    controlId="formExperience"
                    labelClassName="text-start paragraph-small-regular text-content-secondary"
                    optionClassName="caption-regular text-content-secondary"
                  />

                  {otpVisible && (
                    <Row className="">
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
                          type="button"
                          onClick={handleVerifyOtp}
                        >
                          Verify OTP
                        </button>
                      </Col>
                    </Row>
                  )}

                  <button className="btn-primary mt-3" type="submit">
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

export default WorkAbroadHeader;
