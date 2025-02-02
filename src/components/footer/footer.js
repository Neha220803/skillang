import React from "react";
import logo from "../../images/logo-white.png";
import { Container, Col, Row } from "react-bootstrap";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing
import './footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="px-2 text-white" >
      <Container className="py-4">
       
        <Row className="mt-2">
          <Col lg={5} sm={12}>
            <div className="justify-text">
               <div className="d-flex align-items-center justify-content-start">
              <img src={logo} alt="logo" />
            </div>
              We offer personalized guidance for study abroad, work abroad and
              language & test prep, helping you explore global opportunities,
              find the right programs or jobs, and support you throughout your
              journey. Our expert team ensures a smooth experience and
              transition of your career.
            </div>
          </Col>
          <Col lg={3} className="d-none d-sm-block">
            <div className="d-flex align-items-center justify-content-center">
              <ul className="footer-nav">
                <li>
                  <Link to="/" className="footer-nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-nav-link">
                    Nursing
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="footer-nav-link">
                    Work Abroad
                  </Link>
                </li>
                <li>
                  <Link to="/heros" className="footer-nav-link">
                    Study Abroad
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="footer-nav-link">
                    Language & Test Prep
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} sm={12} xs={12}>
            <div>
              <div className="d-flex align-items-center mb-3">
                <span>Usefull Information</span>
              </div>
              <ul className="social-links mb-3">
                <li>
                  <a href="https://www.facebook.com/people/Patna-Jesuit-Society-Youth-Ministry/61558331201148/">
                    <FaFacebook className="social-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/patnajesuityouthministry/">
                    <FaInstagram className="social-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <FaTwitter className="social-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com">
                    <FaYoutube className="social-icon" />
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center mb-3">
                <FaPhone className="me-3" />
                <span>+91 - 7200 630 336</span>
              </div>
              <div className="d-flex align-items-center">
                <FaMapMarkerAlt className="me-3" />
                <span>
                  The Executive zone, 766, Anna Salai,
                  <br />
                  Shakti Tower-1, Thousand Lights,
                  <br />
                  Chennai – 600002.
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>Copyright Ⓒ 2025, Skillang.com. All rights reserved.</Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
