import React from 'react'
import LandingNavBar from '../components/landing/landing-nav/landing-nav'
import NurseForm from '../components/landing/nurse-in-germany/nurseForm'
import WhyUsNurse from '../components/landing/nurse-in-germany/whyUsNurse'
import NurseEligibility from '../components/landing/nurse-in-germany/nurseEligibility'
import WhyGermany from '../components/landing/nurse-in-germany/whyGermany'
import NurseStats from '../components/landing/nurse-in-germany/nurseStats'
import LandingFooter from '../components/landing/landing-footer/landingFooter'
import BookShelf from '../components/nursing/bookShelf'

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