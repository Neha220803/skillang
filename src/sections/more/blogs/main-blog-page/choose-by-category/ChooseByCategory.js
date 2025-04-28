import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { HiTrendingUp } from "react-icons/hi";
import blogsData from "../../../../../data/blogsData";
import { useNavigate } from "react-router-dom";
import BlogCardComp from "../../../../../components/cards/blogs-cards/BlogCards";

const ChooseByCategory = () => {
  // State to track active filter - default to "All"
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  // Filter posts based on active filter
  const getFilteredPosts = () => {
    if (activeFilter === "All") {
      return blogsData.posts.slice(0, 6); // Limit to 6 posts for this section
    }
    return blogsData.posts
      .filter((post) => post.category.includes(activeFilter))
      .slice(0, 6); // Limit to 6 posts
  };

  // Get filtered posts
  const filteredPosts = getFilteredPosts();

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Handle blog card click
  const handleCardClick = (postId) => {
    navigate(`/blogs/${postId}`);
  };

  return (
    <div>
      <Container>
        <Row>
          <h1 className="heading-big-medium mb-4">Choose by Category</h1>
        </Row>
        <Row>
          <div className="filter-tabs">
            <Nav variant="pills">
              {blogsData.categories
                .filter((category) => category !== "Editor's Choice") // Exclude Editor's Choice from this section
                .map((category, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link
                      className={activeFilter === category ? "active" : ""}
                      onClick={() => handleFilterChange(category)}
                    >
                      {category === "Trending" && (
                        <HiTrendingUp
                          style={{ width: "20px", height: "auto" }}
                        />
                      )}
                      {category}
                    </Nav.Link>
                  </Nav.Item>
                ))}
            </Nav>
          </div>
        </Row>
        <Row>
          {filteredPosts.map((post) => (
            <Col sm={12} xs={12} md={4} key={post.id} className="mb-3">
              <BlogCardComp
                post={post}
                onClick={handleCardClick}
                showStats={true} // Enable view/comment statistics for this section
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ChooseByCategory;
