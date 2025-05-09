import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "react-bootstrap";
import "./whySkillangSection.css";

import whySkill1 from "../../../assets/images/reusable/whySkillang.jpg";
import whySkill2 from "../../../assets/images/reusable/whySkillang2.jpg";
import whySkill3 from "../../../assets/images/reusable/whySkillang3.jpg";
import ReusableWhyComponent from "../../../utils/why-skillang-comp/whySkillangComp";

const WhySkillangSection = () => {
  const whySkillangCardData = [
    {
      img: whySkill1,
      title: "Expert Guidance",
      text: "Our expert team specializes in international healthcare recruitment, guiding in every step.",
    },
    {
      img: whySkill2,
      title: "Ethical Recruitment",
      text: "We uphold ethical recruitment standards, ensuring transparency and integrity in all operations.",
    },
    {
      img: whySkill3,
      title: "High Success Rate",
      text: "We have a proven track record of placing healthcare professionals in top global institutions.",
    },
  ];
  return (
    <ReusableWhyComponent
      title="Why Choose "
      subtitle="Discover What Makes Skillang Your Best Path to Success"
      backgroundColor="lang-why-skill-bg"
      highlightText="Skillang?"
      showHighlight={true}
      showBadge={true}
      columns="3"
      cardData={whySkillangCardData}
    />
  );
};

export default WhySkillangSection;
