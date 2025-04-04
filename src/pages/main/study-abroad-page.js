import React from "react";
import StudyAbroadHeader from "../../sections/main/study-abroad/study_header";
import WhyStudyAbroad from "../../sections/main/study-abroad/whystudyabroad";
import AbroadDestination from "../../sections/main/study-abroad/abroad_destination";
import IndemandCourse from "../../sections/main/study-abroad/indemand-courses/indemand_course";
import StudyAbroad from "../../sections/resuable/study-abroad-journey/study-abroad-journey";
import CountriesWeServe from "../../sections/resuable/countries-we-serve/countriesWeServe";
import UniPartner from "../../sections/resuable/uni-partner/uni-partner";
import { Helmet } from "react-helmet-async";

const StudyAbroadPage = () => {
  return (
    <div>
      <Helmet>
        {/* <title>Study Abroad Consultants in Chennai</title> */}
        <meta
          name="description"
          content="Get expert advice from the best study abroad consultants in Chennai. Simplify your study abroad process with reliable guidance and support."
        />
        <meta
          name="keywords"
          content="study abroad consultants, study abroad consultants in Chennai, abroad consultancy in Chennai, study abroad Chennai, study consultancy in Chennai"
        />
      </Helmet>
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
