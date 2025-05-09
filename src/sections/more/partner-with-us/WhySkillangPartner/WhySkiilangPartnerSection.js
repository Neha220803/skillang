import React from "react";
import LwhySkill1 from "../../../../assets/images/partner-with-us/PartnerWith1.jpg";
import LwhySkill2 from "../../../../assets/images/partner-with-us/PartnerWith2.jpg";
import LwhySkill3 from "../../../../assets/images/partner-with-us/PartnerWith3.jpg";
import ReusableWhyComponent from "../../../../utils/why-skillang-comp/whySkillangComp";

const WhySkiilangPartnerSection = () => {
  const cardData = [
    {
      text: "Proven models for collaboration and franchise growth",
      img: LwhySkill1,
    },
    {
      text: "Access to a global network of students, institutions, and employers",
      img: LwhySkill2,
    },
    {
      text: "Dedicated support, training, and tools for your success",
      img: LwhySkill3,
    },
  ];

  return (
    <ReusableWhyComponent
      title="Why Partner With "
      subtitle="Discover What Makes Skillang Your Best Path to Success"
      backgroundColor="lang-why-skill-bg"
      highlightText="Skillang?"
      showHighlight={true}
      showBadge={true}
      columns="3"
      cardData={cardData}
    />
  );
};

export default WhySkiilangPartnerSection;
