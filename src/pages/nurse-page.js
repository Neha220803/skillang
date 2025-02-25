import React from 'react'
import NurseMainHeader from '../components/nursing/nurseMain'
import NursePathwaySection from '../components/nursing/nursePathway'
import WhyNursingSection from '../components/nursing/whyNursingSection'
import WhySkillangSection from '../components/resuable/why-skillang/whySkillangSection'
import OurServices from '../components/nursing/ourServices'
import OurReqProcess from '../components/nursing/ourReqProcess'

const NursePage = () => {
  return (
    <div>
      <NurseMainHeader />
      <NursePathwaySection />
      <WhyNursingSection />
      <WhySkillangSection />
      <OurServices />
      <OurReqProcess />
    </div>
  )
}

export default NursePage