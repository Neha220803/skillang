import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import "./nav.css";
import "../../index.css";
import logo from '../../assets/images/logos/logo-3.svg';

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close navbar whenever the route changes
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]); 

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
  if (location.pathname !== path) {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};


  return (
    <Navbar expand="lg" className="py-2 fixed-top navcont" expanded={expanded}>
      <Container className="d-flex align-items-center">
        <Navbar.Brand onClick={() => handleNavigation("/")}>
          <Image src={logo} className="navbar-logo" style={{ cursor: 'pointer' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto d-flex align-items-center">
            <Nav.Link className={`navpaths d-flex align-items-center ${isActive('/') || isActive('/home') ? 'active-link' : ''}`} onClick={() => handleNavigation("/home")}>Home</Nav.Link>
            <Nav.Link className={`navpaths d-flex align-items-center ${isActive('/nursing') ? 'active-link' : ''}`} onClick={() => handleNavigation("/nursing")}>Nursing</Nav.Link>
            <Nav.Link className={`navpaths d-flex align-items-center ${isActive('/work-abroad') ? 'active-link' : ''}`} onClick={() => handleNavigation("/work-abroad")}>Work Abroad</Nav.Link>
            <Nav.Link className={`navpaths d-flex align-items-center ${isActive('/study-abroad') ? 'active-link' : ''}`} onClick={() => handleNavigation("/study-abroad")}>Study Abroad</Nav.Link>
            <Nav.Link className={`navpaths d-flex align-items-center ${isActive('/lang-test-prep') ? 'active-link' : ''}`} onClick={() => handleNavigation("/lang-test-prep")}>Language & Test</Nav.Link>
          </Nav>
          <div className='ms-auto align-items-center justify-content-center text-center my-2'>
            <button className="btn-primary-outline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Contact Us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
