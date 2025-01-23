import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo.png'; // Replace with the actual path to your logo file

function CustomNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="py-3 fixed-top">
                <Container>
                    <Navbar.Brand href="/" className="d-flex align-items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            // width="40"
                            height="60"
                            className="me-2"
                        />
                        {/* <div>
                            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
                                Skillang
                            </span>
                            <br />
                            <span style={{ fontSize: '14px' }}>(Counsellor & Trainer)</span>
                        </div> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link href="/nursing">Nursing</Nav.Link>
                            <Nav.Link href="/work-abroad">Work Abroad</Nav.Link>
                            <Nav.Link href="/study-abroad">Study Abroad</Nav.Link>
                            <Nav.Link href="/lang-test-prep">Language & Test Prep</Nav.Link>
                            {/* <Nav.Link href="#gallery">More</Nav.Link> */}
                            <Button
                                variant="light"
                                href="#contact"
                                className="ms-3"
                            >
                                Get Started
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;
