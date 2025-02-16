import React from "react";
import { Card } from "react-bootstrap";
import whynurse1 from "../../../assets/images/landing/whyus1.svg";
import whynurse2 from "../../../assets/images/landing/whyus2.svg";
import whynurse3 from "../../../assets/images/landing/whyus3.svg";
import whynurse4 from "../../../assets/images/landing/whyus4.svg";
import whynurse5 from "../../../assets/images/landing/whyus5.svg";
import whynurse6 from "../../../assets/images/landing/whyus6.svg";
import whynurse7 from "../../../assets/images/landing/whyus7.svg";
import whynurse8 from "../../../assets/images/landing/whyus8.svg";
import whynurse9 from "../../../assets/images/landing/whyus9.svg";
import "./whyUsNurse.css"; // Import the CSS file

const WhyUsNurse = () => {
  const services = [
    { img: whynurse1, text: "Personalized Consultation" },
    { img: whynurse2, text: "Documentation Support" },
    { img: whynurse3, text: "Interview Preparation" },
    { img: whynurse4, text: "Job Placement" },
    { img: whynurse5, text: "Certification Support" },
    { img: whynurse6, text: "Visa Assistance" },
    { img: whynurse7, text: "Cultural Integration" },
    { img: whynurse8, text: "Free German Language" },
    { img: whynurse9, text: "Relocation Services" },
  ];

  return (
    <section className="justify-conent-center align-items-start d-flex  pt-5">
    <div className="why-us-nurse-bg mx-5 justify-conent-center align-items-center d-flex flex-column py-4 my-5">
      <h2 className="text-center text-white py-4">Why Choose Us?</h2>
      <div className="why-us-container">
        {services.map((service, index) => (
          <Card key={index} className="why-us-card flex-row">
            <Card.Img variant="top" src={service.img} />
            <Card.Body>
              <Card.Text>{service.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
    <div>
    </div>
    </section>
  );
};

export default WhyUsNurse;
