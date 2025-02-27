import React from "react";
import './nurseLangSection.css';
import { Container, Col, Row, Form, Image, Toast, ToastContainer } from "react-bootstrap";
import BookShelf from "./bookShelf";
import wood from '../../../assets/images/nursing/woord.png';

const NurseLangSection = () => {
  return (
    <div className="container text-center my-4">
      <div className="heading-big-medium mb-1">German Language Training</div>
      <div className="paragraph-big-regular mb-4">
        Explore our streamlined recruitment process and timeline, ensuring a smooth journey
        from application to job placement.
      </div>
      <BookShelf />
          <Image fluid src={wood} alt="" />
    </div>
  );
};

export default NurseLangSection;
