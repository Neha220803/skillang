import React from "react";
import EligibilityBarCardsComponent from "../../../../components/cards/EligibilityBarCards";
import eli1 from "../../../../assets/icons/german-opp-card/GerOppCardEli1.svg";
import eli2 from "../../../../assets/icons/german-opp-card/GerOppCardEli2.svg";
import eli3 from "../../../../assets/icons/german-opp-card/GerOppCardEli3.svg";
import eli4 from "../../../../assets/icons/german-opp-card/GerOppCardEli4.svg";

const GerOppCardEligibilityData = [
  {
    img: eli1,
    text: "A university degree or equivalent qualification",
  },
  {
    img: eli2,
    text: "Relevant experience in a specific field",
  },
  { img: eli3, text: "German or English proficiency recommended" },
  {
    img: eli4,
    text: "Show that you can support yourself in Germany",
  },
];

const GerOppCardEligibilityComp = () => {
  return (
    <div>
      <EligibilityBarCardsComponent
        title="Eligibility"
        subheading="To work as a nurse in Germany, you need"
        eligibilityData={GerOppCardEligibilityData}
        className="german-opportunity-card-eligibility" // Optional custom class
      />
    </div>
  );
};

export default GerOppCardEligibilityComp;
