import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image1 from "../../images/home/work-journey-1.png";
import "./home-page.css";
import "../../App.css";
import "./work-abroad-journey.css";

const WorkAbroadJourney = () => {
  const timelineData = [
    {
      title: "Creative Director",
      subtitle: "Miami, FL",
      date: "2011 - present",
      description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
      image: image1,
    },
    {
      title: "Art Director",
      subtitle: "San Francisco, CA",
      date: "2010 - 2011",
      description: "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
      image: image1,
    },
    {
      title: "Content Marketing for Web, Mobile and Social Media",
      subtitle: "Online Course",
      date: "April 2013",
      description: "Strategy, Social Media",
      image: image1,
    },
  ];

  return (
    <Container>
      <Row>
        <h1 className="text-center">Work Abroad Journey</h1>
      </Row>
      {timelineData.map((item, index) => (
        <Row key={index} className="align-items-center my-5">
          {index % 2 === 0 ? (
            <>
              <Col lg={5}>
                <Image className="custom-image" src={item.image} alt={item.title} />
              </Col>
              <Col lg={2}>
                <div className="timeline-divider"></div>
              </Col>
              <Col lg={5}>
                <div className="timeline-content">
                  <h2>{item.title}</h2>
                  <h4>{item.subtitle}</h4>
                  <p>{item.description}</p>
                  <span className="timeline-date">{item.date}</span>
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col lg={5}>
                <div className="timeline-content">
                  <h2>{item.title}</h2>
                  <h4>{item.subtitle}</h4>
                  <p>{item.description}</p>
                  <span className="timeline-date">{item.date}</span>
                </div>
              </Col>
              <Col lg={2}>
                <div className="timeline-divider"></div>
              </Col>
              <Col lg={5}>
                <Image className="custom-image" src={item.image} alt={item.title} />
              </Col>
            </>
          )}
        </Row>
      ))}
    </Container>
  );
};

export default WorkAbroadJourney;
