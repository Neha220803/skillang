import React from "react";
import "./blogsHeader.css"; // Import CSS for styling
import { Container, Row, Col, Card, Nav, Button, Image } from "react-bootstrap"; // Import React Bootstrap components
import {
  FaHeart,
  FaComment,
  FaEye,
  FaBookmark,
  FaThumbsUp,
  FaEllipsisH,
} from "react-icons/fa";
// Import local images
import featuredImg from "../../../../assets/images/Blogs/blogbg.jpg";
import img1 from "../../../../assets/images/Blogs/trend1.jpg";
import img2 from "../../../../assets/images/Blogs/trend2.jpg";
import img3 from "../../../../assets/images/Blogs/trend3.jpg";
import img4 from "../../../../assets/images/Blogs/trend4.jpg";

// Article Card Component
const ArticleCard = ({ image, title, date, likes, comments }) => {
  return (
    <div className="article-card">
      <Card>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <div className="card-meta">
            <span className="date">{date}</span>
            <div className="stats">
              <span>
                <FaHeart className="icon" /> {likes}
              </span>
              <span>
                <FaComment className="icon" /> {comments}
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const BlogsHeaderComp = () => {
  const articles = [
    {
      id: 1,
      image: img1,
      title:
        "Discover the Excitement of New York: A Guide for International Students",
      date: "Mar 23, 2025",
      likes: "432",
      comments: "34",
    },
    {
      id: 2,
      image: img2,
      title: "Experience New York: The Ultimate Study Abroad Adventure",
      date: "Mar 23, 2025",
      likes: "1.2k",
      comments: "89",
    },
    {
      id: 3,
      image: img3,
      title:
        "Studying Abroad in New York: Your Gateway to Culture and Learning",
      date: "Mar 23, 2025",
      likes: "234",
      comments: "204",
    },
    {
      id: 4,
      image: img4,
      title: "New York Awaits: A Student's Guide to Exploring the City",
      date: "Mar 23, 2025",
      likes: "3k",
      comments: "876",
    },
  ];

  return (
    <div className="blogs-header-container">
      <Container>
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-wrapper">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/articles">Articles</a>
              </li>
              <li className="breadcrumb-item active">
                Is New York the Right Place To Study Abroad?
              </li>
            </ol>
          </nav>
        </div>

        {/* Main Content Section */}
        <div className="content-wrapper">
          <Row>
            {/* Main Article Content - Left Column */}
            <Col lg={8}>
              {/* Main Heading */}
              <Row className="mb-4">
                <Col xs={12}>
                  <h1 className="main-heading">
                    Is New York the Right Place To Study Abroad?
                  </h1>
                </Col>
              </Row>

              {/* Post Metadata */}
              <Row className="post-metadata mb-4">
                <Col xs={12} className="d-flex align-items-center">
                  <span className="post-date">Mar 23, 2025</span>
                  <div className="post-stats">
                    <span className="stat-item me-3">
                      <FaComment className="icon" /> 23
                    </span>
                    <span className="stat-item">
                      <FaEye className="icon" /> 23
                    </span>
                  </div>
                  <div className="post-actions ms-auto">
                    <Button variant="link" className="action-btn">
                      <FaBookmark />
                    </Button>
                    <Button variant="link" className="action-btn">
                      <FaThumbsUp />
                    </Button>
                    <Button variant="link" className="action-btn">
                      <FaEllipsisH />
                    </Button>
                  </div>
                </Col>
              </Row>

              {/* Featured Image */}
              <Row className="mb-4">
                <Col xs={12}>
                  <div className="featured-image-container">
                    <img1
                      src={featuredImg}
                      alt="New York Times Square"
                      className="featured-image"
                    />
                    <div className="image-credit">source: unsplash</div>
                  </div>
                </Col>
              </Row>

              {/* Introduction Text */}
              <Row className="mb-5">
                <Col xs={12}>
                  <p className="intro-text">
                    It is a daunting experience for newcomers; however, it
                    doesn't have to be. Here are four tips to enhance your
                    enjoyment of the experience and productively utilize all
                    your precious time.
                  </p>
                </Col>
              </Row>

              {/* Additional Blog Content Section */}
              <Row className="mb-5">
                <Col xs={12}>
                  <h2 className="section-heading">
                    Enjoy New York From Out of Town
                  </h2>
                  <p className="content-text">
                    The city is worth known because of its excitement, vitality,
                    and excitement, but going abroad to study in New York gives
                    you a chance to understand New York's different aspects.
                  </p>
                  <p className="content-text">
                    The unpresumptious past aside, New York is a fascinating
                    place to visit. Because of the city teeming past and current
                    character, the city is an interesting place to study and
                    live. However, amid all the hustle, it gives a chance to
                    experience the real essence of the city.
                  </p>
                  <p className="content-text">
                    From Chinatown Town Chinatown to Central Park to the Statue
                    of Liberty, The city reflects a realistic image of its own
                    for visitors who take a moment to reflect not only on what's
                    going on within their own homes however also on the larger
                    view of the globe as a whole.
                  </p>
                </Col>
              </Row>

              {/* Second Content Section */}
              <Row className="mb-5">
                <Col xs={12}>
                  <h2 className="section-heading">Join in on The Chic verse</h2>
                  <p className="content-text">
                    If you are traveling abroad to New York, any student who
                    wishes to immerse themselves amid the city's vibrant social
                    scene should include the district of Midtown in their plans.
                    The architecture and street layout of Fifth Avenue, combined
                    with its contemporary structure, will let you experience an
                    expression of the cosmopolitan scene, which is popular
                    across the globe. A stroll through the middle of town can
                    provide a fascinating understanding of the process that led
                    to the American melting pot, where various cultures from all
                    over the globe have joined forces to create a distinct
                    cultures in the middle of the city. Students can walk
                    through this melting pot of different styles and discover an
                    echo of the communities which have come to depend on each
                    other and give back to every one of their shared
                    experiences.
                  </p>
                </Col>
              </Row>
            </Col>

            {/* Related Articles Section - Right Column */}
            <Col lg={4}>
              <div className="related-articles-section">
                <div className="filter-tabs">
                  <Nav variant="pills" defaultActiveKey="#trending">
                    <Nav.Item>
                      <Nav.Link href="#all">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#trending" active>
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

                {/* Grid layout for articles (2x2) */}
                <div className="related-articles-container">
                  <Row xs={1} sm={2} className="g-3">
                    {articles.map((article) => (
                      <Col key={article.id}>
                        <ArticleCard
                          image={article.image}
                          title={article.title}
                          date={article.date}
                          likes={article.likes}
                          comments={article.comments}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BlogsHeaderComp;
