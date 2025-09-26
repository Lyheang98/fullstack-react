import React from "react";
import blogs from "../../data/blog";
import products from "../../data/product";
import HeroSection from "../../features/Home/HeroSection";
import QuoteSection from "../../features/Home/QuoteSection";
import ContactSection from "../../features/Contact/ContactSection";
import WomenSection from "../../features/Home/WomenSection";
import MenSection from "../../features/Home/MenSection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <QuoteSection />
      <WomenSection blogs={blogs} />
      <MenSection products={products} />
      <ContactSection />

    </div>
  );
};

export default Homepage;
