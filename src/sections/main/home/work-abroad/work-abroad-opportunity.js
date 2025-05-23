import React from "react";
import {
  CardTitle,
  Container,
  Card,
  Row,
  Col,
  CardBody,
  CardText,
  CardImg,
} from "react-bootstrap";
import "../../../../App.css";
import "./work-abroad-opportunity.css";
import "../../../../index.css";
import work4 from "../../../../assets/icons/home/electrical.svg";
import work5 from "../../../../assets/icons/home/plumbing.svg";
import work6 from "../../../../assets/icons/home/vpaintin.svg";
import work7 from "../../../../assets/icons/home/automobile.svg";
import work8 from "../../../../assets/icons/home/mechanical.svg";
import work9 from "../../../../assets/icons/home/welding.svg";
import { useNavigate } from "react-router-dom";

const primCardData = [
  {
    title: "Nursing & Healthcare",
    img: "https://cms.skillang.com/uploads/work_Abroad_Card1_27f26318d0.jpg",
    color: "#FCEBC3",
    btnType: "btn-secondary",
    colSize: 6,
    desc: "We specialize in placing skilled nurses and healthcare professionals abroad. We make the process seamless for both candidates and employers.",
    id: "wac1",
    link: "/nursing",
  },
  {
    title: "Hospitality Management",
    img: "https://cms.skillang.com/uploads/work_Abroad_Card2_4c86752600.jpg",
    color: "#FFFFFF",
    btnType: "btn-secondary-outline",
    colSize: 3,
    desc: "We connect world-class talent with leading hotels, resorts, and restaurants abroad. From chefs to managers and all other positions.",
    id: "wac2",
    link: "/work-abroad",
  },
  {
    title: "Information Technology",
    img: "https://cms.skillang.com/uploads/work_Abroad_Card3_dc7b25ef0e.jpg",
    color: "#FFFFFF",
    btnType: "btn-secondary-outline",
    colSize: 3,
    desc: "We connect skilled IT professionals with leading global companies. From software engineers to tech specialists.",
    id: "wac3",
    link: "/work-abroad",
  },
];

const WorkAbroadOpportunity = () => {
  const navigate = useNavigate();
  const secCardData = [
    { img: work4, text: "Electrical" },
    { img: work5, text: "Plumbing" },
    { img: work6, text: "Vehicle Painting" },
    { img: work7, text: "Automobile" },
    { img: work8, text: "Mechanical" },
    { img: work9, text: "Heavy Welding" },
  ];

  return (
    <section className="d-flex flex-column align-items-center justify-content-center">
      <Container className="d-flex flex-column align-items-center justify-content-center bg-primar ">
        <div className="work-abroad-bg-card align-items-center justify-content-center mb-5">
          <Row className="mb-2 m-0">
            <h1 className="heading-big-medium text-content-primary text-center">
              Work Abroad Opportunities
            </h1>
          </Row>
          <Row className="gy-3">
            {primCardData.map((card, index) => (
              <Col key={index} lg={card.colSize} md={6} sm={12} xs={12}>
                <Card
                  className="prim-card d-flex border-0 mb-2"
                  id={card.id}
                  style={{ backgroundColor: card.color }}
                >
                  <Card.Img
                    variant="top"
                    className="work-card-img"
                    src={card.img}
                    alt="Card image"
                  />
                  <CardBody className="d-flex flex-column justify-content-between p-2">
                    <div className="card-header-section flex-column">
                      <CardTitle className="subheading-small-medium">
                        {card.title}
                      </CardTitle>
                      <CardText className="paragraph-small-regular">
                        {card.desc}
                      </CardText>
                    </div>
                    <div className="w-sm-100">
                      <button
                        className={`${card.btnType} w-sm-100`}
                        onClick={() => {
                          navigate(card.link);
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Know more
                      </button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="w-100">
          <Row className="bg-primar w-100 mx-0">
            <Col
              lg={8}
              md={4}
              className="work-abroad-left-bg flex-column text-white d-flex align-items-end justify-content-start text-start p-0"
            >
              <div className="work-ops-textwrap bg-primar">
                <h2 className="text-white heading-small-medium">
                  Diverse Range of Opportunities
                </h2>
                <p className="text-white paragraph-small-medium my-3">
                  We help you choose from large range of employment
                  opportunities
                </p>
                <div>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      navigate("/work-abroad"); // Navigate to /work-abroad
                      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={4} md={8} className="pe-0">
              <div className="work-abroad-right-bg ">
                <Row className="">
                  {secCardData.map((service, index) => (
                    <Col key={index} className="mb-3 " lg={6} sm={6} xs={6}>
                      <Card className="work-abroad-card flex-column">
                        <CardImg
                          variant="top"
                          src={service.img}
                          alt={`Reason ${index + 1}`}
                          className="work-abroad-card-img"
                        />
                        <CardBody className="p-0">
                          <Card.Text className="paragraph-small-medium text-content-secondary">
                            <div className="paragraph-small-medium text-content-secondary work-abroad-card-text">
                              {service.text}
                            </div>
                          </Card.Text>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default WorkAbroadOpportunity;
