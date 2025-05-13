import React from "react";
import BlogMainPageHeader from "../../../sections/more/blogs/main-blog-page/header/BlogMainPageHeader";
import EditorsChoiceSection from "../../../sections/more/blogs/main-blog-page/editors-choice-section/EditorsChoiceSection";
import ChooseByCategory from "../../../sections/more/blogs/main-blog-page/choose-by-category/ChooseByCategory";
import { Helmet } from "react-helmet-async";

const BlogsMainPage = () => {
  return (
    <div>
      <Helmet>
        <title>Study Abroad Consultants In Chennai | Blog</title>
        <meta
          name="description"
          content="Plan your international education with expert study abroad consultants in chennai. Personalized guidance for top universities and visa success"
        />
        <meta
          name="keywords"
          content="study abroad consultants in chennai,study abroad consultants,study abroad chennai"
        />
      </Helmet>
      <BlogMainPageHeader />
      <EditorsChoiceSection />
      <ChooseByCategory />
    </div>
  );
};

export default BlogsMainPage;
