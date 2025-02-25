import React, { useState } from 'react';
import { Container, Col, Row, Form, Image, Toast, ToastContainer } from "react-bootstrap";
import book1 from '../../assets/images/nursing/nurseBook1.png';
import book2 from '../../assets/images/nursing/nurseBook2.png';
import book3 from '../../assets/images/nursing/nurseBook3.png';
import book4 from '../../assets/images/nursing/nurseBook4.png';
import book5 from '../../assets/images/nursing/nurseBook5.png';


const BookShelf = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Bootstrap color classes
  const rectangles = [
    { title: 'Free Language Courses', content: "Free German and other language courses tailored for international nurses", color: 'bg-danger', img:book1 },
    { title: 'Expert Training', content: 'Access to online and in-person training options from highly qualified trainers', color: 'bg-info', img:book2 },
    { title: 'Flexible Schedules', content: 'Flexible learning schedules to fit work commitments', color: 'bg-primary', img:book3 },
    { title: 'Healthcare Integration', content: 'Support for integration into the German healthcare system', color: 'bg-success', img:book4 },
    { title: 'Certification', content: 'Certification upon course completion', color: 'bg-primary', img:book5 }
  ];

  return (
    <div className="d-flex h-100 m-3">
      {rectangles.map((rectangle, index) => (
        <div
          key={index}
          className={`d-flex flex-column align-items-start text-white ${rectangle.color} transition-all`}
          style={{
            width: activeIndex === index ? '16rem' : '3rem',
            height: '18rem',
            transition: 'width 0.5s ease-in-out',
            cursor: 'pointer',
            overflow: 'hidden'
          }}
          onClick={() => setActiveIndex(index)}
        >
          <Row>

            <Col>
              {/* First Row - Title */}
                <div
                  className="w-100 px-3 text-start fw-bold p-2"
                  style={{
                    transition: 'transform 0.5s ease-in-out',
                    transform: activeIndex === index ? 'rotate(0deg)' : 'rotate(90deg)',
                    transformOrigin: 'right bottom',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {rectangle.title}
                </div>

                {/* Second Row - Description */}
                <div
                  className="w-100 px-3 text-start"
                  style={{
                    transition: 'all 1  s ease-in-out',
                    transform: activeIndex === index ? 'rotate(0deg)' : 'rotate(90deg)',
                    transformOrigin: 'right bottom',
                    opacity: activeIndex === index ? 1 : 0,
                    height: activeIndex === index ? 'auto' : 0,
                    
                    overflow: 'hidden'
                  }}
                >
                  {rectangle.content}
                </div>
            </Col>
            <Col>
            <Image  src={rectangle.img} alt="" />
            </Col>
          </Row>
          
        </div>
      ))}
    </div>
  );
};

export default BookShelf;
