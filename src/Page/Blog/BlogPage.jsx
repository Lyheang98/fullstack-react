import React from "react";
import BlogSection from "../../components/section/BlogSection";
import BlogContentSection from "../../features/Blog/BlogContentSection";

const Blogpage = () => {
  return (
    <div>
      <BlogContentSection />
      <BlogSection />
    </div>
  );
};

export default Blogpage;
