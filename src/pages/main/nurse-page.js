import React from "react";
import NurseMainHeader from "../../sections/main/nursing/nurseMain";
import NursePathwaySection from "../../sections/main/nursing/pathway/nursePathway";
import WhyNursingSection from "../../sections/main/nursing/why-nursing-ger/whyNursingSection";
import WhySkillangSection from "../../sections/resuable/why-skillang/whySkillangSection";
import OurServices from "../../sections/main/nursing/nurseServices/ourServices";
import OurReqProcess from "../../sections/main/nursing/req-process/ourReqProcess";
import NurseLangSection from "../../sections/main/nursing/german-lang-training/nurseLangSection";
import NursingPosition from "../../sections/main/nursing/nursing-posi/nursingPosi";
import NurseChallengeSection from "../../sections/main/nursing/nurse-int-challenge/nurseChallengeSection";
import NurseStats from "../../sections/resuable/nurse-stats/nurseStats";
import NurseEligibility from "../../sections/resuable/nurse-eligibility/nurseEligibility";
import PermResidentSection from "../../sections/main/nursing/nurse-citizenship/permResidentSection";
import NurseCareerAdvSection from "../../sections/main/nursing/career-adv/nurseCareerAdvSection";
import NursePartner from "../../sections/resuable/partner-with-us/partnerWithUs";
import TypesHealthCareSection from "../../sections/main/nursing/types-nurse/typesHealthCareSection";
import { Helmet } from "react-helmet-async";
import "../../App.css";

const NursePage = () => {
  return (
    <div>
      <Helmet>
        <title>Abroad nursing job consultants in Chennai</title>
        <meta
          name="description"
          content="Discover the best abroad nursing job consultants in Chennai. We offer reliable guidance for nursing careers overseas."
        />
        <meta
          name="keywords"
          content="Abroad nursing job consultants, best nursing consultancy, Best abroad nursing job consultants"
        />
      </Helmet>
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
