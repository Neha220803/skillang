import React, { useState, useEffect } from "react";
import { Container, Col,Button, Row, Form, Image, Toast, ToastContainer, Carousel } from "react-bootstrap";
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
    number: "",
    pinCode: "",
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
    const response = await axios.post(`https://skillang.com/api/submit-inquiry`, formData);
    setStatus(response.data.message || "✅ Inquiry submitted successfully!");
    setToastVariant("success");
    setShowToast(true);
  } catch (error) {
    console.error("❌ Error submitting inquiry:", error);
    setStatus("❌ Error submitting inquiry. Please try again.");
    setToastVariant("danger");
    setShowToast(true);
  }
};

const handleExperienceSelect = (option) => {
    setFormData({ ...formData, experience: option });
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
    <header className=''>
      <Container className="d-flex justify-content-center align-items-end">
        <Row className=" justify-content-center align-items-center">
          <Col lg={1}></Col>
          <Col lg={10} className=" justify-content-center align-items-center">
            <div className=" nurse-landing-card">
              <Row className="  justify-content-center align-items-center pb-5">
                <Col md={6} className="justify-content-start align-items-stretch">
                  <div className="nurse-img-carousel">
                  <Carousel interval={2500} controls={false}>
                    <Carousel.Item>
                      <Image fluid src={nurseImage1}  alt="Slide 1" />
                      <Carousel.Caption className=" ">
                        <p>Free German Language Courses Tailored for International Nurses</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                       <Image fluid src={nurseImage2}  alt="Slide 1" />
                      <Carousel.Caption>
                        <p>Access to online and in-person training options from highly qualified trainers</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                       <Image fluid src={nurseImage3}  alt="Slide 1" />
                      <Carousel.Caption>
                        <p>
                          Flexible learning schedules to fit work commitments
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                  </div>
                </Col>
                {/* Right Side - Form */}
                <Col md={6} className="p-4 text-center ">
                  <div className="subheading-big-medium text-content-primary my-2">Join the German Nurse Force</div>
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
                            name="number"
                            value={formData.number}
                            onChange={handleInputChange}
                            // isInvalid={!!errors.number}
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
                            name="pinCode"
                            value={formData.pinCode}
                            onChange={handleInputChange}
                            // isInvalid={!!errors.pinCode}
                            required pattern="[0-9]{6}"
                          />
                          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Experience Selection */}
                    <Form.Group className="mb-3 text-start">
                      <Form.Label>Select Experience</Form.Label>
                      <div className="d-flex gap-2 flex-wrap">
                        {["Student", "Freshers", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"].map((option, index) => (
                          <label
                            key={index}
                            className={`experience-option ${formData.experience === option ? "selected" : ""}`}
                            onClick={() => handleExperienceSelect(option)}
                          >
                            <input type="radio" name="experience" value={option} hidden />
                            {option}
                          </label>
                        ))}
                      </div>
                      {/* {errors.experience && <div className="text-danger small mt-1"></div>} */}
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
          <Col lg={1}></Col>
        </Row>
      </Container>
      <ToastContainer position="top-end" className="p-3">
              <ToastMessage showToast={showToast} onClose={() => setShowToast(false)} toastVariant={toastVariant} status={status} />
            </ToastContainer>
    </header>
  );
};

export default NurseForm;
