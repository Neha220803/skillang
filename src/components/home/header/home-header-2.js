import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form, Image, Toast, ToastContainer, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import "../home-page.css";
import "../../../index.css";
import "./home-header.css";
import "../../../App.css";
import headerbg from "../../../assets/images/home/header-bg1.svg";
import successSound from '../../../assets/sounds/success.mp3';
import errorSound from '../../../assets/sounds/rejected.mp3';

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
      style={{ position: "fixed", top: 20, right: 20, zIndex: 9999, minWidth: "300px" }}
    >
      <Toast.Header closeButton className={`bg-${toastVariant} text-white`}>
        <strong className="me-auto">🔔 Skillang</strong>
      </Toast.Header>
      <Toast.Body>{status}</Toast.Body>
    </Toast>
  );
};

const HomeHeader2 = () => {
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastVariant, setToastVariant] = useState("success");
  const [status, setStatus] = useState("");
  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(30);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    pinCode: "",
    lookingFor: "",
  });

  useEffect(() => {
    let timer;
    if (resendDisabled && otpVisible) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendDisabled, otpVisible]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSendOtp = async () => {
    setSendingOtp(true);
    try {
      const response = await axios.post("http://localhost:3001/send-otp", { email: formData.email });

      if (response.data.success) {
        setOtpVisible(true);
        setResendDisabled(true);
        setCountdown(30);
        setStatus("🔔 OTP sent to your email!");
        setToastVariant("info");
      } else {
        setStatus("❌ Failed to send OTP. Try again.");
        setToastVariant("danger");
      }
    } catch (error) {
      console.error("OTP Request Error:", error);
      setStatus("❌ Error sending OTP. Check the server.");
      setToastVariant("danger");
    }
    setSendingOtp(false);
    setShowToast(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpVisible) {
      handleSendOtp();
      return;
    }
    if (!isOtpVerified) {
      setStatus("❌ Please verify OTP before submitting.");
      setToastVariant("danger");
      setShowToast(true);
      return;
    }

    setSubmitting(true);
    try {
      const response = await axios.post("http://localhost:3001/submit-inquiry", formData);
      setStatus(response.data.message);
      setToastVariant("success");

      // Reset the form after successful submission
      setFormData({ name: "", email: "", number: "", pinCode: "", lookingFor: "" });
      setOtp("");
      setOtpVisible(false);
      setIsOtpVerified(false);
    } catch (error) {
      setStatus("❌ Error submitting inquiry. Try again.");
      setToastVariant("danger");
    }
    setSubmitting(false);
    setShowToast(true);
  };

  const handleVerifyOtp = async () => {
    setVerifyingOtp(true);
    try {
      const response = await axios.post("http://localhost:3001/verify-otp", {
        email: formData.email,
        otp: otp.trim(),
      });

      if (response.data.success) {
        setIsOtpVerified(true);
        setStatus("✅ OTP verified! You can submit now.");
        setToastVariant("success");
      } else {
        setStatus("❌ Invalid OTP. Try again.");
        setToastVariant("danger");
      }
    } catch (error) {
      setStatus("❌ Error verifying OTP. Try again.");
      setToastVariant("danger");
    }
    setVerifyingOtp(false);
    setShowToast(true);
  };

  return (
    <header className="d-flex align-items-center justify-content-center pt-5" id="home">
      <Container className="my-lg-0 mt-5">
        <Row>
          <Col lg={7} className="d-flex flex-column align-items-start justify-content-center">
            <Image src={headerbg} fluid />
          </Col>
          <Col lg={5} className="d-flex align-items-center justify-content-start">
            <Container className="p-3">
              <div className="form-container">
                <h3>Let's Connect to Explore More!</h3>
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className="mb-3"><Form.Control type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} required /></Form.Group>
                  <Form.Group className="mb-3"><Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} required /></Form.Group>
                  <Form.Group className="mb-3"><Form.Control type="tel" placeholder="Mobile" name="number" value={formData.number} onChange={handleInputChange} required /></Form.Group>
                  <Form.Group className="mb-3"><Form.Control type="text" placeholder="Pin code" name="pinCode" value={formData.pinCode} onChange={handleInputChange} required /></Form.Group>
                  <Form.Group className="mb-3"><Form.Select name="lookingFor" value={formData.lookingFor} onChange={handleInputChange} required><option value="">Looking For?</option><option value="Nursing">Nursing</option><option value="Work Abroad">Work Abroad</option><option value="Study Abroad">Study Abroad</option><option value="Language Prep">Language & Test Prep</option></Form.Select></Form.Group>

                  {otpVisible && (
                    <Row className="mb-3">
                      <Col lg={6}><Form.Control type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required /></Col>
                      <Col lg={3}><Button variant="secondary" onClick={handleVerifyOtp} disabled={!otp || verifyingOtp}>{verifyingOtp ? <Spinner size="sm" /> : "Verify OTP"}</Button></Col>
                      <Col lg={3}><Button variant="outline-secondary" onClick={handleSendOtp} disabled={sendingOtp}>{sendingOtp ? <Spinner size="sm" /> : "Resend OTP"}</Button></Col>
                    </Row>
                  )}

                  <Button variant="primary" type="submit" disabled={submitting}>{submitting ? <Spinner size="sm" /> : "Book your free consultation"}</Button>
                </Form>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-end"><ToastMessage showToast={showToast} onClose={() => setShowToast(false)} toastVariant={toastVariant} status={status} /></ToastContainer>
    </header>
  );
};

export default HomeHeader2;
