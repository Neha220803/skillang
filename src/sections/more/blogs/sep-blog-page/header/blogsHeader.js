import React, { useState } from "react";
import "./blogsHeader.css"; // Import CSS for styling
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  Image,
  CardImg,
  CardBody,
  CardTitle,
  Breadcrumb,
} from "react-bootstrap"; // Import React Bootstrap components
import blogMainHeaderImg from "../../../../../assets/images/Blogs/header-blog-main.jpg";
import trend1 from "../../../../../assets/images/Blogs/trend-1.jpg";
import trend2 from "../../../../../assets/images/Blogs/trend-2.jpg";
import trend3 from "../../../../../assets/images/Blogs/trend-3.jpg";
import trend4 from "../../../../../assets/images/Blogs/trend-4.jpg";
import { Chat, Heart } from "react-bootstrap-icons";
import { HiTrendingUp } from "react-icons/hi";
import featuredImg1 from "../../../../../assets/images/Blogs/blogbg.jpg";
import featuredImg2 from "../../../../../assets/images/Blogs/blogsep2.jpg";
import UniPartner from "../../../../resuable/uni-partner/uni-partner";
import UniContactComp from "../../../../resuable/uni-contact/UniContact";
import BlogsCommentsComp from "../comments/blogsComments";

// Article Card Component
const BlogsSepPageHeader = ({ image, title, date, likes, comments }) => {
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
      categories: ["trending", "topSalary"],
    },
    {
      id: 3,
      image: trend3,
      title:
        "Studying Abroad in New York: Your Gateway to Culture and Learning",
      date: "Mar 23, 2025",
      likes: "432",
      comments: "34",
      categories: ["business"],
    },
    {
      id: 4,
      image: trend4,
      title: "New York Awaits: A Student's Guide to Exploring the City",
      date: "Mar 23, 2025",
      likes: "3k",
      comments: "874",
      categories: ["trending", "business", "topSalary"],
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
          <Col sm={12} xs={12} md={8} className="bg-primar">
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/article">Article</Breadcrumb.Item>
              <Breadcrumb.Item active>
                Is New York the Right Place To Study Abroad?
              </Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="heading-big-medium mt-3">
              Is New York the Right Place To Study Abroad?
            </h1>
            <Image
              src={featuredImg1}
              alt="blog-main-page-header"
              className="w-100 blog-main-header-left-img"
            />
            <div className="text-center text-content-tertiary py-2">
              source: unsplash
            </div>
            <Container fluid className="p-0 text-content-secondary">
              <p>
                It is a daunting experience for newcomers; however, it doesn't
                have to be. Here are four tips to enhance your enjoyment of the
                experience and productively utilize all your precious time.
              </p>
              <h2 className="subheading-big-medium text-content-primary">
                Enjoy New York From Out of Town
              </h2>
              <p>
                The city is well-known because of its excitement, vitality, and
                excitement, but going abroad to study in New York gives you a
                chance to understand New York's different aspects. Bot
                misperceptions put aside, New York is a fascinating place to
                visit. Reviews of the city frequently paint a picture of the
                city's blight and continuous commercial activity. However, amid
                all this bustle is a great chance to experience the real essence
                of the city. From Chinatown from Chinatown to Central Park to
                the Statue of Liberty, The city reflects a positive image of its
                own for visitors who take a moment to reflect not only on what's
                going on within their own homes however but also on the larger
                view of the globe as a whole.
              </p>
              <div>
                <p>
                  Therefore, New York is an ideal location for students of art
                  who study abroad, not just because of its fascinating and
                  intricate urban landscape but due to the numerous ways this
                  fantastically designed city can be explored.
                </p>
              </div>
              <h2 className="subheading-big-medium text-content-primary">
                Join in on The Chic verse
              </h2>
              <p>
                If you are travelling abroad to New York, any student who wishes
                to immerse themselves amid the city's vibrant social scene
                should include the district of Midtown in their plans. The
                midtown area has a completely different style of life than any
                other city. It is the ideal place to visit to experience an
                experience of the cosmopolitan scene, which is popular across
                the globe. A stroll through the middle of town can provide a
                fascinating understanding of the genesis that led to the
                American melting pan, where various cultures from all over the
                globe have joined forces to create a distinct landscape in the
                middle of the city. Students can walk through this melting pot
                of different styles and discover an echo of the communities
                which have come to depend on each other and get to know one
                another through these diverse experiences.
              </p>
              <UniContactComp
                heading="Lost in Your University Search?"
                description="Let Us Guide You to Your Ideal Destination!"
                buttonText="Book a Free Consultation"
                leftColSize="12"
                rightColSize="12"
              />
              <h2 className="subheading-big-medium text-content-primary">
                Explore the city's fantastic art scene
              </h2>
              <p>
                Students who study abroad will discover they have more
                opportunities to get involved with the New York art scene once
                they have a close relationship with it. Many emerging artists
                frequently exhibit their new and experimental collections of
                work in exhibitions and galleries throughout the city. With the
                variety of art forms with such a variety students constantly
                want more. That sensation of curiosity and excitement frequently
                leads to more creativity and inspiration.
              </p>
              <Image
                src={featuredImg2}
                alt="blog-main-page-header"
                className="w-100 blog-main-header-left-img"
              />
              <div className="text-center text-content-tertiary py-2">
                source: unsplash
              </div>
              <div>
                <h3 className="subheading-small-medium">Suggested Keywords</h3>
                <div className="d-flex flex-wrap gap-2">
                  <div className="bg-secondary rounded-3 px-2 text-white">
                    New York
                  </div>
                  <div className="bg-secondary rounded-3 px-2 text-white">
                    USA
                  </div>
                  <div className="bg-secondary rounded-3 px-2 text-white">
                    Student
                  </div>
                  <div className="bg-secondary rounded-3 px-2 text-white">
                    Study Abroad
                  </div>
                  <div className="bg-secondary rounded-3 px-2 text-white">
                    University
                  </div>
                </div>
              </div>
              <BlogsCommentsComp />
            </Container>
          </Col>
          <Col sm={12} xs={12} md={4}>
            <Row>
              <div className="filter-tabs">
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link
                      className={activeFilter === "all" ? "active" : ""}
                      onClick={() => handleFilterChange("all")}
                    >
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className={activeFilter === "trending" ? "active" : ""}
                      onClick={() => handleFilterChange("trending")}
                    >
                      <HiTrendingUp style={{ width: "20px", height: "auto" }} />{" "}
                      Trending
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className={activeFilter === "business" ? "active" : ""}
                      onClick={() => handleFilterChange("business")}
                    >
                      Business
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className={activeFilter === "topSalary" ? "active" : ""}
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
                  <Card className="blog-trending-cards border-0" data-categories={post.categories?.join(",")}>
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

export default BlogsSepPageHeader;