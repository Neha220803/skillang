import React from "react";
import "../header/blogsHeader.css"; // Import CSS for styling
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Import local images
import featuredImg from "../../../../assets/images/Blogs/blogbg1.jpg";

// Article Card Component
const ArticleCard = ({ image, title, date, likes, comments }) => {
  return (
    <div className="article-card">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-meta">
            <span className="date">{date}</span>
            <div className="stats">
              <span><i className="far fa-heart"></i> {likes}</span>
              <span><i className="far fa-comment"></i> {comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogsHeaderComp = () => {
  // Sample articles data
  const articles = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x250?text=Placeholder",
      title: "Discover the Excitement of New York: A Guide for International Students",
      date: "Mar 23, 2025",
      likes: "432",
      comments: "34"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x250?text=Placeholder",
      title: "Experience New York: The Ultimate Study Abroad Adventure",
      date: "Mar 23, 2025",
      likes: "1.2k",
      comments: "89"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x250?text=Placeholder",
      title: "Studying Abroad in New York: Your Gateway to Culture and Learning",
      date: "Mar 23, 2025",
      likes: "234",
      comments: "204"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x250?text=Placeholder",
      title: "New York Awaits: A Student's Guide to Exploring the City",
      date: "Mar 23, 2025",
      likes: "3k",
      comments: "876"
    }
  ];

  return (
    <div className="blogs-header-container">
      <div className="container-fluid p-0">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-wrapper">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/articles">Articles</a></li>
              <li className="breadcrumb-item active">Is New York the Right Place To Study Abroad?</li>
            </ol>
          </nav>
        </div>

        {/* Main Content Section */}
        <div className="content-wrapper">
          <div className="row">
            {/* Main Article Content - Left Column */}
            <div className="col-md-7">
              {/* Main Heading */}
              <div className="row mb-4">
                <div className="col-12">
                  <h1 className="main-heading">Is New York the Right Place To Study Abroad?</h1>
                </div>
              </div>

              {/* Post Metadata */}
              <div className="row post-metadata mb-4">
                <div className="col-12 d-flex align-items-center">
                  <span className="post-date">Mar 23, 2025</span>
                  <div className="post-stats">
                    <span className="stat-item me-3"><i className="far fa-comment"></i> 23</span>
                    <span className="stat-item"><i className="far fa-eye"></i> 23</span>
                  </div>
                  <div className="post-actions ms-auto">
                    <button className="btn action-btn"><i className="far fa-bookmark"></i></button>
                    <button className="btn action-btn"><i className="far fa-thumbs-up"></i></button>
                    <button className="btn action-btn"><i className="fas fa-ellipsis-h"></i></button>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="row mb-4">
                <div className="col-12">
                  <div className="featured-image-container">
                    <img
                      src="https://via.placeholder.com/1200x400?text=Featured+Image"
                      alt="New York Times Square"
                      className="featured-image"
                    />
                    <div className="image-credit">source: placeholder</div>
                  </div>
                </div>
              </div>


              {/* Introduction Text */}
              <div className="row mb-5">
                <div className="col-12">
                  <p className="intro-text">
                    It is a daunting experience for newcomers; however, it doesn't have to be. Here are four tips to enhance your enjoyment of the experience and productively utilize all your precious time.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles Section - Right Column */}
            <div className="col-md-5">
              <div className="related-articles-section">
                <div className="filter-tabs">
                  <ul className="nav nav-pills">
                    <li className="nav-item"><a className="nav-link" href="#all">All</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#trending">Trending</a></li>
                    <li className="nav-item"><a className="nav-link" href="#business">Business</a></li>
                    <li className="nav-item"><a className="nav-link" href="#topsalary">Top Salary</a></li>
                  </ul>
                </div>

                {/* Horizontal scrollable articles row */}
                <div className="related-articles-container">
                  {articles.map(article => (
                    <div key={article.id} className="related-article-item">
                      <ArticleCard
                        image={article.image}
                        title={article.title}
                        date={article.date}
                        likes={article.likes}
                        comments={article.comments}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHeaderComp;