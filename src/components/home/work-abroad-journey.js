import * as React from 'react';
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
  const timelineData = [
    {
      title: "Explore Opportunities ",
      description: "Explore the work abroad oppurtunites that fits your interest, education and Experience background.",
      image: wjourney1,
    },
    {
      title: "Language & Test Prep",
      description: "Explore the work abroad oppurtunites that fits your interest, education and Experience background.",
      image: wjourney2,
    },
    {
      title: "CV Making",
      description: "Get the expert assistance in CV Making as per the international standard.",
      image: wjourney3,
    },
     {
      title: "Job Matching",
      description: "Expert assistance in matching the openings and your preferance according to the Country, City and  location.",
      image: wjourney4,
    },
    {
      title: "Interview preparation",
      description: "Get the Mentor guidance and training for the interview preperation.",
      image: wjourney5,
    },
    {
      title: "Application & Offer letter ?",
      description: "Be on track with our transparent Application process. Get the real time update on your application and offer letter.",
      image: wjourney6,
    },
    {
      title: "Visa Assistance",
      description: "Our expert will guide you through the step by step for the visa process and documentations and increase your visa sucess rate.",
      image: wjourney7,
    },

    {
      title: "Travel & Accommodation Assistance",
      description: "A complete support for Travel and accommodation will be provided to save the cost and make it more affordable, secured and comfortable. ",
      image: wjourney8,
    },
  ];

  return (
    <section>
    <Container className=''>
      <h1 className="text-center">Work Abroad Journey</h1>
      <Timeline position="alternate" >
        {timelineData.map((item, index) => (
          <TimelineItem key={index} className=' mb-2'>
            <TimelineOppositeContent color="text.secondary" >
              <Image
  className="custom-image"
  src={item.image}
  alt={item.title}
  style={{ height: '300px', width: 'auto' }}
/>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={{backgroundColor:'#E86E39'}} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div >
                <h3>{item.title}</h3>
                <div ><p >{item.description}</p>
                </div>
             
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
     </section>
  );
};

export default WorkAbroadJourney;