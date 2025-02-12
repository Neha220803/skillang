import React from "react";
import Slider from "react-slick";
import {
  CardBody,
  CardTitle,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import "../home-page.css";
import "../../../App.css";
import "./internship.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import intern1 from "../../../images/home/intern-1.svg";
import intern2 from "../../../images/home/intern-2.svg";
import intern3 from "../../../images/home/intern-3.svg";
import intern4 from "../../../images/home/intern-4.svg";
import intern5 from "../../../images/home/intern-5.svg";
import intern6 from "../../../images/home/intern-6.svg";
import intern7 from "../../../images/home/intern-7.svg";
import intern8 from "../../../images/home/intern-8.svg";

const internCardData = [
  { title: "Job Oriented free study", img: intern1, desc: "No or minimal fee charged for the Ausbildung program in germany." },
  { title: "No Block Account needed", img: intern2, desc: "There is no block account required to show the fund backup" },
  { title: "Earn while you Learn", img: intern3, desc: "Students earn and gain industry experience through paid internships." },
  { title: "Language Training", img: intern4, desc: "Our language training programs provide expert coaching in German Language" },
  { title: "Eligibility", img: intern5, desc: "German Language proficiency: A2 level. 12th passed with aboave 50%. Age limit: Below 37 years." },
  { title: "PR Possibility", img: intern6, desc: "Our Employability program boosts PR chances in Germany." },
  { title: "Post Study Visa & Placement Assistance", img: intern7, desc: "1.5 years stay-back for post-study work. Placement assistance for job opportunity" },
  { title: "Diverse Industry Options", img: intern8, desc: "Diverse industry options available. Over 300+ formal training programs offered" },
];

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false, 
      },
    },
     {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false, 
      },
    },
  ],
};

const InternshipSection = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5">
      <Container className="d-flex flex-column align-items-center justify-content-center gap-4">
        <Row className="mb-4">
          <h1>Ausbildung (internship) Program in Germany</h1>
        </Row>

       <Row className="internship-slider-wrapper">
  <Slider {...sliderSettings}>
    {internCardData.map((card, index) => (
      <div key={index} className="intern-card-wrapper">  {/* Changed from Col to div */}
        <Card className="intern-card d-flex flex-row border-0">
          <div className="intern-card-icon-wrapper">
            <img src={card.img} alt="Icon" className="intern-card-icon" />
          </div>
          <CardBody className="d-flex flex-column justify-content-around align-items-end">
            <div className="intern-card-text-wrapper">
              <CardTitle>{card.title}</CardTitle>
              <p className="card-desc">{card.desc}</p>
            </div>
          </CardBody>
        </Card>
      </div>
    ))}
  </Slider>
</Row>


        <Row>
          <button
            className="btn-primary-outline mt-4"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Enquiry Now
          </button>
        </Row>
      </Container>
    </div>
  );
};

export default InternshipSection;