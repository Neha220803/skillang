import React, { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { ChevronUp, ChevronDown } from "react-bootstrap-icons";
import countryWiseData from "../../../../data/countryWiseData";

const WorkTopCompanies = ({ country = "uk" }) => {
  const [showAll, setShowAll] = useState(false);
  const data = countryWiseData[country];
  if (!data || !data.workAbroadOpps || !data.workAbroadOpps.topCompaniesData) {
    return <div>Top Companies data not available</div>;
  }

  const companiesData = data.workAbroadOpps.topCompaniesData;
  const displayedCompanies = showAll
    ? companiesData
    : companiesData.slice(0, 3);

  return (
    <div className="d-none d-md-block">
      <div className="mb-4 subheading-big-medium">
        Top Companies in the {country.toUpperCase()}
      </div>

      <div className="table-responsive">
        <table className="edu-ranking-table caption-bold text-content-secondary">
          <thead className="bg-light">
            <tr>
              <th className="py-3 px-4" style={{ width: "20%" }}>
                City/County
              </th>
              <th className="py-3 px-4" style={{ width: "30%" }}>
                Industry
              </th>
              <th className="py-3 px-4" style={{ width: "50%" }}>
                Top Companies Nearby
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedCompanies.map((cityData) =>
              cityData.industries.map((industry, industryIndex) => (
                <tr key={`${cityData.id}-${industryIndex}`}>
                  {industryIndex === 0 ? (
                    <td
                      className="py-3 px-4 align-middle"
                      rowSpan={cityData.industries.length}
                    >
                      <strong>{cityData.city}</strong>
                    </td>
                  ) : null}
                  <td className="py-3 px-4 text-muted">{industry.name}</td>
                  <td className="py-3 px-4">{industry.companies}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-3">
        <button
          className="btn-secondary-outline d-flex align-items-center mx-auto"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? (
            <>
              Close all <ChevronUp className="ms-2" />
            </>
          ) : (
            <>
              View all <ChevronDown className="ms-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default WorkTopCompanies;
