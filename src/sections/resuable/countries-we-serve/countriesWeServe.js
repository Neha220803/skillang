import React from "react";
import { Container, Card } from "react-bootstrap";

import "../../../index.css";
import "./countriesWeServe.css";
import "../../../App.css";

const australiaImage =
  "https://cms.skillang.com/uploads/countryaustralia_63a47de43b.png";
const canadaImage =
  "https://cms.skillang.com/uploads/countrycanada_5adf740d16.png";
const franceImage =
  "https://cms.skillang.com/uploads/countryfrance_d31e4d7c8f.png";
const germanyImage =
  "https://cms.skillang.com/uploads/countrygermany_58b2114e41.png";
const irelandImage =
  "https://cms.skillang.com/uploads/countryireland_7246410299.png";
const ukImage = "https://cms.skillang.com/uploads/countryuk_a521b25964.png";
const usaImage = "https://cms.skillang.com/uploads/countryusa_316757d32d.png";

const countries = [
  {
    name: "Germany",
    description:
      "A thriving economy with jobs in Nursing, IT, and Engineering. Enjoy a balanced work-life and competitive pay.",
    image: germanyImage,
  },
  {
    name: "United Kingdom",
    description:
      "A global leader in healthcare, finance, and tech, offering competitive salaries and access to top-notch education.",
    image: ukImage,
  },
  {
    name: "United States of America",
    description:
      "A land of opportunity with high-paying jobs in healthcare, IT, and business, known for innovation and career growth.",
    image: usaImage,
  },
  {
    name: "Australia",
    description:
      "A robust economy with jobs in healthcare, IT, and engineering, offering high wages and solid worker protections.",
    image: australiaImage,
  },
  {
    name: "Canada",
    description:
      "A diverse job market in nursing, IT, and trades, offering high salaries and a welcoming environment.",
    image: canadaImage,
  },
  {
    name: "Ireland",
    description:
      "A booming economy with demand in healthcare, pharma, and tech, featuring high wages and a friendly culture.",
    image: irelandImage,
  },
  {
    name: "France",
    description:
      "A hub for healthcare, hospitality, and tech, known for its rich culture and excellent work-life balance.",
    image: franceImage,
  },
];

const CountriesWeServe = () => {
  return (
    <div className="bg-primar d-flex align-items-center justify-content-center">
      <Container>
        <div className="text-center mb-4">
          <h1 className="heading-big-medium text-content-primary">
            Countries We Serve
          </h1>
          <div className="paragraph-small-regular text-content-secondary text-center">
            Each destination offers unique opportunities and challenges. We
            provide tailored guidance on job markets, salary expectations,
            cultural norms, and legal requirements for working abroad.
          </div>
        </div>

        <div className="countrys-list">
          {countries.map((country, index) => (
            <Card key={index} className="countrys-card">
              <div className="country-image-container">
                <Card.Img
                  src={country.image}
                  className="country-image"
                  alt={`${country.name} image`}
                />
              </div>
              <Card.Body className="country-card-heading p-0 ps-md-3 d-flex flex-column align-items-start justify-content-center">
                <Card.Title className="subheading-small-medium text-content-primary mb-2">
                  {country.name}
                </Card.Title>
                <Card.Text className="paragraph-small-regular text-content-secondary country-card-content m-0">
                  {country.description}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CountriesWeServe;
