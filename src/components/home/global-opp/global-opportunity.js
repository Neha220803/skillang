import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './global-opportunity.css';
import { useNavigate } from 'react-router-dom';


const GlobalOpportunity = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-center py-lg-1 bg-primar">
      <Container className="d-flex align-items-center justify-content-center  text-center ">
        <Row className='d-flex align-items-center justify-content-center global-opp-text-wrap'>
          <div className='heading-big-medium d-none d-md-block'>Unlock 🔑 the Global 🌐 Opportunities</div>
          <div className='heading-big-medium d-block d-md-none'>Unlock the Global Opportunities</div>
          <div className='paragraph-big-medium text-content-secondary mb-3'>
            Explore the world through our comprehensive study abroad,
            work abroad, language and test preparation services.
            Tailored guidance to help you succeed in your dream career
            abroad!
          </div>
          <div>
            <button className='btn-primary-outline' onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}>Learn More</button>
          </div>


        </Row>

      </Container>
    </div>
  );
};

export default GlobalOpportunity;