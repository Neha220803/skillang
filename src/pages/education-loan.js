import React from 'react'
import Header from '../components/education-loan/header/header'
import EduLoanOurServices from '../components/education-loan/ourservices/ourservices'
import TypesAndEligiblity from '../components/education-loan/typesandeligblity/TypesAndEligiblity'
import LoanEligiblity from '../components/education-loan/typesandeligblity/Eligiblity'
import WhySkillangEdu from '../components/education-loan/whyskillangEdu/WhySkillangEdu'




const EducationLoanPage = () => {
    return (
        <div>
            <div className="section-spacing"><Header /></div>
            <div className="section-spacing"><EduLoanOurServices /></div>
            <div ><TypesAndEligiblity /></div>
            <div ><LoanEligiblity /></div>
            <div className='section-spacing'><WhySkillangEdu /></div>


        </div>
    )
}

export default EducationLoanPage