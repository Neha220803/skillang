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
import blogMainHeaderImg from "../../../../../assets/images/Blogs/header-blog-main.jpg";
import trend1 from "../../../../../assets/images/Blogs/trend-1.jpg";
import trend2 from "../../../../../assets/images/Blogs/trend-2.jpg";
import trend3 from "../../../../../assets/images/Blogs/trend-3.jpg";
import trend4 from "../../../../../assets/images/Blogs/trend-4.jpg";
import { Chat, Heart } from "react-bootstrap-icons";
import { HiTrendingUp } from "react-icons/hi";

const BlogMainPageHeader = () => {
  // State to track active filter
  const [activeFilter, setActiveFilter] = useState("trending");

  // Array of blog posts with categories
  const allPosts = [
    {
      id: 1,
      image: trend1,
      title:
        "Discover the Excitement of New York: A Guide for International Students",
      date: "Mar 23, 2025",
      likes: "432",
      comments: "34",
      categories: ["trending", "business"],
    },
    {
      id: 2,
      image: trend2,
      title: "Experience New York: The Ultimate Study Abroad Adventure",
      date: "Mar 23, 2025",
      likes: "432",
      comments: "34",
      categories: ["trending"],
    },
    {
      id: 3,
      image: trend3,
      title:
        "Studying Abroad in New York: Your Gateway to Culture and Learning",
      date: "Mar 23, 2025",
      likes: "432",
      comments: "34",
      categories: ["business", "topSalary"],
    },
    {
      id: 4,
      image: trend4,
      title: "New York Awaits: A Student's Guide to Exploring the City",
      date: "Mar 23, 2025",
      likes: "3k",
      comments: "874",
      categories: ["trending", "topSalary"],
    },
  ];

  // Filter posts based on active filter
  const getFilteredPosts = () => {
    if (activeFilter === "all") {
      return allPosts;
    }
    return allPosts.filter(post => post.categories.includes(activeFilter));
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
              src={blogMainHeaderImg}
              alt="blog-main-page-header"
              className="w-100 blog-main-header-left-img"
            />
            <h1 className="heading-big-medium mt-3">
              Is New York the Right Place To Study Abroad?
            </h1>
          </Col>
          <Col sm={12} xs={12} md={5}>
            <Row>
              <div className="filter-tabs">
                <Nav variant="pills" defaultActiveKey="trending">
                  <Nav.Item>
                    <Nav.Link
                      active={activeFilter === "all"}
                      onClick={() => handleFilterChange("all")}
                    >
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      active={activeFilter === "trending"}
                      onClick={() => handleFilterChange("trending")}
                    >
                      <HiTrendingUp style={{ width: "20px", height: "auto" }} />{" "}
                      Trending
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      active={activeFilter === "business"}
                      onClick={() => handleFilterChange("business")}
                    >
                      Business
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      active={activeFilter === "topSalary"}
                      onClick={() => handleFilterChange("topSalary")}
                    >
                      Top Salary
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Row>
            <Row>
              {filteredPosts.map((post) => (
                <Col sm={12} xs={12} md={6} key={post.id} className="mb-3">
                  <Card className="blog-trending-cards border-0">
                    <CardImg
                      className="blog-trending-cards-image"
                      src={post.image}
                      alt={`trend${post.id}-img`}
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
                            {post.likes}
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