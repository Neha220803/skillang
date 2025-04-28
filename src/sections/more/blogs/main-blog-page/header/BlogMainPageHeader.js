import React, { useState } from "react";
import "./BlogMainPageHeader.css";
import {
  Container,
  Row,
  Col,
  Image,
  Nav,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "react-bootstrap";
import { Chat, Heart } from "react-bootstrap-icons";
import { HiTrendingUp } from "react-icons/hi";
import blogsData from "../../../../../data/blogsData";

const BlogMainPageHeader = () => {
  // State to track active filter
  const [activeFilter, setActiveFilter] = useState("Trending");

  // Filter posts based on active filter
  const getFilteredPosts = () => {
    if (activeFilter === "All") {
      return blogsData.posts.slice(0, 4); // Limit to 4 posts
    }
    return blogsData.posts
      .filter((post) => post.category.includes(activeFilter))
      .slice(0, 4); // Limit to 4 posts
  };

  // Get filtered posts
  const filteredPosts = getFilteredPosts();

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col sm={12} xs={12} md={7} className="bg-primar">
            <Image
              src={blogsData.mainFeature.featuredImage}
              alt="blog-main-page-header"
              className="w-100 blog-main-header-left-img"
            />
            <h1 className="heading-big-medium mt-3">
              {blogsData.mainFeature.title}
            </h1>
          </Col>
          <Col sm={12} xs={12} md={5}>
            <Row>
              <div className="filter-tabs">
                <Nav variant="pills" defaultActiveKey="Trending">
                  {blogsData.categories.map((category, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link
                        active={activeFilter === category}
                        onClick={() => handleFilterChange(category)}
                      >
                        {category === "Trending" && (
                          <HiTrendingUp
                            style={{ width: "20px", height: "auto" }}
                          />
                        )}{" "}
                        {category}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            </Row>
            <Row>
              {filteredPosts.map((post) => (
                <Col sm={12} xs={12} md={6} key={post.id} className="mb-3">
                  <Card className="blog-trending-cards border-0">
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
                        <div className="d-flex flex-row gap-2">
                          <div>
                            <Heart />
                            {post.views}
                          </div>
                          <div>
                            <Chat />
                            {post.comments}
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogMainPageHeader;
