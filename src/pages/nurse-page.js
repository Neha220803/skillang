import React from "react";
import NurseMainHeader from "../components/nursing/nurseMain";
import NursePathwaySection from "../components/nursing/pathway/nursePathway";
import WhyNursingSection from "../components/nursing/why-nursing-ger/whyNursingSection";
import WhySkillangSection from "../components/resuable/why-skillang/whySkillangSection";
import OurServices from "../components/nursing/nurseServices/ourServices";
import OurReqProcess from "../components/nursing/req-process/ourReqProcess";
import NurseLangSection from "../components/nursing/german-lang-training/nurseLangSection";
import NursingPosition from "../components/nursing/nursing-posi/nursingPosi";
import NurseChallengeSection from "../components/nursing/nurse-int-challenge/nurseChallengeSection";
import NurseStats from "../components/resuable/nurse-stats/nurseStats";
import NurseEligibility from "../components/resuable/nurse-eligibility/nurseEligibility";
import PermResidentSection from "../components/nursing/nurse-citizenship/permResidentSection";
import NurseCareerAdvSection from "../components/nursing/career-adv/nurseCareerAdvSection";
import NursePartner from "../components/resuable/partner-with-us/partnerWithUs";
import TypesHealthCareSection from "../components/nursing/types-nurse/typesHealthCareSection";
import "../App.css";

const NursePage = () => {
  return (
    <div>
      <div className="section-spacing">
        <NurseMainHeader />
      </div>
      <div className="section-spacing">
        <NursePathwaySection />
      </div>
      <div className="section-spacing">
        <WhyNursingSection />
      </div>
      <div className="section-spacing">
        <WhySkillangSection />
      </div>
      <div className="section-spacing">
        <OurServices />
      </div>
      <div className="section-spacing">
        <OurReqProcess />
      </div>
      <div className="section-spacing">
        <NurseLangSection />
      </div>
      <div className="section-spacing">
        <NursingPosition />
      </div>
      <div className="section-spacing">
        <NurseChallengeSection />
      </div>
      <div className="section-spacing">
        <NurseStats />
      </div>
      <div className="section-spacing">
        <NurseEligibility />
      </div>
      <div className="section-spacing">
        <PermResidentSection />
      </div>
      <div className="section-spacing">
        <TypesHealthCareSection />
      </div>
      <div className="section-spacing">
        <NurseCareerAdvSection />
      </div>
      <div className="section-spacing">
        <NursePartner />
      </div>
    </div>
  );
};

export default NursePage;
