import React, { useState, useEffect, useRef } from "react";
import "../../../index.css";
import "./partner_uni.css";
import partner from "../../../assets/images/reusable/partnereduni.png";

const PartneredUni = () => {
  // Reference for the tab container for scrolling
  const tabContainerRef = useRef(null);

  // State for managing tab data with exact counts specified
  const [tabs, setTabs] = useState([
    { name: "All", count: 43 },
    { name: "USA", count: 21 },
    { name: "UK", count: 4 },
    { name: "Canada", count: 0 },
    { name: "Australia", count: 0 },
    { name: "Ireland", count: 0 },
    { name: "NewZealand", count: 0 },
    { name: "Singapore", count: 0 },
    { name: "Switzerland", count: 0 },
    { name: "Asia", count: 0 },
    { name: "Europe", count: 0 },
  ]);

  // Store university logos per tab
  const [tabData, setTabData] = useState({});

  // State to track active tab
  const [activeTab, setActiveTab] = useState("All");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Pagination state - one object per tab to maintain pagination state when switching tabs
  const [paginationState, setPaginationState] = useState({
    All: { currentPage: 1 },
    USA: { currentPage: 1 },
    UK: { currentPage: 1 },
    Canada: { currentPage: 1 },
    Australia: { currentPage: 1 },
    Ireland: { currentPage: 1 },
    NewZealand: { currentPage: 1 },
    Singapore: { currentPage: 1 },
    Switzerland: { currentPage: 1 },
    Asia: { currentPage: 1 },
    Europe: { currentPage: 1 },
  });

  // Responsive logos per page based on screen size
  const [logosPerPage, setLogosPerPage] = useState(21);

  // Update logos per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      // If mobile (less than 768px) show 9 logos per page (3x3)
      if (window.innerWidth < 768) {
        setLogosPerPage(9);
      } else {
        // Desktop shows 21 logos (7x3)
        setLogosPerPage(21);
      }
    };

    // Set initial value
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle tab change and scroll into view
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);

    // Find the index of the clicked tab
    const tabIndex = tabs.findIndex((tab) => tab.name === tabName);

    // Scroll the tab into view on mobile
    if (window.innerWidth < 768 && tabContainerRef.current) {
      const tabButtons =
        tabContainerRef.current.querySelectorAll(".tab-button");
      if (tabButtons[tabIndex]) {
        // Calculate position to center the tab
        const containerWidth = tabContainerRef.current.offsetWidth;
        const tabWidth = tabButtons[tabIndex].offsetWidth;
        const tabLeft = tabButtons[tabIndex].offsetLeft;

        // Smooth scroll to position
        tabContainerRef.current.scrollTo({
          left: tabLeft - containerWidth / 2 + tabWidth / 2,
          behavior: "smooth",
        });
      }
    }

    // Only fetch if we don't already have this tab's data
    if (!tabData[tabName]) {
      fetchUniversityData(tabName);
    }
  };

  // Function to create dummy logos based on tab/count
  const createDummyLogos = (tabName, count) => {
    return Array(count)
      .fill()
      .map((_, index) => ({
        logo: partner,
        id: `${tabName}-${index}`,
      }));
  };

  // Mocked API call function - replace with real API call in future
  const fetchUniversityData = (country) => {
    setLoading(true);

    // Simulate API request delay
    setTimeout(() => {
      // Get the count from tabs array for this country
      const tabInfo = tabs.find((tab) => tab.name === country);
      const logoCount = tabInfo ? tabInfo.count : 0;

      // Create dummy data with exact counts
      const dummyData = createDummyLogos(country, logoCount);

      // Store data in tabData state to prevent refetching
      setTabData((prevState) => ({
        ...prevState,
        [country]: dummyData,
      }));

      setLoading(false);
    }, 300);
  };

  // Effect to load initial data only once
  useEffect(() => {
    fetchUniversityData(activeTab);
  }, []);

  // Get current logos for the active tab
  const currentTabLogos = tabData[activeTab] || [];

  // Get current page of logos
  const currentPage = paginationState[activeTab]?.currentPage || 1;
  const indexOfLastLogo = currentPage * logosPerPage;
  const indexOfFirstLogo = indexOfLastLogo - logosPerPage;
  const currentLogos = currentTabLogos.slice(indexOfFirstLogo, indexOfLastLogo);

  // Pagination controls
  const totalPages = Math.ceil(currentTabLogos.length / logosPerPage);

  const nextPage = (e) => {
    e.preventDefault(); // Prevent default to avoid page reload

    if (currentPage < totalPages) {
      setPaginationState((prev) => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          currentPage: currentPage + 1,
        },
      }));
    }
  };

  const prevPage = (e) => {
    e.preventDefault(); // Prevent default to avoid page reload

    if (currentPage > 1) {
      setPaginationState((prev) => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          currentPage: currentPage - 1,
        },
      }));
    }
  };

  // Create responsive grid based on screen size
  const renderLogoGrid = () => {
    // Create grid items based on responsive layout
    return (
      <div className="university-logo-grid">
        {currentLogos.map((logo, index) => (
          <div key={logo.id || `logo-${index}`} className="logo-cell">
            <div className="logo-container">
              <img
                src={logo.logo}
                alt="University logo"
                className="img-fluid"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Render loading state
  if (loading) {
    return (
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "white" }}
      >
        <div className="container text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-4">
          <div className="heading-big-medium">Our University Partners</div>
          <div className="subheading-small-regular text-content-secondary">
            Collaborating with Top Institutions to Bring You World-Class
            Education Opportunities.
          </div>
        </div>

        {/* Navigation Tabs - Scrollable on mobile */}
        <div className="tab-nav-container" ref={tabContainerRef}>
          <div className="d-flex justify-content-start justify-content-md-center position-relative">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className="btn mx-1 mb-0 border-0 tab-button"
                onClick={() => handleTabChange(tab.name)}
                style={{
                  borderRadius: 0,
                  color: activeTab === tab.name ? "#ff5d32" : "#6c757d",
                  fontWeight: activeTab === tab.name ? "bold" : "normal",
                  padding: "0.5rem 0.25rem",
                  position: "relative",
                }}
              >
                {tab.name} {tab.count > 0 ? `(${tab.count})` : ""}
                {activeTab === tab.name && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "0",
                      width: "100%",
                      height: "3px",
                      backgroundColor: "#ff5d32",
                      borderRadius: "2px",
                      zIndex: 2,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* University Logos Grid */}
        {renderLogoGrid()}

        {/* Pagination Controls - Only show if there's more than one page */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <button
              className="pagination-button"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <span>&lt;</span>
            </button>
            <button
              className="pagination-button"
              onClick={nextPage}
              disabled={currentPage >= totalPages}
            >
              <span>&gt;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartneredUni;
