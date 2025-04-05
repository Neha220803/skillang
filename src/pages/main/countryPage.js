import React from "react";
import "../../App.css";
import CountryWiseHeaderComp from "../../sections/main/study-abroad-country-wise/header";
import StudyAbroadCountryOverview from "../../sections/main/study-abroad-country-wise/overview/overview";
import NavSecondary from "../../sections/main/study-abroad-country-wise/nav/nav-secondary";
import EducationAbroadCountry from "../../sections/main/study-abroad-country-wise/education/education";
import AdmissionAbroadCountry from "../../sections/main/study-abroad-country-wise/admission/admission";
import ScholarshipWithModal from "../../sections/main/study-abroad-country-wise/scholarship/scholarship";
import LifeInAbroadCountry from "../../sections/main/study-abroad-country-wise/life/life";
import WorkOppsAbroadComp from "../../sections/main/study-abroad-country-wise/work-opportunity-broad/workOppsAbroad";

const CountryPage = ({ country = "uk" }) => {
  return (
    <div className="">
      <CountryWiseHeaderComp />
      <NavSecondary />
      <section id="overview" className="country-page-spacing">
        <StudyAbroadCountryOverview />
      </section>

      <section id="education" className="country-page-spacing">
        <EducationAbroadCountry />
      </section>

      <section id="admission-requirements" className="country-page-spacing">
        <AdmissionAbroadCountry />
      </section>

      <section id="available-scholarships" className="country-page-spacing">
        <ScholarshipWithModal country={country} />
      </section>

      <section id="life" className="country-page-spacing">
        <LifeInAbroadCountry />
      </section>

      <section id="work-opportunities" className="country-page-spacing">
        <WorkOppsAbroadComp />
      </section>
    </div>
  );
};

export default CountryPage;
