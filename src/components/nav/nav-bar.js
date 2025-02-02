import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";
import "../../index.css";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="py-2 fixed-top navcont">
      <Container className="d-flex align-items-center">
        {/* Left: Brand */}
        <Navbar.Brand href="/">
          <div className="nav-head">Skillang</div> 
        </Navbar.Brand>

        {/* Center: Nav Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto"> {/* Centers the nav items */}
            <Nav.Link href="/" className="navpaths">Home</Nav.Link>
            <Nav.Link href="/nursing" className="navpaths">Nursing</Nav.Link>
            <Nav.Link href="/work-abroad" className="navpaths">Work Abroad</Nav.Link>
            <Nav.Link href="/study-abroad" className="navpaths">Study Abroad</Nav.Link>
            <Nav.Link href="/lang-test-prep" className="navpaths">Language & Test</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right: Buttons */}
        <div className="ms-auto d-flex">
          <button href="#contact" className="btn-bare me-2">Login</button>
          <button href="#contact" className="btn-primary-outline">Sign Up</button>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
