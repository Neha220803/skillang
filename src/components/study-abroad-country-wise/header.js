import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import countryWiseData from "../../data/countryWiseData";
import "./header.css";

const CountryWiseHeaderComp = ({ country = "uk" }) => {
  const data = countryWiseData[country];

  return (
    <header className="d-flex align-items-center justify-content-center text-center py-5 overflow-hidden">
      <div className="circle-blur"></div>
      <Container className="mt-5">
        <Row>
          <Image
            src={data.headerImage}
            alt={`country-wise-header-${country}`}
            className="country-wise-img"
          />
        </Row>
        <Row>
          <div className="heading-big-medium mt-3">
            Study in {data.fullForm}
          </div>
        </Row>
        <Row className="d-flex align-items-center justify-content-center my-2">
          <div className="paragraph-big-medium study-aborad-country-text-wrapper">
            {data.description}
          </div>
        </Row>
        <Row>
          <div>
            <button className="btn-primary">Talk to an Expert</button>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default CountryWiseHeaderComp;
