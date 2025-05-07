import React from "react";
import MorePageHeader from "../../../resuable/common-header/morePageHeader";
import desktopBackground from "../../../../assets/images/ScholarHeaderBg.jpg";

const ScholarshipHeader = () => {
  return (
    <div>
      <MorePageHeader
        desktopBgImage={desktopBackground}
        mobileBgImage={desktopBackground} // Optional: same as desktop if not provided
        title="Explore Scholarship Opportunities with Skillang"
        description="Find and secure the financial support you need to study abroad-whether it's in the USA, UK, Canada, Australia, or beyond"
        buttonText="Get Started Today"
      />
    </div>
  );
};

export default ScholarshipHeader;
