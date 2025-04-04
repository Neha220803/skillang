import React from "react";
import LandingNavBar from "../../components/landing/landing-nav/landing-nav";
import NurseForm from "../../sections/landing/nurse-in-germany/nurseForm";
import WhyUsNurse from "../../sections/landing/nurse-in-germany/whyUsNurse";
import NurseEligibility from "../../sections/resuable/nurse-eligibility/nurseEligibility";
import WhyGermany from "../../sections/landing/nurse-in-germany/whyGermany";
import NurseStats from "../../sections/resuable/nurse-stats/nurseStats";
import LandingFooter from "../../components/landing/landing-footer/landingFooter";

const LandingNursePage = () => {
  return (
    <div>
      <LandingNavBar />
      <NurseForm />
      <WhyUsNurse />
      <NurseEligibility />
      <WhyGermany />
      <NurseStats />
      <LandingFooter />
    </div>
  );
};

export default LandingNursePage;
