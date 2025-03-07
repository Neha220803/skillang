import React from "react";
import GlobalOprtunity from "../components/home/global-opp/global-opportunity";
import WorkAbroadOpportunity from "../components/home/work-abroad/work-abroad-opportunity";
import StudyAbroadJourney from "../components/resuable/study-abroad-journey/study-abroad-journey";
import UniPartner from "../components/resuable/uni-partner/uni-partner";
import InternshipSection from "../components/home/internship/internship";
import TestPrep from "../components/home/test-prep/test-prep";
import LoanSection from "../components/home/loan/loan-section";
import HomeHeader2 from "../components/home/header/home-header-2";
import PartnerWithUsSection from "../components/resuable/partner-with-us/partnerWithUs";
import ParallaxScrollSnap from "../components/home/work-abroad-journey/workAbroadJourney";
import CardComponent from '../components/home/try-cards/TryCards.js';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="homepage-section-spacing"><HomeHeader2 /></div>
      <div className="homepage-section-spacing"><GlobalOprtunity /></div>
      <div className="trying-snap-scroll">
        <div className="homepage-section-spacing enable-snap-scroll">
        <WorkAbroadOpportunity />
      </div>
      <div className="parallax-section-wrapper enable-snap-scroll">
        <ParallaxScrollSnap />
      </div>
      
      <div className="homepage-section-spacing enable-snap-scroll"><StudyAbroadJourney /></div>
      </div>
      
      <div className="homepage-section-spacing"><UniPartner /></div>
      <div className="homepage-section-spacing"><InternshipSection /></div>
      <div className="homepage-section-spacing"><TestPrep /></div>
      <div className="homepage-section-spacing"><LoanSection /></div>
      <div className="homepage-section-spacing"><PartnerWithUsSection /></div>
      {/* <div><CardComponent /></div> */}
    </div>
  );
};

export default HomePage;