import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookShelf from "./bookShelf";

const NurseLangSection = () => {
  return (
    <div className="container text-center my-4">
      <div className="heading-big-medium">German Language Training</div>
      <div className="paragraph-big-regular">
        Explore our streamlined recruitment process and timeline, ensuring a smooth journey
        from application to job placement.
      </div>
      <BookShelf />
    </div>
  );
};

export default NurseLangSection;
