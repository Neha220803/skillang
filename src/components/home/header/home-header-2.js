import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form, Image, Toast, ToastContainer } from "react-bootstrap";
import axios from "axios";
import "../home-page.css";
import "../../../index.css";
import "./home-header.css";
import "../../../App.css";
import headerbg from "../../../assets/images/home/header-bg1.svg";
import successSound from '../../../assets/sounds/success.mp3';
import errorSound from '../../../assets/sounds/rejected.mp3';
import useFormHandler from "../../../hooks/useFormHandler";


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
  formData.experience="Not Applicable (Home Page Form)"
  formData.county="Not Applicable (Home Page Form)";

  return (
    <header className="d-flex align-items-center justify-content-center my-lg-5 m-0 px-2" id="home">
      <Container className="my-lg-0">
        <Row className="mt-lg-0 pt-lg-0 mt-5 pt-5"> {/* Remove gutter spacing */}
  <Col lg={8} md={5} sm={12} xs={12} className="d-flex flex-column align-items-start justify-content-center p-lg-5 p-0">
    <Image src={headerbg} fluid className="w-100 px-lg-2" />
  </Col>

          <Col lg={4} md={6} sm={12} xs={12} className="d-flex align-items-center justify-content-center mt-3 p-0 mt-lg-0">
            <Container className="d-flex align-items-start justify-content-center flex-column p-lg-3 p-0">
              <div className="form-container m-0">
                <h3>Let's Connect to Explore More!</h3>
                <div className="mb-3">Looking for Work Abroad, Study Abroad, Language & Test preparation?</div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} required minLength={3} maxLength={40} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} required />
                  </Form.Group>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formNumber">
                        <Form.Control type="tel" placeholder="Mobile" name="phone" value={formData.phone} onChange={handleInputChange} required pattern="[0-9]{10}" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formpincode">
                        <Form.Control type="tel" placeholder="Pin Code" name="pincode" value={formData.pincode} onChange={handleInputChange} required pattern="[0-9]{6}" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="formLookingFor">
                    <Form.Select name="lookingFor" value={formData.lookingFor} onChange={handleInputChange} required>
                      <option value="">Looking For?</option>
                      <option value="Nursing">Nursing</option>
                      <option value="Work Abroad">Work Abroad</option>
                      <option value="Study Abroad">Study Abroad</option>
                      <option value="Language Prep">Language & Test Prep</option>
                    </Form.Select>
                  </Form.Group>

                  {otpVisible && (
                    <Row className="mb-3">
                      <Col lg={8}>
                        <Form.Control type="text" placeholder="Enter OTP - Sent in mail" value={otp} onChange={handleOtpChange} required />
                        <div className={`text-start ${resendDisabled ? "resend-disabled" : "resend-enabled"}`} onClick={!resendDisabled ? handleResendOtp : undefined}>
                          🔔 Resend OTP {resendDisabled ? `(${countdown}s)` : ""}
                        </div>
                      </Col>
                      <Col lg={4}>
                        <button className="btn-secondary w-100" type="button" onClick={handleVerifyOtp}>Verify OTP</button>
                      </Col>
                    </Row>
                  )}

                  <button className="btn-primary mt-3" type="submit">Book your free consultation</button>
                  <div className="text-center">By submitting this form, you agree to the Terms of Use and Privacy Policy</div>
                </Form>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-end" className="p-3">
        <ToastMessage showToast={showToast} onClose={() => setShowToast(false)} toastVariant={toastVariant} status={status} />
      </ToastContainer>
    </header>
  );
};

export default HomeHeader2;
