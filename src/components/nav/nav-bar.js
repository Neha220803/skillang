import React, { useState, useEffect } from "react";
import { Container, Image, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./nav.css";
import "../../index.css";
import logo from "../../assets/images/logos/logo-3.svg";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({
    studyAbroad: false,
    more: false,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = "+91 7200630336";
  const whatsappMessage =
    "Hello, I'd like to know more about Skillang services.";

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

  useEffect(() => {
    setExpanded(false);
    setExpandedMenus({ studyAbroad: false, more: false });
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleSubmenu = (menu, e) => {
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
      setExpandedMenus((prev) => ({
        ...prev,
        [menu]: !prev[menu],
      }));
    }
  };

  const handleContactClick = () => {
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
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

  const renderStudyAbroadNav = () => {
    if (!isMobile) {
      return (
        <NavDropdown
          title="Study Abroad"
          className={`navpaths d-flex align-items-center ${
            isActive("/study-abroad") ? "active-link" : ""
          }`}
        >
          <NavDropdown.Item onClick={() => handleNavigation("/study-abroad")}>
            Overview
          </NavDropdown.Item>
          {/* <NavDropdown.Item
            onClick={() => handleNavigation("/study-abroad/uk")}
          >
            UK
          </NavDropdown.Item> */}
        </NavDropdown>
      );
    }

    return (
      <>
        <div
          className={`navpaths d-flex align-items-center ${
            isActive("/study-abroad") ? "active-link" : ""
          }`}
          onClick={(e) => toggleSubmenu("studyAbroad", e)}
        >
          Study Abroad{" "}
          <span className="ms-auto dropdown-icon">
            {expandedMenus.studyAbroad ? "▲" : "▼"}
          </span>
        </div>

        {expandedMenus.studyAbroad && (
          <div className="mobile-submenu">
            <div
              className="submenu-item"
              onClick={() => handleNavigation("/study-abroad")}
            >
              Overview
            </div>
            {/* <div
              className="submenu-item"
              onClick={() => handleNavigation("/study-abroad/uk")}
            >
              UK
            </div> */}
          </div>
        )}
      </>
    );
  };

  // const renderMoreNav = () => {
  //   if (!isMobile) {
  //     return (
  //       <NavDropdown
  //         title="More"
  //         className={`navpaths d-flex align-items-center ${isActive("/more") ? "active-link" : ""}`}
  //       >
  //         <NavDropdown.Item
  //           onClick={() => handleNavigation("/more/education-loan")}
  //         >
  //           Education Loan
  //         </NavDropdown.Item>
  //         <NavDropdown.Item
  //           onClick={() => handleNavigation("/more/scholarships")}
  //         >
  //           Scholarships
  //         </NavDropdown.Item>
  //         <NavDropdown.Item
  //           onClick={() => handleNavigation("/more/sop-and-resume-writing")}
  //         >
  //           SOP & Resume Writing
  //         </NavDropdown.Item>
  //         <NavDropdown.Item
  //           onClick={() =>
  //             handleNavigation("/more/german-opportunity-card")
  //           }
  //         >
  //           German Opportunity Card
  //         </NavDropdown.Item>
  //       </NavDropdown>
  //     );
  //   }

  //   return (
  //     <>
  //       <div
  //         className={`navpaths d-flex align-items-center ${isActive("/more") ? "active-link" : ""}`}
  //         onClick={(e) => toggleSubmenu("more", e)}
  //       >
  //         More <span className="ms-auto dropdown-icon">{expandedMenus.more ? "▲" : "▼"}</span>
  //       </div>

  //       {expandedMenus.more && (
  //         <div className="mobile-submenu">
  //           <div
  //             className="submenu-item"
  //             onClick={() => handleNavigation("/more/education-loan")}
  //           >
  //             Education Loan
  //           </div>
  //           <div
  //             className="submenu-item"
  //             onClick={() => handleNavigation("/more/scholarships")}
  //           >
  //             Scholarships
  //           </div>
  //           <div
  //             className="submenu-item"
  //             onClick={() => handleNavigation("/more/sop-and-resume-writing")}
  //           >
  //             SOP & Resume Writing
  //           </div>
  //           <div
  //             className="submenu-item"
  //             onClick={() => handleNavigation("/more/german-opportunity-card")}
  //           >
  //             German Opportunity Card
  //           </div>
  //         </div>
  //       )}
  //     </>
  //   );
  // };

  return (
    <Navbar
      expand="lg"
      className="py-2 fixed-top navcont navbar-default"
      expanded={expanded}
    >
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
            <Nav.Link
              className={`navpaths d-flex align-items-center ${
                isActive("/study-abroad") ? "active-link" : ""
              }`}
              onClick={() => handleNavigation("/study-abroad")}
            >
              Study Abroad
            </Nav.Link>

            {/* {renderStudyAbroadNav()} */}

            <Nav.Link
              className={`navpaths d-flex align-items-center ${
                isActive("/lang-test-prep") ? "active-link" : ""
              }`}
              onClick={() => handleNavigation("/lang-test-prep")}
            >
              Language & Test
            </Nav.Link>

            {/* {renderMoreNav()} */}
          </Nav>
          <div className="ms-auto align-items-center justify-content-center text-center my-2">
            <button
              className="btn-primary-outline"
              onClick={isMobile ? handleContactClick : undefined}
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
              style={{ width: "200px" }}
            >
              <FiPhoneCall
                className="me-3"
                style={{ width: "18px", height: "auto" }}
              />
              {isMobile ? "Contact Us" : isHovered ? phoneNumber : "Contact Us"}
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
