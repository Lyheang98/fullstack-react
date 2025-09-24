import React from "react";
import ParentSection from "../../components/ParentSection";
import products from "../../data/product";
const ShopSection = () => {
  return (
    <div>
      <div className="container mx-auto py-5 ">
        <h2 className="text-4xl text-center text-red-900 font-semibold mb-3">
          Men Stylish
        </h2>
        <p className="text-center"> this is a new prts for this summer </p>
        <ParentSection items={products} type="shop" limit={3} />
      </div>
    </div>
  );
};

export default ShopSection;
