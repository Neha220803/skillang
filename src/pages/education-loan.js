import React from 'react'
import Header from '../components/education-loan/header/header'
import EduLoanOurServices from '../components/education-loan/ourservices/ourservices'
import TypesAndEligiblity from '../components/education-loan/typesandeligblity/TypesAndEligiblity'
import LoanEligiblity from '../components/education-loan/typesandeligblity/Eligiblity'
import WhySkillangEdu from '../components/education-loan/whyskillangEdu/WhySkillangEdu'
import GetStart from '../components/education-loan/gettingstarted/GetStart'
import LangContactUs from '../components/lang-test/lang-connect/LangContactUs'




const EducationLoanPage = () => {
    return (
        <div>
            <div className="section-spacing"><Header /></div>
            <div className="section-spacing"><EduLoanOurServices /></div>
            <div ><TypesAndEligiblity /></div>
            <div ><LoanEligiblity /></div>
            <div className='section-spacing'><WhySkillangEdu /></div>
            <div className='section-spacing'><GetStart /></div>
            <div className="section-spacing">
                <LangContactUs />
            </div>


        </div>
    )
}

export default EducationLoanPage