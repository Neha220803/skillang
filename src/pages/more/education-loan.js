import React from "react";
import Header from "../../sections/education-loan/header/header";
import EduLoanOurServices from "../../sections/education-loan/ourservices/ourservices";
import TypesAndEligiblity from "../../sections/education-loan/typesandeligblity/TypesAndEligiblity";
import LoanEligiblity from "../../sections/education-loan/typesandeligblity/Eligiblity";
import WhySkillangEdu from "../../sections/education-loan/whyskillangEdu/WhySkillangEdu";
import GetStart from "../../sections/education-loan/gettingstarted/GetStart";
import LangContactUs from "../../sections/lang-test/lang-connect/LangContactUs";

const EducationLoanPage = () => {
  return (
    <div>
      <div className="section-spacing">
        <Header />
      </div>
      <div className="section-spacing">
        <EduLoanOurServices />
      </div>
      <div>
        <TypesAndEligiblity />
      </div>
      <div>
        <LoanEligiblity />
      </div>
      <div className="section-spacing">
        <WhySkillangEdu />
      </div>
      <div className="section-spacing">
        <GetStart />
      </div>
      <div className="section-spacing">
        <LangContactUs />
      </div>
    </div>
  );
};

export default EducationLoanPage;
