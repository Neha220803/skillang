import React from 'react'
import NurseMainHeader from '../components/nursing/nurseMain'
import NursePathwaySection from '../components/nursing/nursePathway'
import WhyNursingSection from '../components/nursing/whyNursingSection'

const NursePage = () => {
  return (
    <div>
      <NurseMainHeader />
      <NursePathwaySection />
      <WhyNursingSection />
    </div>
  )
}

export default NursePage