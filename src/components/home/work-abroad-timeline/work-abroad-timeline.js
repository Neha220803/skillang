import React, { useState, useEffect, useRef } from 'react'; 
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Container, Image } from 'react-bootstrap';
import wjourney1 from "../../../assets/images/home/workJourney1.jpg";
import wjourney2 from "../../../assets/images/home/workJourney2.jpg";
import wjourney3 from "../../../assets/images/home/workJoureny3.jpg";
import wjourney4 from "../../../assets/images/home/workJoureny4.jpg";
import wjourney5 from "../../../assets/images/home/workJoureny5.jpg";
import '../../../App.css';
import '../../../index.css';
import './work-abroad-timeline.css';

const WorkAbroadJourneyTimeline = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressValues, setProgressValues] = useState(Array(5).fill(0)); // Track progress for each connector
  const timelineRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.6;
    const newProgressValues = [...progressValues];
    let newActiveIndex = 0;

    timelineRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top < triggerPoint) {
          newActiveIndex = index;
        }
      }
    });

    timelineRefs.current.forEach((ref, index) => {
      if (ref) {
        const currentRect = ref.getBoundingClientRect();
        const nextRef = timelineRefs.current[index + 1];

        if (nextRef) {
          const nextRect = nextRef.getBoundingClientRect();
          const distanceToNextItem = nextRect.top - triggerPoint;
          const totalDistance = nextRect.top - currentRect.top;

          const progress = 1 - Math.min(1, Math.max(0, distanceToNextItem / totalDistance));
          newProgressValues[index] = progress;
        } else {
          // Ensure the last index's progress is 100% when it's active
          
          newProgressValues[index] = index === newActiveIndex ? 1 : 0;
        }
      }
    });

    setActiveIndex(newActiveIndex);
    setProgressValues(newProgressValues);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check

  return () => window.removeEventListener("scroll", handleScroll);
}, [progressValues]);


  const timelineData = [
    {
      title: "Explore Opportunities",
      description: "Explore the work abroad opportunities that fit your interest, education, and experience background.",
      image: wjourney1,
      color: "#E53935", // Red
    },
    {
      title: "Language & Test Prep",
      description: "Enhance your language skills and test readiness with expert-led training, personalized courses, and flexible study options for a successful career abroad.",
      image: wjourney2,
      color: "#FB8C00", // Orange
    },
    {
      title: "CV & Application Support",
      description: "Receive expert assistance in creating an international-standard CV and stay on track with a transparent application process, including real-time updates on your offer letter.",
      image: wjourney3,
      color: "#FDD835", // Yellow
    },
    {
      title: "Application & Interview Support",
      description: "Stay on track with our transparent application process and real-time updates. Get expert mentorship and training to ace your interviews and secure your offer letter.",
      image: wjourney4,
      color: "#1E88E5", // Blue
    },
    {
      title: "Visa & Relocation Support",
      description: "We guide you through the visa process for a higher success rate and assist with travel and accommodation to ensure a smooth, secure, and affordable transition.",
      image: wjourney5,
      color: "#8E24AA", // Purple
    },
  ];

  return (
    <section>
      <Container id="work-abroad-journey">
        <div className="text-center heading-big-medium">Work Abroad Journey</div>
        <div className="text-center paragraph-big-medium text-content-secondary mb-5">
          Start your work abroad journey in 5 simple steps
        </div>

        <Timeline position={isMobile ? 'right' : 'alternate'}>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} ref={(el) => (timelineRefs.current[index] = el)} className='py-2'>
              <TimelineOppositeContent style={{ flex: isMobile ? '0' : '1' }}>
                <div className="d-none d-md-block">
                  <Image fluid className="custom-image" src={item.image} alt={item.title} />
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  className={`timeline-dot ${index <= activeIndex ? "active" : ""}`}
                  style={{
                    backgroundColor: index <= activeIndex ? item.color : "white",
                    borderColor: item.color,
                  }}
                />
                {index < timelineData.length && (
                  <div className="timeline-connector-wrapper">
                    <TimelineConnector className="timeline-connector" />
                    <div 
                      className="timeline-connector-fill"
                      style={{
                        backgroundColor: item.color,
                        height: `${progressValues[index] * 100}%`,
                        top: '0', // Ensure it starts from the top
                        position: 'absolute'
                      }}
                    />
                  </div>
                )}
              </TimelineSeparator>
              <TimelineContent>
                <div className="text-start">
                  <div className="subheading-small-medium">{item.title}</div>
                  <div className="d-block d-md-none">
                    <Image className="custom-image my-2" src={item.image} alt={item.title} />
                  </div>
                  <div className="paragraph-big-medium text-content-secondary">{item.description}</div>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </section>
  );
};

export default WorkAbroadJourneyTimeline;