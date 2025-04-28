import React, { useState, useEffect } from "react";
import "./blogsHeader.css"; // Import CSS for styling
import { Container, Row, Col, Nav, Image, Breadcrumb } from "react-bootstrap"; // Import React Bootstrap components
import { HiTrendingUp } from "react-icons/hi";
import UniContactComp from "../../../../resuable/uni-contact/UniContact";
import BlogsCommentsComp from "../comments/blogsComments";
import blogsData from "../../../../../data/blogsData";
import { useParams, useNavigate } from "react-router-dom";
import BlogCardComp from "../../../../../components/cards/blogs-cards/BlogCards";

const BlogsSepPageHeader = () => {
  // Get the blog post ID from URL parameters
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Trending");
  const [currentPost, setCurrentPost] = useState(null);

  // Find the current post based on URL id parameter
  useEffect(() => {
    // If no ID is provided, default to the first post or main feature
    const postData = id
      ? blogsData.posts.find((post) => post.id === id)
      : blogsData.posts.find((post) => post.id === blogsData.mainFeature.id);

    setCurrentPost(postData);
  }, [id]);

  // Filter posts based on active filter for the sidebar
  const getFilteredPosts = () => {
    if (activeFilter === "All") {
      return blogsData.posts.slice(0, 4); // Limit to 4 posts for sidebar
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

  // Handle blog card click to navigate to that blog post
  const handleCardClick = (postId) => {
    navigate(`/blogs/${postId}`);
  };

  // If post is still loading, show loading state
  if (!currentPost) {
    return <div>Loading...</div>;
  }

  // Extract content from the current post
  const { title, content, featuredImage, keywords = [] } = currentPost;

  return (
    <section>
      <Container>
        <Row>
          <Col sm={12} xs={12} md={7} className="bg-primar">
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/blogs">Blogs</Breadcrumb.Item>
              <Breadcrumb.Item active>{title}</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="heading-big-medium mt-3">{title}</h1>
            <Image
              src={featuredImage}
              alt={title}
              className="w-100 blog-main-header-left-img"
            />
            <div className="text-center text-content-tertiary py-2">
              {content.imageCaption || "source: unsplash"}
            </div>
            <Container fluid className="p-0 text-content-secondary">
              <p>{content.intro}</p>

              {/* Render content sections */}
              {content.sections &&
                content.sections.map((section, index) => {
                  // Check if section title is "summary" (case-insensitive)
                  const isSummarySection =
                    section.title && section.title.toLowerCase() === "summary";

                  if (isSummarySection) {
                    // For summary sections, only render the text in a div with the special class
                    return (
                      <div key={index} className="blogs-summary-bg mb-5">
                        {section.text}
                      </div>
                    );
                  } else {
                    // For all other sections, render normally
                    return (
                      <div key={index} className="mb-5">
                        {section.title && (
                          <h2 className="subheading-big-medium text-content-primary">
                            {section.title}
                          </h2>
                        )}
                        <p>{section.text}</p>

                        {/* Special case for call to action section */}
                      </div>
                    );
                  }
                })}
              <UniContactComp
                heading="Lost in Your University Search?"
                description="Let Us Guide You to Your Ideal Destination!"
                buttonText="Book a Free Consultation"
                leftColSize="12"
                rightColSize="12"
              />
              {/* Render keywords if available */}
              {keywords && keywords.length > 0 && (
                <div className="mt-5">
                  <h3 className="subheading-small-medium">
                    Suggested Keywords
                  </h3>
                  <div className="d-flex flex-wrap gap-2">
                    {keywords.map((keyword, index) => (
                      <div
                        key={index}
                        className="bg-secondary rounded-3 px-2 text-white"
                      >
                        {keyword}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comments section */}
              <BlogsCommentsComp comments={content.comments} />
            </Container>
          </Col>
          <Col sm={12} xs={12} md={5}>
            <Row>
              <div className="filter-tabs">
                <Nav variant="pills">
                  {blogsData.categories
                    .filter((category) => category !== "Editor's Choice")
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
                <Col sm={12} xs={12} md={6} key={post.id} className="mb-3">
                  <BlogCardComp post={post} onClick={handleCardClick} />
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
