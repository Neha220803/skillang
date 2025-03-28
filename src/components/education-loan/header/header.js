import React from 'react';
import './header.css';
import { Container, Col, Row } from "react-bootstrap";
import '../../../index.css';
import '../../../App.css';


const Header = () => {
    return (
        <div className="d-flex align-items-start  mt-5 pt-5 justify-content-center header-path-card bg-primar">
            <Container className="text-center bg-whit justify-content-center">
                <Row className='bg-primar justify-content-center'>

                    <div className='edu-head-wrapper'>
                        <div className=' heading-big-medium'>Education Loan Assistance at Skillang</div>
                        <div className='paragraph-big-medium text-content-secondary'>
                            Secure the funding needed to realize your academic dreams abroad.
                        </div>
                        <button className='btn-primary mt-4'
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth',
                                });
                            }}>Schedule a Free Consultation</button>
                    </div>

                </Row>

            </Container>
        </div>
    )
};

export default Header;