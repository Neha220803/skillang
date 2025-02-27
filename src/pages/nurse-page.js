import React from 'react'
import NurseMainHeader from '../components/nursing/nurseMain'
import NursePathwaySection from '../components/nursing/pathway/nursePathway'
import WhyNursingSection from '../components/nursing/why-nursing-ger/whyNursingSection'
import WhySkillangSection from '../components/resuable/why-skillang/whySkillangSection'
import OurServices from '../components/nursing/nurseServices/ourServices'
import OurReqProcess from '../components/nursing/req-process/ourReqProcess'
import NurseLangSection from '../components/nursing/german-lang-training/nurseLangSection'
import BookShelf from '../components/nursing/german-lang-training/bookShelf'
import NursingPosition from '../components/nursing/nursing-posi/nursingPosi'
import NurseChallengeSection from '../components/nursing/nurse-int-challenge/nurseChallengeSection'
import NurseStats from '../components/resuable/nurse-stats/nurseStats'
import NurseEligibility from '../components/resuable/nurse-eligibility/nurseEligibility'
import PermResidentSection from '../components/nursing/nurse-citizenship/permResidentSection'
import NurseCareerAdvSection from '../components/nursing/career-adv/nurseCareerAdvSection'
import NursePartner from '../components/resuable/partner-with-us/partnerWithUs'
import TypesHealthCareSection from '../components/nursing/types-nurse/typesHealthCareSection'

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
      <div className='my-5 py-5'>
        <NurseEligibility  />
      </div>

      
        <PermResidentSection />
        
        <TypesHealthCareSection />
         <NurseCareerAdvSection />
        <NursePartner />
       

    </div>
  )
}

export default NursePage