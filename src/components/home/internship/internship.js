import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "react-bootstrap";
import "../../../App.css";
import "./internship.css";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import intern1 from "../../../assets/images/home/intern-1.jpg";
import intern2 from '../../../assets/images/home/intern-2.jpg';
import intern3 from "../../../assets/images/home/intern-3.jpg";
import intern4 from "../../../assets/images/home/intern-4.jpg";
import intern5 from "../../../assets/images/home/intern-5.jpg";
import intern6 from "../../../assets/images/home/intern-6.jpg";
import intern7 from "../../../assets/images/home/intern-7.jpg";
import intern8 from "../../../assets/images/home/intern-8.jpg";

const internCardData = [
  { title: "Job Oriented free study", img: intern1, desc: "No or minimal fee charged for the Ausbildung program in Germany.", colSpan: 4 },
  { title: "No Block Account needed", img: intern2, desc: "There is no block account required to show the fund backup", colSpan: 4 },
  { title: "Earn while you Learn", img: intern3, desc: "Students earn and gain industry experience through paid internships.", colSpan: 4 },
  { title: "Post Study Visa & Placement Assistance", img: intern4, desc: "1.5 years stay-back for post-study work. Placement assistance for job opportunity", colSpan: 6 },
  { title: "Diverse Industry Options", img: intern5, desc: "Diverse industry options available. Over 300+ formal training programs offered", colSpan: 6 },
  { title: "Language Training", img: intern6, desc: "Our language training programs provide expert coaching in German Language", colSpan: 4 },
  { title: "Eligibility", img: intern7, desc: "German Language proficiency: A2 level. 12th passed with above 50%. Age limit: Below 37 years.", colSpan: 4 },
  { title: "PR Possibility", img: intern8, desc: "Our Employability program boosts PR chances in Germany.", colSpan: 4 },
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
        <Row className="mb-lg-4 mb-md-4 text-center w-75">
          <div className="heading-big-medium ">Ausbildung (Internship) Program in Germany</div>
          <div className="paragraph-big-medium text-content-secondary">
            Gain hands-on experience and build a successful career in Germany with the Ausbildung Internship Program.
          </div>
        </Row>
      <div  ref={cardsRef} 
    className={` row-equal-height ${showAll ? "expanded" : ""}`} 
    style={{ 
        maxHeight: screenWidth < 768 ? maxHeight : "none", 
        transition: screenWidth < 768 ? "max-height 0.4s ease-in-out" : "none", 
        overflow: screenWidth < 768 ? "hidden" : "visible"
    }}>
        <Row className="internship-slider-wrapper p-0 m-0">
          {internCardData.map((card, index) => (
            <Col key={index} lg={card.colSpan} md={6} sm={12} xs={12} className=" intern-card-wrapper ">
              <Card 
                className="intern-card d-flex flex-row border-0 me-1"
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <CardBody className="d-flex flex-column justify-content-start align-items-start">
                  <div className="intern-card-text-wrapper">
                    <CardTitle><div className="subheading-small-medium text-content-secondary">{card.title}</div></CardTitle>
                    <div className="caption-medium text-content-tertiary">{card.desc}</div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        </div>
        {/* Toggle Button */}
                        <div className="text-center d-block d-md-none mt-1">
              <button className="btn-secondary-outline" onClick={() => setShowAll(!showAll)}>
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
