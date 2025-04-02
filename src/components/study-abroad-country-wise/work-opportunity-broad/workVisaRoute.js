import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import {
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaIdCard,
} from "react-icons/fa";

const WorkVisaRoute = () => {
  // Sample work visa route data
  const visaRoutes = [
    {
      id: 1,
      route: "Graduate route",
      icon: <FaGraduationCap size={20} />,
      color: "#4285F4",
      requirements: [
        "Degree or relevant qualification from a UK Higher Education provider on or after 1 July 2021.",
        "Two-year work visa.",
      ],
    },
    {
      id: 2,
      route: "Skilled worker route",
      icon: <FaBriefcase size={20} />,
      color: "#F4B400",
      requirements: [
        "Require sponsorship by a licensed employer for a specific job that meets minimum salary and skill requirements.",
        "Your salary must be at least £20,960 - or more.",
      ],
    },
    {
      id: 3,
      route: "Start-up route",
      icon: <FaRocket size={20} />,
      color: "#0F9D58",
      requirements: [
        "For those who want to start a business in the UK.",
        "Need an approved business plan endorsed by a Home Office-endorsed body.",
      ],
    },
    {
      id: 4,
      route: "Students' union sabbatical officers",
      icon: <FaUsers size={20} />,
      color: "#DB4437",
      requirements: [
        "Sabbatical officers at UK and overseas establishments or the National Union of Students can stay in the country under the Student route without being required to study.",
        "Permission can be granted for 12 months and extended to up to two years if elected.",
      ],
    },
    {
      id: 5,
      route: "Innovator Founder",
      icon: <FaLightbulb size={20} />,
      color: "#4B0082",
      requirements: [
        "The route is for migrants wanting to start a new, innovative, viable, and scalable business in the UK.",
        "Requires an endorsing body to endorse the business idea.",
      ],
    },
    {
      id: 6,
      route: "India Young Professionals Scheme",
      icon: <FaIdCard size={20} />,
      color: "#00BFFF",
      requirements: [
        "Allows Indian citizens aged 18 to 30 to work and live in the UK for two years.",
        "They must first be selected through the scheme's ballot process.",
      ],
    },
  ];

  return (
    <section className="my-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <div className="subheading-big-medium text-content-secondary">
              Work Visa Route to UK
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
      </Container>

      <style jsx>{`
        .visa-route-table th {
          font-weight: 600;
          color: #505050;
        }
        .visa-route-table td {
          vertical-align: middle;
        }
        .visa-route-table tr {
          border-bottom: 1px solid #eee;
        }
        .route-icon {
          min-width: 40px;
        }
      `}</style>
    </section>
  );
};

export default WorkVisaRoute;
