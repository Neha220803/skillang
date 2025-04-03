import React from "react";
import "../App.css";
import CountryWiseHeaderComp from "../components/study-abroad-country-wise/header";
import StudyAbroadCountryOverview from "../components/study-abroad-country-wise/overview/overview";
import NavSecondary from "../components/study-abroad-country-wise/nav/nav-secondary";
import EducationAbroadCountry from "../components/study-abroad-country-wise/education/education";
import AdmissionAbroadCountry from "../components/study-abroad-country-wise/admission/admission";
import ScholarshipAbroadCountry from "../components/study-abroad-country-wise/scholarship/scholarship";
import LifeInAbroadCountry from "../components/study-abroad-country-wise/life/life";
import WorkOppsAbroadComp from "../components/study-abroad-country-wise/work-opportunity-broad/workOppsAbroad";

const CountryPage = () => {
  return (
    <div className="">
      <CountryWiseHeaderComp />
      <NavSecondary />
      <div className="country-page-spacing">
        <StudyAbroadCountryOverview />
      </div>
      <div className="country-page-spacing">
        <EducationAbroadCountry />
      </div>
      <div className="country-page-spacin">
        <AdmissionAbroadCountry />
      </div>
      <div className="country-page-spacing">
        <ScholarshipAbroadCountry />
      </div>
      <div className="country-page-spacing">
        <LifeInAbroadCountry />
      </div>
      <div className="country-page-spacing">
        <WorkOppsAbroadComp />
      </div>
    </div>
  );
};

export default CountryPage;
