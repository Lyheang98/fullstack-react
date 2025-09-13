import React from "react";
import ParentSection from "../../components/ParentSection";
import blogs from "../../data/blog";

const Blogpage = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl text-center font-semibold mb-3">Latest Blog</h2>
      <p className="text-center"> This is a lastest blog before new discount is comming .</p>
      <ParentSection items={blogs} />
    </div>
  );
};

export default Blogpage;
