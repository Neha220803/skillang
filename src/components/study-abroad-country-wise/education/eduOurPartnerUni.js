import React, { useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import uniPart1 from "../../../assets/images/study-abroad-county-wise/ourPartnerUni1.jpg";
import uniPart2 from "../../../assets/images/study-abroad-county-wise/ourPartnerUni2.jpg";
import uniPart3 from "../../../assets/images/study-abroad-county-wise/ourPartnerUni3.jpg";
import uniPart4 from "../../../assets/images/study-abroad-county-wise/ourPartnerUni14.jpg";
import uniPart5 from "../../../assets/images/study-abroad-county-wise/ourPartnerUni5.jpg";
import { HiOutlineDownload } from "react-icons/hi";
import { ChevronRight } from "react-bootstrap-icons";

const EduOurPartnerUni = () => {
  const universities = [
    {
      id: 1,
      name: "University of Bristol",
      location: "Bristol, England",
      image: uniPart1, // Replace with your actual image path
      qsRank: 55,
    },
    {
      id: 2,
      name: "University of Glasgow",
      location: "Glasgow, Scotland",
      image: uniPart2,
      qsRank: 55,
    },
    {
      id: 3,
      name: "University of Southampton",
      location: "Southampton, England",
      image: uniPart3,
      qsRank: 55,
    },
    {
      id: 4,
      name: "University of Birmingham",
      location: "Birmingham, England",
      image: uniPart4,
      qsRank: 55,
    },
    {
      id: 5,
      name: "University of Bath",
      location: "Bristol, England",
      image: uniPart5,
      qsRank: 55,
    },
  ];

  const scrollContainerRef = useRef(null);

  // Scroll functionality for mobile/smaller screens
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300; // Adjust as needed
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="mb-0 subheading-big-medium text-content-secondary">
          Our Partner Universities
        </div>
        <a
          href="/universities"
          className="text-decoration-none text-content-primary-accent d-flex justify-content-center gap-2 align-items-center"
        >
          View all <ChevronRight />
        </a>
      </div>

      <div className="position-relative">
        {/* Mobile scroll buttons */}
        <div className="d-md-none">
          <button
            className="btn btn-light rounded-circle position-absolute start-0 top-50 translate-middle-y z-1 d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
            onClick={() => scroll("left")}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y z-1 d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
            onClick={() => scroll("right")}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* University cards */}
        <div
          ref={scrollContainerRef}
          className="d-flex flex-nowrap overflow-auto pb-3 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {universities.map((university) => (
            <div
              key={university.id}
              className="me-4"
              style={{ minWidth: "380px", maxWidth: "380px" }}
            >
              <Card className="border-0 h-100">
                <Card.Img
                  variant="top"
                  src={university.image}
                  alt={university.name}
                  className="rounded-3"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className=" m-2 edu-rank-badge">
                  QS Rank {university.qsRank}
                </div>
                <Card.Body className="px-0 pt-3 pb-0">
                  <Card.Title className="subheading-small-medium mb-1">
                    {university.name}
                  </Card.Title>
                  <Card.Text className="caption-medium text-content-tertiary mb-3">
                    {university.location}
                  </Card.Text>
                  <div className="d-flex">
                    <button className="me-2 p-3 d-flex align-items-center btn-secondary-outline">
                      <HiOutlineDownload
                        className="me-2"
                        style={{ width: "24px", height: "auto" }}
                      />{" "}
                      Brochure
                    </button>
                    <button className="d-flex align-items-center btn-secondary">
                      Know More
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EduOurPartnerUni;
