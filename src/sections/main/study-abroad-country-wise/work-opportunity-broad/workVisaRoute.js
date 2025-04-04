import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import countryWiseData from "../../../../data/countryWiseData";

const WorkVisaRoute = ({ country = "uk" }) => {
  const data = countryWiseData[country];
  if (!data || !data.workAbroadOpps || !data.workAbroadOpps.visaRoutes) {
    return <div>Work Visa Routes data not available</div>;
  }
  const visaRoutes = data.workAbroadOpps.visaRoutes;
  return (
    <>
      <Row className="mb-4">
        <Col>
          <div className="subheading-big-medium text-content-secondary">
            Work Visa Route to {country.toUpperCase()}
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="table-responsive">
            <table className="edu-ranking-table caption-bold text-content-secondary">
              <thead className="bg-light">
                <tr>
                  <th className="py-3 px-4" style={{ width: "30%" }}>
                    Route
                  </th>
                  <th className="py-3 px-4" style={{ width: "70%" }}>
                    Information & Requirements
                  </th>
                </tr>
              </thead>
              <tbody>
                {visaRoutes.map((route) => (
                  <tr key={route.id}>
                    <td className="py-3 px-4">
                      <div className="d-flex align-items-center">
                        <div
                          className="route-icon d-flex align-items-center justify-content-center rounded-circle me-3"
                          style={{
                            width: "35px",
                            height: "35px",
                            backgroundColor: "#EBF2FF",
                            color: "#1966FA",
                          }}
                        >
                          {route.icon}
                        </div>
                        <span>{route.route}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <ul className="list-unstyled mb-0">
                        {route.requirements.map((requirement, index) => (
                          <li key={index} className="mb-2">
                            <div className="d-flex">
                              <span className="me-2">•</span>
                              <span>{requirement}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default WorkVisaRoute;
