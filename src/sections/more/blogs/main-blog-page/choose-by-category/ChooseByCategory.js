import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "react-bootstrap";
import { HiTrendingUp } from "react-icons/hi";
import { Chat, Heart } from "react-bootstrap-icons";
import blogsData from "../../../../../data/blogsData";

const ChooseByCategory = () => {
  // State to track active filter - default to "All"
  const [activeFilter, setActiveFilter] = useState("All");

  // Convert category names to match format in blogsData
  const categoryMapping = {
    All: "All",
    Trending: "Trending",
    Business: "Business",
    "Top Salary": "Top Salary",
  };

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
              <Card
                className="blog-trending-cards border-0"
                data-categories={post.category?.join(",")}
              >
                <CardImg
                  className="blog-trending-cards-image"
                  src={post.featuredImage}
                  alt={post.title}
                />
                <CardBody className="px-1 py-2">
                  <CardTitle className="paragraph-big-medium">
                    {post.title}
                  </CardTitle>
                  <div className="text-content-tertiary caption-regular">
                    <div>{post.date}</div>
                    {/* <div className="d-flex flex-row gap-2">
                      <div>
                        <Heart />
                        {post.views}
                      </div>
                      <div>
                        <Chat />
                        {post.comments}
                      </div>
                    </div> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ChooseByCategory;
