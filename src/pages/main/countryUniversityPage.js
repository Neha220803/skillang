import React from "react";
import PartneredUni from "../../sections/resuable/partnered-uni/partnered_uni";
import CountryWiseUniversity from "../../sections/main/country-wise-university/countryWiseUniversity";

const CountryUniversityPage = () => {
  return (
    <div className="pt-5 mt-5">
      <PartneredUni />
      <CountryWiseUniversity />
    </div>
  );
};

export default CountryUniversityPage;
