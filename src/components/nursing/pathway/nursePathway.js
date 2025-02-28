import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form, Image, Toast, ToastContainer } from "react-bootstrap";
import '../../../index.css';
import '../../../App.css';
import './nursePathway.css';

const NursePathwaySection = () => {
  return (
    <div className="d-flex align-items-start justify-content-start nurse-path-card">
      <Container className="text-center bg-whit">
        <Row className='bg-primar'>
           <Col lg={1}> 
          </Col>
          <Col lg={10}>
            <div className='mb-5 heading-big-medium'>Start your Pathway to a 🌐Global Healthcare Career</div>
            <p className='mb-5 paragraph-big-medium'>
              Free German Courses, Online & In-Person Training & Flexible Learning Schedules all in One Place
            </p>
            {/* <button className='btn-primary-outline'
             onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}>Learn More</button> */}
        </Col>
        <Col lg={1}>
        </Col>

        </Row>
       
      </Container>
    </div>
  )
}

export default NursePathwaySection