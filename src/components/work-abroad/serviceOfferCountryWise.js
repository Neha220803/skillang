import React, { useState } from "react";
import "../../../src/index.css";
import "../../../src/App.css";
import "./ServiceOfferCountryWise.css"; // Import new CSS file

import bgImage from "../../../src/assets/images/work-abroad/service_offer_vis_guidence.png";
import resumeIcon from "../../../src/assets/images/work-abroad/icons/resumr.png";
import jobMatchIcon from "../../../src/assets/images/work-abroad/icons/job_match.png";
import interviewIcon from "../../../src/assets/images/work-abroad/icons/interview_preparation.png";
import visaIcon from "../../../src/assets/images/work-abroad/icons/visa_assistance.png";

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
        style: "resume",
    },
    {
        title: "Job Matching",
        description: "Find job opportunities that align with your skills and experience.",
        icon: jobMatchIcon,
        style: "job-matching",
    },
    {
        title: "Interview Preparation",
        description: "Get expert guidance and practice sessions to ace your interviews.",
        icon: interviewIcon,
        style: "interview",
    },
    {
        title: "Visa Assistance",
        description: "Navigate visa applications with ease and expert support.",
        icon: visaIcon,
        style: "visa",
    },
];

const countryGuidance = [
    { country: "UK", details: "Guidance on the Tier 2 Visa, which is for skilled workers.", flag: ukFlag },
    { country: "Germany", details: "The Blue Card is an EU work permit for highly skilled non-EU citizens.", flag: germanyFlag },
    { country: "USA", details: "Assistance with H-1B visas for IT and healthcare professionals.", flag: usaFlag },
    { country: "Australia", details: "Help with the Skilled Worker visa and points-based assessment.", flag: australiaFlag },
    { country: "Canada", details: "Support for the Federal Skilled Worker Program.", flag: canadaFlag },
];

const ServiceOfferCountryWise = () => {
    const [hoveredService, setHoveredService] = useState(null);

    return (
        <div className="service-container">
            {/* Service Offerings Section */}
            <div className="service-bg">
                <div className="service-offerings">
                    <h2 className="section-title">Service Offerings</h2>
                    <p className="section-description">
                        Our comprehensive services are designed to streamline the process of securing a job
                        and work visa in your chosen country.
                    </p>

                    <div className="service-icons">
                        {serviceOfferings.map((service, index) => (
                            <div
                                key={index}
                                className={`service-icon-wrapper ${service.style}`}
                            >
                                <div
                                    className="service-icon-container"
                                    onMouseEnter={() => setHoveredService(service)}
                                    onMouseLeave={() => setHoveredService(null)}
                                >
                                    <img src={service.icon} alt={service.title} className="service-icon" />
                                </div>
                                <h3 className="service-title">{service.title}</h3>

                                {/* Hover description card */}
                                {hoveredService === service && (
                                    <div className="service-description-card">
                                        <p className="service-text">{service.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Country Guidance Section */}
                <div className="country-guidance">
                    <button className="tag-button">Skill Shortage Visas</button>
                    <h2 className="section-title">Work Visa Guidance Country-wise</h2>
                    <p className="section-description">
                        Our comprehensive services are designed to streamline the process of securing a job and work visa in your chosen country.
                    </p>

                    <div className="country-cards">
                        {countryGuidance.map((country, index) => (
                            <div key={index} className="country-card">
                                <div className="country-header">
                                    <img src={country.flag} alt={country.country} className="country-flag" />
                                    <h3 className="country-name">{country.country}</h3>
                                </div>
                                <p className="country-text">{country.details}</p>
                            </div>
                        ))}
                    </div>

                    <button className="consultation-button">Book Free Consultation</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceOfferCountryWise;