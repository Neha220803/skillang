import React from "react";
import BookShelf from "./bookShelf";

const NurseLangSection = () => {
  return (
    <div className="container text-center my-4">
      <div className="heading-big-medium mb-1">German Language Training</div>
      <div className="paragraph-big-regular mb-4">
        Explore our streamlined recruitment process and timeline, ensuring a smooth journey
        from application to job placement.
      </div>
      <BookShelf />
    </div>
  );
};

export default NurseLangSection;
