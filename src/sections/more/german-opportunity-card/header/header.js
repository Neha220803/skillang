import React from "react";

import GermanOppCardHeaderImg from "../../../../assets/images/german-opp-card/GermanOppCardHeaderImg.jpg";
import ImageHeaderComponent from "../../../../components/common-headers/ImageMainHeader";

const GermanOppCardHeaderComp = () => {
  return (
    <div>
      <ImageHeaderComponent
        imageSrc={GermanOppCardHeaderImg}
        imageAlt={"GermanOppCardHeaderImg"}
        title={"Explore Germany with the Opportunity Card Visa"}
        subheading={
          "Start your new chapter in one of the world's most vibrant and opportunity-rich countries!"
        }
        buttonText="Get Started"
      />
    </div>
  );
};

export default GermanOppCardHeaderComp;
