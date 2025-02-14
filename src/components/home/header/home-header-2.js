import React, { useState } from "react";
import { Container, Col, Row, Form, Modal, Image } from "react-bootstrap";
import axios from "axios"; // ✅ Import Axios
import "../home-page.css";
import "../../../index.css";
import "./home-header.css";
import "../../../App.css";
import headerbg from "../../../images/home/header-bg1.svg";

const HomeHeader2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    pinCode: "",
    lookingFor: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Open OTP modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setOtp("");
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = () => {
    if (otp.trim() !== "") { // ✅ Accept any OTP entered
      setShowModal(false);
      alert("OTP entered! Submitting form data...");
      sendFormData();
    } else {
      alert("Please enter an OTP before verifying.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendFormData = async () => {
    try {
      const response = await axios.post("http://localhost:3001/submit-inquiry", {
        name: formData.name,
        email: formData.email,
        phone: formData.number,
        pincode: formData.pinCode,
        lookingFor: formData.lookingFor,
      });

      alert(response.data.message);
      setFormData({ name: "", email: "", number: "", pinCode: "", lookingFor: "" }); // ✅ Reset form fields
    } catch (error) {
      console.error("❌ Error submitting inquiry:", error);
      alert("Error submitting inquiry. Please try again.");
    }
  };

  return (
    <header className="d-flex align-items-center justify-content-center pt-5 " id="home">
      <Container className="my-lg-0 mt-5">
        <Row>
          <Col lg={7} md={5} sm={12} xs={12} className="d-flex flex-column align-items-start justify-content-center">
            <Image src={headerbg} fluid />
          </Col>
          <Col lg={5} md={6} sm={12} xs={12} className="d-flex align-items-center justify-content-start">
            <Container className="d-flex align-items-start justify-content-center flex-column p-3">
              <div className="form-container">
                <h3>Let's Connect to Explore More!</h3>
                <div className="mb-3">
                  Looking for Work Abroad, Study Abroad, Language & Test preparation?
                </div>
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

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formNumber">
                        <Form.Control
                          type="tel"
                          placeholder="Mobile"
                          name="number"
                          value={formData.number}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{10}"
                          title="Please enter a valid 10-digit phone number."
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
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
                    <Form.Select name="lookingFor" value={formData.lookingFor} onChange={handleInputChange} required>
                      <option value="">Looking For?</option>
                      <option value="Nursing">Nursing</option>
                      <option value="Work Abroad">Work Abroad</option>
                      <option value="Study Abroad">Study Abroad</option>
                      <option value="Language Prep">Language & Test Prep</option>
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

      {/* OTP Modal (Now accepts any input) */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formOtp">
            <Form.Control type="text" placeholder="Enter OTP" value={otp} onChange={handleOtpChange} required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-secondary" onClick={handleCloseModal}>
            Cancel
          </button>
          <button className="btn-primary" onClick={handleVerifyOtp}>
            Verify OTP
          </button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default HomeHeader2;