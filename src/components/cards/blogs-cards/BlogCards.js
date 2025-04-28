import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "react-bootstrap";
import { Chat, Heart } from "react-bootstrap-icons";
import "./BlogCards.css";

/**
 * Reusable Blog Card Component
 *
 * @param {Object} props
 * @param {Object} props.post - The blog post data
 * @param {string} props.post.id - Unique identifier for the post
 * @param {string} props.post.title - Title of the blog post
 * @param {string} props.post.featuredImage - URL to the featured image
 * @param {string} props.post.date - Publication date of the post
 * @param {number} props.post.views - Number of views (optional)
 * @param {number} props.post.comments - Number of comments (optional)
 * @param {Array<string>} props.post.category - Categories the post belongs to
 * @param {Function} props.onClick - Click handler for the card (optional)
 * @param {string} props.className - Additional class names (optional)
 * @returns {JSX.Element} - The rendered blog card component
 */
const BlogCardComp = ({ post, onClick, className = "", showStats = false }) => {
  // Handle card click if onClick is provided
  const handleCardClick = () => {
    if (onClick) {
      onClick(post.id);
    }
  };

  return (
    <Card
      className={`blog-trending-cards border-0 ${className}`}
      data-categories={post.category?.join(",")}
      onClick={handleCardClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <CardImg
        className="blog-trending-cards-image"
        src={post.featuredImage}
        alt={post.title}
      />
      <CardBody className="px-1 py-2">
        <CardTitle className="paragraph-big-medium">{post.title}</CardTitle>
        <div className="text-content-tertiary caption-regular d-flex justify-content-between">
          <div>{post.date}</div>
          {showStats && (
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
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogCardComp;
