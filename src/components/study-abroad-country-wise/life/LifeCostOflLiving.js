import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaBed, FaUtensils, FaBus, FaWifi, FaReceipt } from "react-icons/fa";
import "./life.css";
const LifeCostOfLiving = () => {
  // State to track active currency
  const [activeCurrency, setActiveCurrency] = useState("pound");

  // Cost of living data
  const livingCosts = {
    pound: [
      {
        id: 1,
        category: "Accommodation",
        icon: <FaBed size={24} />,
        range: "£400 to £1,000",
        period: "per month",
      },
      {
        id: 2,
        category: "Food & Groceries",
        icon: <FaUtensils size={24} />,
        range: "£150-£250",
        period: "per month",
      },
      {
        id: 3,
        category: "Transportation",
        icon: <FaBus size={24} />,
        range: "£50-£100",
        period: "per month",
      },
      {
        id: 4,
        category: "Utilities & Internet",
        icon: <FaWifi size={24} />,
        range: "£50-£100",
        period: "per month",
      },
      {
        id: 5,
        category: "Miscellaneous Expenses",
        icon: <FaReceipt size={24} />,
        range: "£100-£150",
        period: "per monthly",
      },
    ],
    rupees: [
      {
        id: 1,
        category: "Accommodation",
        icon: <FaBed size={24} />,
        range: "₹40,000 to ₹1,00,000",
        period: "per month",
      },
      {
        id: 2,
        category: "Food & Groceries",
        icon: <FaUtensils size={24} />,
        range: "₹15,000-₹25,000",
        period: "per month",
      },
      {
        id: 3,
        category: "Transportation",
        icon: <FaBus size={24} />,
        range: "₹5,000-₹10,000",
        period: "per month",
      },
      {
        id: 4,
        category: "Utilities & Internet",
        icon: <FaWifi size={24} />,
        range: "₹5,000-₹10,000",
        period: "per month",
      },
      {
        id: 5,
        category: "Miscellaneous Expenses",
        icon: <FaReceipt size={24} />,
        range: "₹10,000-₹15,000",
        period: "per monthly",
      },
    ],
  };

  // Calculate total monthly cost based on active currency
  const totalCost =
    activeCurrency === "pound"
      ? { min: "£750", max: "£1,600", text: "£750 to £1,600" }
      : { min: "₹75,000", max: "₹1,60,000", text: "₹75,000 to ₹1,60,000" };

  return (
    <div className="my-5">
      <Container>
        <div className="mb-4">
          <h2 className="subheading-big-medium text-content-secondary">
            Cost of Living
          </h2>
        </div>

        <div className="mb-4">
          <div className="d-inline-flex">
            <Button
              variant={activeCurrency === "pound" ? "dark" : "light"}
              className="rounded-pill me-2 px-3 py-1"
              onClick={() => setActiveCurrency("pound")}
            >
              Pound sterling (£)
            </Button>
            <Button
              variant={activeCurrency === "rupees" ? "dark" : "light"}
              className="rounded-pill px-3 py-1"
              onClick={() => setActiveCurrency("rupees")}
            >
              Rupees (₹)
            </Button>
          </div>
        </div>

        <Row>
          {livingCosts[activeCurrency].map((cost) => (
            <Col lg={4} md={6} className="mb-4" key={cost.id}>
              <Card className="h-100 life-cost-card">
                <Card.Body className="p-0">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="me-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "40px",
                        color: "#505050",
                      }}
                    >
                      {cost.icon}
                    </div>
                    <div className="small text-muted">{cost.category}</div>
                  </div>
                  <div className="d-flex align-items-end">
                    <div className="fs-4 fw-bold">{cost.range}</div>
                    <div className="ms-2 text-muted small">{cost.period}</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}

          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 life-cost-card" id="life-cost-level">
              <Card.Body className="p-0">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="small text-muted">
                    Total Monthly Cost of Living
                  </div>
                  <span className="badge bg-success">Low</span>
                </div>
                <div className="d-flex align-items-end">
                  <div className="fs-4 fw-bold text-primary">
                    {totalCost.text}
                  </div>
                </div>
                <div className="text-muted small mt-2">
                  (depending on the city & lifestyle)
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LifeCostOfLiving;
