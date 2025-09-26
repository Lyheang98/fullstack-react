import React from "react";
import ParentSection from "../../components/ParentSection";
import products from "../../data/product";
import MenSection from "../../features/Shop/MenSection";
import ShopSection from "../../features/Shop/ShopSection";
import WomenSection from "../../features/Shop/WomenSection";

const Shoppage = () => {
  return (
    <div className="container mx-auto py-10">
      <div>
        <ShopSection />
        <WomenSection />
        <MenSection />
      </div>
    </div>
  );
};

export default Shoppage;
