import React from 'react'
import WorkAbroadHeader from '../components/work-abroad/header'
import WhyChooseSkillang from '../components/resuable/why-skillang/whySkillangSection';
import CountriesWeServe from '../components/work-abroad/countriesWeServe'
import SkillShortage from '../components/work-abroad/skillShortage';
import ServiceOfferCountryWise from '../components/work-abroad/serviceOfferCountryWise'
import PartnerWithUsSection from '../components/resuable/partner-with-us/partnerWithUs';



const WorkAboradPage = () => {
  return (
    <div>WorkAboradPage
      <WorkAbroadHeader />
      <WhyChooseSkillang />
      <CountriesWeServe />
      <SkillShortage />
      <ServiceOfferCountryWise />



      <PartnerWithUsSection />
    </div>
  )
}

export default WorkAboradPage