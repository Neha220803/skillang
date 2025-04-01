import React from "react";
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
    <div>
      <CountryWiseHeaderComp />
      <NavSecondary />
      <StudyAbroadCountryOverview />
      <EducationAbroadCountry />
      <AdmissionAbroadCountry />
      <ScholarshipAbroadCountry />
      <LifeInAbroadCountry />
      <WorkOppsAbroadComp />
    </div>
  );
};

export default CountryPage;
