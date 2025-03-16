import React from "react";
import LangTestHeader from "../components/lang-test/header/LangTestHeader";
import WhyLangTraining from "../components/lang-test/why-lang/WhyLangTraining";
import LangTestPrepProgs from "../components/lang-test/prep/LangTestPrepProgs";
import WhySkillangPrep from "../components/lang-test/why-skillang/WhySkillangPrep";
import LangTestPartners from "../components/lang-test/lang-partners/LangTestPartners";
import LangContactUs from "../components/lang-test/lang-connect/LangContactUs";

const LangTestPage = () => {
  return (
    <div>
      <div className="section-spacing">
        <LangTestHeader />
      </div>
      <div className="section-spacing">
        <WhyLangTraining />
      </div>
      <div className="section-spacing">
        <LangTestPrepProgs />
      </div>
      <div className="section-spacing">
        <WhySkillangPrep />
      </div>
      <div className="section-spacing">
        <LangTestPartners />
      </div>
      <div className="section-spacing">
        <LangContactUs />
      </div>
    </div>
  );
};

export default LangTestPage;
