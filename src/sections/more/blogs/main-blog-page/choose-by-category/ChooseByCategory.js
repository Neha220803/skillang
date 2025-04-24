import React from "react";
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
import { HiTrendingUp } from "react-icons/hi";
import trend1 from "../../../../../assets/images/Blogs/trend-1.jpg";
import trend2 from "../../../../../assets/images/Blogs/trend-2.jpg";
import trend3 from "../../../../../assets/images/Blogs/trend-3.jpg";
import trend4 from "../../../../../assets/images/Blogs/trend-4.jpg";
import { Chat, Heart } from "react-bootstrap-icons";

const ChooseByCategory = () => {
  const trendingPosts = [
    {
      id: 1,
      image: trend1,
      title:
        "Discover the Excitement of New York: A Guide for International Students",
      date: "Mar 23, 2025",
      likes: "432",
      comments: "34",
    },
    {
      id: 2,
      image: trend2,
      title: "Experience New York: The Ultimate Study Abroad Adventure",
      date: "Mar 23, 2025",
      likes: "432",
      comments: "34",
    },
    {
      id: 3,
      image: trend3,
      title:
        "Studying Abroad in New York: Your Gateway to Culture and Learning",
      date: "Mar 23, 2025",
      likes: "432",
      comments: "34",
    },
    {
      id: 4,
      image: trend1,
      title:
        "Discover the Excitement of New York: A Guide for International Students",
      date: "Mar 23, 2025",
      likes: "432",
      comments: "34",
    },
    {
      id: 5,
      image: trend2,
      title: "Experience New York: The Ultimate Study Abroad Adventure",
      date: "Mar 23, 2025",
      likes: "432",
      comments: "34",
    },
    {
      id: 6,
      image: trend3,
      title:
        "Studying Abroad in New York: Your Gateway to Culture and Learning",
      date: "Mar 23, 2025",
      likes: "432",
      comments: "34",
    },
  ];
  return (
    <div>
      <Container>
        <Row>
          <h1 className="heading-big-medium mb-4">Choose by Category</h1>
        </Row>
        <Row>
          <div className="filter-tabs">
            <Nav variant="pills" defaultActiveKey="#trending">
              <Nav.Item>
                <Nav.Link href="#all">All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#trending" active>
                  <HiTrendingUp style={{ width: "20px", height: "auto" }} />{" "}
                  Trending
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#business">Business</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#topsalary">Top Salary</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Row>
        <Row>
          {trendingPosts.map((post) => (
            <Col sm={12} xs={12} md={4} key={post.id} className="mb-3">
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
      </Container>
    </div>
  );
};

export default ChooseByCategory;
