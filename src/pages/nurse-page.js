import React from 'react'
import NurseMainHeader from '../components/nursing/nurseMain'
import NursePathwaySection from '../components/nursing/nursePathway'
import WhyNursingSection from '../components/nursing/whyNursingSection'
import WhySkillangSection from '../components/resuable/why-skillang/whySkillangSection'
import OurServices from '../components/nursing/ourServices'
import OurReqProcess from '../components/nursing/ourReqProcess'
import NurseLangSection from '../components/nursing/nurseLangSection'
import BookShelf from '../components/nursing/bookShelf'
import NursingPosition from '../components/nursing/nursingPosi'
import NurseChallengeSection from '../components/nursing/nurseChallengeSection'
import NurseStats from '../components/resuable/nurse-stats/nurseStats'
import NurseEligibility from '../components/resuable/nurse-eligibility/nurseEligibility'
import PermResidentSection from '../components/nursing/permResidentSection'
import NurseCareerAdvSection from '../components/nursing/nurseCareerAdvSection'
import NursePartner from '../components/resuable/partner-with-us/partnerWithUs'

const NursePage = () => {
  return (
    <div>
      <NurseMainHeader />
      <NursePathwaySection />
      <WhyNursingSection />
      <WhySkillangSection />
      <OurServices />
      <OurReqProcess />
      <NurseLangSection />
      <NursingPosition />
      <NurseChallengeSection />
      <NurseStats />
      <NurseEligibility />
        <PermResidentSection />
        <NurseCareerAdvSection />
        <NursePartner />

    </div>
  )
}

export default NursePage