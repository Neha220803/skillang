import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import "../../../../App.css";
import "./internship.css";

// Import desktop images
import intern1 from "../../../../assets/images/home/intern-1.jpg";
import intern2 from "../../../../assets/images/home/intern-2.jpg";
import intern3 from "../../../../assets/images/home/intern-3.jpg";
import intern4 from "../../../../assets/images/home/intern-4.jpg";
import intern5 from "../../../../assets/images/home/intern-5.jpg";
import intern6 from "../../../../assets/images/home/intern-6.jpg";
import intern7 from "../../../../assets/images/home/intern-7.jpg";
import intern8 from "../../../../assets/images/home/intern-8.jpg";

// Import mobile images
import intern1Mobile from "../../../../assets/images/home/intenr-mobile-1.jpg";
import intern2Mobile from "../../../../assets/images/home/intenr-mobile-2.jpg";
import intern3Mobile from "../../../../assets/images/home/intenr-mobile-3.jpg";
import intern4Mobile from "../../../../assets/images/home/intenr-mobile-4.jpg";
import intern5Mobile from "../../../../assets/images/home/intenr-mobile-5.jpg";
import intern6Mobile from "../../../../assets/images/home/intenr-mobile-6.jpg";
import intern7Mobile from "../../../../assets/images/home/intenr-mobile-7.jpg";
import intern8Mobile from "../../../../assets/images/home/intenr-mobile-8.jpg";

const internCardData = [
  {
    title: "Job Oriented free study",
    img: intern1,
    mobileImg: intern1Mobile,
    id: "intern-mobile-card-half",
    desc: "No or minimal fee charged for the Ausbildung program in Germany.",
    colSpan: 4,
    mobileColSpan: 6, //  width on mobile
  },
  {
    title: "No Block Account needed",
    img: intern2,
    mobileImg: intern2Mobile,
    id: "intern-mobile-card-half",
    desc: "There is no block account required to show the fund backup",
    colSpan: 4,
    mobileColSpan: 6,
  },
  {
    title: "Earn while you Learn",
    img: intern3,
    mobileImg: intern3Mobile,
    id: "intern-mobile-card-full",
    desc: "Students earn and gain industry experience through paid internships.",
    colSpan: 4,
    mobileColSpan: 12,
  },
  {
    title: "Post Study Visa & Placement Assistance",
    img: intern4,
    mobileImg: intern4Mobile,
    id: "intern-mobile-card-half",
    desc: "1.5 years stay-back for post-study work. Placement assistance for job opportunity",
    colSpan: 6,
    mobileColSpan: 6,
  },
  {
    title: "Diverse Industry Options",
    id: "intern-mobile-card-half",
    img: intern5,
    mobileImg: intern5Mobile,

    desc: "Diverse industry options available. Over 300+ formal training programs offered",
    colSpan: 6,
    mobileColSpan: 6,
  },
  {
    title: "Language Training",
    img: intern6,
    mobileImg: intern6Mobile,
    id: "intern-mobile-card-full",
    desc: "Our language training programs provide expert coaching in German Language",
    colSpan: 4,
    mobileColSpan: 12,
  },
  {
    title: "Eligibility",
    img: intern7,
    mobileImg: intern7Mobile,
    id: "intern-mobile-card-half",
    desc: "German Language proficiency: A2 level. 12th passed with above 50%. Age limit: Below 37 years.",
    colSpan: 4,
    mobileColSpan: 6,
  },
  {
    title: "PR Possibility",
    img: intern8,
    mobileImg: intern8Mobile,
    id: "intern-mobile-card-half",
    desc: "Our Employability program boosts PR chances in Germany.",
    colSpan: 4,
    mobileColSpan: 6,
  },
];

const InternshipSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [maxHeight, setMaxHeight] = useState("500px"); // Default max height
  const cardsRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (cardsRef.current) {
      setMaxHeight(showAll ? `${cardsRef.current.scrollHeight}px` : "500px");
    }
  }, [showAll]);

  return (
    <section className="d-flex flex-column align-items-center justify-content-center ">
      <Container className="d-flex flex-column align-items-center justify-content-center gap-4">
        <Row className=" text-center intern-heading-wrapper">
          <h1 className="heading-big-medium">
            Ausbildung (Internship) Program in Germany
          </h1>
          <div className="paragraph-big-medium text-content-secondary">
            Gain hands-on experience and build a successful career in Germany
            with the Ausbildung Internship Program.
          </div>
        </Row>
        <div
          ref={cardsRef}
          className={`service-offering-cards-container row-equal-height ${
            showAll ? "expanded" : ""
          }`}
          style={{
            maxHeight: screenWidth < 768 ? maxHeight : "none",
            transition:
              screenWidth < 768 ? "max-height 0.4s ease-in-out" : "none",
            overflow: screenWidth < 768 ? "hidden" : "visible",
          }}
        >
          <Row className="internship-slider-wrapper p-0 m-0">
            {internCardData.map((card, index) => (
              <Col
                key={index}
                lg={card.colSpan}
                md={6}
                sm={card.mobileColSpan}
                xs={card.mobileColSpan} // Use mobile-specific column size
                className="intern-card-wrapper bg-primar p-2 p-lg-3"
              >
                <Card
                  className="intern-card d-flex flex-row"
                  id={card.id}
                  style={{
                    backgroundImage: `url(${
                      screenWidth < 768 ? card.mobileImg : card.img
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <CardBody className="d-flex flex-column justify-content-start align-items-start p-0">
                    <div className="intern-card-text-wrapper">
                      <CardTitle>
                        <div className="subheading-small-medium text-content-secondary">
                          {card.title}
                        </div>
                      </CardTitle>
                      <div className="caption-medium text-content-tertiary">
                        {card.desc}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Toggle Button */}
        <div className="text-center d-block d-md-none mt-1">
          <button
            className="btn-secondary-outline"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                Close <ChevronUp className="ms-1" />
              </>
            ) : (
              <>
                View All <ChevronDown className="ms-1" />
              </>
            )}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default InternshipSection;
