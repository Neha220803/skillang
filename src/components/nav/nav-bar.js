import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import "./nav.css";
import "../../index.css";
import logo from "../../assets/images/logos/logo-3.svg";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showStudyDropdown, setShowStudyDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = "+917200630336";
  const whatsappMessage =
    "Hello, I'd like to know more about Skillang services.";

  // Check if the device is mobile
  useEffect(() => {
    const checkDevice = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(isMobileDevice);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // Close navbar whenever the route changes
  useEffect(() => {
    setExpanded(false);
    setShowStudyDropdown(false);
    setShowMoreDropdown(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setExpanded(false);
  };

  const toggleStudyDropdown = () => {
    setShowStudyDropdown(!showStudyDropdown);
    setShowMoreDropdown(false);
  };

  const toggleMoreDropdown = () => {
    setShowMoreDropdown(!showMoreDropdown);
    setShowStudyDropdown(false);
  };

  const handleContactClick = () => {
    if (isMobile) {
      // For mobile devices, initiate a call
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // For desktop, open WhatsApp Web
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(
        `https://web.whatsapp.com/send?phone=${phoneNumber.replace(
          "+",
          ""
        )}&text=${encodedMessage}`,
        "_blank"
      );
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
          className="justify-content-start scrollable-menu"
        >
          <Nav className="w-100 d-flex flex-column flex-lg-row">
            <Nav.Link
              className={`navpaths justify-content-start ${isActive("/") || isActive("/home") ? "active-link" : ""
                }`}
              onClick={() => handleNavigation("/home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`navpaths justify-content-start ${isActive("/nursing") ? "active-link" : ""
                }`}
              onClick={() => handleNavigation("/nursing")}
            >
              Nursing
            </Nav.Link>
            <Nav.Link
              className={`navpaths justify-content-start ${isActive("/work-abroad") ? "active-link" : ""
                }`}
              onClick={() => handleNavigation("/work-abroad")}
            >
              Work Abroad
            </Nav.Link>

            {/* Custom Study Abroad Dropdown */}
            <div className="custom-dropdown w-100">
              <Nav.Link
                className={`navpaths justify-content-start ${isActive("/study-abroad") ? "active-link" : ""
                  } dropdown-toggle`}
                onClick={toggleStudyDropdown}
              >
                Study Abroad
              </Nav.Link>
              {showStudyDropdown && (
                <div className="custom-dropdown-menu">
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/study-abroad")}
                  >
                    About Study Abroad
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/study-abroad/uk")}
                  >
                    UK
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/study-abroad/usa")}
                  >
                    USA
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/study-abroad/germany")}
                  >
                    Germany
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/study-abroad/france")}
                  >
                    France
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/study-abroad/australia")}
                  >
                    Australia
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/study-abroad/canada")}
                  >
                    Canada
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/study-abroad/new-zealand")}
                  >
                    New Zealand
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/study-abroad/finland")}
                  >
                    Finland
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/study-abroad/austria")}
                  >
                    Austria
                  </div>
                </div>
              )}
            </div>

            <Nav.Link
              className={`navpaths justify-content-start ${isActive("/lang-test-prep") ? "active-link" : ""
                }`}
              onClick={() => handleNavigation("/lang-test-prep")}
            >
              Language & Test
            </Nav.Link>

            {/* Custom More Dropdown */}
            <div className="custom-dropdown w-100">
              <Nav.Link
                className={`navpaths justify-content-start ${isActive("/more") ? "active-link" : ""
                  } dropdown-toggle`}
                onClick={toggleMoreDropdown}
              >
                More
              </Nav.Link>
              {showMoreDropdown && (
                <div className="custom-dropdown-menu">
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/more/education-loan")}
                  >
                    Education Loan
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/more/scholarships")}
                  >
                    Scholarships
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/more/sop-and-resume-writing")}
                  >
                    SOP & Resume Writing
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/more/german-opportunity-card")}
                  >
                    German Opportunity Card
                  </div>
                </div>
              )}
            </div>

            <div className="mt-3 mt-lg-0 ms-lg-auto">
              <button
                className="btn-primary-outline"
                onClick={handleContactClick}
              >
                <FiPhoneCall
                  className="me-2"
                  style={{ width: "18px", height: "auto" }}
                />
                Contact Us
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;