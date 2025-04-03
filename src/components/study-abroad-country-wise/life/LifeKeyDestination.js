import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Stories from "react-insta-stories";
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
  FaTimes,
} from "react-icons/fa";
import "./life.css";

const LifeKeyDestination = () => {
  const [activeCity, setActiveCity] = useState("London");
  const [showStories, setShowStories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

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

  // City-specific stories data
  const cityStoriesData = {
    London: {
      landmarks: [
        {
          url: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
          header: {
            heading: "London's Big Ben",
            subheading: "Clock tower of the Palace of Westminster",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
          header: {
            heading: "Tower Bridge",
            subheading: "London's iconic river crossing",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1486299267070-83823f5448dd",
          header: {
            heading: "London Eye",
            subheading: "Giant Ferris wheel on the South Bank",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1602940659805-770d1b3b9911",
          header: {
            heading: "Buckingham Palace",
            subheading: "Official residence of the British monarch",
            profileImage: "https://via.placeholder.com/40",
          },
        },
      ],
      universities: [
        {
          url: "https://images.unsplash.com/photo-1543505298-b8be9b52a21a",
          header: {
            heading: "Imperial College London",
            subheading: "Science-based institution in London",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1591429939960-b7d5add10b5c",
          header: {
            heading: "University College London",
            subheading: "Public research university in London",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1631193816258-28b94f43ea84",
          header: {
            heading: "King's College London",
            subheading: "Research university in London",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1596465727821-253ebd5dffc6",
          header: {
            heading: "London School of Economics",
            subheading:
              "Public research university specializing in social sciences",
            profileImage: "https://via.placeholder.com/40",
          },
        },
      ],
    },
    Oxford: {
      landmarks: [
        {
          url: "https://images.unsplash.com/photo-1560531516-294aa1bcc84c",
          header: {
            heading: "Oxford University Museum",
            subheading: "Natural History Museum",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1548231644-3aa15efcbf68",
          header: {
            heading: "Radcliffe Camera",
            subheading: "Iconic Oxford building",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1580420098304-8561d17b707b",
          header: {
            heading: "Oxford High Street",
            subheading: "Historic main street",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1608456902986-73a8208e2184",
          header: {
            heading: "Bridge of Sighs",
            subheading: "Hertford College skyway",
            profileImage: "https://via.placeholder.com/40",
          },
        },
      ],
      universities: [
        {
          url: "https://images.unsplash.com/photo-1580420098304-8561d17b707b",
          header: {
            heading: "University of Oxford",
            subheading: "World's oldest English-speaking university",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1610406716688-989c6a5d39c8",
          header: {
            heading: "Christ Church College",
            subheading: "Famous Oxford college",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1591429939960-b7d5add10b5c",
          header: {
            heading: "Magdalen College",
            subheading: "One of the wealthiest colleges in Oxford",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1613145206130-8afc6a11f8ba",
          header: {
            heading: "Bodleian Library",
            subheading: "Oxford's main research library",
            profileImage: "https://via.placeholder.com/40",
          },
        },
      ],
    },
    Cambridge: {
      landmarks: [
        {
          url: "https://images.unsplash.com/photo-1579960174756-1543a1490266",
          header: {
            heading: "King's College Chapel",
            subheading: "Iconic chapel at Cambridge",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1589894404892-7310b92ea7fd",
          header: {
            heading: "Mathematical Bridge",
            subheading: "Wooden footbridge in Cambridge",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1579960174756-1543a1490266",
          header: {
            heading: "The Backs",
            subheading: "Picturesque area along the River Cam",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1621853665587-90b88b8d7082",
          header: {
            heading: "Bridge of Sighs",
            subheading: "Covered bridge at St John's College",
            profileImage: "https://via.placeholder.com/40",
          },
        },
      ],
      universities: [
        {
          url: "https://images.unsplash.com/photo-1579960174756-1543a1490266",
          header: {
            heading: "University of Cambridge",
            subheading: "World-renowned research university",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1579960174756-1543a1490266",
          header: {
            heading: "Trinity College",
            subheading: "Largest college at Cambridge",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1598867742498-4eba2656104c",
          header: {
            heading: "St John's College",
            subheading: "Founded in 1511",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1579960174756-1543a1490266",
          header: {
            heading: "King's College",
            subheading: "Founded by King Henry VI in 1441",
            profileImage: "https://via.placeholder.com/40",
          },
        },
      ],
    },
    Manchester: {
      landmarks: [
        {
          url: "https://images.unsplash.com/photo-1583266600419-a569f2393af6",
          header: {
            heading: "Manchester Cathedral",
            subheading: "Historic medieval church",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1610560814085-81ce6aa1578e",
          header: {
            heading: "Manchester Town Hall",
            subheading: "Neo-Gothic municipal building",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1516542285705-97ca682149a1",
          header: {
            heading: "Old Trafford",
            subheading: "Home of Manchester United",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1518984211399-4f3ce2e0594c",
          header: {
            heading: "Etihad Stadium",
            subheading: "Home of Manchester City",
            profileImage: "https://via.placeholder.com/40",
          },
        },
      ],
      universities: [
        {
          url: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2",
          header: {
            heading: "University of Manchester",
            subheading: "Red brick university and member of the Russell Group",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1633177638566-834213a0ced2",
          header: {
            heading: "Manchester Metropolitan University",
            subheading: "Second largest university in Manchester",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
          header: {
            heading: "UMIST Campus",
            subheading:
              "University of Manchester Institute of Science and Technology",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
          header: {
            heading: "Salford University",
            subheading: "Located in the metropolitan borough of Salford",
            profileImage: "https://via.placeholder.com/40",
          },
        },
      ],
    },
    Edinburgh: {
      landmarks: [
        {
          url: "https://images.unsplash.com/photo-1568797629192-150fd85a32be",
          header: {
            heading: "Edinburgh Castle",
            subheading: "Historic fortress dominating the city skyline",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1581069272774-2058e6df8c57",
          header: {
            heading: "Royal Mile",
            subheading: "Succession of streets in the Old Town",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1564604761388-83cf8bb5591c",
          header: {
            heading: "Arthur's Seat",
            subheading: "Main peak of the hills in Edinburgh",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1566227283089-e017fcf54d8d",
          header: {
            heading: "Holyrood Palace",
            subheading: "Official residence of the British monarch in Scotland",
            profileImage: "https://via.placeholder.com/40",
          },
        },
      ],
      universities: [
        {
          url: "https://images.unsplash.com/photo-1596298501739-b5c0e3689645",
          header: {
            heading: "University of Edinburgh",
            subheading: "6th oldest university in the English-speaking world",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
          header: {
            heading: "Heriot-Watt University",
            subheading:
              "Established in 1821 as the world's first mechanics' institute",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1571085716425-8a5c9ee645f4",
          header: {
            heading: "Edinburgh Napier University",
            subheading: "Named after John Napier, the inventor of logarithms",
            profileImage: "https://via.placeholder.com/40",
          },
        },
        {
          url: "https://images.unsplash.com/photo-1596301518082-a9eb4445fbb3",
          header: {
            heading: "Queen Margaret University",
            subheading: "Named after Saint Margaret of Scotland",
            profileImage: "https://via.placeholder.com/40",
          },
        },
      ],
    },
  };

  // Add placeholder data for other cities
  ["Birmingham", "Glasgow", "Bristol", "Cardiff"].forEach((city) => {
    cityStoriesData[city] = {
      landmarks: Array(4)
        .fill(null)
        .map((_, i) => ({
          url: `https://source.unsplash.com/random/800x1200?${city.toLowerCase()},landmark,${
            i + 1
          }`,
          header: {
            heading: `${city} Landmark ${i + 1}`,
            subheading: "Beautiful place to visit",
            profileImage: "https://via.placeholder.com/40",
          },
        })),
      universities: Array(4)
        .fill(null)
        .map((_, i) => ({
          url: `https://source.unsplash.com/random/800x1200?${city.toLowerCase()},university,${
            i + 1
          }`,
          header: {
            heading: `${city} University ${i + 1}`,
            subheading: "Educational institution",
            profileImage: "https://via.placeholder.com/40",
          },
        })),
    };
  });

  // Categories data with icons
  const categories = [
    {
      id: 1,
      name: "Landmarks",
      icon: <FaLandmark size={24} />,
      key: "landmarks",
    },
    {
      id: 2,
      name: "Industry",
      icon: <FaIndustry size={24} />,
      key: "landmarks",
    },
    {
      id: 3,
      name: "Educational Institutions",
      icon: <FaUniversity size={24} />,
      key: "universities",
    },
    {
      id: 4,
      name: "Must Visits",
      icon: <FaMapMarkerAlt size={24} />,
      key: "landmarks",
    },
    {
      id: 5,
      name: "Historic sites",
      icon: <FaArchway size={24} />,
      key: "landmarks",
    },
    {
      id: 6,
      name: "Parks",
      icon: <FaTree size={24} />,
      key: "landmarks",
    },
    {
      id: 7,
      name: "Shopping",
      icon: <FaShoppingBag size={24} />,
      key: "landmarks",
    },
    {
      id: 8,
      name: "Cultural Events",
      icon: <FaTheaterMasks size={24} />,
      key: "landmarks",
    },
    {
      id: 9,
      name: "Public Transport",
      icon: <FaBus size={24} />,
      key: "landmarks",
    },
    {
      id: 10,
      name: "Nightlife",
      icon: <FaGlassMartiniAlt size={24} />,
      key: "landmarks",
    },
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

  const handleCategoryClick = (category) => {
    // Get stories for the active city and category
    const storiesKey = category.key || "landmarks";
    const cityStories = cityStoriesData[activeCity]
      ? cityStoriesData[activeCity][storiesKey]
      : [];

    if (cityStories && cityStories.length > 0) {
      setActiveCategory({
        ...category,
        stories: cityStories,
        cityName: activeCity,
      });
      setShowStories(true);
    } else {
      alert(`No stories available for ${category.name} in ${activeCity}`);
    }
  };

  const handleStoriesEnd = () => {
    setShowStories(false);
    setActiveCategory(null);
  };

  // Story options
  const storyOptions = {
    width: "100%",
    height: "100vh",
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
            <div
              className="category-item d-flex flex-column align-items-center"
              onClick={() => handleCategoryClick(category)}
              style={{ cursor: "pointer" }}
            >
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

      {/* Stories modal */}
      {showStories && activeCategory && activeCategory.stories && (
        <div className="stories-overlay">
          <div className="stories-card">
            <button className="stories-close-btn" onClick={handleStoriesEnd}>
              <FaTimes size={24} />
            </button>
            <Stories
              stories={activeCategory.stories}
              defaultInterval={4000}
              width="35vw"
              height="90vh"
              storyStyles={{
                width: "35vw",
                height: "90vh",
                borderRadius: "16px",
                objectFit: "cover",
              }}
              onAllStoriesEnd={handleStoriesEnd}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LifeKeyDestination;
