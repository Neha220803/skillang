import React from "react";
import { Card, CardBody, Container, Row } from "react-bootstrap";
import Slider from "react-styled-carousel";
import "../home-page.css";
import "../../../App.css";
import "./study-abroad-journey.css";
import work1 from "../../../images/home/s-journey-1.svg";
import work2 from "../../../images/home/s-journey-2.svg";
import work3 from "../../../images/home/s-journey-3.svg";
import work4 from "../../../images/home/s-journey-4.svg";
import work5 from "../../../images/home/s-journey-5.svg";
import work6 from "../../../images/home/s-journey-6.svg";
import work7 from "../../../images/home/s-journey-7.svg";
import work8 from "../../../images/home/s-journey-8.svg";
import work9 from "../../../images/home/s-journey-9.svg";

const cardData = [
  { title: "Explore Universities and Courses", desc: "Experts guide you based on interests and background. Recommendations tailored to fit your budget.", img: work1, color: "#F7F7F2" },
  { title: "Personalised counselling", desc: "Clarify doubts before finalizing decisions. Multiple sessions ensure thorough understanding.", img: work2, color: "#F7F2F2" },
  { title: "Test Preparation", desc: "Personalized plans based on your strengths and challenges. Expert guidance for IELTS, TOEFL, and more.", img: work3, color: "#F3F7F2" },
  { title: "Alumni & University Rep Connect", desc: "Connect with alumni for personalized insights. One-on-one discussions with university representatives.", img: work4, color: "#F2F6F7" },
  { title: "University Application Process", desc: "Our team guides you through the university application process. Real-time tracking of your application status.", img: work5, color: "#F2F4F7" },
  { title: "Education Loan Assistance", desc: "Our Loan team connects you with financial institutions. Assistance provided for seamless loan processing.", img: work6, color: "#F6F2F7" },
  { title: "Travel and Accommodations", desc: "End-to-end guidance for travel and accommodation. Secure and affordable cost options.", img: work7, color: "#F7F2F4" },
  { title: "Post Travel Support", desc: "Skillang membership grants access to alumni network. Connect, learn, and network in your destination country.", img: work8, color: "#F2F7F7" },
  { title: "Job Assistance", desc: "Our Career support team assists with job applications. Guidance for part-time and full-time jobs abroad.", img: work9, color: "#F2F3F7" },
];

const responsive = [
  { breakPoint: 1280, cardsToShow: 2 },
  { breakPoint: 760, cardsToShow: 2 },
  { breakPoint: 480, cardsToShow: 2 },
];

const StudyAbroadJourney = () => {
  return (
    <section className="study-abroad-section d-flex flex-column align-items-center justify-content-center my-3 gap-5">
      <h1 className="text-center">Study Abroad Journey</h1>
      <Container>
        <Row className="d-flex flex-column align-items-center justify-content-center">
             <Slider responsive={responsive} showDots={true} infinite={true} autoSlide={3000}>
        {cardData.map((card, index) => (
          <Card key={index} className="custom-card border-0 d-flex flex-row-reverse shadow-sm align-items-center justify-content-center" style={{ backgroundColor: card.color }}>
            <div className="text-center p-3">
              <img src={card.img} alt="Icon" className="sec-card-icon" style={{ width: "150px", height: "auto" }} />
            </div>
            <CardBody className="text-start">
              <Card.Title className="fw-bold">{card.title}</Card.Title>
              <p className="card-desc">{card.desc}</p>
              <button className="btn-primary">Learn More</button>
            </CardBody>
          </Card>
        ))}
      </Slider>
        </Row>
      </Container>
         <Row className="d-flex align-items-center justify-content-center">
            <button className="btn-primary-outline">Book Your Free Counselling Slot Now</button>
        </Row>
    </section>
  );
};

export default StudyAbroadJourney;
