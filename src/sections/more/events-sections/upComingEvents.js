import React, { useState } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import "./UpcomingEvents.css";
import emptyStateImg from "../../../assets/images/events/emptyState.png";

const UpcomingEvents = () => {
  const [activeCategory, setActiveCategory] = useState("Expos");
  const [selectedLocation, setSelectedLocation] = useState("Telangana");
  const [selectedEvent, setSelectedEvent] = useState("Upcoming");

  const categories = ["Expos", "Webinars", "Seminars", "Workshop"];

  const events = [
    {
      id: 1,
      title: "International Uni Expo",
      date: "2 May 2025",
      time: "10:00 AM Onward",
      location: "Hyderabad, Telangana",
      category: "Expos",
    },
    {
      id: 2,
      title: "International Uni Expo",
      date: "15 May 2025",
      time: "10:00 AM Onward",
      location: "Hyderabad, Telangana",
      category: "Expos",
    },
    {
      id: 3,
      title: "International Uni Expo",
      date: "22 May 2025",
      time: "10:00 AM Onward",
      location: "Hyderabad, Telangana",
      category: "Expos",
    },
    {
      id: 4,
      title: "International Uni Expo",
      date: "29 May 2025",
      time: "10:00 AM Onward",
      location: "Hyderabad, Telangana",
      category: "Expos",
    },
  ];

  // Filter events based on selected category
  const filteredEvents = events.filter(
    (event) => activeCategory === event.category
  );

  return (
    <div className="upcoming-events-section">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="subheading-big-medium events-title">
              Join Our Upcoming Events
            </h2>
          </Col>
        </Row>

        <Row className="mb-4 align-items-center">
          <Col md={8}>
            <div className="event-categories">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "dark" : "light"}
                  className={`event-category-btn ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </Col>
          <Col md={4}>
            <div className="event-filters">
              <Dropdown className="location-dropdown">
                <Dropdown.Toggle variant="light" id="location-dropdown">
                  Location: {selectedLocation} <span className="caret"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => setSelectedLocation("Telangana")}
                  >
                    Telangana
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setSelectedLocation("Karnataka")}
                  >
                    Karnataka
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setSelectedLocation("Maharashtra")}
                  >
                    Maharashtra
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="event-dropdown">
                <Dropdown.Toggle variant="light" id="event-dropdown">
                  Event: {selectedEvent} <span className="caret"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSelectedEvent("Upcoming")}>
                    Upcoming
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setSelectedEvent("Past")}>
                    Past
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setSelectedEvent("All")}>
                    All
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
        <Row>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Col md={3} key={event.id}>
                <div className="event-card h-100">
                  <div className="paragraph-big-medium fs-bold">
                    {event.title}
                  </div>
                  <div className="paragraph-big-medium text-content-secondary">
                    <div className="mb-1">
                      <BsCalendar3 className="event-icon" />
                      <span>
                        {event.date} | {event.time}
                      </span>
                    </div>
                    <div className="">
                      <IoLocationOutline className="event-icon" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="event-actions">
                    <button className="btn-secondary-outline">Know More</button>
                    <button className="btn-primary">Register Now</button>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <>
              <Col
                xs={6}
                sm={5}
                className="d-flex align-items-center justify-content-end "
              >
                <img
                  src={emptyStateImg}
                  alt="No Events"
                  className="empty-state-img"
                />
              </Col>
              <Col
                xs={6}
                sm={7}
                className="d-flex align-items-center justify-content-start bg-primar"
              >
                <div className="">
                  <div className="subheading-small-medium">
                    No Expo Scheduled Yet!
                  </div>
                  <p className="paragraph-big-regular  text-content-secondary">
                    {" "}
                    Connect with us to get latest updates on our uni-expos and
                    other events
                    {/* There are currently no {activeCategory.toLowerCase()}{" "}
                    available in {selectedLocation} for{" "}
                    {selectedEvent.toLowerCase()} events. */}
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() => setActiveCategory("Expos")}
                  >
                    Connect Now
                  </button>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default UpcomingEvents;
