// AdmiRequirementComp.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlueIconCard from "../../../../utils/cards/blueIconCards";
import countryWiseData from "../../../../data/countryWiseData";

const AdmiRequirementComp = ({ country = "uk" }) => {
  const data = countryWiseData[country];
  if (!data || !data.admission || !data.admission.entranceExamData) {
    return <div>Admission Requirements data not available</div>;
  }
  const requirementsData = data.admission.requirementsData;

  return (
    <div className="">
      <div className="subheading-big-medium text-content-secondary mb-4">
        Admission Requirements
      </div>
      <Row>
        {requirementsData.map((requirement) => (
          <Col lg={4} md={6} className="mb-4" key={requirement.id}>
            <BlueIconCard
              img={requirement.icon}
              title={requirement.title}
              text={requirement.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AdmiRequirementComp;
