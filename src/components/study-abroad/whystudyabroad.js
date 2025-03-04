import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../study-abroad/whystudyabroad.css';
import whystudyabroad from '../../assets/images/study-abroad/whystudyabroad/whystudyabroad.png';
import globalIcon from '../../assets/images/study-abroad/whystudyabroad/icons/globalexpose.png';
import educationIcon from '../../assets/images/study-abroad/whystudyabroad/icons/topquality.png';
import networkingIcon from '../../assets/images/study-abroad/whystudyabroad/icons/network.png';
import careerIcon from '../../assets/images/study-abroad/whystudyabroad/icons/careerboost.png';

const WhyStudyAbroad = () => {
    return (
        <Container fluid="lg" className="why-study-abroad">

            <Row className="align-items-center">
                <Col md={7} className="content">
                    <h2>Why Study Abroad?</h2>
                    <p className='caption-regular text-content-secondary mt-1'>Free German Courses, Online & In-Person Training & Flexible Learning Schedules all in One Place</p>
                    <Row className="benefits">
                        {[{
                            icon: globalIcon,
                            title: 'Global Exposure',
                            description: 'Experience new cultures, languages, and perspectives'
                        }, {
                            icon: educationIcon,
                            title: 'Top-Quality Education',
                            description: 'Learn from world-renowned universities with innovative teaching methods'
                        }, {
                            icon: networkingIcon,
                            title: 'Networking & Growth',
                            description: 'Build connections with industry leaders and peers worldwide'
                        }, {
                            icon: careerIcon,
                            title: 'Career Boost',
                            description: 'Gain a degree that opens doors to global job markets'
                        }].map((benefit, index) => (
                            <Col md={6} key={index} className="benefit-card">
                                <Card className="equal-card w-100">
                                    <Card.Body className="d-flex flex-column align-items-start">
                                        <img src={benefit.icon} alt={benefit.title} className="icon" />
                                        <h3>{benefit.title}</h3>
                                        <p className='caption-regular text-content-secondary mt-1'>{benefit.description}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={5} className="image-container d-flex justify-content-end align-items-stretch">
                    <img src={whystudyabroad} alt="Why Study Abroad" className="responsive-img" />
                </Col>

            </Row>
        </Container>
    );
};

export default WhyStudyAbroad;
