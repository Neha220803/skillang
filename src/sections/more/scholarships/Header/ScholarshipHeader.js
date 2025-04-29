import React from "react";
import MorePageHeader from "../../../resuable/common-header/morePageHeader";
import desktopBackground from "../../../../assets/images/ScholarHeaderBg.jpg";

const ScholarshipHeader = () => {
  return (
    <div>
      <MorePageHeader
        desktopBgImage={desktopBackground}
        mobileBgImage={desktopBackground} // Optional: same as desktop if not provided
        title="SOP & Resume Writing Services at Skillang"
        description="Craft a compelling SOP and a professional resume that opens doors to prestigious international universities and scholarship programs."
        buttonText="Schedule a Free Consultation"
      />
    </div>
  );
};

export default ScholarshipHeader;
