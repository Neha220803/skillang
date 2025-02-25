import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../index.css'; // Ensure styling is applied
import '../../components/work-abroad/skillShartage.css'

const SkillShortage = () => {
    const [openIndex, setOpenIndex] = useState(1); // Default open item (Information Technology)

    const industries = [
        { title: "Nursing & Healthcare", description: "High demand for nurses, healthcare assistants, and medical professionals globally." },
        { title: "Information Technology", description: "There is a high demand for skilled IT Professionals globally. The professional experts in AI, ML, Cyber Security, Data Analysts, Software development engineers are in high demand." },
        { title: "Hospitality Management", description: "Opportunities in hotel management, catering, and customer service roles worldwide." },
        { title: "Blue Collared Job Abroad", description: "Jobs in construction, factory work, and skilled trades with attractive benefits." },
    ];

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="skillshortage-bg position-relative my-5">
            <Container className="p-5 rounded-4 text-light skillshortage-container">
                <Row>
                    {/* Left Side (Title & Description) */}
                    <Col lg={6} className="d-flex flex-column justify-content-center left-content">
                        <h1 className="mb-3 text-white">Industries with Skill Shortages</h1>

                        <p>
                            We focus on sectors with a high demand for skilled professionals,
                            increasing your chances of securing employment and a work visa.
                            Here are some primary industries we serve.
                        </p>
                    </Col>

                    {/* Right Side (Fixed Position for List) */}
                    <Col lg={6} className="d-flex flex-column right-content">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className={`p-3 my-2 rounded-3 ${openIndex === index ? "expanded-item" : "collapsed-item"}`}
                                style={{ cursor: "pointer", transition: "0.3s" }}
                                onClick={() => handleToggle(index)}
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className={`mb-0 ${openIndex === index ? "text-white" : "text-light"}`}>
                                        {industry.title}
                                    </h5>
                                    <span className="toggle-icon">{openIndex === index ? "−" : "+"}</span>
                                </div>
                                {openIndex === index && (
                                    <p className="mt-2 text-white">{industry.description}</p>
                                )}
                            </div>
                        ))}
                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default SkillShortage;
