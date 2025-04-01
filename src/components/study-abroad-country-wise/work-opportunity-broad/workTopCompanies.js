import React, { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

const WorkTopCompanies = () => {
  // Sample companies data
  const companiesData = [
    {
      id: 1,
      city: "London/Greater London",
      industries: [
        {
          name: "Finance, Technology",
          companies: "Barclays, Google, Deloitte, Clifford Chance",
        },
        {
          name: "Finance, Consulting",
          companies: "HSBC, PwC, Bain & Company",
        },
        {
          name: "Technology, Engineering",
          companies: "Microsoft, Dyson, BP",
        },
        {
          name: "Healthcare, Law",
          companies: "GlaxoSmithKline, NHS, Freshfields Bruckhaus Deringer",
        },
        {
          name: "Business, Finance",
          companies: "EY, Lloyd's of London, Accenture",
        },
        {
          name: "Medicine, Law",
          companies: "Barts Health NHS Trust, Norton Rose Fulbright",
        },
        {
          name: "Engineering, Design",
          companies: "Jaguar Land Rover, Siemens, Sony",
        },
      ],
    },
    {
      id: 2,
      city: "Oxford/Oxfordshire",
      industries: [
        {
          name: "Education, Research",
          companies: "Oxford University Press, IBM, Oxford Nanopore",
        },
        {
          name: "Automotive, Publishing",
          companies: "BMW Group, Pearson Education",
        },
      ],
    },
    {
      id: 3,
      city: "Cambridge/Cambridgeshire",
      industries: [
        {
          name: "Technology, Biotech",
          companies: "AstraZeneca, ARM, Microsoft Research",
        },
        {
          name: "Education, Healthcare",
          companies: "Philips Healthcare, Addenbrooke's Hospital",
        },
      ],
    },
    {
      id: 4,
      city: "Manchester/Greater Manchester",
      industries: [
        {
          name: "Media, Technology",
          companies: "BBC, Auto Trader UK, Booking.com",
        },
        {
          name: "Finance, Retail",
          companies: "Co-operative Bank, Boohoo, JD Sports",
        },
      ],
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedCompanies = showAll
    ? companiesData
    : companiesData.slice(0, 3);

  return (
    <section className="my-5">
      <Container>
        <h2 className="mb-4">Top Companies in the UK</h2>

        <div className="table-responsive">
          <Table className="top-companies-table" hover>
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
          </Table>
        </div>

        <div className="text-center mt-3">
          <Button
            variant="outline-primary"
            className="rounded-pill px-4"
            onClick={() => setShowAll(!showAll)}
          >
            View all <i className="bi bi-chevron-down ms-1"></i>
          </Button>
        </div>
      </Container>

      <style jsx>{`
        .top-companies-table th {
          font-weight: 600;
          color: #505050;
        }
        .top-companies-table td {
          vertical-align: middle;
        }
        .top-companies-table tr {
          border-bottom: 1px solid #eee;
        }
      `}</style>
    </section>
  );
};

export default WorkTopCompanies;
