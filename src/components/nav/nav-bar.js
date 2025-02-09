import {React,useState} from "react";
import {Container,Image} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";
import "../../index.css";
import logo from '../../images/logo-3.svg';

// Dynamically set the base path
const BASE_PATH = process.env.PUBLIC_URL || '';

function CustomNavbar() {
   const [expanded, setExpanded] = useState(false);

    // Function to handle scrolling to sections and collapsing the navbar
  const handleScroll = (sectionId, event) => {
  event.preventDefault(); // Prevent the default link behavior
  if (sectionId) {
    const targetId = `#${sectionId}`;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  }
  setExpanded(false); // Collapse the navbar
};




    const handleNavbarToggle = () => setExpanded(!expanded);
  return (
    <Navbar expand="lg" className="py-2 fixed-top navcont">
      <Container className="d-flex align-items-center">
        {/* Left: Brand */}
        <Navbar.Brand href={`${BASE_PATH}/#`}>
          {/* <div className="nav-head">Skillang</div>  */}
          <Image src={logo} style={{width:'150px' , height:'50px'}}/>
        </Navbar.Brand>

        {/* Center: Nav Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto"> {/* Centers the nav items */}
            <Nav.Link href={`${BASE_PATH}/#`} onClick={(e) => handleScroll('', e)} className="navpaths">Home</Nav.Link>
<Nav.Link href={`${BASE_PATH}/#work-abroad`} onClick={(e) => handleScroll('work-abroad', e)} className="navpaths">Nursing</Nav.Link>
<Nav.Link href={`${BASE_PATH}/#work-abroad-journey`} onClick={(e) => handleScroll('work-abroad-journey', e)} className="navpaths">Work Abroad</Nav.Link>
<Nav.Link href={`${BASE_PATH}/#study-abroad`} onClick={(e) => handleScroll('study-abroad', e)} className="navpaths">Study Abroad</Nav.Link>
<Nav.Link href={`${BASE_PATH}/#lang-test`} onClick={(e) => handleScroll('lang-test', e)} className="navpaths">Language & Test</Nav.Link>
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
