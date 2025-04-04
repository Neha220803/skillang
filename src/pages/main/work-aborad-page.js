import React from "react";
import WorkAbroadHeader from "../../sections/work-abroad/header";
import WhyChooseSkillang from "../../sections/resuable/why-skillang/whySkillangSection";
import CountriesWeServe from "../../sections/resuable/countries-we-serve/countriesWeServe";
import SkillShortage from "../../sections/work-abroad/skillShortage";
import ServiceOfferCountryWise from "../../sections/work-abroad/serviceOfferCountryWise";
import AbroudJourney from "../../sections/work-abroad/abroud_journey";
import PartnerWithUsSection from "../../sections/resuable/partner-with-us/partnerWithUs";
import { Helmet } from "react-helmet-async";

const WorkAboradPage = () => {
  return (
    <div>
      <Helmet>
        {/* <title>Job Abroad Consultants in Chennai</title> */}
        <meta
          name="description"
          content="Skillang, the leading abroad job consultancy in Chennai. Get expert guidance, virtual services, and access to high-demand job opportunities."
        />
        <meta
          name="keywords"
          content="job abroad consultants, overseas job consultants, foreign job consultancy, Chennai best abroad job consultancy, Chennai job consultancy for abroad"
        />
      </Helmet>
      <div className="section-spacing">
        <WorkAbroadHeader />
      </div>
      <div className="section-spacing">
        <CountriesWeServe />
      </div>
      <div className="section-spacing">
        <SkillShortage />
      </div>
      <div className="section-spacing">
        <WhyChooseSkillang />
      </div>
      <div className="section-spacing">
        <ServiceOfferCountryWise />
      </div>
      <div className="section-spacing">
        <AbroudJourney />
      </div>
      <div className="section-spacing">
        <PartnerWithUsSection />
      </div>
    </div>
  );
};

export default WorkAboradPage;
