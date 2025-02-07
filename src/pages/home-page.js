import React from "react";
import HomeHeader from "../components/home/header/home-header";
import GlobalOprtunity from "../components/home/global-opp/global-opportunity";
import WorkAbroadOpportunity from "../components/home/work-abroad/work-abroad-opportunity";
import WorkAbroadJourney from "../components/home/work-abroad-journey";
import StudyAbroadJourney from "../components/home/study-abroad/study-abroad-journey";
import UniPartner from "../components/home/uni-partner/uni-partner";
import InternshipSection from "../components/home/internship/internship";
import TestPrep from "../components/home/test-prep/test-prep";
import LoanSection from "../components/home/loan/loan-section";
import PartnerSection from "../components/home/partner/partner-section";

const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <GlobalOprtunity />
      <WorkAbroadOpportunity />
      <WorkAbroadJourney />
      <StudyAbroadJourney />
      <UniPartner />
      <InternshipSection />
      <TestPrep />
      <LoanSection />
      <PartnerSection />
    </div>
  );
};

export default HomePage;
