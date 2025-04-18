import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import countryWiseData from "../../../data/countryWiseData";
import ImageHeaderComponent from "../../../components/common-headers/ImageMainHeader";

const CountryWiseHeaderComp = ({ country = "uk" }) => {
  const data = countryWiseData[country];

  return (
    <ImageHeaderComponent
      imageSrc={data.headerImage}
      imageAlt={`country-wise-header-${country}`}
      title={`Study in ${data.fullForm}`}
      subheading={data.description}
      buttonText="Talk to an Expert"
    />
  );
};

export default CountryWiseHeaderComp;
