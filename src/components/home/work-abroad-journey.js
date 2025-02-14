import React, { useState, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Container, Image } from 'react-bootstrap';
import wjourney1 from "../../images/home/work-journey-1.svg";
import wjourney2 from "../../images/home/work-journey-2.svg";
import wjourney3 from "../../images/home/work-journey-3.svg";
import wjourney4 from "../../images/home/work-journey-4.svg";
import wjourney5 from "../../images/home/work-journey-5.svg";
import wjourney6 from "../../images/home/work-journey-6.svg";
import wjourney7 from "../../images/home/work-journey-7.svg";
import wjourney8 from "../../images/home/work-journey-8.svg";
import '../../App.css';
import '../../index.css';
import './work-abroad-journey.css';

const WorkAbroadJourney = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust threshold as per requirement
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state on load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const timelineData = [
    {
      title: "Explore Opportunities ",
      description: "Explore the work abroad opportunities that fit your interest, education, and experience background.",
      image: wjourney1,
    },
    {
      title: "Language & Test Prep",
      description: "Explore the work abroad opportunities that fit your interest, education, and experience background.",
      image: wjourney2,
    },
    {
      title: "CV Making",
      description: "Get expert assistance in CV making as per international standards.",
      image: wjourney3,
    },
    {
      title: "Job Matching",
      description: "Expert assistance in matching openings and preferences according to the country, city, and location.",
      image: wjourney4,
    },
    {
      title: "Interview preparation",
      description: "Get mentor guidance and training for interview preparation.",
      image: wjourney5,
    },
    {
      title: "Application & Offer letter",
      description: "Be on track with our transparent application process. Get real-time updates on your application and offer letter.",
      image: wjourney6,
    },
    {
      title: "Visa Assistance",
      description: "Our experts guide you step-by-step through the visa process and documentation, increasing your visa success rate.",
      image: wjourney7,
    },
    {
      title: "Travel & Accommodation Assistance",
      description: "Complete support for travel and accommodation to save costs and make it more affordable, secure, and comfortable.",
      image: wjourney8,
    },
  ];

  return (
    <section>
      <Container id="work-abroad-journey">
        <h1 className="text-center my-lg-5 my-md-5 mt-5 mb-3">Work Abroad Journey</h1>
        <Timeline position={isMobile ? 'right' : 'alternate'}>
  {timelineData.map((item, index) => (
    <TimelineItem key={index} className="mb-4"> {/* Added mb-4 for spacing */}
      <TimelineOppositeContent 
        style={{ flex: isMobile ? '0' : '1' }}  // Collapse opposite content on mobile
      >
        <div className='d-none d-md-block'>
          <Image className="custom-image" src={item.image} alt={item.title} />

        </div>
        
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot style={{ backgroundColor: '#E86E39' }} />
        {index !== timelineData.length - 1 && <TimelineConnector />} {/* Avoid connector after last dot */}
      </TimelineSeparator>
      <TimelineContent>
        <h3>{item.title}</h3>
        <div className='d-block d-md-none'>
          <Image className="custom-image my-2" src={item.image} alt={item.title} />
        </div>
        <p>{item.description}</p>
      </TimelineContent>
    </TimelineItem>
    
  ))}
</Timeline>

      {/* <Row className="text-center"  >
        <button className='btn-primary-outline' onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }} >Apply Now</button>
  </Row > */}
    </Container>
     </section>
  );
};

export default WorkAbroadJourney;