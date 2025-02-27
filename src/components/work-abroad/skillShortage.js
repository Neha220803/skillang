import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import '../../index.css'; // Ensure styling is applied
import '../../components/work-abroad/skillShartage.css';
import './skillShartage.css';

const SkillShortage = () => {
    const industries = [
        { title: "Nursing & Healthcare", description: "High demand for nurses, healthcare assistants, and medical professionals globally." },
        { title: "Information Technology", description: "There is a high demand for skilled IT Professionals globally. The professional experts in AI, ML, Cyber Security, Data Analysts, Software development engineers are in high demand." },
        { title: "Hospitality Management", description: "Opportunities in hotel management, catering, and customer service roles worldwide." },
        { title: "Blue Collared Job Abroad", description: "Jobs in construction, factory work, and skilled trades with attractive benefits." },
    ];

    return (
        <section className="skillshortage-bg position-relative my-5">
            <Container className="p-5 rounded-4 text-light skillshortage-container">
                <Row>
                    {/* Left Side (Title & Description) */}
                    <Col lg={6} className="d-flex flex-column justify-content-center left-content">
                        <div className="mb-3 text-white heading-big-medium">Industries with Skill Shortages</div>
                        <div className='paragraph-small-regular'>
                            We focus on sectors with a high demand for skilled professionals,
                            increasing your chances of securing employment and a work visa.
                            Here are some primary industries we serve.
                        </div>
                    </Col>
                    
                    {/* Right Side (Accordion List) */}
                    <Col lg={6} className="d-flex flex-column right-content">
                        <Accordion defaultActiveKey="1"  className="custom-accordion">
                            {industries.map((industry, index) => (
                                <Accordion.Item key={index} eventKey={index.toString()} className="dark-accordion-item">
                                    <Accordion.Header>{industry.title}</Accordion.Header>
                                    <Accordion.Body className="bg-secondary text-light">{industry.description}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SkillShortage;