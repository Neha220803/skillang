import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './global-opportunity.css';

const GlobalOpportunity = () => {
  return (
    <div className="d-flex align-items-center justify-content-center py-lg-1 ">
      <Container className="text-center py-5">
        <Row>
           <Col lg={1}> 
          </Col>
          <Col lg={10}>
            <h1 className='mb-4'>Unlock 🔑 the Global 🌐 Opportunities</h1>
            <p className='mb-3'>
              Explore the world through our comprehensive study abroad, 
              work abroad, language and test preparation services. 
              Tailored guidance to help you succeed in your dream career 
              abroad!
            </p>
            <button className='btn-primary-outline' onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}>Learn More</button>
        </Col>
        <Col lg={1}>
        </Col>

        </Row>
       
      </Container>
    </div>
  );
};

export default GlobalOpportunity;