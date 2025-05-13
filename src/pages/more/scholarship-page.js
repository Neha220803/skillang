import React from "react";
import ScholarshipHeader from "../../sections/more/scholarships/Header/ScholarshipHeader";
import TypesOfScholarship from "../../sections/more/scholarships/types-scholarship/TypesOfScholarship";
import LangContactUs from "../../sections/main/lang-test/lang-connect/LangContactUs";
import WhySkillangEdu from "../../sections/more/education-loan/whyskillangEdu/WhySkillangEdu";
import ScholarshipTimeline from "../../sections/more/scholarships/steps-timeline/ScholarshipTimeline";
import PartneredUni from "../../sections/resuable/partnered-uni/partnered_uni";
import TopScholarshipComp from "../../sections/more/scholarships/topScolarships/TopScholarship";
import { Helmet } from "react-helmet-async";

const ScholarshipPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Study Abroad Scholarships | Abroad University Scholorships
        </title>
        <meta
          name="description"
          content="Make your global education dream a reality. Discover study abroad scholarships, eligibility details, and expert help to submit winning applications"
        />
        <meta
          name="keywords"
          content="study abroad scholarships,abroad university scholorships,scholorships for indian students,scholarship abroad,scholarships to study abroad"
        />
      </Helmet>
      <div className="mb-5">
        <ScholarshipHeader />
      </div>
      <div className="section-spacing">
        <TypesOfScholarship />
      </div>
      <div className="section-spacing">
        <TopScholarshipComp />
      </div>
      <div className="section-spacing">
        <WhySkillangEdu />
      </div>
      <div className="section-spacing">
        <ScholarshipTimeline />
      </div>
      <div className="section-spacing">
        <LangContactUs />
      </div>
      {/* <div className="section-spacing">
        <PartneredUni />
      </div> */}
    </div>
  );
};

export default ScholarshipPage;
