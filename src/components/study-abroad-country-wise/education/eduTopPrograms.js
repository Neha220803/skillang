import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TbCalendarTime } from "react-icons/tb";
import { GiCoins } from "react-icons/gi";
import { ChevronRight, ChevronDown } from "react-bootstrap-icons";
import countryWiseData from "../../../data/countryWiseData";
import "./education.css";

const EduTopProgramsComponent = ({ country = "uk" }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [showAllMobile, setShowAllMobile] = useState(false);

  // Sample programs data
  const data = countryWiseData[country];
  const programsData = data.education.topPrograms;

  // Filter programs based on active tab
  const filteredPrograms =
    activeTab === "all"
      ? programsData
      : programsData.filter((program) => program.type === activeTab);

  // For mobile view, limit to 3 programs initially
  const displayedPrograms = showAllMobile
    ? filteredPrograms
    : filteredPrograms.slice(0, 3);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="subheading-big-medium text-content-secondary mb-0">
          Top Programs in United Kingdom
        </div>
        <a
          href="/universities"
          className="text-decoration-none text-content-primary-accent justify-content-center gap-2 align-items-center d-none d-md-flex"
        >
          View all <ChevronRight />
        </a>
      </div>

      {/* Program Type Tabs */}
      <Nav className="mb-4 program-tabs" variant="pills">
        <Nav.Item>
          <Nav.Link
            className={`rounded-pill me-2 mb-2 px-3 py-1 ${
              activeTab === "all" ? "bg-dark text-white" : "bg-light text-dark"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={`rounded-pill me-2 mb-2 px-3 py-1 ${
              activeTab === "bachelors"
                ? "bg-dark text-white"
                : "bg-light text-dark"
            }`}
            onClick={() => setActiveTab("bachelors")}
          >
            Bachelor's
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={`rounded-pill me-2 mb-2 px-3 py-1 ${
              activeTab === "masters"
                ? "bg-dark text-white"
                : "bg-light text-dark"
            }`}
            onClick={() => setActiveTab("masters")}
          >
            Master's
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={`rounded-pill me-2 mb-2 px-3 py-1 ${
              activeTab === "phd" ? "bg-dark text-white" : "bg-light text-dark"
            }`}
            onClick={() => setActiveTab("phd")}
          >
            Ph.D
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Desktop view - horizontal scrolling */}
      <div
        className="edu-top-progs-container pb-3"
        style={{ display: "none" }}
        id="desktop-programs"
      >
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="me-4"
            style={{ minWidth: "280px", maxWidth: "280px" }}
          >
            <Card className="h-100 edu-top-progs-card d-flex">
              <Card.Title className="paragraph-big-medium mb-3">
                {program.title}
              </Card.Title>
              <Card.Body className="p-0 d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <div className="d-flex align-items-center text-content-secondary mb-2">
                    <FaGraduationCap className="me-2" />
                    <div className="paragraph-small-medium text-content-secondary">
                      {program.degree}
                    </div>
                  </div>

                  <div className="d-flex align-items-center text-content-secondary mb-2">
                    <TbCalendarTime className="me-2" />
                    <div className="paragraph-small-medium text-content-secondary">
                      {program.duration}
                    </div>
                  </div>

                  <div className="d-flex align-items-center text-content-secondary mb-2">
                    <IoLocationOutline className="me-2" />
                    <div className="paragraph-small-medium ">
                      {program.university}
                    </div>
                  </div>

                  <div className="d-flex align-items-center text-content-secondary mb-3">
                    <GiCoins className="me-2" />
                    <div className="paragraph-small-medium">
                      Avg Salary: {program.salary}
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-auto">
                  <button className="btn-primary-outline me-2">
                    <IoBookmarksOutline
                      style={{ width: "24px", height: "24px" }}
                    />
                  </button>
                  <button className="btn-primary w-100">
                    Check Eligibility
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Mobile view - vertical cards */}
      <div id="mobile-programs">
        <Row>
          {displayedPrograms.map((program) => (
            <Col xs={12} className="mb-4" key={program.id}>
              <Card className="h-100 edu-top-progs-card d-flex">
                <Card.Title className="paragraph-big-medium mb-3">
                  {program.title}
                </Card.Title>
                <Card.Body className="p-0 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <div className="d-flex align-items-center text-content-secondary mb-2">
                      <FaGraduationCap className="me-2" />
                      <div className="paragraph-small-medium text-content-secondary">
                        {program.degree}
                      </div>
                    </div>

                    <div className="d-flex align-items-center text-content-secondary mb-2">
                      <TbCalendarTime className="me-2" />
                      <div className="paragraph-small-medium text-content-secondary">
                        {program.duration}
                      </div>
                    </div>

                    <div className="d-flex align-items-center text-content-secondary mb-2">
                      <IoLocationOutline className="me-2" />
                      <div className="paragraph-small-medium ">
                        {program.university}
                      </div>
                    </div>

                    <div className="d-flex align-items-center text-content-secondary mb-3">
                      <GiCoins className="me-2" />
                      <div className="paragraph-small-medium">
                        Avg Salary: {program.salary}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-auto">
                    <button className="btn-primary-outline me-2">
                      <IoBookmarksOutline
                        style={{ width: "24px", height: "24px" }}
                      />
                    </button>
                    <button className="btn-primary w-100">
                      Check Eligibility
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* View all button for mobile */}
        {filteredPrograms.length > 3 && (
          <div className="text-center">
            <button
              className="btn-ghost"
              onClick={() => setShowAllMobile(!showAllMobile)}
            >
              {showAllMobile ? "Show Less" : "View all Programs"}
              <ChevronDown className="ms-2" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default EduTopProgramsComponent;
