import React from "react";
import { Card, CardBody, CardImg, CardText, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../App.css';
import './study-abroad-journey.css';
import work1 from "../../../assets/images/reusable/s-journey-1.png";
import work2 from "../../../assets/images/reusable/s-journey-2.png";
import work3 from "../../../assets/images/reusable/s-journey-3.png";
import work4 from "../../../assets/images/reusable/s-journey-4.png";
import work5 from "../../../assets/images/reusable/s-journey-5.png";
import work6 from "../../../assets/images/reusable/s-journey-6.png";
import work7 from "../../../assets/images/reusable/s-journey-7.png";
import work8 from "../../../assets/images/reusable/s-journey-8.png";
import work9 from "../../../assets/images/reusable/s-journey-9.png";

const cardData = [
  { title: "Explore Universities and Courses", desc: "Experts guide you based on interests and background. Recommendations tailored to fit your budget.", img: work1 },
  { title: "Personalised counselling", desc: "Clarify doubts before finalizing decisions. Multiple sessions ensure thorough understanding.", img: work2 },
  { title: "Test Preparation", desc: "Personalized plans based on your strengths and challenges. Expert guidance for IELTS, TOEFL, and more.", img: work3 },
  { title: "Alumni & University Rep Connect", desc: "Connect with alumni for personalized insights. One-on-one discussions with university representatives.", img: work4 },
  { title: "University Application Process", desc: "Our team guides you through the university application process. Real-time tracking of your application status.", img: work5 },
  { title: "Education Loan Assistance", desc: "Our Loan team connects you with financial institutions. Assistance provided for seamless loan processing.", img: work6 },
  { title: "Travel and Accommodations", desc: "End-to-end guidance for travel and accommodation. Secure and affordable cost options.", img: work7 },
  { title: "Post Travel Support", desc: "Skillang membership grants access to alumni network. Connect, learn, and network in your destination country.", img: work8 },
  { title: "Job Assistance", desc: "Our Career support team assists with job applications. Guidance for part-time and full-time jobs abroad.", img: work9 },
];

export default function StudyAbroad() {
  return (
    <Container className="mx-auto align-items-center justify-content-center study-abroad-bg text-white" id="study-abroad">
      <div className="text-center my-lg-4 heading-big-medium">Study Abroad Journey</div>
      
      {/* Scrollable Row */}
      <div className="countrys-list">
        <Row className="d-flex flex-nowrap">
          {cardData.map((card, index) => (
            <div key={index} className="px-3">
              <Card className="custom-card my-4 border-0 d-flex align-items-center justify-content-center text-white" >
                <div className="p-lg-3 p-2 card-image-wrapper" style={{ backgroundImage: `url(${card.img})` }}></div>
                <CardBody>
                  <Card.Title className="fw-bold"><h3>{card.title}</h3></Card.Title>
                  <CardText className="card-desc">{card.desc}</CardText>
                  <button className="btn btn-primary" onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}>Learn More</button>
                </CardBody>
              </Card>
            </div>
          ))}
        </Row>
      </div>
    </Container>
  );
}
