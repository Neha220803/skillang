import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./nav-study-landing.css";

const NavStudyLanding = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const navPositionRef = useRef(null);
  const primaryNavHeight = 70; // Adjust this to match your primary navbar height

  // Handle sticky nav behavior
  useEffect(() => {
    // Store the initial position of the navbar
    if (navRef.current) {
      // Get position after everything has loaded
      setTimeout(() => {
        navPositionRef.current =
          navRef.current.getBoundingClientRect().top + window.scrollY;
      }, 100);
    }

    // Add scroll event listener to handle sticky behavior
    const handleScroll = () => {
      if (!navPositionRef.current && navRef.current) {
        navPositionRef.current =
          navRef.current.getBoundingClientRect().top + window.scrollY;
      }

      if (navPositionRef.current) {
        // We want it to stick when the distance from the top of the document
        // to the navbar's original position is about to become less than the
        // height of the primary navbar
        const shouldBeSticky =
          window.scrollY > navPositionRef.current - primaryNavHeight;

        if (shouldBeSticky !== isSticky) {
          setIsSticky(shouldBeSticky);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Call once to set initial state
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <>
      <div
        ref={navRef}
        className={`study-sec-nav-bg ${isSticky ? "sticky-active" : ""}`}
      >
        <Container>
          <Row className="d-flex justify-content-between align-items-center">
            <Col className="text-start">
              <div className="subheading-big-medium">
                Start Your Study Abroad Journey
              </div>
            </Col>
            <Col className="text-end">
              <button className="btn btn-primary">
                Book Free Consultation
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      {isSticky && <div className="nav-placeholder"></div>}
    </>
  );
};

export default NavStudyLanding;
