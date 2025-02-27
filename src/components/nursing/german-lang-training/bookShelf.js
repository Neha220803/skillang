import React, { useState } from 'react';
import { Container, Col, Row, Form, Image, Toast, ToastContainer } from "react-bootstrap";
import book1 from '../../../assets/images/nursing/nurseBook1.png';
import book2 from '../../../assets/images/nursing/nurseBook2.png';
import book3 from '../../../assets/images/nursing/nurseBook3.png';
import book4 from '../../../assets/images/nursing/nurseBook4.png';
import book5 from '../../../assets/images/nursing/nurseBook5.png';
import wood from '../../../assets/images/nursing/woord.png';
import './nurseLangSection.css'; // Import the CSS file

const BookShelf = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Bootstrap color classes
  const rectangles = [
    { title: 'Free Language Courses', content: "Free German and other language courses tailored for international nurses", color: 'bg-dark', img: book1 },
    { title: 'Expert Training', content: 'Access to online and in-person training options from highly qualified trainers', color: 'bg-danger', img: book2 },
    { title: 'Flexible Schedules', content: 'Flexible learning schedules to fit work commitments', color: 'bg-primary', img: book3 },
    { title: 'Healthcare Integration', content: 'Support for integration into the German healthcare system', color: 'bg-dark', img: book4 },
    { title: 'Certification', content: 'Certification upon course completion', color: 'bg-danger', img: book5 }
  ];

  return (
    <div className="bookshelf-container">
      {rectangles.map((rectangle, index) => (
        <div
          key={index}
          className={`book-item ${rectangle.color} ${activeIndex === index ? 'active' : 'inactive'}`}
          onClick={() => setActiveIndex(index)}
        >
          <Row className='bg-primar'>
            <Col lg={6}>
              {/* First Row - Title */}
              <div className={`subheading-big-medium book-title ${activeIndex === index ? '' : 'inactive'}`}>
                {rectangle.title}
              </div>

              {/* Second Row - Description */}
              <div className={`paragraph-big-medium book-content ${activeIndex === index ? 'active' : 'inactive'}`}>
                {rectangle.content}
              </div>
            </Col>
            
              <Image fluid src={rectangle.img} alt="" className='book-img' />
          </Row>
        </div>
      ))}
    </div>
  );
};

export default BookShelf;