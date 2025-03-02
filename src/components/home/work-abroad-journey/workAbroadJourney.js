import React, { useEffect, useRef, useState } from 'react';
import './workAbroadJourney.css';
import { Col, Container, Row, Image } from 'react-bootstrap';

import workJor0 from '../../../assets/images/home/workJoureny0.png';
import workJor1 from '../../../assets/images/home/workJourney1.png';

import workJor2 from '../../../assets/images/home/workJourney2.png';

import workJor3 from '../../../assets/images/home/workJoureny3.png';

import workJor4 from '../../../assets/images/home/workJoureny4.png';

import workJor5 from '../../../assets/images/home/workJoureny5.png';

const ParallaxScrollSnap = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(0);
  
  const sections = [
    {
      id: "section0",
      title: "Our Features",
      description: "Discover essential features designed to simplify your study abroad journey, from expert guidance to seamless support.",
      bgClass: "bg-section-0",
      img:workJor0
    },
    {
      id: "section1",
      title: "Job Matching",
      description: "We Identify suitable jobs and submit applications in prominent industries",
      bgClass: "bg-section-1",
      img:workJor1
    },
    {
      id: "section2",
      title: "Language & Test Prep",
      description: "Enhance your language skills and test readiness with expert-led training, personalized courses, and flexible study options for a successful career abroad.  ",
      bgClass: "bg-section-2",
      img:workJor2
    },
    {
      id: "section3",
      title: "CV & Application Support",
      description: "Receive expert assistance in creating an international-standard CV and stay on track with a transparent application process, including real-time updates on your offer letter.",
      bgClass: "bg-section-3",
      img:workJor3
    },
    {
      id: "section4",
      title: "Application & Interview Support",
      description: "Stay on track with our transparent application process and real-time updates. Get expert mentorship and training to ace your interviews and secure your offer letter.",
      bgClass: "bg-section-4",
      img:workJor4
    },
    {
      id: "section5",
      title: "Visa & Relocation Support",
      description: "We guide you through the visa process for a higher success rate and assist with travel and accommodation to ensure a smooth, secure, and affordable transition.",
      bgClass: "bg-section-4",
      img:workJor5
    }
  ];
  
  // Initialize refs array
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
  }, [sections]);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Apply active class to current section
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        if (index === activeSection) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      }
    });
    
    // Set up scroll event for detecting active section
    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      
      // Find which section is most visible in the viewport
      let newActiveSection = 0;
      let maxVisibility = 0;
      
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        
        const sectionRect = section.getBoundingClientRect();
        const visibleTop = Math.max(sectionRect.top, containerRect.top);
        const visibleBottom = Math.min(sectionRect.bottom, containerRect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityRatio = visibleHeight / sectionRect.height;
        
        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          newActiveSection = index;
        }
      });
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };
    
    container.addEventListener('scroll', handleScroll);
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
  
  const scrollToSection = (index) => {
    const container = containerRef.current;
    const section = sectionRefs.current[index];
    
    if (container && section) {
      container.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(index);
    }
  };
  
  return (
    <div className="parallax-outer-container bg-primar" ref={containerRef}>


      {sections.map((section, index) => (
        <Container
          key={section.id}
          id={section.id}
          className={`bg-primar parallax-section ${index === activeSection ? 'active' : ''}` }
          ref={el => sectionRefs.current[index] = el}
        >
          <Row className='bg-dar w-100'>
            <Col lg={6} md={6} sm={12} xs={12}><Image fluid src={section.img} alt='' className='image-fluid overflow-hidden' /> </Col>
            <Col lg={6} md={6} sm={12} xs={12} className='d-flex flex-column align-items-center justify-content-center text-start'> 
               {/* <div className={`parallax-bg ${section.bgClass}`}></div> 
           */}
           <div className='w-75 text-start'> 
            
            <div className="subheading-big-medium text-content-primary">{section.title}</div>
            <div className="paragraph-big-medium text-content-secondary my-2">{section.description}</div>
            
            <button className='btn-secondary'>Learn More</button>
            </div>
              </Col>
            
             
            <div className="parallax-nav-dots">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className={`parallax-nav-dot ${activeSection === index ? 'active' : ''}`}
                  aria-label={`Scroll to ${section.title}`}
                ></button>
              ))}
            </div>
         


          </Row>
          
        </Container>
      ))}
      
      
    </div>
  );
};

export default ParallaxScrollSnap;