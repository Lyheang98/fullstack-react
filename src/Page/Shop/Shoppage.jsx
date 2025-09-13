import React from "react";
import ParentSection from "../../components/ParentSection";
import products from "../../data/product";

const Shoppage = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl text-center font-semibold mb-3">Products</h2>
      <p className="text-center "> this is a new products for this summer </p>
      <ParentSection items={products} type="shop" />
    </div>
  );
};

export default Shoppage;
