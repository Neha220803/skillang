import React from "react";
import Header from "../../sections/more/education-loan/header/header";
import EduLoanOurServices from "../../sections/more/education-loan/ourservices/ourservices";
import TypesAndEligiblity from "../../sections/more/education-loan/typesandeligblity/TypesAndEligiblity";
import LoanEligiblity from "../../sections/more/education-loan/typesandeligblity/Eligiblity";
import WhySkillangEdu from "../../sections/more/education-loan/whyskillangEdu/WhySkillangEdu";
import GetStart from "../../sections/more/education-loan/gettingstarted/GetStart";
import LangContactUs from "../../sections/main/lang-test/lang-connect/LangContactUs";
import { Helmet } from "react-helmet-async";

const EducationLoanPage = () => {
  return (
    <div>
      <Helmet>
        <title>Education Loan For Abroad Without Collateral</title>
        <meta
          name="description"
          content="Get an education loan for studying abroad without collateral. Quick approval, flexible repayment, and low interest rates. Apply now and fund your dreams!"
        />
        <meta
          name="keywords"
          content="education loan for abroad without collateral,education loan,abroad education loan,study loan for abroad,abroad education loan without collateral"
        />
      </Helmet>
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
