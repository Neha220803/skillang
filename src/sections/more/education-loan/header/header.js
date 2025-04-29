import React from "react";
import "../../../../index.css";
import "../../../../App.css";
import desktopBackground from "../../../../assets/images/education-loan/headerbg.jpg";
// import mobileBackground from "../../../../assets/images/education-loan/headerbg.jpg";
import MorePageHeader from "../../../resuable/common-header/morePageHeader";

const Header = () => {
  return (
    <div className="">
      <MorePageHeader
        desktopBgImage={desktopBackground}
        mobileBgImage={desktopBackground} // Optional: same as desktop if not provided
        title="Education Loan Assistance at Skillang"
        description="Secure the funding needed to realize your academic dreams abroad."
        buttonText="Schedule a Free Consultation"
      />
    </div>
  );
};

export default Header;
