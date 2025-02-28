import React, { useState } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import nurseBookBg1 from '../../../assets/images/nursing/nurseBookBg1.svg';
import nurseBookBg2 from '../../../assets/images/nursing/nurseBookBg2.svg';
import nurseBookBg3 from '../../../assets/images/nursing/nurseBookBg3.svg';
import nurseBookBg4 from '../../../assets/images/nursing/nurseBookBg4.svg';
import nurseBookBg5 from '../../../assets/images/nursing/nurseBookBg5.svg';
import './nurseLangSection.css'; // Import the CSS file

const BookShelf = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Data for books
  const rectangles = [
    { title: 'Free Language Courses', content: "Free German and other language courses tailored for international nurses", img: nurseBookBg1 },
    { title: 'Expert Training', content: 'Access to online and in-person training options from highly qualified trainers', img: nurseBookBg2 },
    { title: 'Flexible Schedules', content: 'Flexible learning schedules to fit work commitments', img: nurseBookBg3 },
    { title: 'Healthcare Integration', content: 'Support for integration into the German healthcare system', img: nurseBookBg4 },
    { title: 'Certification', content: 'Certification upon course completion', img: nurseBookBg5 }
  ];

  return (
    <div className="bookshelf-container">
      {rectangles.map((rectangle, index) => (
        <div
          key={index}
          className={`book-item ${activeIndex === index ? 'active' : 'inactive'}`}
          onClick={() => setActiveIndex(index)}
          style={{
            backgroundImage: `url(${rectangle.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <Row>
            <Col lg={6} sm={8} xs={8}>
              {/* Title */}
              <div className={`subheading-big-medium book-title ${activeIndex === index ? '' : 'inactive'}`}>
                {rectangle.title}
              </div>

              {/* Description */}
              <div className={`paragraph-big-medium book-content ${activeIndex === index ? 'active' : 'inactive'}`}>
                {rectangle.content}
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default BookShelf;
