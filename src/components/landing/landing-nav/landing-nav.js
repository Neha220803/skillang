import { React } from "react";
import { Container, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/images/logo-3.svg";
import { FiPhoneCall } from "react-icons/fi";

const LandingNavBar = () => {
  return (
    <Navbar expand="lg" className="py-2 fixed-top navcont">
      <Container className="d-flex align-items-center justify-content-between">
        {/* Logo on the left */}
        <Navbar.Brand>
          <Image src={logo} className="navbar-logo" />
        </Navbar.Brand>
        {/* Push button to the right */}
         <button
            className="btn btn-primary-outline d-flex align-items-center justify-content-center fw-bold"
            onClick={() => {
                window.location.href = "tel:+917200630336";
            }}
            >
            <FiPhoneCall className="me-2" style={{ width: "24px", height: "24px" }} />
            91 - 7200 630 336
            </button>
      </Container>
    </Navbar>
  );
};

export default LandingNavBar;
