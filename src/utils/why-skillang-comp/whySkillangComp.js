import React from "react";
import {
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
  Card,
} from "react-bootstrap";
import "./whySkillangComp";
// import "../../../../index.css";

/**
 * ReusableWhyComponent - A reusable component for "Why Choose Us" sections
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Main heading text (e.g. "Why Choose Skillang?")
 * @param {string} props.subtitle - Subheading text
 * @param {string} props.backgroundColor - CSS class for background (default: "lang-why-skill-bg")
 * @param {Array} props.cardData - Array of objects with title, text, and img properties
 * @param {number} props.columns - Number of columns per row (default: 4)
 * @param {string} props.titleClass - CSS class for title (default: "heading-big-medium text-content-primaryInverse")
 * @param {string} props.subtitleClass - CSS class for subtitle (default: "paragraph-big-medium text-content-secondaryInverse")
 * @param {string} props.cardClass - CSS class for cards (default: "lang-why-skill-card")
 * @param {string} props.cardTitleClass - CSS class for card titles (default: "subheading-small-medium text-content-primaryInverse")
 * @param {string} props.cardTextClass - CSS class for card text (default: "paragraph-small-medium text-content-tertiaryInverse")
 * @returns {JSX.Element}
 */
const ReusableWhyComponent = ({
  title = "Why Choose Skillang?",
  subtitle = "Discover What Makes Skillang Your Best Path to Success",
  backgroundColor = "lang-why-skill-bg",
  cardData = [],
  columns = 4,
  titleClass = "heading-big-medium text-content-primaryInverse",
  subtitleClass = "paragraph-big-medium text-content-secondaryInverse",
  cardClass = "lang-why-skill-card",
  cardTitleClass = "subheading-small-medium text-content-primaryInverse",
  cardTextClass = "paragraph-small-medium text-content-tertiaryInverse",
}) => {
  // Calculate Bootstrap column size based on specified columns
  const colSize = 12 / columns;

  return (
    <div className={backgroundColor}>
      <Container>
        <Row className="mb-5">
          <div className={titleClass}>{title}</div>
          <div className={subtitleClass}>{subtitle}</div>
        </Row>
        <Row>
          {cardData.map((card, index) => (
            <Col
              key={index}
              lg={colSize}
              md={6}
              sm={12}
              xs={12}
              className="mb-3"
            >
              <Card className={cardClass}>
                {card.img && (
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{ borderRadius: "12px" }}
                  />
                )}
                <CardTitle className={cardTitleClass}>{card.title}</CardTitle>
                <CardText className={cardTextClass}>{card.text}</CardText>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ReusableWhyComponent;
