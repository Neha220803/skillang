import React from 'react'
import StudyAbroadHeader from '../components/study-abroad/study_header'
import WhyStudyAbroad from '../components/study-abroad/whystudyabroad'
import AbroadDestination from '../components/study-abroad/abroad_destination'
import IndemandCourse from '../components/study-abroad/indemand-courses/indemand_course'
import StudyAbroad from '../components/resuable/study-abroad-journey/study-abroad-journey'
import CountriesWeServe from '../components/resuable/countries-we-serve/countriesWeServe'
import UniPartner from '../components/resuable/uni-partner/uni-partner'

const StudyAbroadPage = () => {
  return (
    <div>
      <StudyAbroadHeader />
      <WhyStudyAbroad />
      <AbroadDestination />
      <IndemandCourse />
      <StudyAbroad />
      <CountriesWeServe />
      <UniPartner />



    </div>
  )
}

export default StudyAbroadPage