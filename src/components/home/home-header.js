import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import carousel1 from '../../images/home/carousel-1.png';
import carousel2 from '../../images/home/carousel-2.png';
import carousel3 from '../../images/home/carousel-3.png';
import carousel4 from '../../images/home/carousel-4.png';

const HomeHeader = () => {
  const navigate = useNavigate();
  
  // Define the slides array with the same heading for each
  const slides = [
    { image: carousel1},
    { image: carousel2  },
    { image: carousel3 },
    { image: carousel4 }
  ];

  return (
    <header>
      <Carousel interval={3000} pause={false} controls={false}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} style={{ overflow: 'hidden' }}>
            <div className="image-container">
              <img
                className="d-block w-100"
                src={slide.image}
                alt={`Slide ${index + 1}`}
                style={{ objectFit: 'cover', height: '100vh' }}
              />
            </div>
            <Carousel.Caption className="heading1">
              {/* Display the same heading for each slide */}
              <h1>Welcome to Our Platform</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </header>
  );
};

export default HomeHeader;
