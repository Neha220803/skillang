import React from "react";
import {
  CardBody,
  CardTitle,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import "./home-page.css";
import "../../App.css";

const InternshipSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <h1>Ausbildung (internship) Program in Germany</h1>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardTitle>Job Oriented free study</CardTitle>
              <CardBody>
                No or minimal fee charged for the Ausbildung program in germany.
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle>No Block Account needed</CardTitle>
              <CardBody>
                There is no block account required to show the fund backup
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle>Earn while you Learn</CardTitle>
              <CardBody>
                Students earn and gain industry experience through paid
                internships.
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardTitle>Language Training</CardTitle>
              <CardBody>
                Our language training programs provide expert coaching in German
                Language
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle>Eligibility</CardTitle>
              <CardBody>
                German Language proficiency: A2 level. 12th passed with above
                50%. Age limit: Below 37 years.
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle>PR Possibility</CardTitle>
              <CardBody>
                No or minimal fee charged for the Ausbildung program in germany.
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardTitle>Post Study Visa & Placement Assitance</CardTitle>
              <CardBody>
                1.5 years stay-back for post-study work. Placement assistance
                for job opportunities.
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle>Diverse Industry Options</CardTitle>
              <CardBody>
                Diverse industry options available. Over 300+ formal training
                programs offered.
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InternshipSection;
