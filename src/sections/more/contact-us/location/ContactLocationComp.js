import React from "react";
import "./ContactLocationComp.css";
import { Container, Row, Col } from "react-bootstrap";
import { HiLocationMarker } from "react-icons/hi";

const ContactLocationComp = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={5} xs={12} sm={12} className="mb-4 mb-md-0 ">
            <div className="map-container ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.6758753788063!2d80.2595214254195!3d13.06155349061786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266166d42b5a7%3A0xd997f32439e5bb34!2sThe%20Executive%20Zone%20%7C%20Coworking%20Space%20%7C%20Anna%20Salai!5e0!3m2!1sen!2sin!4v1747586132581!5m2!1sen!2sin"
                // width="600"
                // height="450"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                title="location-map"
                referrerpolicy="no-referrer-when-downgrade"
                className="map-iframe w-100 h-100"
              ></iframe>
            </div>
          </Col>
          <Col lg={7} xs={12} sm={12}>
            <div className="mb-4">
              <div className="caption-bold location-badge">
                <HiLocationMarker size={16} /> Our Location
              </div>
              <div>
                <h1 className="heading-big-medium">Connecting Near & Far</h1>
                <div className="paragraph-big-medium">Headquarters</div>
                <div className="paragraph-small-medium text-content-secondary">
                  ABC- Street Name, Chennai-123456
                </div>
              </div>
            </div>
            <div>
              <Row>
                <div className="subheading-small-medium mb-2">
                  Other Locations
                </div>
                <Col>
                  <h4 className="paragraph-big-medium">Office 1</h4>
                  <div className="paragraph-small-medium text-content-secondary">
                    ABC- Street Name, Chennai-123456
                  </div>
                  <button className="btn-secondary-outline mt-2">
                    See on map
                  </button>
                </Col>
                <Col>
                  <h4 className="paragraph-big-medium">Office 2</h4>
                  <div className="paragraph-small-medium text-content-secondary">
                    ABC- Street Name, Chennai-123456
                  </div>
                  <button className="btn-secondary-outline mt-2">
                    See on map
                  </button>
                </Col>
                <Col>
                  <h4 className="paragraph-big-medium">Office 2</h4>
                  <div className="paragraph-small-medium text-content-secondary">
                    ABC- Street Name, Chennai-123456
                  </div>
                  <button className="btn-secondary-outline mt-2">
                    See on map
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactLocationComp;
