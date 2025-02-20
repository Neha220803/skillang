import React, { useState, useEffect } from "react";
import { Container, Col, Button, Row, Form, Image, Toast, ToastContainer, Carousel } from "react-bootstrap";
import axios from "axios";
import nurseImage1 from "../../../assets/images/landing/nurse-1.png"; // Replace with your image path
import nurseImage2 from "../../../assets/images/landing/nurse-2.png"; // Replace with your image path
import nurseImage3 from "../../../assets/images/landing/nurse-3.png"; // Replace with your image path
import "./nurseForm.css";
import successSound from '../../../assets/sounds/success.mp3';
import errorSound from '../../../assets/sounds/rejected.mp3';
import '../../../index.css';

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

const NurseForm = () => {
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
    phone: "",
    pincode: "",
    lookingFor: "Nursing",
    experience: ""
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
        setStatus("❌ Please verify the OTP before submitting.");
        setToastVariant("danger");
        setShowToast(true);
        return;
      }
      if (!formData.experience) {
        setStatus("❌ Please select your experience level.");
        setToastVariant("danger");
        setShowToast(true);
        return;
      }

      console.log("Form Data:", formData);
      submitInquiry();
    }

    setValidated(true);
  };

  const submitInquiry = async () => {
    try {
      const payload = { ...formData, experience: formData.experience };
      const response = await axios.post(`https://skillang.com/api/submit-to-google-sheets`, payload);

      setStatus(response.data.message || "✅ Inquiry submitted successfully!");
      setToastVariant("success");
      setShowToast(true);

      // Reset form data after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        pinCode: "",
        lookingFor: "",
        experience: "",
      });

      // Reset OTP-related states
      setOtp("");
      setIsOtpVerified(false);
      setIsOtpSent(false);
      setOtpVisible(false);
      setValidated(false);
    } catch (error) {
      console.error("❌ Error submitting inquiry:", error);
      setStatus("❌ Error submitting inquiry. Please try again.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  const handleExperienceSelect = (value) => {
    setFormData((prevState) => ({ ...prevState, experience: value }));
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
  
    } catch (error) {
      console.error("❌ Error sending OTP:", error);
      setStatus("❌ Error sending OTP. Please try again.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  return (
<<<<<<< HEAD
    <header>
      <Container className="d-flex justify-content-center align-items-end">
        <Row className="justify-content-center align-items-center">
          <Col lg={1}></Col>
          <Col lg={10} className="justify-content-center align-items-center">
            <div className="nurse-landing-card">
              <Row className="justify-content-center align-items-center pb-5">
                <Col md={6} className="justify-content-start align-items-stretch">
=======
    <header id="nurse-landing">
      <Container className="d-flex justify-content-center align-items-end pt-5 pt-lg-0 my-5 m-lg-0">
        <Row className=" justify-content-center align-items-center ">
          <Col lg={1} className="d-none d-md-block"></Col>
          <Col lg={10}  sm={12} xs={12} className=" justify-content-center align-items-center ">
            <div className="nurse-landing-card">
              <Row className=" d-flex justify-content-center align-items-center ">
                <Col md={6} lg={6} sm={12} xs={12} className="justify-content-start align-items-center ">
>>>>>>> 11420e99ea940e291549d31e12eeccd6e2f9b89c
                  <div className="nurse-img-carousel">
                    <Carousel interval={2500} controls={false} style={{ minHeight: "45vh" }}>
                      <Carousel.Item>
<<<<<<< HEAD
                        <Image fluid className="carousel-img" src={nurseImage1} alt="Slide 1" />
=======
                        <Image fluid src={nurseImage1} alt="Slide 1" style={{ minHeight: "45vh", objectFit: "cover" }} />
>>>>>>> 11420e99ea940e291549d31e12eeccd6e2f9b89c
                        <Carousel.Caption>
                          <p>Free German Language Courses Tailored for International Nurses</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
<<<<<<< HEAD
                        <Image fluid className="carousel-img" src={nurseImage2} alt="Slide 2" />
=======
                        <Image fluid src={nurseImage2} alt="Slide 2" style={{ minHeight: "45vh", objectFit: "cover" }} />
>>>>>>> 11420e99ea940e291549d31e12eeccd6e2f9b89c
                        <Carousel.Caption>
                          <p>Access to online and in-person training options from highly qualified trainers</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
<<<<<<< HEAD
                        <Image fluid className="carousel-img" src={nurseImage3} alt="Slide 3" />
=======
                        <Image fluid src={nurseImage3} alt="Slide 3" style={{ minHeight: "45vh", objectFit: "cover" }} />
>>>>>>> 11420e99ea940e291549d31e12eeccd6e2f9b89c
                        <Carousel.Caption>
                          <p>Flexible learning schedules to fit work commitments</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>

                  </div>
                </Col>
                {/* Right Side - Form */}
<<<<<<< HEAD
                <Col md={6} className="p-4 text-center">
                  <div className="subheading-big-medium text-content-primary my-2">Join the German Nurse Force</div>
=======
                <Col md={6} lg={6} sm={12} xs={12}  className="p-lg-4 p-2 text-center ">
                  <div className="subheading-big-medium text-content-primary mt-2 my-lg-2">Join the German Nurse Force</div>
>>>>>>> 11420e99ea940e291549d31e12eeccd6e2f9b89c
                  <div className="mb-3 paragraph-small-medium text-content-secondary py-2">Tell Us About Yourself!</div>
                  <Form validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
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
                      <Form.Control.Feedback type="invalid" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid" />
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
                            required
                            pattern="[0-9]{10}"
                          />
                          <Form.Control.Feedback type="invalid" />
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
                            required
                            pattern="[0-9]{6}"
                          />
                          <Form.Control.Feedback type="invalid" />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Experience Selection */}
                    <Form.Group className="mb-3 text-start">
                      <Form.Label>Select Experience</Form.Label>
                      <div className="d-flex gap-2 flex-wrap">
                        {["Student", "Freshers", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"].map((option, index) => (
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
                          <Form.Control
                            type="text"
                            placeholder="Enter OTP - sent in mail"
                            value={otp}
                            onChange={handleOtpChange}
                            required
                          />
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
                      Book Free Consultation
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
          <Col lg={1}  className="d-none d-md-block"></Col>
        </Row>
      </Container>
      <ToastContainer position="top-end" className="p-3">
        <ToastMessage showToast={showToast} onClose={() => setShowToast(false)} toastVariant={toastVariant} status={status} />
      </ToastContainer>
    </header>
  );
};

export default NurseForm;
