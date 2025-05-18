import React from "react";
import ContactUsHeader from "../../sections/more/contact-us/header/ContactUsHeader";
import ContactLocationComp from "../../sections/more/contact-us/location/ContactLocationComp";
import ContactFAQComp from "../../sections/more/contact-us/faq/ContactFAQ";

const ContactUsPage = () => {
  return (
    <div>
      <div className="section-spacing">
        <ContactUsHeader />
      </div>
      <div className="section-spacing">
        <ContactLocationComp />
      </div>
      <div className="section-spacing">
        {" "}
        <ContactFAQComp />
      </div>
    </div>
  );
};

export default ContactUsPage;
