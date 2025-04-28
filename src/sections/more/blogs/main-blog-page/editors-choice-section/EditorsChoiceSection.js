import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import blogsData from "../../../../../data/blogsData";
import { useNavigate } from "react-router-dom";
import BlogCardComp from "../../../../../components/cards/blogs-cards/BlogCards";

const EditorsChoiceSection = () => {
  const navigate = useNavigate();

  // Filter posts with the "Editor's Choice" category
  const editorsPicks = blogsData.posts
    .filter((post) => post.category.includes("Editor's Choice"))
    .slice(0, 3); // Limit to 3 posts

  // Handle blog card click
  const handleCardClick = (postId) => {
    navigate(`/blogs/${postId}`);
  };

  return (
    <div>
      <Container>
        <Row>
          <h1 className="heading-big-medium mb-4">Editor's Choice</h1>
        </Row>
        <Row>
          {editorsPicks.map((post) => (
            <Col sm={12} xs={12} md={4} key={post.id} className="mb-3">
              <BlogCardComp post={post} onClick={handleCardClick} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default EditorsChoiceSection;
