import React, { useState, useEffect, useRef } from "react";
import "./GetStartedTimeline.css";
import "../../index.css";
import { Container } from "react-bootstrap";

const GetStartedTimeline = ({
  title = "Getting Started",
  subtitle = "",
  steps = [],
}) => {
  // Animation state
  const [animationStage, setAnimationStage] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // Set up Intersection Observer to detect when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if component is intersecting (visible)
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Once we've detected visibility, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        // Component is considered visible when 20% of it is in viewport
        threshold: 0.2,
      }
    );

    // Start observing our component
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup function
    return () => {
      if (componentRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Trigger animation when component becomes visible - only for mobile
  useEffect(() => {
    // Only start animation when component is visible
    if (!isVisible) return;

    // Check if we're on mobile view
    const isMobile = window.innerWidth <= 992;

    if (isMobile) {
      // Calculate the timeline based on number of steps
      // Each step has 3 animations: circle, content, and line (except last step has no line)
      let timeline = [];

      steps.forEach((step, index) => {
        const baseStage = index * 3;
        timeline.push({ stage: baseStage, delay: 500 }); // Circle turns green
        timeline.push({ stage: baseStage + 1, delay: 300 }); // Content darkens

        // Add line animation for all steps except the last one
        if (index < steps.length - 1) {
          timeline.push({ stage: baseStage + 2, delay: 600 }); // Line connects and turns green
        }
      });

      let timeoutIds = [];

      // Schedule each animation stage
      let cumulativeDelay = 0;
      timeline.forEach((item) => {
        cumulativeDelay += item.delay;
        const timeoutId = setTimeout(() => {
          setAnimationStage(item.stage);
        }, cumulativeDelay);
        timeoutIds.push(timeoutId);
      });

      // Cleanup function
      return () => {
        timeoutIds.forEach((id) => clearTimeout(id));
      };
    }
  }, [isVisible, steps.length]); // Add steps.length as dependency

  return (
    <Container className="p-0">
      <div className="getting-started-container p-0" ref={componentRef}>
        <div className="header-section">
          <div className="heading-big-medium text-content-primary">{title}</div>
          <div className="paragraph-big-medium text-content-secondary">
            {subtitle}
          </div>
        </div>
        <div className="progress-steps-container">
          {/* Desktop view with improved grid layout */}
          <div className="desktop-view">
            <div className="step-progress-bar">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="step-label">Step {index + 1}</div>
                  <div className={`step-circle ${index === 0 ? "active" : ""}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={index === 0 ? "white" : "#dfe1e6"}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="progress-steps-container-desc">
                    <div className="step-title paragraph-big-medium">
                      {step.title}
                    </div>
                    <div className="paragraph-small-regular text-center text-content-tertiary">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile view with animation */}
          <div className="mobile-view">
            <div className="header-title">
              <h1 className="heading-big-medium">{title}</h1>
              <p className="subheading-text">{subtitle}</p>
            </div>
            <div className="mobile-timeline-container">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="mobile-step-item">
                    <div
                      className={`mobile-step-circle ${
                        animationStage >= index * 3 ? "animated-circle" : ""
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={
                          animationStage >= index * 3 ? "white" : "#dfe1e6"
                        }
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={
                          animationStage >= index * 3
                            ? "animated-checkmark"
                            : ""
                        }
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="mobile-step-content">
                      <h3
                        className={`mobile-step-title ${
                          animationStage >= index * 3 + 1 ? "animated-text" : ""
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  {/* Add connecting line except for the last item */}
                  {index < steps.length - 1 && (
                    <div
                      className={`mobile-progress-line line${index + 1} ${
                        animationStage >= index * 3 + 2 ? "animated-line" : ""
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GetStartedTimeline;
