import React from "react";
import ParentSection from "../../components/ParentSection";
import blogs from "../../data/blog";
const BlogSection = () => {
  return (
    <div>
      <div className="container mx-auto py-5">
        <h2 className="text-4xl text-center text-red-900 font-semibold mb-3">
          Women Stylish
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