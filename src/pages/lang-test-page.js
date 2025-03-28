import React from "react";
import LangTestHeader from "../components/lang-test/header/LangTestHeader";
import WhyLangTraining from "../components/lang-test/why-lang/WhyLangTraining";
import LangTestPrepProgs from "../components/lang-test/prep/LangTestPrepProgs";
import WhySkillangPrep from "../components/lang-test/why-skillang/WhySkillangPrep";
import LangTestPartners from "../components/lang-test/lang-partners/LangTestPartners";
import LangContactUs from "../components/lang-test/lang-connect/LangContactUs";
import { Helmet } from "react-helmet-async";

const LangTestPage = () => {
  return (
    <div>
      <Helmet>
        <title>German Language Course Chennai</title>
        <meta
          name="description"
          content="Join our German language course in Chennai. Expert trainers, beginner to advanced levels — boost fluency and communication skills."
        />
        <meta
          name="keywords"
          content="German language course Chennai, German classes in Chennai, German language course in Trivandrum, German language course"
        />
      </Helmet>
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
