import React from "react";
import ParentSection from "../../components/ParentSection";
import blogs from "../../data/blog";
const BlogSection = () => {
  return (
    <div>
      <div className="container mx-auto py-20">
        <h2 className="text-4xl text-center font-semibold mb-3">
          Latest Blogs
        </h2>
        <p className="text-center">
          {" "}
          This is a lastest blog before new discount is comming .
        </p>
        <ParentSection items={blogs} type="blog" limit={4} />
      </div>
    </div>
  );
};
export default BlogSection;