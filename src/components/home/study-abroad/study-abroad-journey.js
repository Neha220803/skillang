  import React from "react";
  import Slider from "react-slick";
  import { Card, CardBody, Col, Container } from "react-bootstrap";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import '../../../App.css';
  import '../home-page.css';
  import './study-abroad-journey.css';
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

  export default function StudyAbroad() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      swipeToSlide: true,
      swipe: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <Container className="max-w-4xl mx-auto" id="study-abroad">
        <h1 className="text-center my-lg-4">Study Abroad Journey</h1>
        <Slider {...settings} className="mx-4">
          {cardData.map((card, index) => (
            <div key={index} className="px-lg-3 py-5">
              <Card className="custom-card border-0 d-flex flex-row-reverse shadow-sm align-items-center justify-content-center" style={{ backgroundColor: card.color }}>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <div className="p-lg-3 p-2">
                    <img src={card.img} alt={card.title} className="study-card-icon" />
                  </div>
                </Col>
                <Col lg={8} md={8} sm={8} xs={8}>
                  <CardBody>
                    <Card.Title className="fw-bold">{card.title}</Card.Title>
                    <p className="card-desc">{card.desc}</p>
                    <button className="btn btn-primary" onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}>Learn More</button>
                  </CardBody>
                </Col>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    );
  }