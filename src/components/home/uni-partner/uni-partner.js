import React, { useEffect } from 'react';
import '../home-page.css';
import '../../../App.css';
import { Container, Col, Row } from 'react-bootstrap';
import ScrollEle from './scroll';



const UniPartner = () => {
      return (
        <div className='d-flex flex-column align-items-center justify-content-center my-5'>
        <Container className='my-4'>
        <Row >
          <h1 className='d-flex flex-column align-items-center justify-content-center mb-5'>Our Partnered Universities</h1>
          <ScrollEle />
        </Row>
       </Container>
        </div>
      
      );
    };

export default UniPartner