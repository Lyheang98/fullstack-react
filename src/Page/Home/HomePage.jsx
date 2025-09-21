import React from "react";
import blogs from "../../data/blog";
import products from "../../data/product";
import BlogSection from "../../features/Home/BlogSection";
import HeroSection from "../../features/Home/HeroSection";
import QuoteSection from "../../features/Home/QuoteSection";
import ShopSection from "../../features/Home/ShopSection";
import ContactSection from "../../features/Home/ContactSection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <QuoteSection />
      <BlogSection blogs={blogs} />
      <ShopSection products={products} />
      <ContactSection />
    </div>
  );
};

export default Homepage;
