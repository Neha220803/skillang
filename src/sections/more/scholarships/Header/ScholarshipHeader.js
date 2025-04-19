import React from "react";
import MorePageHeader from "../../../resuable/common-header/morePageHeader";
import desktopBackground from "../../../../assets/images/ScholarHeaderBg.jpg";

const ScholarshipHeader = () => {
  return (
    <div>
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

export default ScholarshipHeader;
