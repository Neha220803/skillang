import React from "react";
import { Container } from "react-bootstrap";

const GerOppCardConnectComp = () => {
  return (
    <div>
      <Container>
        <div className="university-choice-section">
          <div className="heading-small-medium text-content-navy-900">
            Ready to start your journey?
          </div>
          <div className="paragraph-big-medium py-3 text-content-navy-800">
            Apply today and move closer to your career goals in Germany!
          </div>
          <div className="d-flex gap-2">
            <button className="btn-secondary">Book a Free Consultation</button>
            <button className="btn-primary">Start Application</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GerOppCardConnectComp;
