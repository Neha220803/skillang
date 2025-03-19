import React from "react";
import WorkAbroadHeader from "../components/work-abroad/header";
import WhyChooseSkillang from "../components/resuable/why-skillang/whySkillangSection";
import CountriesWeServe from "../components/resuable/countries-we-serve/countriesWeServe";
import SkillShortage from "../components/work-abroad/skillShortage";
import ServiceOfferCountryWise from "../components/work-abroad/serviceOfferCountryWise";
import AbroudJourney from "../components/work-abroad/abroud_journey";
import PartnerWithUsSection from "../components/resuable/partner-with-us/partnerWithUs";

const WorkAboradPage = () => {
  return (
    <div>
      <div className="">
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
