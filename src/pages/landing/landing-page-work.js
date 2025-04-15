import React from "react";
import LandingNavBar from "../../components/landing/landing-nav/landing-nav";
import WorkForm from "../../sections/landing/work-abroad/work-form";
import WorkAbroadOpportunity from "../../sections/main/home/work-abroad/work-abroad-opportunity";
import WorkOppsAbroadComp from "../../sections/main/study-abroad-country-wise/work-opportunity-broad/workOppsAbroad";
import AbroadJourney from "../../sections/main/work-abroad/abroud_journey";
const LandingWorkAbroadPage = () => {
  return (
    <div>
      <LandingNavBar />

      <div className="section-spacing">
        <WorkForm />
      </div>

      <div className="section-spacing">
        <WorkAbroadOpportunity />
      </div>
      <div className="section-spacing">
        <AbroadJourney />
      </div>
    </div>
  );
};

export default LandingWorkAbroadPage;
