import React from "react";
import GlobalOprtunity from "../../sections/home/global-opp/global-opportunity";
import WorkAbroadOpportunity from "../../sections/home/work-abroad/work-abroad-opportunity";
import StudyAbroadJourney from "../../sections/resuable/study-abroad-journey/study-abroad-journey";
import UniPartner from "../../sections/resuable/uni-partner/uni-partner";
import InternshipSection from "../../sections/home/internship/internship";
import TestPrep from "../../sections/home/test-prep/test-prep";
import LoanSection from "../../sections/home/loan/loan-section";
import HomeHeader2 from "../../sections/home/header/home-header-2";
import PartnerWithUsSection from "../../sections/resuable/partner-with-us/partnerWithUs";
import ParallaxScrollSnap from "../../sections/home/work-abroad-journey/workAbroadJourney";
import CardComponent from "../../sections/home/try-cards/TryCards.js";
import "../../App.css";
import { Helmet } from "react-helmet-async";
import WorkAbroadJourneyTimeline from "../../sections/home/work-abroad-timeline/work-abroad-timeline.js";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Helmet>
        <meta
          name="description"
          content="Looking for the best abroad consultancy in Chennai? We provide expert guidance for overseas education, work, and German language, IELTS coaching."
        />
        <meta
          name="keywords"
          content="abroad consultancy, Best abroad consultancy in Chennai, overseas consultancy, best overseas consultancy, Chennai best consultancy for abroad"
        />
        <meta
          name="description"
          content="Skillang offers comprehensive study abroad, work abroad, and language test preparation services for global opportunities."
        />
        {/* Additional meta tags */}
        <meta
          name="keywords"
          content="Skillang, career abroad, study abroad, work abroad, language preparation"
        />
        <link rel="canonical" href="https://skillang.com" />
      </Helmet>
      <div className="homepage-section-spacing">
        <HomeHeader2 />
      </div>
      <div className="homepage-section-spacing">
        <GlobalOprtunity />
      </div>

      <div className="homepage-section-spacing">
        <WorkAbroadOpportunity />
      </div>
      <div className="homepage-section-spacing">
        <WorkAbroadJourneyTimeline />
      </div>
      <div className="homepage-section-spacing">
        <StudyAbroadJourney />
      </div>

      <div className="homepage-section-spacing">
        <UniPartner />
      </div>
      <div className="homepage-section-spacing">
        <InternshipSection />
      </div>
      <div className="homepage-section-spacing">
        <TestPrep />
      </div>
      <div className="homepage-section-spacing">
        <LoanSection />
      </div>
      <div className="homepage-section-spacing">
        <PartnerWithUsSection />
      </div>
      {/* <div><CardComponent /></div> */}
    </div>
  );
};

export default HomePage;
