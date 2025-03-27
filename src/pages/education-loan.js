import React from 'react'
import Header from '../components/education-loan/header/header'
import EduLoanOurServices from '../components/education-loan/ourservices/ourservices'
import TypesAndEligiblity from '../components/education-loan/typesandeligblity/TypesAndEligiblity'
import LoanEligiblity from '../components/education-loan/typesandeligblity/Eligiblity'




const EducationLoanPage = () => {
    return (
        <div>
            <div className="section-spacing"><Header /></div>
            <div className="section-spacing"><EduLoanOurServices /></div>
            <div ><TypesAndEligiblity /></div>
            <div className="section-spacing"><LoanEligiblity /></div>


        </div>
    )
}

export default EducationLoanPage