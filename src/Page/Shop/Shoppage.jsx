import React from "react";
import ParentSection from "../../components/ParentSection";
import products from "../../data/product";
import ShopSection from "../../features/Shop/ShopSection";

const Shoppage = () => {
  return (
    <div className="container mx-auto py-10">
      <div>
        <ShopSection />
      </div>
      <h2 className="text-4xl text-center text-red-900 font-semibold mb-3">Product</h2>
      <p className="text-center "> this is a new products for this summer </p>
     <ParentSection items={products} type="shop" limit={3} />
    </div>
  );
};

export default Shoppage;
