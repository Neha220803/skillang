import React, { useEffect, useRef } from 'react';
import { Card, CardText, CardTitle, Container, Image, Col, Row } from 'react-bootstrap';
import nurseService from '../../../assets/images/nursing/nurseService.png';
import './ourServices.css';

const services = [
  { title: 'Screening Process', text: 'Screening and checking the eligibility that matches the requirements.' },
  { title: 'Career Guidance', text: 'Providing professional career counseling for international placements.' },
  { title: 'Visa Assistance', text: 'Helping with visa applications and necessary documentation.' },
  { title: 'Language Preparation', text: 'Offering language courses to meet job requirements.' },
  { title: 'Relocation Support', text: 'Assisting with accommodation, cultural adaptation, and settling in.' },
  { title: 'Job Placement', text: 'We connect you with reputable healthcare facilities across Germany' },
  { title: 'Cultural Integration', text: 'Assistance in adjusting to life and work in Germany' },
  { title: 'Visa Assistance', text: 'Guidance through the visa application process' },
  { title: 'Ongoing Career Support', text: 'Continuous guidance to help you succeed long-term' }
];

const OurServices = () => {
  const scrollContainerRef = useRef(null);
  // const duplicatedServices = [...services, ...services];
    const duplicatedServices = [...services];


  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust for faster/slower scrolling

    const autoScroll = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset position when we've scrolled through the original set
        if (scrollPosition >= scrollContainer.scrollHeight / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollTop = scrollPosition;
        animationFrameId = requestAnimationFrame(autoScroll);
      }
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(autoScroll);

    // Pause scrolling when user hovers
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <Container className="py-5 my-5 ">
      <Row className='bg-primar'>
        <Col md={8}>
          <Image fluid src={nurseService} alt="nurse" className="nurse-service-img" />
          <div className='my-3'>
            <div className="heading-big-medium mb-1 text-content-primary">Our Services</div>
            <div className="paragraph-big-medium text-content-tertiary">
              We offer tailored support for your study and work abroad journey, including career guidance,
              visa assistance, documentation help, language prep, job placement, and relocation aid.
              Our expert mentorship helps turn your international dreams into reality.
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div 
            ref={scrollContainerRef}
            className="services-scrollable-container"
          >
            {duplicatedServices.map((service, index) => (
              <Card key={index} className="mb-4 nurse-serv-card">
                <CardTitle className='subheading-small-medium'>{service.title}</CardTitle>
                <CardText className='paragraph-small-medium text-content-secondary'>{service.text}</CardText>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurServices;