import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "react-bootstrap";
import "../../../App.css";
import "./internship.css";
import intern1 from "../../../assets/images/home/intern-1.svg";
import intern2 from "../../../assets/images/home/intern-2.svg";
import intern3 from "../../../assets/images/home/intern-3.svg";
import intern4 from "../../../assets/images/home/intern-4.svg";
import intern5 from "../../../assets/images/home/intern-5.svg";
import intern6 from "../../../assets/images/home/intern-6.svg";
import intern7 from "../../../assets/images/home/intern-7.svg";
import intern8 from "../../../assets/images/home/intern-8.svg";

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
  return (
    <section className="d-flex flex-column align-items-center justify-content-center py-5">
      <Container className="d-flex flex-column align-items-center justify-content-center gap-4">
        <Row className="mb-lg-4 mb-md-4 text-center w-75">
          <div className="heading-big-medium">Ausbildung (Internship) Program in Germany</div>
          <div className="paragraph-big-medium text-content-secondary">
            Gain hands-on experience and build a successful career in Germany with the Ausbildung Internship Program.
          </div>
        </Row>

        <Row className="internship-slider-wrapper p-0 m-0">
          {internCardData.map((card, index) => (
            <Col key={index} lg={card.colSpan} md={6} sm={12} className="intern-card-wrapper">
              <Card 
                className="intern-card d-flex flex-row border-0 "
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <CardBody className="d-flex flex-column justify-content-start align-items-start">
                  <div className="intern-card-text-wrapper">
                    <CardTitle><div className="subheading-small-medium text-content-secondary">{card.title}</div></CardTitle>
                    <p className="caption-medium text-content-tertiary">{card.desc}</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default InternshipSection;
