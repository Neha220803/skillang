import React from 'react'
import LandingNavBar from '../components/landing/landing-nav/landing-nav'
import NurseForm from '../components/landing/nurse-in-germany/nurseForm'
import WhyUsNurse from '../components/landing/nurse-in-germany/whyUsNurse'
import NurseEligibility from '../components/resuable/nurse-eligibility/nurseEligibility'
import WhyGermany from '../components/landing/nurse-in-germany/whyGermany'
import NurseStats from '../components/resuable/nurse-stats/nurseStats'
import LandingFooter from '../components/landing/landing-footer/landingFooter'


const LandingNursePage = () => {
  return (
    <div>
        <LandingNavBar />
        <NurseForm />
        <WhyUsNurse />
        <NurseEligibility />
        <WhyGermany />
        <NurseStats />
        <LandingFooter />
      
    </div>
  )
}

export default LandingNursePage