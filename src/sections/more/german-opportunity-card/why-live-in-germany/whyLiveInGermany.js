import React from "react";
import "./whyLiveInGermany.css";
import whyLiveGerImg from "../../../../assets/images/german-opp-card/WhyLiveGerImg.jpg";
import whyLiveGerIcon1 from "../../../../assets/icons/german-opp-card/whyLiveGerIcon1.svg";
import whyLiveGerIcon2 from "../../../../assets/icons/german-opp-card/whyLiveGerIcon2.svg";
import whyLiveGerIcon3 from "../../../../assets/icons/german-opp-card/whyLiveGerIcon3.svg";
import {
  Card,
  Container,
  Image,
  Row,
  Col,
  CardImg,
  CardTitle,
} from "react-bootstrap";

const WhyLiveInGermanyComp = () => {
  const WhyLiveInGermanyCardData = [
    {
      icon: whyLiveGerIcon1,
      title: "Multicultural environment & global job market.",
    },
    {
      icon: whyLiveGerIcon2,
      title: "World-class healthcare & social security benefits",
    },
    {
      icon: whyLiveGerIcon3,
      title: "Strong job market in IT, engineering, healthcare, and more",
    },
  ];

  return (
    <div>
      <Container>
        <Row className="mb-3">
          <h1 className="heading-big-medium">Why Live & Work in Germany?</h1>
        </Row>
        <Row className="mb-4">
          <Image
            src={whyLiveGerImg}
            alt="whyLiveGerImg"
            className="whyLiveGerMainImg"
          />
        </Row>
        <Row>
          {WhyLiveInGermanyCardData.map((card, index) => (
            <Col md={4} key={index}>
              <Card className="whyLiveGerCards">
                <CardImg
                  src={card.icon}
                  alt={`whyLiveGerIcon${index + 1}`}
                  className="whyLiveGerCardsImg"
                />
                <CardTitle className="subheading-small-medium text-content-secondary">
                  {card.title}
                </CardTitle>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyLiveInGermanyComp;
