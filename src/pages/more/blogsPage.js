import React from "react";
import BlogsHeaderComp from "../../sections/more/blogs/header/blogsHeader";
import BlogsCommentsComp from "../../sections/more/blogs/comments/blogsComments";

const BlogsPage = () => {
  return (
    <div>
      <BlogsHeaderComp />
      <BlogsCommentsComp />
    </div>
  );
};

export default BlogsPage;
