import React, { useState, useRef, useEffect } from "react";
import { Container, Col, Row, Card, CardBody } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import '../../../index.css';
import '../../../App.css';
import './whyNursingSection.css';
import whyNurse1 from '../../../assets/icons/nurse/whyNurse1.svg';
import whyNurse2 from '../../../assets/icons/nurse/whyNurse2.svg';
import whyNurse3 from '../../../assets/icons/nurse/whyNurse3.svg';
import whyNurse4 from '../../../assets/icons/nurse/whyNurse4.svg';
import whyNurse5 from '../../../assets/icons/nurse/whyNurse5.svg';
import whyNurse6 from '../../../assets/icons/nurse/whyNurse6.svg';
import whyNurse7 from '../../../assets/icons/nurse/whyNurse7.svg';
import whyNurse8 from '../../../assets/icons/nurse/whyNurse8.svg';

const WhyNurseCardData = [
    { title: "High Demand in Healthcare", desc: "Free German Courses, Online & In-Person Training & Flexible Learning Schedules all in One Place", img: whyNurse1, color: "#FFFBFB" },
    { title: "Advanced Medical Technology", desc: "Working with cutting-edge medical equipment and innovative practices enhances professional development", img: whyNurse2, color: "#FFFBF3" },
    { title: "Career Growth & Specialization", desc: "Healthcare careers offer continuous opportunities for growth, specialization, and upward mobility in various fields.", img: whyNurse3, color: "#F8FAFF" },
    { title: "Competitive Salary & Benefits", desc: "Healthcare professionals enjoy attractive salary packages and comprehensive benefits, ensuring financial stability", img: whyNurse4, color: "#F9F7FF" },
    { title: "Work-Life Balance", desc: "Enjoy a healthy work-life balance in regions, making it easier to maintain both career and personal well-being", img: whyNurse5, color: "#F8FAFF" },
    { title: "Language Support for Integration", desc: "Language programs make it easier for healthcare professionals to integrate into new communities", img: whyNurse6, color: "#FFF9FD" },
    { title: "Healthcare Worker Rights", desc: "Healthcare systems prioritize the wellbeing and rights of their workers, ensuring a supportive and secure", img: whyNurse7, color: "#FFFBF3" },
    { title: "Vibrant & Cultural Cities", desc: "Experience life in vibrant cities with rich cultural experiences, stunning architecture, and a diverse, welcoming atmosphere.", img: whyNurse8, color: "#FFFBFB" },
];

const WhyNursingSection = () => {
    const [showAll, setShowAll] = useState(false);
    const [maxHeight, setMaxHeight] = useState("500px"); // Default max height
    const cardsRef = useRef(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);

    useEffect(() => {
        if (cardsRef.current) {
            setMaxHeight(showAll ? `${cardsRef.current.scrollHeight}px` : "500px");
        }
    }, [showAll]);

    return (
        <section className="py-5">
            <Container>
                <Row className='d-flex align-items-start justify-content-center text-center mb-4'>
                    <div className='heading-small-medium text-content-primary'>
                        Why Nursing in Germany?
                    </div>
                    <div className='paragraph-small-medium text-content-secondary'>
                        Explore the Benefits of a Rewarding Nursing Career in Germany
                    </div>
                </Row>
                <div 
                    ref={cardsRef} 
                    className="why-nurse-cards-container row-equal-height" 
                    style={{ 
                        maxHeight: screenWidth < 768 ? maxHeight : "none", 
                        transition: screenWidth < 768 ? "max-height 0.4s ease-in-out" : "none", 
                        overflow: screenWidth < 768 ? "hidden" : "visible"
                    }}
                >
                    <Row>
                        {WhyNurseCardData.map((card, index) => (
                            <Col key={index} className="px-3 mb-4" lg={3} md={6} sm={12} xs={12}>
                                <Card 
                                   className={`why-nurse-card border-0 h-100 ${showAll || screenWidth >= 768 ? "visible" : index < 3 ? "visible" : "hidden"}`}
                                    style={{ backgroundColor: card.color }}
                                >
                                    <div className="p-lg-3 p-2 text-start">
                                        <img src={card.img} alt={card.title} className="why-nurse-card-img" />
                                    </div>
                                    <CardBody className="d-flex flex-column py-0">
                                        <div className="subheading-small-medium text-content-secondary mb-1">{card.title}</div>
                                        <div className="paragraph-small-medium text-content-secondary">{card.desc}</div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Toggle Button */}
                <div className="text-center d-block d-md-none mt-3">
      <button className="btn-secondary-outline" onClick={() => setShowAll(!showAll)}>
        {showAll ? (
          <>
            Close <ChevronUp className="ms-1" />
          </>
        ) : (
          <>
            View All <ChevronDown className="ms-1" />
          </>
        )}
      </button>
    </div>
            </Container>
        </section>
    );
};

export default WhyNursingSection;
