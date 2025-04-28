import React, { useState } from "react";
import { Container, Row, Col, Nav, ListGroup } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import "./TopScholarship.css"; // Import your CSS file for styling
import "../../../../index.css";

const TopScholarshipComp = () => {
  const [activeCountry, setActiveCountry] = useState("UK");

  const countries = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Ireland",
    "NewZealand",
    "Singapore",
    "Switzerland",
    "Asia",
    "Europe",
  ];

  // Scholarship data - can be expanded or fetched from API
  const scholarships = {
    UK: [
      {
        name: "Erasmus Mundus Joint Masters Degree Scholarship",
        link: "#",
      },
      {
        name: "Commonwealth Scholarship and Fellowship Plan",
        link: "#",
      },
      {
        name: "Dr. Manmohan Singh Scholarships",
        link: "#",
      },
      {
        name: "Country Experience",
        link: "#",
      },
      {
        name: "Commonwealth Scholarship and Fellowship Plan",
        link: "#",
      },
      {
        name: "Dr. Manmohan Singh Scholarships",
        link: "#",
      },
      {
        name: "Country Experience",
        link: "#",
      },
      {
        name: "Commonwealth Scholarship and Fellowship Plan",
        link: "#",
      },
      {
        name: "Dr. Manmohan Singh Scholarships",
        link: "#",
      },
      {
        name: "Country Experience",
        link: "#",
      },
    ],
    USA: [
      {
        name: "Fulbright Scholarship Program",
        link: "#",
      },
      {
        name: "Humphrey Fellowship Program",
        link: "#",
      },
      {
        name: "Harvard University Scholarships",
        link: "#",
      },
      {
        name: "Stanford University Scholarships",
        link: "#",
      },
    ],
    // Add more scholarship data for other countries as needed
    Canada: [
      {
        name: "Vanier Canada Graduate Scholarships",
        link: "#",
      },
      {
        name: "Trudeau Foundation Scholarships",
        link: "#",
      },
    ],
    Australia: [
      {
        name: "Australia Awards Scholarships",
        link: "#",
      },
      {
        name: "Endeavour Leadership Program",
        link: "#",
      },
    ],
    // Default empty arrays for other countries
    Ireland: [],
    NewZealand: [],
    Singapore: [],
    Switzerland: [],
    Asia: [],
    Europe: [],
  };

  // Make sure all countries have at least an empty array of scholarships
  countries.forEach((country) => {
    if (!scholarships[country]) {
      scholarships[country] = [];
    }
  });

  return (
    <Container className="">
      <Container>
        <h1 className="heading-big-medium mb-5 pb-5">Top Scholarships</h1>

        {/* Country selection tabs */}
        <Nav
          variant="pills"
          className="flex-row flex-nowrap mb-4 overflow-auto"
          style={{ gap: "10px" }}
        >
          {countries.map((country) => (
            <Nav.Item key={country}>
              <Nav.Link
                className={`rounded-pill px-3 py-2 ${
                  activeCountry === country
                    ? "bg-dark text-white"
                    : "bg-light text-dark"
                }`}
                onClick={() => setActiveCountry(country)}
                style={{
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  border: "1px solid #dee2e6",
                }}
              >
                {country}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Scholarship listings */}
        <Row>
          <Col md={6}>
            <ListGroup variant="flush">
              {scholarships[activeCountry]
                .slice(0, Math.ceil(scholarships[activeCountry].length / 2))
                .map((scholarship, index) => (
                  <div key={`left-${index}`} className="top-scholars-list mb-3">
                    <span>{scholarship.name}</span>
                    <FaChevronRight color="#6c757d" />
                  </div>
                ))}
            </ListGroup>
          </Col>

          <Col md={6}>
            <ListGroup variant="flush">
              {scholarships[activeCountry]
                .slice(Math.ceil(scholarships[activeCountry].length / 2))
                .map((scholarship, index) => (
                  <div
                    key={`right-${index}`}
                    className="top-scholars-list mb-3"
                  >
                    <span className="paragraph-big-medium text-content-secondary">
                      {scholarship.name}
                    </span>
                    <FaChevronRight color="#6c757d" />
                  </div>
                ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default TopScholarshipComp;
