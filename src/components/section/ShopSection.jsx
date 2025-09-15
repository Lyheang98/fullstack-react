import React from "react";
import ParentSection from "../../components/ParentSection";
import products from "../../data/product";
const ShopSection = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <h2 className="text-4xl text-center font-semibold mb-3">Products</h2>
        <p className="text-center"> this is a new products for this summer </p>
        <ParentSection items={products} type="shop" limit={3} />
      </div>
    </div>
  );
};

export default ShopSection;
