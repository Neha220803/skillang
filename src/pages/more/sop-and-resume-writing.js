import React from "react";
import LangContactUs from "../../sections/main/lang-test/lang-connect/LangContactUs";
import PartneredUni from "../../sections/resuable/partnered-uni/partnered_uni";
import SOPHeaderComp from "../../sections/more/sop-and-resume-writing/Header/SOPHeader";
import SOPStepsTimelineComp from "../../sections/more/sop-and-resume-writing/steps-timeline/sopSteps";
import WhySkillangSOPComp from "../../sections/more/sop-and-resume-writing/why-skillang-sop/WhySkillangSOP";
import SOPOverviewComp from "../../sections/more/sop-and-resume-writing/overview/overview";
import { Helmet } from "react-helmet-async";

const SOPAndResumeWritingPage = () => {
  return (
    <div>
      <Helmet>
        <title>SOP Writing Services In Chennai</title>
        <meta
          name="description"
          content="For your SOP, you will undoubtedly seek experienced guidance. We provide high-quality sop writing services in chennai . Get in touch with us"
        />
        <meta
          name="keywords"
          content="sop writing services,sop writer,statement of purpose writer,sop writing services in chennai,professional sop writers in chennai"
        />
      </Helmet>
      <div className="section-spacing">
        <SOPHeaderComp />
      </div>

      <div className="section-spacing">
        <SOPOverviewComp />
      </div>

      <div className="section-spacing">
        <WhySkillangSOPComp />
      </div>

      <div className="section-spacing">
        <SOPStepsTimelineComp />
      </div>
      <div className="section-spacing">
        <LangContactUs />
      </div>
      <div className="section-spacing">
        <PartneredUni />
      </div>
    </div>
  );
};

export default SOPAndResumeWritingPage;
