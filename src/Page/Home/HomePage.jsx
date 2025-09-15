import React from "react";
import blogs from "../../data/blog";
import products from "../../data/product";
import BlogSection from "../../components/section/BlogSection";
import HeroSection from "../../components/section/HeroSection";
import QuoteSection from "../../components/section/QuoteSection";
import ShopSection from "../../components/section/ShopSection";
import ContactSection from "../../components/section/ContactSection";

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
