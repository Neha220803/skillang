import React from "react";
import StudyAbroadHeader from "../components/study-abroad/study_header";
import WhyStudyAbroad from "../components/study-abroad/whystudyabroad";
import AbroadDestination from "../components/study-abroad/abroad_destination";
import IndemandCourse from "../components/study-abroad/indemand-courses/indemand_course";
import StudyAbroad from "../components/resuable/study-abroad-journey/study-abroad-journey";
import CountriesWeServe from "../components/resuable/countries-we-serve/countriesWeServe";
import UniPartner from "../components/resuable/uni-partner/uni-partner";

const StudyAbroadPage = () => {
  return (
    <div>
      <div className="section-spacing">
        <StudyAbroadHeader />
      </div>
      <div className="section-spacing">
        <WhyStudyAbroad />
      </div>
      <div className="section-spacing">
        <AbroadDestination />
      </div>
      <div className="section-spacing">
        <IndemandCourse />
      </div>
      <div className="section-spacing">
        <StudyAbroad />
      </div>
      <div className="section-spacing">
        <CountriesWeServe />
      </div>
      <div className="section-spacing">
        <UniPartner />
      </div>
    </div>
  );
};

export default StudyAbroadPage;
