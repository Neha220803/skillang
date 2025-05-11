import { React } from "react";
import { Container, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/images/logos/logo-3.svg";
import { FiPhoneCall } from "react-icons/fi";
import "../../../index.css";
import "../../../App.css";
import { useNavigate, useLocation } from "react-router-dom";

const LandingNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <Navbar expand="lg" className="navbar-default fixed-top navcont">
      <Container className="d-flex align-items-center justify-content-between">
        {/* Logo on the left */}
        <Navbar.Brand onClick={() => handleNavigation("/home")}>
          <Image
            src={logo}
            className="navbar-logo"
            style={{ cursor: "pointer" }}
          />
        </Navbar.Brand>
        {/* Push button to the right */}
        <button
          className="btn btn-primary-outline d-flex align-items-center justify-content-center"
          onClick={() => {
            window.location.href = "tel:+917200630336";
          }}
        >
          <FiPhoneCall
            className="me-2"
            style={{ width: "20px", height: "20px" }}
          />
          91 - 7200 630 336
        </button>
      </Container>
    </Navbar>
  );
};

export default LandingNavBar;
