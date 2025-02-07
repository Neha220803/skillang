import React, { useState } from "react";
import { Button, Container, Col, Row, Form, Modal } from "react-bootstrap";
import "../home-page.css";
import "../../../index.css";
import './home-header.css';

const HomeHeader = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [otp, setOtp] = useState(""); // State to store OTP entered by the user
  const [otpSent, setOtpSent] = useState(false); // State to track whether OTP was sent
  const [otpVerified, setOtpVerified] = useState(false); // State to track OTP verification status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    pinCode: "",
    lookingFor: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowModal(true); // Open the modal for OTP entry
    setOtpSent(true); // OTP is sent to the user
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
    setOtp(""); // Reset OTP field
    setOtpSent(false); // Reset OTP sent state
    setOtpVerified(false); // Reset OTP verification status
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value); // Update OTP value as the user types
  };

  const handleVerifyOtp = () => {
    // For this example, we are assuming a fixed OTP value (e.g., "123456")
    const correctOtp = "123456"; // Replace with the actual OTP sent to the user
    if (otp === correctOtp) {
      setOtpVerified(true); // Mark OTP as verified
      setShowModal(false); // Close the modal
      alert("OTP Verified Successfully! Form data submitted.");
      // You can now handle the form data submission, e.g., send it to a backend API
      console.log(formData);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <header className="d-flex align-items-end justify-content-center py-5" id="header-section">
      <Container >
        <Row>
          <Col lg={6} md={5} sm={12} xs={12}  className="d-flex flex-column align-items-start justify-content-center py-lg-5">
            <h1 className="content-heading">Transform your career with Skillang</h1>
            <p className="content-desc">
              Start with our personalised career guidance for Study & Work Abroad, German and other language prep.
            </p>
          </Col>
          <Col lg={1} md={0} sm={0} xs={0}>
          </Col>
          <Col lg={5} md={6} sm={12} xs={12}  className="d-flex align-items-center justify-content-center">
           <Container className="d-flex align-items-center justify-content-center flex-column p-3">
    <div className="form-container">
    <h3>Let's Connect to Explore More!</h3>
    <div className="mb-3">Looking for Work Abroad, Study Abroad, Language & Test preparation?</div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          minLength={3}
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
        />
      </Form.Group>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formNumber">
            <Form.Control
              type="tel"
              placeholder="Mobile"
              name="mobile"
              value={formData.number}
              onChange={handleInputChange}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number."
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formPinCode">
            <Form.Control
              type="text"
              placeholder="Pin code"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleInputChange}
              required
              pattern="[0-9]{6}"
              title="Please enter a valid 6-digit pin code."
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formLookingFor">
        <Form.Select
          name="lookingFor"
          value={formData.lookingFor}
          onChange={handleInputChange}
          required
        >
          <option value="">Looking For?</option>
          <option value="Nursing">Nursing</option>
          <option value="Work Abroad">Work Abroad</option>
          <option value="Study Abroad">Study Abroad</option>
          <option value="Language Prep">Language Prep</option>
          <option value="Test Prep">Test Prep</option>
        </Form.Select>
      </Form.Group>

      <button className="btn-primary mb-1" type="submit">
        Book your free consultation
      </button>
      
    </Form>
    <div className="align-items-end justify-content-start">
        By submitting this form, you agree to the Terms of Use and Privacy Policy
        </div>
  </div>
</Container>
</Col>
</Row>
</Container>
              
         
    
    </header>
  );
};

export default HomeHeader;