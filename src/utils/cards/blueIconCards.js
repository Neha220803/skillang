import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "react-bootstrap";

const BlueIconCard = ({ img, title, text }) => {
  return (
    <>
      <style>
        {`
          .blue-icon-cards {
            height: 100% !important;
            align-items: start;
            display: flex !important;
            flex-direction: row !important;
            box-sizing: border-box;
            padding: 24px !important;
            gap: 16px !important;
            background: #ffffff;
            border: 1px solid #e3e3e3;
            border-radius: 16px;
          }

          .blue-icon-img {
            width: 50px !important;
            height: auto !important;
}
        `}
      </style>
      <Card className="blue-icon-cards">
        <CardImg src={img} alt={title} className="blue-icon-img" />
        <CardBody className="p-0">
          <CardTitle className="small-medium">{title}</CardTitle>
          <CardText className="blue-icon-cards-text paragraph-small-medium text-content-secondary">
            {text}
          </CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default BlueIconCard;
