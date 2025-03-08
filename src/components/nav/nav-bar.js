import { React, useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";
import "../../index.css";
import logo from '../../assets/images/logos/logo-3.svg';

// Dynamically set the base path
const BASE_PATH = process.env.PUBLIC_URL || '';

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track active section

  // Handle Scroll to Section & Navbar Collapse
  const handleScroll = (sectionId, event) => {
    event.preventDefault();
    if (sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
          behavior: 'smooth',
        });
      }
    }
    setActiveSection(sectionId); // Update active section
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="py-2 fixed-top navcont" expanded={expanded}>
      <Container className="d-flex align-items-center">
        <Navbar.Brand href={`${BASE_PATH}/#home`} onClick={(e) => handleScroll('home', e)}>
          <Image src={logo} className="navbar-logo" />  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto d-flex align-items-center">
            {[
              { id: 'home', label: 'Home' },
              { id: 'nursing', label: 'Nursing' },
              { id: 'work-abroad', label: 'Work Abroad' },
              { id: 'study-abroad', label: 'Study Abroad' },
              { id: 'lang-test-prep', label: 'Language & Test'}
            ].map(({ id, label }) => (
              <Nav.Link
                key={id}
                href={`${BASE_PATH}/#${id}`}
                className={`navpaths d-flex align-items-center ${activeSection === id ? 'active-link' : ''}`}
                // onClick={(e) => handleScroll(id, e)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <div className='ms-auto align-items-center justify-content-center text-center my-2'>
            <button className="btn-primary-outline" onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setExpanded(false);
            }}>Contact Us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
