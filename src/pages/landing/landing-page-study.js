import React from "react";
import LandingNavBar from "../../components/landing/landing-nav/landing-nav";
import StudyForm from "../../sections/landing/study-abroad/study-form";
import WhyStudyAbroad from "../../sections/main/study-abroad/whystudyabroad";
import StudyAbroad from "../../sections/resuable/study-abroad-journey/study-abroad-journey";
import LangContactUs from "../../sections/main/lang-test/lang-connect/LangContactUs";
import AbroadDestinations from "../../sections/main/study-abroad/abroad_destination";
import NavStudyLanding from "../../components/nav/nav-study-landing";

const LandingStudyAbroadPage = () => {
  return (
    <div>
      <LandingNavBar />
      <NavStudyLanding />
      <div className="section-spacing">
        <StudyForm />
      </div>
      <div className="section-spacing">
        <WhyStudyAbroad />
      </div>
      <div className="section-spacing">
        <AbroadDestinations />
      </div>
      <div className="section-spacing">
        <StudyAbroad showAll={false} />
      </div>
      <div className="section-spacing">
        <LangContactUs />
      </div>
    </div>
  );
};

export default LandingStudyAbroadPage;
