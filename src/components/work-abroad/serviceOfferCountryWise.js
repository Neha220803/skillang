import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServiceOfferCountryWise.css";

import resumeIcon from "../../../src/assets/images/work-abroad/icons/resumr.png";
import jobMatchIcon from "../../../src/assets/images/work-abroad/icons/job_match.png";
import interviewIcon from "../../../src/assets/images/work-abroad/icons/interview_preparation.png";
import visaIcon from "../../../src/assets/images/work-abroad/icons/visa_assistance.png";
import airplane from "../../../src/assets/images/work-abroad/icons/airplane.png";

import ukFlag from "../../../src/assets/images/work-abroad/countryflags/uk.png";
import germanyFlag from "../../../src/assets/images/work-abroad/countryflags/germany.png";
import usaFlag from "../../../src/assets/images/work-abroad/countryflags/usa.png";
import australiaFlag from "../../../src/assets/images/work-abroad/countryflags/australia.png";
import canadaFlag from "../../../src/assets/images/work-abroad/countryflags/canada.png";

const serviceOfferings = [
    {
        title: "Resume & CV Optimization",
        description: "Experts craft compelling CVs tailored to meet your target job market standards.",
        icon: resumeIcon,
        position: "top-center"
    },
    {
        title: "Job Matching",
        description: "Find job opportunities that align with your skills and experience.",
        icon: jobMatchIcon,
        position: "bottom-left"
    },
    {
        title: "Interview Preparation",
        description: "Get expert guidance and practice sessions to ace your interviews.",
        icon: interviewIcon,
        position: "bottom-right"
    },
    {
        title: "Visa Assistance",
        description: "Navigate visa applications with ease and expert support.",
        icon: visaIcon,
        position: "top-right"
    },
];

const countryGuidance = [
    {
        country: "UK",
        details: "Guidance on the Tier 2 Visa, which is for skilled workers. We help you through the sponsorship and points-based assessment process.",
        flag: ukFlag
    },
    {
        country: "Germany",
        details: "The Blue Card is an EU work permit for highly skilled non-EU citizens in fields like Nursing, IT, and Hospitality.",
        flag: germanyFlag
    },
    {
        country: "USA",
        details: "Assistance with H-1B visas, which are issued for specialty occupations in fields like IT and healthcare.",
        flag: usaFlag
    },
    {
        country: "Australia",
        details: "Help with the Skilled Worker visa, detailing the points test and the importance of being on the Skilled Occupations List.",
        flag: australiaFlag
    },
    {
        country: "Canada",
        details: "Support with the Federal Skilled Worker Program and Provincial Nominee Programs, which target skilled workers.",
        flag: canadaFlag
    },
];

const ServiceOfferCountryWise = () => {
    const [hoveredService, setHoveredService] = useState(null);

    return (
        <div className="service-container">
            {/* Service Offerings Section */}
            <div className="service-bg">
                <Container className="py-5 con1">
                    <Row className="justify-content-center mb-4">
                        <Col md={8} className="text-center">
                            <div className="section-title heading-big-medium">Service Offerings</div>
                            <p className="paragraph-big-medium text-content-secondary">
                                Our comprehensive services are designed to streamline the process of <br />securing a job
                                and work visa in your chosen country.
                            </p>
                        </Col>
                    </Row>

                    <Row className="service-wave-layout justify-content-center">
                        {serviceOfferings.map((service, index) => (
                            <Col md={3} key={index} className={`service-item ${service.position}`}
                                onMouseEnter={() => setHoveredService(service.title)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                <img src={service.icon} alt={service.title} className="service-icon" />
                                <div className="service-name-pill caption-bold">{service.title}</div>
                                {hoveredService === service.title && (
                                    <div className="service-description-popup">
                                        <p className="service-text paragraph-small-medium text-content-secondary">{service.description}</p>
                                    </div>
                                )}
                            </Col>
                        ))}
                    </Row>
                </Container>

                {/* Country Guidance Section */}
                <Container className="py-5">
                    <Row className="justify-content-center mb-3 ">

                        <Col md={8} className="text-center">
                            <div className="center-container " id="chan">
                                <div className="tag-button text-center caption-bold">
                                    <img src={airplane} alt="Airplane" className="tag-icon image-fluid" />
                                    Skill Shortage Visas
                                </div>
                            </div>


                            <div className="heading-big-medium visadiscrip">Work Visa Guidance<br />Country-wise</div>
                            <div className="paragraph-big-medium text-content-secondary visadiscrip">
                                Our comprehensive services are designed to streamline the process of securing a job and work visa in your chosen country.
                            </div>
                        </Col>
                    </Row>

                    {/* Country Cards */}
                    <Row className="justify-content-center">
                        {countryGuidance.map((country, index) => (
                            <Col md={4} key={index} className="mb-4">
                                <div className="country-card">
                                    <div className="country-header">
                                        <div className="country-name subheading-small-medium">{country.country}</div>
                                        <img src={country.flag} alt={country.country} className="country-flag" />
                                    </div>
                                    <div className="country-text paragraph-small-regular">{country.details}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="d-flex justify-content-center mx-auto align-items-center mt-4 visadiscrip">
                        <button className="btn-primary">Book Free Consultation</button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ServiceOfferCountryWise;
