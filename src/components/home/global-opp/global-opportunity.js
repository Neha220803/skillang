import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './global-opportunity.css';

const GlobalOpportunity = () => {
  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <Container className="text-center py-5">
        <Row>
           <Col lg={2}> 
        </Col>
        <Col lg={8}>
        <h1 className='mb-1'>Unlock the Global Opportunities</h1>
        <p className='mb-3'>
          Explore the world through our comprehensive study abroad, 
          work abroad, language and test preparation services. 
          Tailored guidance to help you succeed in your dream career 
          abroad!
        </p>
        <button className='btn-primary-outline'>Learn More</button>
        </Col>
        <Col lg={2}>
        </Col>

        </Row>
       
      </Container>
    </div>
  );
};

export default GlobalOpportunity;