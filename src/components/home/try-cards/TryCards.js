// CardComponent.js
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import './TryCards.css';
import { Col, Container, Row, Image } from 'react-bootstrap';
import workJor0 from '../../../assets/images/home/workJoureny0.png';
import workJor1 from '../../../assets/images/home/workJourney1.png';
import workJor2 from '../../../assets/images/home/workJourney2.png';
import workJor3 from '../../../assets/images/home/workJoureny3.png';
import workJor4 from '../../../assets/images/home/workJoureny4.png';
import workJor5 from '../../../assets/images/home/workJoureny5.png';

// Projects data (replace with your actual data)
const projects = [
  // Example project structure - replace with your actual projects
 {
    title: "Our Features",
    description: "Discover essential features designed to simplify your study abroad journey, from expert guidance to seamless support.",
    src: workJor0,
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    // color: "#BBACAF"
  },
  {
    title: "Job Matching",
    description: "We Identify suitable jobs and submit applications in prominent industries",
    src: workJor1,
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    // color: "#977F6D"
  },
  {
    title: "Language & Test Prep",
    description: "Enhance your language skills and test readiness with expert-led training, personalized courses, and flexible study options.",
    src: workJor2,
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    // color: "#C2491D"
  },
  {
    title: "CV & Application Support",
    description: "Receive expert assistance in creating an international-standard CV and stay on track with a transparent application process.",
    src: workJor3,
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    // color: "#B62429"
  },
  {
    title: "Application & Interview Support",
    description: "Stay on track with our transparent application process and real-time updates. Get expert mentorship and training to ace your interviews.",
    src: workJor4,
    link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    // color: "#88A28D"
  },

   {
    title: "Visa & Relocation Support",
    description: "We guide you through the visa process for a higher success rate and assist with travel and accommodation.",
    src: workJor5,
    // link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    // color: "#88A28D"
  }
  // Add more projects as needed
];

const CardComponent = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={containerRef} className="main">
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        return (
          <Card 
            key={`p_${i}`} 
            i={i} 
            {...project} 
            progress={scrollYProgress} 
            range={[i * 0.25, 1]} 
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

// Card sub-component
const Card = ({ i, title, description, src, url, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={container} 
      className="cardContainer" 
      style={{ "--i": i }} // Add index as CSS variable for z-index
    >
      <motion.div 
        style={{
          scale, 
          top: `calc(-5vh + ${i * 25}px)`
        }} 
        className="bg-primar cardd"
      >
        <Container>
          
          <Row className='w-100'>
                      <Col lg={6} md={6} sm={12} xs={12} className='bg-dar'>
                          <div className="imageContainer w-100">
                                <motion.div
                                  className="inner"
                                  style={{ scale: imageScale }}
                                >
                                  <img
                                    src={src}
                                    alt="project"
                                    className='img-fluid'
                                  />
                                </motion.div>
                              </div>
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12} className='d-flex flex-column align-items-center justify-content-center text-start'>
                        <div className='work-journey-text-wrap'>
                          <div className="subheading-big-medium text-content-primary">{title}</div>
                          <div className="paragraph-big-medium text-content-secondary my-2">{description}</div>
                          <button className='btn-secondary'>Learn More</button>
                        </div>
                      </Col>
                    </Row>
          
        </Container>
      </motion.div>
    </div>
  );
};

export default CardComponent;