import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LandMark1 from "../../../assets/images/study-abroad-county-wise/keyDestiLand1.jpg";
import LandMark2 from "../../../assets/images/study-abroad-county-wise/keyDestiLand2.jpg";
import {
  FaLandmark,
  FaIndustry,
  FaUniversity,
  FaMapMarkerAlt,
  FaArchway,
  FaTree,
  FaShoppingBag,
  FaTheaterMasks,
  FaBus,
  FaGlassMartiniAlt,
} from "react-icons/fa";

const LifeKeyDestination = () => {
  const [activeCity, setActiveCity] = useState("London");

  // Cities data
  const cities = [
    "London",
    "Oxford",
    "Cambridge",
    "Manchester",
    "Edinburgh",
    "Birmingham",
    "Glasgow",
    "Bristol",
    "Cardiff",
  ];

  // Categories data with icons
  const categories = [
    { id: 1, name: "Landmarks", icon: <FaLandmark size={24} /> },
    { id: 2, name: "Industry", icon: <FaIndustry size={24} /> },
    {
      id: 3,
      name: "Educational Institutions",
      icon: <FaUniversity size={24} />,
    },
    { id: 4, name: "Must Visits", icon: <FaMapMarkerAlt size={24} /> },
    { id: 5, name: "Historic sites", icon: <FaArchway size={24} /> },
    { id: 6, name: "Parks", icon: <FaTree size={24} /> },
    { id: 7, name: "Shopping", icon: <FaShoppingBag size={24} /> },
    { id: 8, name: "Cultural Events", icon: <FaTheaterMasks size={24} /> },
    { id: 9, name: "Public Transport", icon: <FaBus size={24} /> },
    { id: 10, name: "Nightlige", icon: <FaGlassMartiniAlt size={24} /> },
  ];

  // City images mapping
  const cityImages = {
    London: LandMark1,
    Oxford: LandMark2,
    Cambridge: LandMark1,
    Manchester: LandMark2,
    Edinburgh: LandMark1,
    Birmingham: LandMark2,
    Glasgow: LandMark1,
    Bristol: LandMark2,
    Cardiff: LandMark1,
  };

  return (
    <>
      <div className="mb-4">
        <h2 className="subheading-big-medium text-content-secondary">
          Key Destinations in United Kingdom
        </h2>
      </div>

      {/* City tabs */}
      <div className="d-flex flex-wrap mb-4 city-tabs">
        {cities.map((city) => (
          <Button
            key={city}
            variant={activeCity === city ? "dark" : "light"}
            className="rounded-pill me-2 mb-2 px-3 py-1"
            onClick={() => setActiveCity(city)}
          >
            {city}
          </Button>
        ))}
      </div>

      {/* Categories */}
      <Row className="categories-row mb-4 text-center">
        {categories.map((category) => (
          <Col
            key={category.id}
            xs={4}
            sm={3}
            md={2}
            lg={true}
            className="mb-4"
          >
            <div className="category-item d-flex flex-column align-items-center">
              <div
                className="category-icon rounded-circle mb-2 d-flex align-items-center justify-content-center"
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "#4a90e2",
                  color: "white",
                  border: "2px solid #ff934f",
                }}
              >
                {category.icon}
              </div>
              <div className="category-name small">{category.name}</div>
            </div>
          </Col>
        ))}
      </Row>

      {/* City image */}
      <div
        className="city-image-container rounded-4 overflow-hidden mb-4"
        style={{ height: "300px" }}
      >
        <img
          src={cityImages[activeCity] || "/images/london-tower-bridge.jpg"}
          alt={`${activeCity} landmark`}
          className="w-100 h-100 object-fit-cover"
          style={{ objectPosition: "center" }}
        />
      </div>

      <style jsx>{`
        .category-icon {
          transition: all 0.3s ease;
        }
        .category-item:hover .category-icon {
          transform: scale(1.05);
        }
        .city-tabs .btn {
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default LifeKeyDestination;
