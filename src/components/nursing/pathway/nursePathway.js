import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form, Image, Toast, ToastContainer } from "react-bootstrap";
import '../../../index.css';
import '../../../App.css';
import './nursePathway.css';

const NursePathwaySection = () => {
  return (
    <div className="d-flex align-items-start justify-content-start my-lg-5 bg-primar ">
      <Container className="text-center my-5 bg-whit">
        <Row className='bg-primar'>
           <Col lg={1}> 
          </Col>
          <Col lg={10}>
            <div className='my-4 heading-big-medium'>Start your Pathway to a 🌐Global Healthcare Career</div>
            <p className='mb-3 paragraph-big-medium'>
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