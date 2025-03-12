import React, { useEffect, useRef } from "react";
import { Card, Container } from "react-bootstrap";
import '../../../App.css';
import './study-abroad-journey.css';
import work1 from "../../../assets/images/reusable/s-journey-1.jpg";
import work2 from "../../../assets/images/reusable/s-journey-2.jpg";
import work3 from "../../../assets/images/reusable/s-journey-3.jpg";
import work4 from "../../../assets/images/reusable/s-journey-4.jpg";
import work5 from "../../../assets/images/reusable/s-journey-5.jpg";
import work6 from "../../../assets/images/reusable/s-journey-6.jpg";
import work7 from "../../../assets/images/reusable/s-journey-7.jpg";
import work8 from "../../../assets/images/reusable/s-journey-8.jpg";
import work9 from "../../../assets/images/reusable/s-journey-9.jpg";
import { useNavigate } from 'react-router-dom';

const cardData = [
  { title: "Explore Universities and Courses", desc: "Experts guide you based on interests and background. Recommendations tailored to fit your budget.", img: work1,id: "study-abroad-card1" },
  { title: "Personalised counselling", desc: "Clarify doubts before finalizing decisions. Multiple sessions ensure thorough understanding.", img: work2 },
  { title: "Test Preparation", desc: "Personalized plans based on your strengths and challenges. Expert guidance for IELTS, TOEFL, and more.", img: work3 },
  { title: "Alumni & University Rep Connect", desc: "Connect with alumni for personalized insights. One-on-one discussions with university representatives.", img: work4 },
  { title: "University Application Process", desc: "Our team guides you through the university application process. Real-time tracking of your application status.", img: work5 },
  { title: "Education Loan Assistance", desc: "Our Loan team connects you with financial institutions. Assistance provided for seamless loan processing.", img: work6 },
  { title: "Travel and Accommodations", desc: "End-to-end guidance for travel and accommodation. Secure and affordable cost options.", img: work7 },
  { title: "Post Travel Support", desc: "Skillang membership grants access to alumni network. Connect, learn, and network in your destination country.", img: work8 },
  { title: "Job Assistance", desc: "Our Career support team assists with job applications. Guidance for part-time and full-time jobs abroad.", img: work9 },
];

export default function StudyAbroad() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Function to handle the subtle scroll animation
    const handleAutoScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const section = sectionRef.current;
      
      if (!scrollContainer || !section) return;
      
      // Create an Intersection Observer to detect when the section is visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // If the section is visible and has scrollable content
          if (entry.isIntersecting && scrollContainer.scrollWidth > scrollContainer.clientWidth) {
            // Scroll to show a bit of the next card, then scroll back
            const initialScroll = () => {
              // Scroll to show a hint of the next cards (about 100px)
              scrollContainer.scrollTo({
                left: 150,
                behavior: 'smooth'
              });
              
              // After a short delay, scroll back to the beginning
              setTimeout(() => {
                scrollContainer.scrollTo({
                  left: 0,
                  behavior: 'smooth'
                });
              }, 500);
            };
            
            // Trigger the scroll animation after a short delay when the section becomes visible
            setTimeout(initialScroll, 100);
            
            // We only need to observe once
            observer.disconnect();
          }
        });
      }, { threshold: 0.5 }); // Trigger when 50% of the element is visible
      
      observer.observe(section);
      
      // Cleanup on component unmount
      return () => observer.disconnect();
    };
    
    handleAutoScroll();
  }, []);
  
  return (
    <Container ref={sectionRef} className="align-items-center justify-content-center study-abroad-bg">
      <div className="text-center my-lg-4 heading-big-medium text-content-primaryInverse">Study Abroad Journey</div>
      {/* <div className="text-center d-flex align-items-center justify-content-center">
        <button className="btn-primary text-center d-none d-md-block">Book a Free Consultation</button>
      </div> */}

      {/* Scrollable Row */}
      <div ref={scrollContainerRef} className="scrollable-container">
        {cardData.map((card, index) => (
          <div key={index} className="card-container">
            <Card className="custom-card my-4 border-0 " id={card.id}>
              <div className="card-image-wrapper" style={{ backgroundImage: `url(${card.img})` }}></div>
              <Card.Body className="">
                <Card.Title className="subheading-small-medium text-content-primaryInverse mb-1">{card.title}</Card.Title>
                <Card.Text className="paragraph-small-medium text-content-tertiaryInverse">{card.desc}</Card.Text>
                <div className="button-container">
                  <button className="btn btn-primary btn-learn-more" onClick={() => {
                    navigate('/study-abroad');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}>Learn More</button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}