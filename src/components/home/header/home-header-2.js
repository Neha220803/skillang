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
  const [validated, setValidated] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastVariant, setToastVariant] = useState("success");
  const [status, setStatus] = useState("");
  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(30);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // ✅ Corrected key to match backend
    pincode: "",
    lookingFor: "",
  });


  // Countdown logic for Resend OTP
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      if (!isOtpSent) {
        // Step 1: Send OTP only once
        sendFormData();
        setOtpVisible(true);
        setResendDisabled(true);
        setCountdown(30);
        setIsOtpSent(true);
        setStatus("📩 OTP has been sent to your mail!");
        setToastVariant("info");
        setShowToast(true);
        return;
      }

      if (!isOtpVerified) {
        // Step 2: Ensure OTP is verified before proceeding
        setStatus("❌ Please verify the OTP before submitting.");
        setToastVariant("danger");
        setShowToast(true);
        return;
      }

      // Step 3: If OTP is verified, submit the inquiry
      submitInquiry();
    }

    setValidated(true);
  };

  const submitInquiry = async () => {
    try {
      const requestData = {
        name: formData.name,  // ✅ Match backend's expected field names
        email: formData.email,
        phone: formData.phone, // ✅ Use `phone` instead of `number`
        pincode: formData.pincode,
        lookingFor: formData.lookingFor,
      };


      console.log("📤 Sending request to Google Sheets with data:", requestData);

      const response = await axios.post("https://skillang.com/api/submit-to-google-sheets", requestData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("✅ Response received:", response.data);

      setStatus(response.data.message || "✅ Inquiry submitted successfully!");
      setToastVariant("success");
      setShowToast(true);
    } catch (error) {
      console.error("❌ Error submitting inquiry:", error);

      if (error.response) {
        console.error("🔴 Server responded with:", error.response.data);
        console.error("🔴 Status code:", error.response.status);
        console.error("🔴 Headers:", error.response.headers);
      } else if (error.request) {
        console.error("🔴 No response received from the server:", error.request);
      } else {
        console.error("🔴 Request error:", error.message);
      }

      setStatus("❌ Error submitting inquiry. Please try again.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };


  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(`https://skillang.com/api/verify-otp`, {
        email: formData.email,
        otp: otp.trim(),
      });

      if (response.data.success) {
        setIsOtpVerified(true);
        setStatus("✅ OTP verified successfully!");
        setToastVariant("success");
      } else {
        setStatus("❌ Invalid OTP. Please check and enter the correct OTP.");
        setToastVariant("danger");
      }
    } catch (error) {
      console.error("❌ Error verifying OTP:", error);
      setStatus("❌ Error verifying OTP. Please try again.");
      setToastVariant("danger");
    }
    setShowToast(true);
  };


  const handleResendOtp = () => {
    setStatus("🔁 OTP resent successfully!");
    setToastVariant("info");
    setShowToast(true);
    setResendDisabled(true);
    setCountdown(30);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const sendFormData = async () => {
    const payload = {
      email: formData.email,
    };

    try {
      const response = await axios.post(`https://skillang.com/api/send-otp`, payload);
      setStatus(response.data.message);
      setToastVariant("success");
      setShowToast(true);
    } catch (error) {
      console.error("❌ Error sending OTP:", error);
      setStatus("❌ Error sending OTP. Please try again.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  return (
    <header className="d-flex align-items-center justify-content-center pt-5" id="home">
      <Container className="my-lg-0 mt-5">
        <Row>
          <Col lg={7} md={5} sm={12} xs={12} className="d-flex flex-column align-items-start justify-content-center">
            <Image src={headerbg} fluid />
          </Col>
          <Col lg={5} md={6} sm={12} xs={12} className="d-flex align-items-center justify-content-start">
            <Container className="d-flex align-items-start justify-content-center flex-column p-3">
              <div className="form-container">
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
                        <Form.Control type="text" placeholder="Pin code" name="pincode" value={formData.pincode} onChange={handleInputChange} required pattern="[0-9]{6}" />
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
                        <Form.Control type="text" placeholder="Enter OTP-Send in mail" value={otp} onChange={handleOtpChange} required />
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
