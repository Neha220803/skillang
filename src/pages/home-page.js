import React from "react";
import GlobalOprtunity from "../components/home/global-opp/global-opportunity";
import WorkAbroadOpportunity from "../components/home/work-abroad/work-abroad-opportunity";
import StudyAbroadJourney from "../components/resuable/study-abroad-journey/study-abroad-journey";
import UniPartner from "../components/resuable/uni-partner/uni-partner";
import InternshipSection from "../components/home/internship/internship";
import TestPrep from "../components/home/test-prep/test-prep";
import LoanSection from "../components/home/loan/loan-section";
import HomeHeader2 from "../components/home/header/home-header-2";
import PartnerWithUsSection from "../components/resuable/partner-with-us/partnerWithUs";
import ParallaxScrollSnap from "../components/home/work-abroad-journey/workAbroadJourney";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <HomeHeader2 />
      <GlobalOprtunity />
      <WorkAbroadOpportunity />
      {/* The ParallaxScrollSnap component should be in its own section without other elements */}
      <div className="parallax-section-wrapper">
        <ParallaxScrollSnap />
      </div>
      <StudyAbroadJourney />
      <UniPartner />
      <InternshipSection />
      <TestPrep />
      <LoanSection />
      <PartnerWithUsSection />
    </div>
  );
};

export default HomePage;