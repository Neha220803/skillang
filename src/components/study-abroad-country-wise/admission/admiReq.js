import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AdmiRequirementComp = () => {
  // Sample admission requirements data
  const requirementsData = [
    {
      id: 1,
      icon: "file-text",
      title: "Academic Qualifications",
      description:
        "Hold a recognized secondary school certificate (for undergraduates) or a relevant bachelor's degree (for postgraduates) with satisfactory grades, along with any subject-specific prerequisites.",
    },
    {
      id: 2,
      icon: "globe",
      title: "English Language Proficiency",
      description:
        "Achieve the required scores in tests like IELTS or TOEFL (typically an overall IELTS band of 6.0-7.0) to demonstrate adequate English skills.",
    },
    {
      id: 3,
      icon: "file-edit",
      title: "SOP",
      description:
        "Submit a compelling essay outlining your academic goals, motivations, and reasons for choosing the UK.",
    },
    {
      id: 4,
      icon: "file-signature",
      title: "Letters of Recommendation",
      description:
        "Provide one or more academic references from teachers or previous academic supervisors to support your application.",
    },
    {
      id: 5,
      icon: "list-check",
      title: "Additional Requirements",
      description:
        "Hold a recognized secondary school certificate (for undergraduates) or a relevant bachelor's degree (for postgraduates) with satisfactory grades, along with any subject-specific prerequisites.",
    },
    {
      id: 6,
      icon: "credit-card",
      title: "Financial Proof",
      description:
        "Show evidence of sufficient funds to cover tuition fees and living expenses, as required by UK visa regulations.",
    },
  ];

  // Helper function to get the appropriate icon class
  const getIconClass = (iconName) => {
    switch (iconName) {
      case "file-text":
        return "bi bi-file-text";
      case "globe":
        return "bi bi-globe";
      case "file-edit":
        return "bi bi-pencil-square";
      case "file-signature":
        return "bi bi-file-earmark-text";
      case "list-check":
        return "bi bi-list-check";
      case "credit-card":
        return "bi bi-credit-card";
      default:
        return "bi bi-file-text";
    }
  };

  return (
    <section className="my-5">
      <Container>
        <div className="subheading-big-medium text-content-secondary mb-4">
          Admission Requirements
        </div>

        <Row>
          {requirementsData.map((requirement) => (
            <Col lg={4} md={6} className="mb-4" key={requirement.id}>
              <Card className="h-100 border-0 shadow-sm rounded-4">
                <Card.Body className="p-2">
                  <div className="d-flex mb-3">
                    <div className="me-3">
                      <div
                        className="requirement-icon d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: "45px",
                          height: "45px",
                          backgroundColor: "#E6F0FF",
                          color: "#4285F4",
                        }}
                      >
                        <i className={getIconClass(requirement.icon)}></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-0">{requirement.title}</h5>
                    </div>
                  </div>
                  <p className="text-muted mb-0 ms-5 ps-3">
                    {requirement.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AdmiRequirementComp;
