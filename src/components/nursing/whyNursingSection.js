import '../../index.css';
import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card, CardBody, CardImg } from "react-bootstrap";
import '../../index.css';
import '../../App.css';
import whyNurse1 from '../../assets/icons/nurse/whyNurse1.svg';

const WhyNurseCardData = [
    { title: "High Demand in Healthcare", desc: "Free German Courses, Online & In-Person Training & Flexible Learning Schedules all in One Place", img: whyNurse1, color: "#FFFBFB" },
    { title: "Advanced Medical Technology", desc: "Working with cutting-edge medical equipment and innovative practices enhances professional development", img: whyNurse1, color: "#FFFBF3" },
    { title: "Career Growth & Specialization", desc: "Healthcare careers offer continuous opportunities for growth, specialization, and upward mobility in a various fields.", img: whyNurse1, color: "#F8FAFF" },
    { title: "Competitive Salary & Benefits", desc: "Healthcare professionals enjoy attractive salary packages and comprehensive benefits, ensuring financial stability", img: whyNurse1, color: "#F9F7FF" },
    { title: "Work-Life Balance", desc: "Enjoy a healthy work-life balance in regions, making it easier to maintain both career and personal well-being", img: whyNurse1, color: "#F8FAFF" },
    { title: "Language Support for Integration", desc: "Language programs make it easier for healthcare professionals to integrate into new communities", img: whyNurse1, color: "#FFF9FD" },
    { title: "Healthcare Worker Rights", desc: "Healthcare systems prioritize the wellbeing and rights of their workers, ensuring a supportive and secure", img: whyNurse1, color: "#FFFBF3" },
    { title: "Vibrant & Cultural Cities", desc: "Experience life in vibrant cities with rich cultural experiences, stunning architecture, and a diverse, welcoming atmosphere.", img: whyNurse1, color: "#FFFBFB" },
     ];

const WhyNursingSection = () => {
  return (
    <section>
        <Container>
            <Row className='d-flex align-items-start justify-content-center text-center'>
                <div className='heading-small-medium'>
            Why Nursing in Germany ?
            </div>
            <div className='paragraph-small-medium '>
            Explore the Benefits of a Rewarding Nursing Career in Germany
            </div>

            </Row>
            <Row>
                 {WhyNurseCardData.map((card, index) => (
            <Col key={index} className="px-3" lg={3} md={6} sm={12} xs={12}> {/* Add padding around each slide */}

              <Card className="my-4 border-0 d-flex align-items-start justify-content-center" style={{ backgroundColor: card.color }}>
                  <div className="p-lg-3 p-2 text-start">
                    <img src={card.img} alt={card.title}  />
                  </div>
                  <CardBody>
                    <div className="subheading-small-medium text-secondary-color">{card.title}</div>
                    <div className="paragraph-small-medium text-secondary-color">{card.desc}</div>
                  </CardBody>
                
              </Card>
            </Col>
          ))}
            </Row>
            
        </Container>
    </section>
  )
}

export default WhyNursingSection