import React from "react";
import errorImg from "../../../assets/images/error-img.jpg";
import { Container } from "react-bootstrap";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center error-page-bg">
      <Container className=" d-flex flex-column justify-content-center align-items-center ">
        <div className="error-page-circle"></div>
        <img src={errorImg} alt="Error" className="img-fluid" />
        <button
          className="btn btn-primary mt-3"
          onClick={() => (window.location.href = "/home")}
        >
          Back to Home
        </button>
      </Container>
    </div>
  );
};

export default ErrorPage;
