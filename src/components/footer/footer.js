import React from "react";
import logo from "../../assets/images/logo-3.svg";
import { Container, Col, Row, Image } from "react-bootstrap";
import { FaPhone, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import './footer.css';
import footerimg from '../../assets/images/home/footer-img.png';
import '../../index.css';
import '../../App.css';

const FooterSection = () => {
  return (
    <footer className="footer-container">
      <Container className="footer-bg rounded-4 p-0 px-4 my-4">
        <Row className="align-items-center">
          <Col md={6} className="d-none d-md-block" >
            <Image fluid src={footerimg} />
          </Col>
          <Col md={6} className="justify-content-start align-items-start text-start">
            <h1 className="my-4">Gateway to Global Career</h1>
            <img src={logo} alt="Logo" className="mb-3 footer-logo" />
            <p>© 2025 All Rights Reserved, Skillang</p>
          </Col>
          <Col sm={6} xs={6} className="d-block d-md-none ms-auto d-flex justify-content-start " style={{overflow:'hidden'}}>
  <Image src={footerimg} alt="Partner Image" style={{ height: '130px'}} />
</Col>


        </Row>
      </Container>

      <Container className="rounded-4 mb-4 d-flex flex-column align-items-stretch justify-content-end">
        <Row className="d-flex align-items-stretch justify-content-end">
          <Col lg={8} className="bg-light rounded-4 p-3">
            <Row className="d-flex flex-wrap gap-4 px-5 py-4">
              <Col>
                <ul className="footer-nav">
                  <li><Link to="/" className="footer-nav-link"><p>Home</p></Link></li>
                  <li><Link to="/about" className="footer-nav-link"><p>Nursing </p></Link></li>
                  <li><Link to="/programs" className="footer-nav-link"><p>Work Abroad </p></Link></li>
                </ul>
              </Col>
              <Col>
                <ul className="footer-nav">
                  <li><Link to="/" className="footer-nav-link"><p>Study Abroad </p></Link></li>
                  <li><Link to="/about" className="footer-nav-link"><p>Language Prep </p></Link></li>
                  <li><Link to="/about" className="footer-nav-link"><p>Test Prep </p></Link></li>
                </ul>
              </Col>
              <Col>
                <ul className="footer-nav">
                  <li><Link to="/" className="footer-nav-link"><p>Login/Sign Up </p></Link></li>
                  <li><Link to="/about" className="footer-nav-link"><p>Contact Us </p></Link></li>
                  <li><Link to="/about" className="footer-nav-link"><p>News & Blogs </p></Link></li>
                </ul>
              </Col>
              <Col>
                <ul className="footer-nav">
                  <li><Link to="/" className="footer-nav-link"><p>Terms of Use </p></Link></li>
                  <li><Link to="/about" className="footer-nav-link"><p>Privacy Policy </p></Link></li>
                </ul>
              </Col>
            </Row>
          </Col>
          
         <Col lg={4} className="d-flex justify-content-end align-items-end ">
  <div className="bg-light rounded-4 px-3 mt-2 mt-lg-0">
    <div className="d-flex flex-column align-items-start p-3">
      <h4>Socials</h4>
      <div className="d-flex gap-3 mb-3">
        <FaFacebook className="social-icon fb" />
        <FaInstagram className="social-icon ig" />
        <FaTwitter className="social-icon tw" />
        <FaYoutube className="social-icon gl" />
      </div>
      <p><FaPhone className="me-2"/> +91 - 7200 630 336</p>
      <p>The Executive zone, 766, Anna Salai, Shakti Tower-1, Thousand Lights, Chennai <br></br>Pincode - 600002.</p>
    </div>
  </div>
</Col>

        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;