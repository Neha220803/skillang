import React from 'react'
import StudyAbroadHeader from '../components/study-abroad/study_header'
import WhyStudyAbroad from '../components/study-abroad/whystudyabroad'
import AbroadDestination from '../components/study-abroad/abroad_destination'
import IndemandCourse from '../components/study-abroad/indemand-courses/indemand_course'

const StudyAbroadPage = () => {
  return (
    <div>
      <StudyAbroadHeader />
      <WhyStudyAbroad />
      <AbroadDestination />
      <IndemandCourse />

    </div>
  )
}

export default StudyAbroadPage