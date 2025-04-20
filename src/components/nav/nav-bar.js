import React, { useState, useEffect } from "react";
import { Container, Image, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import "./nav.css";
import "../../index.css";
import logo from "../../assets/images/logos/logo-3.svg";

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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" className="py-2 fixed-top navcont" expanded={expanded}>
      <Container className="d-flex align-items-center">
        <Navbar.Brand onClick={() => handleNavigation("/home")}>
          <Image
            src={logo}
            className="navbar-logo"
            style={{ cursor: "pointer" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="mx-auto d-flex align-items-center">
            <Nav.Link
              className={`navpaths d-flex align-items-center ${
                isActive("/") || isActive("/home") ? "active-link" : ""
              }`}
              onClick={() => handleNavigation("/home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`navpaths d-flex align-items-center ${
                isActive("/nursing") ? "active-link" : ""
              }`}
              onClick={() => handleNavigation("/nursing")}
            >
              Nursing
            </Nav.Link>
            <Nav.Link
              className={`navpaths d-flex align-items-center ${
                isActive("/work-abroad") ? "active-link" : ""
              }`}
              onClick={() => handleNavigation("/work-abroad")}
            >
              Work Abroad
            </Nav.Link>
            <NavDropdown
              title="Study Abroad"
              className={`navpaths d-flex align-items-center ${
                isActive("/study-abroad") ? "active-link" : ""
              }`}
            >
              <NavDropdown.Item
                onClick={() => handleNavigation("/study-abroad")}
              >
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleNavigation("/study-abroad/uk")}
              >
                UK
              </NavDropdown.Item>
              {/* <NavDropdown.Item
                onClick={() => handleNavigation("/study-abroad/canada")}
              >
                Canada
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link
              className={`navpaths d-flex align-items-center ${
                isActive("/lang-test-prep") ? "active-link" : ""
              }`}
              onClick={() => handleNavigation("/lang-test-prep")}
            >
              Language & Test
            </Nav.Link>
            <NavDropdown
              title="More"
              className={`navpaths d-flex align-items-center ${
                isActive("/more") ? "active-link" : ""
              }`}
            >
              <NavDropdown.Item
                onClick={() => handleNavigation("/more/education-loan")}
              >
                Education Loan
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleNavigation("/more/scholarships")}
              >
                Scholarships
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleNavigation("/more/sop-and-resume-writing")}
              >
                SOP & Resume Writing
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>
                  handleNavigation("/more/german-opportunity-card")
                }
              >
                German Opportunity Card
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="ms-auto align-items-center justify-content-center text-center my-2">
            <button
              className="btn-primary-outline"
              onClick={() => {
                window.location.href = "tel:+917200630336";
              }}
            >
              <FiPhoneCall
                className="me-3"
                style={{ width: "18px", height: "auto" }}
              />
              Contact Us
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
