// CardComponent.js
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import "./TryCards.css";
import { Col, Container, Row, Image } from "react-bootstrap";
// import workJor0 from '../../../assets/images/home/workJoureny0.png';
import workJor1 from "../../../../assets/images/home/workJourney1.jpg";
import workJor2 from "../../../../assets/images/home/workJourney2.jpg";
import workJor3 from "../../../../assets/images/home/workJoureny3.jpg";
import workJor4 from "../../../../assets/images/home/workJoureny4.jpg";
import workJor5 from "../../../../assets/images/home/workJoureny5.jpg";

// Projects data (replace with your actual data)
const projects = [
  // Example project structure - replace with your actual projects
  //  {
  //     title: "Our Features",
  //     description: "Discover essential features designed to simplify your study abroad journey, from expert guidance to seamless support.",
  //     src: workJor0,
  //   },
  {
    title: "Job Matching",
    description:
      "We Identify suitable jobs and submit applications in prominent industries",
    src: workJor1,
  },
  {
    title: "Language & Test Prep",
    description:
      "Enhance your language skills and test readiness with expert-led training, personalized courses, and flexible study options.",
    src: workJor2,
  },
  {
    title: "CV & Application Support",
    description:
      "Receive expert assistance in creating an international-standard CV and stay on track with a transparent application process.",
    src: workJor3,
  },
  {
    title: "Application & Interview Support",
    description:
      "Stay on track with our transparent application process and real-time updates. Get expert mentorship and training to ace your interviews.",
    src: workJor4,
  },

  {
    title: "Visa & Relocation Support",
    description:
      "We guide you through the visa process for a higher success rate and assist with travel and accommodation.",
    src: workJor5,
  },
  // Add more projects as needed
];
const CardComponent = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
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
        const targetScale = 1 - (projects.length - i) * 0.05;
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
const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
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
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="cardd"
      >
        <h2>{title}</h2>
        <div className="body">
          <div className="description">
            <p>{description}</p>
            <span>
              <a href={url} target="_blank" rel="noreferrer">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="imageContainer">
            <motion.div className="inner" style={{ scale: imageScale }}>
              <img src={src} alt="project" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardComponent;
