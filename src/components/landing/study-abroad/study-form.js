import React, { useState, useEffect } from "react";
import { Container, Col, Button, Row, Form, Image, Toast, ToastContainer, Carousel } from "react-bootstrap";
import axios from "axios";
import studyImage1 from "../../../assets/images/landing/study-1.png"; // Replace with your image path
import successSound from '../../../assets/sounds/success.mp3';
import errorSound from '../../../assets/sounds/rejected.mp3';
import '../../../index.css';
import useFormHandler from "../../../hooks/useFormHandler";
import './study-form.css';


const ToastMessage = ({ showToast, onClose, toastVariant, status }) => {
  useEffect(() => {
    if (showToast) {
      const sound = new Audio(toastVariant === "success" ? successSound : errorSound);
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


const StudyForm = () => {

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
formData.lookingFor="Study Aborad"; 
  return (
    
    <header className="d-flex justify-content-center align-items-center ">
      <Container className="d-flex justify-content-center align-items-end pt-5 pt-lg-0 my-5 m-lg-0">
        <Row className=" justify-content-center align-items-center mt-2 ">
          {/* <Col lg={1} md={1} className="d-none d-md-block "></Col> */}
          <Col lg={12} md={12} sm={12} xs={12} className="d-flex justify-content-center align-items-center mt-lg-5">
            <div className="nurse-landing-card">
              <Row className=" d-flex justify-content-center align-items-center ">
                <Col md={6} lg={6} sm={12} xs={12} className="justify-content-start align-items-center ">
                  <div className="nurse-img-carousel">
                    <Carousel interval={2500} controls={false} style={{ minHeight: "45vh" }}>
                      <Carousel.Item>
                        <Image fluid src={studyImage1} alt="Slide 1" style={{ minHeight: "45vh", objectFit: "cover" }} />
                        <Carousel.Caption>
                          <p>One-to-One Visa Assistance</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image fluid src={studyImage1} alt="Slide 2" style={{ minHeight: "45vh", objectFit: "cover" }} />
                        <Carousel.Caption>
                          <p>One-to-One Visa Assistance</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image fluid src={studyImage1} alt="Slide 3" style={{ minHeight: "45vh", objectFit: "cover" }} />
                        <Carousel.Caption>
                          <p>One-to-One Visa Assistance</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>

                  </div>
                </Col>
                {/* Right Side - Form */}
                <Col md={6} lg={6} sm={12} xs={12}  className="text-center ">
                  <div className="subheading-big-medium text-content-primary mt-2 m-0 p-0 my-lg-2">Start Your Study Abroad Journey</div>
                  <div className="mb-3 paragraph-small-medium text-content-secondary py-2">Tell Us About Yourself!</div>
                  <Form validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        // isInvalid={!!errors.name}
                        required minLength={3} maxLength={40}
                      />
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        // isInvalid={!!errors.email}
                        required
                      />
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    <Row>
                      <Col lg={6} className="mb-3">
                        <Form.Group>
                          <Form.Control
                            type="tel"
                            placeholder="Mobile"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            // isInvalid={!!errors.phone}
                            required pattern="[0-9]{10}"
                          />
                          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col lg={6} className="mb-3">
                        <Form.Group>
                          <Form.Control
                            type="text"
                            placeholder="Pin code"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            // isInvalid={!!errors.pincode}
                            required pattern="[0-9]{6}"
                          />
                          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3 text-start">
                      <Form.Label>Looking For?</Form.Label>
                      <div className="d-flex gap-2 flex-wrap">
                        {["Bachelors", "Masters"].map((option, index) => (
                          <div key={index} className={`experience-option ${formData.experience === option ? "selected" : ""}`}>
                            <input
                              type="radio"
                              id={`experience-${index}`}
                              name="experience"
                              value={option}
                              checked={formData.experience === option}
                              onChange={(e) => handleExperienceSelect(e.target.value)}
                              hidden
                            />
                            <label htmlFor={`experience-${index}`} className="w-100">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </Form.Group>

                    {/* Experience Selection */}
                    <Form.Group className="mb-3 text-start">
                      <Form.Label>Country</Form.Label>
                      <div className="d-flex gap-2 flex-wrap">
                        {["USA", "UK", "Germany", "Australia", "Europe"].map((option, index) => (
                          <div key={index} className={`experience-option ${formData.experience === option ? "selected" : ""}`}>
                            <input
                              type="radio"
                              id={`experience-${index}`}
                              name="experience"
                              value={option}
                              checked={formData.experience === option}
                              onChange={(e) => handleExperienceSelect(e.target.value)}
                              hidden
                            />
                            <label htmlFor={`experience-${index}`} className="w-100">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </Form.Group>

                    {otpVisible && (
                      <Row className="mb-3">
                        <Col lg={8}>
                          <Form.Group controlId="otp">
                           
                            <Form.Control
                              type="text"
                              name="otp"
                              value={otp}
                              placeholder="Enter OTP - Sent in mail" 
                              onChange={handleOtpChange}  // Ensure this function is properly passed
                              disabled={!otpVisible}      // OTP input should only be enabled when visible
                            />
                          </Form.Group>

                          <div className={`text-start ${resendDisabled ? "resend-disabled" : "resend-enabled"}`} onClick={!resendDisabled ? handleResendOtp : undefined}>
                            🔔 Resend OTP {resendDisabled ? `(${countdown}s)` : ""}
                          </div>
                        </Col>
                        <Col lg={4}>
                          <button className="btn-secondary w-100" type="button" onClick={handleVerifyOtp}>Verify OTP</button>
                        </Col>
                      </Row>
                    )}


                    {/* Book Free Consultation Button */}
                    <Button variant="primary" className="w-100" type="submit">
                      Book a Free Consultation
                    </Button>

                    {/* Terms and Privacy Policy */}
                    <div className="mt-2 text-muted text-center" style={{ fontSize: "12px" }}>
                      By submitting this form, you agree to the <a href="#" className="text-decoration-none">Terms of Use</a> and <a href="#" className="text-decoration-none">Privacy Policy</a>.
                    </div>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
          {/* <Col lg={1} md={1} className="d-none d-md-block"></Col> */}
        </Row>
      </Container>
      <ToastContainer position="top-end" className="p-3">
        <ToastMessage showToast={showToast} onClose={() => setShowToast(false)} toastVariant={toastVariant} status={status} />
      </ToastContainer>
    </header>
  );
};

export default StudyForm;
