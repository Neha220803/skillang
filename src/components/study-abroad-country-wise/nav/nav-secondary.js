import React, { useState, useEffect, useRef } from "react";
import { Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./nav-secondary.css";

function NavSecondary() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const navPositionRef = useRef(null);
  const location = useLocation();
  const primaryNavHeight = 70; // Height of your primary navbar in pixels
  const manualScrollRef = useRef(false);

  // Setup Intersection Observer for scrollspy
  useEffect(() => {
    // Define all section IDs
    const sectionIds = [
      "overview",
      "education",
      "admission-requirements",
      "available-scholarships",
      "life",
      "work-opportunities",
      "faq",
    ];

    // Function to determine which section is most visible
    const handleIntersection = (entries) => {
      // Skip if manual scrolling is in progress
      if (manualScrollRef.current) return;

      // Find the entry with the largest intersection ratio
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Sort by intersection ratio (largest first)
        const mostVisible = [...visibleEntries].sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];

        setActiveTab(mostVisible.target.id);
      }
    };

    // Create the observer with options
    const observerOptions = {
      root: null, // viewport
      rootMargin: `-${primaryNavHeight + 50}px 0px -50% 0px`, // Adjust top margin for navbar
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // Multiple thresholds for better accuracy
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      } else {
        console.warn(`Section with id "${id}" not found for scrollspy`);
      }
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []); // Empty dependency array = run once on mount

  // Handle sticky nav and hash URL
  useEffect(() => {
    // Extract the active tab from URL hash if present
    const hash = location.hash.replace("#", "");
    if (hash) {
      setActiveTab(hash);
    }

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
  }, [location, isSticky]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);

    // Set manual scroll flag to prevent Intersection Observer from changing active tab
    manualScrollRef.current = true;

    // Find the section element and scroll to it
    const element = document.getElementById(tabName);
    if (element) {
      const yOffset = -(primaryNavHeight + 50); // Adjust for both navbars
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      // Reset manual scroll flag after animation completes
      setTimeout(() => {
        manualScrollRef.current = false;
      }, 1000); // 1 second should cover most scroll animations
    }

    // Update URL hash
    window.history.pushState(null, "", `#${tabName}`);
  };

  return (
    <div
      ref={navRef}
      className={`secondary-nav-container ${isSticky ? "sticky-active" : ""}`}
    >
      <Container className="d-flex align-items-center justify-content-center">
        <Nav className="secondary-nav">
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "overview" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("overview")}
          >
            Overview
          </Nav.Link>
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "education" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("education")}
          >
            Education
          </Nav.Link>
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "admission-requirements" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("admission-requirements")}
          >
            Admission Requirements
          </Nav.Link>
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "available-scholarships" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("available-scholarships")}
          >
            Available Scholarships
          </Nav.Link>
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "life" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("life")}
          >
            Life in UK
          </Nav.Link>
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "work-opportunities" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("work-opportunities")}
          >
            Work Opportunities
          </Nav.Link>
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "faq" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("faq")}
          >
            FAQ
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
}

export default NavSecondary;
