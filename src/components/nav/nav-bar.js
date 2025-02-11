import { React, useState, useEffect } from "react";
import { Container, Image, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";
import "../../index.css";
import logo from '../../images/logo-3.svg';

// Dynamically set the base path
const BASE_PATH = process.env.PUBLIC_URL || '';

function CustomNavbar() {
  const [activeSection, setActiveSection] = useState('home'); // Track active section
  const [expanded, setExpanded] = useState(false);

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
    setExpanded(false);
  };

  // Scroll Listener to Detect Active Section
  useEffect(() => {
  const handleScrollSpy = () => {
    const sections = ['home', 'work-abroad', 'work-abroad-journey', 'study-abroad', 'lang-test'];
    let currentSection = ''; // Default: no section active

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const offset = 80; // Adjust for fixed navbar height

        if (rect.top <= offset && rect.bottom >= offset) {
          currentSection = sectionId;
          break; // Exit loop once a section is found
        }
      }
    }

    setActiveSection(currentSection);
  };

  window.addEventListener('scroll', handleScrollSpy);
  return () => window.removeEventListener('scroll', handleScrollSpy);
}, []);


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
              { id: 'work-abroad', label: 'Nursing' },
              { id: 'work-abroad-journey', label: 'Work Abroad' },
              { id: 'study-abroad', label: 'Study Abroad' },
            ].map(({ id, label }) => (
              <Nav.Link
                key={id}
                href={`${BASE_PATH}/#${id}`}
                onClick={(e) => handleScroll(id, e)}
                className={`navpaths d-flex align-items-center ${activeSection === id ? 'active-link' : ''}`}
              >
                {label}
              </Nav.Link>
            ))}

            <NavDropdown
              title="Language & Test"
              id="lang-test-dropdown"
              className={`navpaths d-flex align-items-center ${activeSection === 'lang-test' ? 'active-link' : ''}`}
            >
              <NavDropdown.Item href={`${BASE_PATH}/#lang-test`} onClick={(e) => handleScroll('lang-test', e)}>
                Test Preparation
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={`${BASE_PATH}/#lang-test`} onClick={(e) => handleScroll('lang-test', e)}>
                German Language Preparation
              </NavDropdown.Item>
            </NavDropdown>
            <div className="ms-auto d-flex align-items-center">
          <button className="btn-bare me-2">Login</button>
          <button className="btn-primary-outline">Sign Up</button>
        </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
