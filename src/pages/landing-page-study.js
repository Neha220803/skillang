import React from 'react'
import LandingNavBar from '../components/landing/landing-nav/landing-nav'
import LandingFooter from '../components/landing/landing-footer/landingFooter'
import StudyForm from '../components/landing/study-abroad/study-form'

const LandingStudyAbroadPage = () => {
  return (
    <div>
        <LandingNavBar />
        <StudyForm />
        <LandingFooter />
    </div>
  )
}

export default LandingStudyAbroadPage