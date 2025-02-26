import React, { useState } from "react";
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
                <div className="container py-5">
                    <div className="row justify-content-center mb-4">
                        <div className="col-md-8 text-center">
                            <h2 className="section-title">Service Offerings</h2>
                            <p className="section-description">
                                Our comprehensive services are designed to streamline the process of securing a job
                                and work visa in your chosen country.
                            </p>
                        </div>
                    </div>

                    <div className="service-wave-layout">
                        {serviceOfferings.map((service, index) => (
                            <div
                                key={index}
                                className={`service-item ${service.position}`}
                                onMouseEnter={() => setHoveredService(service.title)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                <img src={service.icon} alt={service.title} className="service-icon" />
                                <div className="service-name-pill">{service.title}</div>
                                {hoveredService === service.title && (
                                    <div className="service-description-popup">
                                        <p className="service-text">{service.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Country Guidance Section */}
                <div className="service-container">
                    {/* Country Guidance Section */}
                    <div className="container py-5">
                        <div className="row justify-content-center mb-3">
                            <div className="col-md-8 text-center">
                                <button className="tag-button">
                                    <img src={airplane} alt="Airplane" className="tag-icon" />
                                    Skill Shortage Visas
                                </button>
                                <h2 className="section-title">Work Visa Guidance Country-wise</h2>
                                <p className="section-description">
                                    Our comprehensive services are designed to streamline the process of securing a job and work visa in your chosen country.
                                </p>
                            </div>
                        </div>

                        {/* Country Cards */}
                        <div className="row justify-content-center">
                            {countryGuidance.map((country, index) => (
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="country-card">
                                        <div className="country-header">
                                            <h3 className="country-name">{country.country}</h3>
                                            <img src={country.flag} alt={country.country} className="country-flag" />
                                        </div>
                                        <p className="country-text">{country.details}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="row justify-content-center mt-4">
                            <div className="col-auto">
                                <button className="consultation-button">Book Free Consultation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceOfferCountryWise;
