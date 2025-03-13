import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import foorImg from "../../assets/images/home/footer-img.png";
import logo from "../../assets/images/logos/logo-3.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <Container>
        <Row className="mb-4">
          <Col xs={12}>
            <div className="footer-card" id="footer-card-1">
              <Row className="align-items-center">
                <Col md={5}>
                  <div className="d-flex bg-primar justify-content-cente align-items-center">
                    <Image
                      src={foorImg}
                      alt="Healthcare and Business Professionals"
                      className="professionals-image d-none d-md-block"
                    />
                  </div>
                </Col>
                <Col md={7} xs={12} sm={12}>
                  <div className="banner-content">
                    <div className="banner-title heading-small-medium">
                      Gateway to Global Career
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <div className="skillang-logo-container">
                        <Image
                          src={logo}
                          alt="Skillang Logo"
                          className="skillang-logo"
                        />
                      </div>
                    </div>
                    <p className="copyright-text mt-2">
                      © 2025 All Rights Reserved, Skillang
                    </p>
                  </div>
                </Col>
                <Col sm={12} xs={12} className="d-block d-md-none ">
                  <Image
                    src={foorImg}
                    alt="Healthcare and Business Professionals"
                    className="professionals-image"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Navigation and Contact Cards */}
        <Row>
          <Col lg={8} className="pe-lg-2 mb-4 mb-lg-0">
            <div className="footer-card">
              <Row>
                <Col xs={6} md={3}>
                  <ul className="footer-links">
                    <li>
                      <a href="/">
                        <div className="caption-medium"> Home</div>
                      </a>
                    </li>
                    <li>
                      <a href="/nursing">
                        <div className="caption-medium">Nursing</div>
                      </a>
                    </li>
                    <li>
                      <a href="/work-abroad">
                        <div className="caption-medium">Work Abroad</div>
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col xs={6} md={3}>
                  <ul className="footer-links">
                    <li>
                      <a href="/study-abroad">
                        <div className="caption-medium"> Study Abroad</div>
                      </a>
                    </li>
                    <li>
                      <a href="/lang-test-prep">
                        <div className="caption-medium"> Language Prep</div>
                      </a>
                    </li>
                    <li>
                      <a href="/lang-test-prep">
                        <div className="caption-medium"> Test Prep</div>
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col xs={6} md={3} className="mt-4 mt-md-0 d-none d-md-block">
                  <ul className="footer-links">
                    <li>
                      <a href="/">
                        <div className="caption-medium">Login/Sign Up</div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="caption-medium">Contact Us</div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="caption-medium">News & Blogs</div>
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col xs={6} md={3} className="mt-4 mt-md-0 d-none d-md-block">
                  <ul className="footer-links">
                    <li>
                      <a href="/">
                        <div className="caption-medium">Terms of Use</div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="caption-medium">Privacy Policy</div>
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={4} className="ps-lg-2">
            <div className="footer-card">
              <div className="subheading-small-medium">Socials</div>
              <div className="social-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
              </div>
              <div className="contact-phone">
                <a href="tel:+917200630336">
                  <FaPhone />
                  <span>+91 - 7200 630 336</span>
                </a>
              </div>
              <div className="contact-address">
                <FaMapMarkerAlt />
                <p className="caption-medium">
                  The Executive zone, 766, Anna Salai,
                  <br />
                  Shakti Tower-1, Thousand Lights, Chennai
                  <br />
                  Pincode - 600002.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
