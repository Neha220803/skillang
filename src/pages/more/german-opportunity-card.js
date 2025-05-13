import React from "react";
import GermanOppCardHeaderComp from "../../sections/more/german-opportunity-card/header/header";
import WhatIsGermanOppCardComp from "../../sections/more/german-opportunity-card/what-opp-card/WhatIsGermanOppCard";
import WhyChooseOpportunityCardComp from "../../sections/more/german-opportunity-card/why-choose-opp-card/whyChooseOpportunityCard";
import GermanOppApplicationProcessComp from "../../sections/more/german-opportunity-card/application-process/GermanOppApplicationProcess";
import WhyLiveInGermanyComp from "../../sections/more/german-opportunity-card/why-live-in-germany/whyLiveInGermany";
import GerOppCardConnectComp from "../../sections/more/german-opportunity-card/german-connect/GerOppCardConnect";
import GerOppCardEligibilityComp from "../../sections/more/german-opportunity-card/ger-opp-card-eligibility/GerOppCardEligibility";
import { Helmet } from "react-helmet-async";

const GermanOpportunityCardsPage = () => {
  return (
    <div>
      <Helmet>
        <title>German Opportunity Card | Skillang</title>
        <meta
          name="description"
          content="Explore job opportunities in germany with the germany opportunity card. Apply easily with skillang's expert guidance and support."
        />
        <meta
          name="keywords"
          content="germany opportunity card,opportunity card germany,opportunity card germany apply online,germany opportunity card application,opportunity card germany apply,germany opportunity card apply"
        />
      </Helmet>
      <div className="section-spacing">
        <GermanOppCardHeaderComp />
      </div>
      <div className="section-spacing">
        <WhatIsGermanOppCardComp />
      </div>
      <div className="section-spacing">
        <WhyChooseOpportunityCardComp />
      </div>
      <div className="section-spacing">
        <GerOppCardEligibilityComp />
      </div>
      <div className="section-spacing">
        <GermanOppApplicationProcessComp />
      </div>
      <div className="section-spacing">
        <WhyLiveInGermanyComp />
      </div>

      <div className="section-spacing">
        <GerOppCardConnectComp />
      </div>
    </div>
  );
};

export default GermanOpportunityCardsPage;
