import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Image, Container } from 'react-bootstrap';
import nurseImage from '../../../assets/images/landing/nurse-1.png'; // Replace with your image path
import './nurseForm.css';

const NurseForm = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <Container className="d-flex justify-content-center align-items-end min-vh-100">
      <Row className='d-flex justify-content-center align-items-center'>
        <Col lg={1}></Col>
        <Col lg={10} className='d-flex justify-content-center align-items-center'>
          <Card className="p-2 rounded-4">
            <Row className="g-0 d-flex justify-content-center align-items-center">
              <Col md={6} className="position-relative">
                <Image src={nurseImage} className="img-fluid rounded-4" alt="Nurse" />
              </Col>

              {/* Right Side - Form */}
              <Col md={6} className="p-4 text-center">
                <div className='subheading-big-medium text-content-primary my-2'>Join the German Nurse Force</div>
                <div className="mb-3 paragraph-small-medium text-content-secondary py-2">Tell Us About Yourself!</div>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Name" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Email" required />
                  </Form.Group>

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formNumber">
                        <Form.Control type="tel" placeholder="Mobile" name="number" required pattern="[0-9]{10}" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formPinCode">
                        <Form.Control type="text" placeholder="Pin code" name="pinCode" required pattern="[0-9]{6}" />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Experience Selection */}
                  <Form.Group className="mb-3 text-start">
                    <Form.Label>Select Experience</Form.Label>
                    <div className="d-flex gap-2 flex-wrap">
                      {['Student','Freshers','0-1 Years', '1-3 Years', '3-5 Years','5+ Years'].map((option, index) => (
                        <label
                          key={index}
                          className={`experience-option ${selectedExperience === option ? 'selected' : ''}`}
                          onClick={() => setSelectedExperience(option)}
                        >
                          <input type="radio" name="experience" value={option} hidden />
                          {option}
                        </label>
                      ))}
                    </div>
                  </Form.Group>

                  {/* Book Free Consultation Button */}
                  <Button variant="primary" className="w-100">Book Free Consultation</Button>

                  {/* Terms and Privacy Policy */}
                  <div className="mt-2 text-muted text-center" style={{ fontSize: '12px' }}>
                    By submitting this form, you agree to the <a href="#" className="text-decoration-none">Terms of Use</a> and <a href="#" className="text-decoration-none">Privacy Policy</a>.
                  </div>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  );
};

export default NurseForm;
