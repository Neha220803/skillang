import React from 'react'
import WorkAbroadHeader from '../components/work-abroad/header'
import WhyChooseSkillang from '../components/resuable/why-skillang/whySkillangSection';
import CountriesWeServe from '../components/work-abroad/countriesWeServe'
import SkillShortage from '../components/work-abroad/skillShortage'


const WorkAboradPage = () => {
  return (
    <div>WorkAboradPage
      <WorkAbroadHeader />
      <WhyChooseSkillang />
      <CountriesWeServe />
      <SkillShortage />
    </div>
  )
}

export default WorkAboradPage