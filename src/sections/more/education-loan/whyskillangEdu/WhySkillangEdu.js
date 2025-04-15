import React from "react";
import ReusableWhyComponent from "../../../../utils/why-skillang-comp/whySkillangComp";
import LwhySkill2 from "../../../../assets/images/lang-test/LwhySkill2.jpg";
import LwhySkill3 from "../../../../assets/images/lang-test/LwhySkill3.jpg";
import LwhySkill4 from "../../../../assets/images/lang-test/LwhySkill4.jpg";

// Original WhySkillangEdu implementation with the reusable component
const WhySkillangEdu = () => {
  const cardData = [
    {
      title: "Expert Guidance",
      text: "Benefit from experienced financial advisors who simplify the education loan process.",
      img: LwhySkill2,
    },
    {
      title: "Customized Solutions",
      text: "Tailored assistance to align with your specific academic and financial circumstances.",
      img: LwhySkill2,
    },
    {
      title: "High Success Rate",
      text: "Our proactive approach has consistently secured student loans for our clients.",
      img: LwhySkill3,
    },
    {
      title: "Ongoing Support",
      text: "Continued advice on financial management and loan repayment strategies throughout your study period.",
      img: LwhySkill4,
    },
  ];

  return (
    <ReusableWhyComponent
      title="Why Choose Skillang?"
      subtitle="Discover What Makes Skillang Your Best Path to Success"
      backgroundColor="lang-why-skill-bg"
      cardData={cardData}
    />
  );
};

export default WhySkillangEdu;
